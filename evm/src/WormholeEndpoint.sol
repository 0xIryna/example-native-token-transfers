// SPDX-License-Identifier: Apache 2
pragma solidity >=0.6.12 <0.9.0;

import "wormhole-solidity-sdk/Utils.sol";

import "./libraries/EndpointHelpers.sol";
import "./interfaces/IWormhole.sol";
import "./Endpoint.sol";

abstract contract WormholeEndpoint is Endpoint {
    // TODO -- fix this after some testing
    uint256 constant _GAS_LIMIT = 500000;

    address immutable _wormholeCoreBridge;
    address immutable _wormholeRelayerAddr;
    uint256 immutable _wormholeEndpoint_evmChainId;

    // Mapping of consumed VAAs
    mapping(bytes32 => bool) _consumedVAAs;

    event ReceivedMessage(
        bytes32 digest, uint16 emitterChainId, bytes32 emitterAddress, uint64 sequence
    );

    error InvalidVaa(string reason);
    error InvalidSibling(uint16 chainId, bytes32 siblingAddress);
    error TransferAlreadyCompleted(bytes32 vaaHash);

    constructor(address wormholeCoreBridge, address wormholeRelayerAddr, uint256 evmChainId) {
        _wormholeCoreBridge = wormholeCoreBridge;
        _wormholeRelayerAddr = wormholeRelayerAddr;
        _wormholeEndpoint_evmChainId = evmChainId;
    }

    function _quoteDeliveryPrice(uint16 targetChain)
        internal
        view
        override
        returns (uint256 nativePriceQuote)
    {
        // no delivery fee for solana (standard relaying is not yet live)
        if (targetChain == 1) {
            return 0;
        }

        (uint256 cost,) = wormholeRelayer().quoteEVMDeliveryPrice(targetChain, 0, _GAS_LIMIT);

        return cost;
    }

    function _sendMessage(uint16 recipientChain, bytes memory payload) internal override {
        // do not use standard relaying for solana deliveries
        if (recipientChain == 1) {
            wormhole().publishMessage(0, payload, 1);
        } else {
            wormholeRelayer().sendPayloadToEvm{value: msg.value}(
                recipientChain,
                fromWormholeFormat(getSibling(recipientChain)),
                payload,
                0,
                _GAS_LIMIT
            );
        }
    }

    function _verifyMessage(bytes memory encodedMessage) internal override returns (bytes memory) {
        // verify VAA against Wormhole Core Bridge contract
        (IWormhole.VM memory vm, bool valid, string memory reason) =
            wormhole().parseAndVerifyVM(encodedMessage);

        // ensure that the VAA is valid
        if (!valid) {
            revert InvalidVaa(reason);
        }

        // ensure that the message came from a registered sibling contract
        if (!_verifyBridgeVM(vm)) {
            revert InvalidSibling(vm.emitterChainId, vm.emitterAddress);
        }

        // save the VAA hash in storage to protect against replay attacks.
        if (isVAAConsumed(vm.hash)) {
            revert TransferAlreadyCompleted(vm.hash);
        }
        _setVAAConsumed(vm.hash);

        // emit `ReceivedMessage` event
        emit ReceivedMessage(vm.hash, vm.emitterChainId, vm.emitterAddress, vm.sequence);

        return vm.payload;
    }

    function wormhole() public view returns (IWormhole) {
        return IWormhole(_wormholeCoreBridge);
    }

    function wormholeRelayer() public view returns (IWormholeRelayer) {
        return IWormholeRelayer(_wormholeRelayerAddr);
    }

    function _verifyBridgeVM(IWormhole.VM memory vm) internal view returns (bool) {
        checkFork(_wormholeEndpoint_evmChainId);
        return super.getSibling(vm.emitterChainId) == vm.emitterAddress;
    }

    function isVAAConsumed(bytes32 hash) public view returns (bool) {
        return _consumedVAAs[hash];
    }

    function _setVAAConsumed(bytes32 hash) internal {
        _consumedVAAs[hash] = true;
    }
}