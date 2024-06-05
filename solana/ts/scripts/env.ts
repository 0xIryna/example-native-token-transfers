import fs from "fs";
import { Connection, Commitment } from "@solana/web3.js";
import { ChainId } from "@certusone/wormhole-sdk";
import { SolanaLedgerSigner } from "@xlabs-xyz/ledger-signer-solana";
import { Chain } from "@wormhole-foundation/sdk-base";

if (!process.env.LEDGER_DERIVATION_PATH) {
  throw new Error("LEDGER_DERIVATION_PATH is not set");
}

if (!process.env.ENV) {
  throw new Error("ENV not set");
}

const env = process.env.ENV;

const derivationPath = process.env.LEDGER_DERIVATION_PATH! as string;

let signer;
export async function getSigner(): Promise<SolanaLedgerSigner> {
  if (!signer) {
    signer = await SolanaLedgerSigner.create(derivationPath);
  }

  return signer;
}

export function getEnv(key: string): string {
  if (!process.env[key]) {
    throw new Error(`${key} not found on environment`);
  }

  return process.env[key]!;
}

export const rpcUrl =
  process.env.SOLANA_RPC_URL || "https://api.devnet.solana.com";

export const connectionCommitmentLevel = (process.env.SOLANA_COMMITMENT ||
  "confirmed") as Commitment;

export const connection = new Connection(rpcUrl, connectionCommitmentLevel);

export type NttDeployment = {
  chainId: ChainId;
  managerAddress: string;
  transceiverAddress: string;
  tokenDecimals: number;
  limit: number;
};

export type QuoterManagerRegistrations = {
    programId: string;
    tokenAddress: string;
    gasCost: number;
    wormholeTransceiverIndex: number;
    isSupported: boolean;
}[];

export type QuoterPeerQuotes = Partial<Record<Chain, QuoterPeerQuote>>;
export interface QuoterPeerQuote {
  // Specified in Gwei per Eth units.
  maxGasDropoffEth: string;
  // The base price 10^-6 dollars.
  basePriceUsd: string;
  // Specified in 10^-6 dollars
  nativePriceUsd: string;
  // Specified in Gwei units.
  gasPriceGwei: string;
}

export type QuoterConfig = {
  feeRecipient: string;
  assistant: string;
  solPriceUsd: number;
  peerQuotes: QuoterPeerQuotes;
  managerRegistrations: QuoterManagerRegistrations;
}

export type NttConfig = {
  outboundLimit: string;
  mode: "locking" | "burning";
}

export type Programs = {
  mintProgramId: string;
  nttProgramId: string;
  wormholeProgramId: string;
  quoterProgramId: string;
  governanceProgramId: string;
}

export type GovernanceVaa = {
  vaa: string;
}

export function getEvmNttDeployments(): NttDeployment[] {
  return loadScriptConfig("evm-peers");
}

export function getQuoterConfiguration(): QuoterConfig  {
  return loadScriptConfig("quoter");
}

export function getNttConfiguration(): NttConfig {
  return loadScriptConfig("ntt");
}

export function getProgramAddresses(): Programs {
  return loadScriptConfig("programs");
}

export function getGovernanceVaa(): GovernanceVaa {
  return loadScriptConfig("governance-vaa");
}

export function loadScriptConfig(filename: string): any {
  const configFile = fs.readFileSync(
    `./ts/scripts/config/${env}/${filename}.json`
  );
  const config = JSON.parse(configFile.toString());
  if (!config) {
    throw Error("Failed to pull config file!");
  }
  return config;
}

export const guardianKey = getEnv("GUARDIAN_KEY");
