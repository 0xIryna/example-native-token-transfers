/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DummyTransceiver,
  DummyTransceiverInterface,
} from "../DummyTransceiver";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "nttManager",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getMigratesImmutables",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getNttManagerOwner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getNttManagerToken",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "isPaused",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "migrate",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "nttManager",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nttManagerToken",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "parseMessageFromLogs",
    inputs: [
      {
        name: "logs",
        type: "tuple[]",
        internalType: "struct VmSafe.Log[]",
        components: [
          {
            name: "topics",
            type: "bytes32[]",
            internalType: "bytes32[]",
          },
          {
            name: "data",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "emitter",
            type: "address",
            internalType: "address",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "recipientChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "payload",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "pauser",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "quoteDeliveryPrice",
    inputs: [
      {
        name: "targetChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "instruction",
        type: "tuple",
        internalType: "struct TransceiverStructs.TransceiverInstruction",
        components: [
          {
            name: "index",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "payload",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "receiveMessage",
    inputs: [
      {
        name: "encodedMessage",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "sendMessage",
    inputs: [
      {
        name: "recipientChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "instruction",
        type: "tuple",
        internalType: "struct TransceiverStructs.TransceiverInstruction",
        components: [
          {
            name: "index",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "payload",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "nttManagerMessage",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "recipientNttManagerAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferPauserCapability",
    inputs: [
      {
        name: "newPauser",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferTransceiverOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "upgrade",
    inputs: [
      {
        name: "newImplementation",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AdminChanged",
    inputs: [
      {
        name: "previousAdmin",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "newAdmin",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "BeaconUpgraded",
    inputs: [
      {
        name: "beacon",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NotPaused",
    inputs: [
      {
        name: "notPaused",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Paused",
    inputs: [
      {
        name: "paused",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PauserTransferred",
    inputs: [
      {
        name: "oldPauser",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newPauser",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Upgraded",
    inputs: [
      {
        name: "implementation",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "CallerNotNttManager",
    inputs: [
      {
        name: "caller",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "CannotRenounceTransceiverOwnership",
    inputs: [
      {
        name: "currentOwner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "CannotRenounceWhilePaused",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "CannotTransferTransceiverOwnership",
    inputs: [
      {
        name: "currentOwner",
        type: "address",
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidInitialization",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidPauser",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "NotInitializing",
    inputs: [],
  },
  {
    type: "error",
    name: "NotMigrating",
    inputs: [],
  },
  {
    type: "error",
    name: "OnlyDelegateCall",
    inputs: [],
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ReentrancyGuardReentrantCall",
    inputs: [],
  },
  {
    type: "error",
    name: "RequireContractIsNotPaused",
    inputs: [],
  },
  {
    type: "error",
    name: "RequireContractIsPaused",
    inputs: [],
  },
  {
    type: "error",
    name: "UnexpectedRecipientNttManagerAddress",
    inputs: [
      {
        name: "recipientNttManagerAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "expectedRecipientNttManagerAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162001a9e38038062001a9e83398101604081905262000034916200017d565b806200003f620000c9565b306080526001600160a01b03811660a081905260408051637e062a3560e11b8152905163fc0c546a916004808201926020929091908290030181865afa1580156200008e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000b491906200017d565b6001600160a01b031660c05250620001af9050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff16156200011a5760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b03908116146200017a5780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6000602082840312156200019057600080fd5b81516001600160a01b0381168114620001a857600080fd5b9392505050565b60805160a05160c0516118806200021e600039600081816101620152818161025b0152610e710152600081816101b301528181610409015281816106e70152818161077f01528181610c9401528181610cc901528181610d1c0152610dcf01526000610b6601526118806000f3fe6080604052600436106101095760003560e01c80638da5cb5b11610095578063b5634c7311610064578063b5634c73146102e8578063d8d2841814610316578063ee1d0c621461032b578063f2fde38b1461033e578063f953cec71461035e57600080fd5b80638da5cb5b146102945780638fd3ab80146102a95780639fd0506d146102be578063b187bd26146102d357600080fd5b806328740b50116100dc57806328740b50146101d557806358f709ba14610207578063689f90c314610227578063694977d71461024c5780638129fc1c1461027f57600080fd5b8063036de8af1461010e5780630900f010146101305780630b4a1e891461015057806324fb21db146101a1575b600080fd5b34801561011a57600080fd5b5061012e6101293660046110db565b61037e565b005b34801561013c57600080fd5b5061012e61014b3660046110db565b6103ea565b34801561015c57600080fd5b506101847f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101ad57600080fd5b506101847f000000000000000000000000000000000000000000000000000000000000000081565b3480156101e157600080fd5b506101f96101f036600461122f565b60006060915091565b6040516101989291906113eb565b34801561021357600080fd5b5061012e6102223660046110db565b6103fe565b34801561023357600080fd5b5061023c610457565b6040519015158152602001610198565b34801561025857600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610184565b34801561028b57600080fd5b5061012e61046a565b3480156102a057600080fd5b5061018461056c565b3480156102b557600080fd5b5061012e61059a565b3480156102ca57600080fd5b506101846106ac565b3480156102df57600080fd5b5061023c6106c5565b3480156102f457600080fd5b506103086103033660046114a1565b6106da565b604051908152602001610198565b34801561032257600080fd5b506101846106e3565b61012e6103393660046114ee565b61076c565b34801561034a57600080fd5b5061012e6103593660046110db565b6107ee565b34801561036a57600080fd5b5061012e610379366004611569565b610820565b61038e61038961056c565b610904565b600061039861094d565b80546001600160a01b038481166001600160a01b031983168117845560405193945091169182907f51c4874e0f23f262e04a38c51751336dde72126d67f53eb672aaff02996b3ef690600090a3505050565b6103f261097b565b6103fb816109af565b50565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461044e5760405163c5aa615360e01b81523360048201526024015b60405180910390fd5b6103fb81610abd565b6000610461610b2e565b5460ff16919050565b610472610b5c565b60008051602061182b8339815191528054600160401b810460ff1615906001600160401b03166000811580156104a55750825b90506000826001600160401b031660011480156104c15750303b155b9050811580156104cf575080155b156104ed5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561051757845460ff60401b1916600160401b1785555b61051f610ba5565b831561056557845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b5050505050565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b6105a2610b5c565b60008051602061182b833981519152546001600160401b03166105c69060016115b3565b60008051602061182b8339815191528054600160401b900460ff16806105f9575080546001600160401b03808416911610155b156106175760405163f92ee8a960e01b815260040160405180910390fd5b805468ffffffffffffffffff19166001600160401b03831617600160401b178155610640610bbe565b5460ff1661066157604051632866815360e11b815260040160405180910390fd5b805460ff60401b191681556040516001600160401b03831681527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15050565b60006106b661094d565b546001600160a01b0316919050565b6000806106d0610bec565b5460021492915050565b60005b92915050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610743573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076791906115da565b905090565b610774610c1a565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107bf5760405163c5aa615360e01b8152336004820152602401610445565b6107e860017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b50505050565b6107f661097b565b6001600160a01b03811661044e57604051631e4fbdf760e01b815260006004820152602401610445565b604080516080810182526000808252602082015260609181018290528181019190915260408051606080820183526000808352602083015291810191909152604051630453806b60e11b815273__$93083e246e55d56d98f3df2872cd16bfd0$__906308a700d69061089f90632651551560e21b9087906004016115f7565b600060405180830381865af41580156108bc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108e491908101906116cc565b815160208301519294509092506108ff916001919084610c8a565b505050565b3361090d6106ac565b6001600160a01b03161415801561092d57506001600160a01b0381163314155b156103fb5760405163e2a08e5d60e01b8152336004820152602401610445565b6000806106dd60017fbfa91572ce1e5fe8776a160d3b1f862e83f5ee2c080a7423b4761602a3ad124a61178c565b3361098461056c565b6001600160a01b0316146109ad5760405163118cdaa760e01b8152336004820152602401610445565b565b6109b7610b5c565b6109c081610d8d565b60006109ca610bbe565b805490915060ff16156109df576109df61179f565b805460ff191660011781556040805163011fa75760e71b815290513091638fd3ab8091600480830192600092919082900301818387803b158015610a2257600080fd5b505af1158015610a36573d6000803e3d6000fd5b50505050306001600160a01b031663689f90c36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9c91906117b5565b610aa857610aa8610dcd565b610ab26000610f11565b805460ff1916905550565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6000806106dd60017f5443fea4dc453d96b81ce55b62e11a4094cc4cbb8a360956a7253cfdb42506cc61178c565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036109ad57604051633c64f99360e21b815260040160405180910390fd5b610bad610f2c565b6109ad33610bb96106e3565b610f3c565b6000806106dd60017f7487ca88d037ca20519908b1ee7556206bef53bce0226a348750cb9d4f688e4f61178c565b6000806106dd60017f64bacf405c5d7f563d3ba5252584a52c37e4fee380fd825b10666c27b825802361178c565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00805460011901610c5e57604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168214610d05576040516339dee99160e11b81527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316600482015260248101839052604401610445565b604051630db1c84160e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690630db1c84190610d55908790879086906004016117d7565b600060405180830381600087803b158015610d6f57600080fd5b505af1158015610d83573d6000803e3d6000fd5b5050505050505050565b610d9681610f5a565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316306001600160a01b03166324fb21db6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e5991906115da565b6001600160a01b031614610e6f57610e6f61179f565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316306001600160a01b0316630b4a1e896040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ed7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610efb91906115da565b6001600160a01b0316146109ad576109ad61179f565b80610f1a610b2e565b805460ff191691151591909117905550565b610f34611008565b6109ad61103f565b610f44611008565b610f4d82611047565b610f5681611058565b5050565b6001600160a01b0381163b610fc75760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610445565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b60008051602061182b83398151915254600160401b900460ff166109ad57604051631afcd79f60e31b815260040160405180910390fd5b610c64611008565b61104f611008565b6103fb81611069565b611060611008565b6103fb816110ae565b611071611008565b600061107b610bec565b600181559050600061108b61094d565b80546001600160a01b0319166001600160a01b0394909416939093179092555050565b6107f6611008565b6001600160a01b03811681146103fb57600080fd5b80356110d6816110b6565b919050565b6000602082840312156110ed57600080fd5b81356110f8816110b6565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b0381118282101715611137576111376110ff565b60405290565b604051608081016001600160401b0381118282101715611137576111376110ff565b604051601f8201601f191681016001600160401b0381118282101715611187576111876110ff565b604052919050565b60006001600160401b038211156111a8576111a86110ff565b5060051b60200190565b60006001600160401b038211156111cb576111cb6110ff565b50601f01601f191660200190565b600082601f8301126111ea57600080fd5b81356111fd6111f8826111b2565b61115f565b81815284602083860101111561121257600080fd5b816020850160208301376000918101602001919091529392505050565b6000602080838503121561124257600080fd5b82356001600160401b038082111561125957600080fd5b818501915085601f83011261126d57600080fd5b813561127b6111f88261118f565b81815260059190911b8301840190848101908883111561129a57600080fd5b8585015b8381101561138e578035858111156112b557600080fd5b86016060818c03601f190112156112cb57600080fd5b6112d3611115565b88820135878111156112e457600080fd5b8201603f81018d136112f557600080fd5b898101356113056111f88261118f565b81815260059190911b8201604001908b8101908f83111561132557600080fd5b6040840193505b828410156113455783358252928c0192908c019061132c565b845250505060408201358781111561135c57600080fd5b61136a8d8b838601016111d9565b8a8301525061137b606083016110cb565b604082015284525091860191860161129e565b5098975050505050505050565b60005b838110156113b657818101518382015260200161139e565b50506000910152565b600081518084526113d781602086016020860161139b565b601f01601f19169290920160200192915050565b61ffff8316815260406020820152600061140860408301846113bf565b949350505050565b803561ffff811681146110d657600080fd5b60006040828403121561143457600080fd5b604051604081016001600160401b038282108183111715611457576114576110ff565b816040528293508435915060ff8216821461147157600080fd5b9082526020840135908082111561148757600080fd5b50611494858286016111d9565b6020830152505092915050565b600080604083850312156114b457600080fd5b6114bd83611410565b915060208301356001600160401b038111156114d857600080fd5b6114e485828601611422565b9150509250929050565b6000806000806080858703121561150457600080fd5b61150d85611410565b935060208501356001600160401b038082111561152957600080fd5b61153588838901611422565b9450604087013591508082111561154b57600080fd5b50611558878288016111d9565b949793965093946060013593505050565b60006020828403121561157b57600080fd5b81356001600160401b0381111561159157600080fd5b611408848285016111d9565b634e487b7160e01b600052601160045260246000fd5b6001600160401b038181168382160190808211156115d3576115d361159d565b5092915050565b6000602082840312156115ec57600080fd5b81516110f8816110b6565b63ffffffff60e01b8316815260406020820152600061140860408301846113bf565b600082601f83011261162a57600080fd5b81516116386111f8826111b2565b81815284602083860101111561164d57600080fd5b61140882602083016020870161139b565b60006060828403121561167057600080fd5b611678611115565b905081516001600160401b03808216821461169257600080fd5b8183526020840151602084015260408401519150808211156116b357600080fd5b506116c084828501611619565b60408301525092915050565b600080604083850312156116df57600080fd5b82516001600160401b03808211156116f657600080fd5b908401906080828703121561170a57600080fd5b61171261113d565b825181526020830151602082015260408301518281111561173257600080fd5b61173e88828601611619565b60408301525060608301518281111561175657600080fd5b61176288828601611619565b606083015250602086015190945091508082111561177f57600080fd5b506114e48582860161165e565b818103818111156106dd576106dd61159d565b634e487b7160e01b600052600160045260246000fd5b6000602082840312156117c757600080fd5b815180151581146110f857600080fd5b61ffff84168152826020820152606060408201526001600160401b0382511660608201526020820151608082015260006040830151606060a084015261182060c08401826113bf565b969550505050505056fef0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00a26469706673582212207576d2a7e8bfe522705bc9b6fd6460df19a59681af199ea8642e4b6e94d4176764736f6c63430008130033";

type DummyTransceiverConstructorParams =
  | [linkLibraryAddresses: DummyTransceiverLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DummyTransceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class DummyTransceiver__factory extends ContractFactory {
  constructor(...args: DummyTransceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        DummyTransceiver__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: DummyTransceiverLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$93083e246e55d56d98f3df2872cd16bfd0\\$__", "g"),
      linkLibraryAddresses[
        "src/libraries/TransceiverStructs.sol:TransceiverStructs"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    nttManager: string,
    overrides?: Overrides & { from?: string }
  ): Promise<DummyTransceiver> {
    return super.deploy(
      nttManager,
      overrides || {}
    ) as Promise<DummyTransceiver>;
  }
  override getDeployTransaction(
    nttManager: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(nttManager, overrides || {});
  }
  override attach(address: string): DummyTransceiver {
    return super.attach(address) as DummyTransceiver;
  }
  override connect(signer: Signer): DummyTransceiver__factory {
    return super.connect(signer) as DummyTransceiver__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DummyTransceiverInterface {
    return new utils.Interface(_abi) as DummyTransceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DummyTransceiver {
    return new Contract(address, _abi, signerOrProvider) as DummyTransceiver;
  }
}

export interface DummyTransceiverLibraryAddresses {
  ["src/libraries/TransceiverStructs.sol:TransceiverStructs"]: string;
}