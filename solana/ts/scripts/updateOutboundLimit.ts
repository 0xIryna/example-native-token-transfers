

import { PublicKey,  } from "@solana/web3.js";
import { BN } from "@coral-xyz/anchor";

import { connection, getSigner, getNttConfiguration } from "./env";
import { NTT } from "../sdk";
import { ledgerSignAndSend } from "./helpers";

(async () => {
  const nttConfig = getNttConfiguration();
  const ntt = new NTT(connection, {
    nttId: nttConfig.programId as any,
    wormholeId: nttConfig.wormholeProgramId as any,
  });

  const signer = await getSigner();
  const signerPk = new PublicKey(await signer.getAddress());

  const setOutboundLimitIx = await ntt.createSetoutboundLimitInstruction({
    owner: signerPk,
    limit: new BN(nttConfig.outboundLimit),
  });

  const signature = await ledgerSignAndSend([setOutboundLimitIx], []);

  console.log(`Outbound limit set to ${nttConfig.outboundLimit} with tx ${signature}`);
  await connection.confirmTransaction(signature);
  console.log("Success.");
})();

