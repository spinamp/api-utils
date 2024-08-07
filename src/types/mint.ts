export type Asset = {
  symbol: string;
  decimals: number;
  address: string;
};

export enum MintType {
  KNOWN_TRACK = "known_track",
  RANDOM_UNREVEALED = "random_unrevealed",
  RANDOM_REVEALVED = "random_revealed",
  NFT_PACK = "nft_pack",
  UNKNOWN = "unknown",
}

export type UnsignedTransaction = {
  to: string;
  from?: string;
  value?: string;
  data: string;
  gasLimit?: string;
  chainId: number;
};

type Error = {
  reason: MintError;
  metadata?: any;
};

export type MintPreconditionError = Error;

export type NotFollowingError = Error & {
  metadata: {
    requiredFollow: string;
    suggestedUrl: string;
  };
};

export type MintAmountExceededError = Error & {
  metadata: {
    allowance: number;
    minted?: number;
    remaining: number;
  };
};

export type BaseMintDetails = {
  available: boolean | null;
  price?: {
    asset: Asset;
    value: string;
  };
  mintTransaction?: UnsignedTransaction;
  approvalTransaction?: UnsignedTransaction;
  mintType?: MintType;
  saleType?:
    | {
        type: "instant";
      }
    | {
        type: "bid";
        externalUrl: string;
      };
  error?: Error;
  quantity?: number;
  maxQuantity?: number;
  metadata?: {
    sound_tier?: "Forever" | "Limited";
  };
};

export type MintDetails = BaseMintDetails & {
  fallback: boolean; // enable for ethereum mints only - reservoir fallback only supports ethereum
  editions: number | undefined;
  multicallSupport?: boolean; // can the mint transaction be used in a multicall (e.g does the nft get minted to msg.sender or a provided address)
};

export type MulticallMintDetails = BaseMintDetails;

type TrackMintResult = {
  trackId: string;
  result: MintDetails;
};

export type MulticallMintResponse = {
  includedTracks: TrackMintResult[];
  excludedTracks: TrackMintResult[];
  mintDetails: BaseMintDetails;
};

export enum MintError {
  NOT_FOR_SALE = "not for sale",
  SOLD_OUT = "sold out",
  SALE_NOT_STARTED = "sale not started",
  SALE_ENDED = "sale ended",
  USER_LIMIT_REACHED = "user limit reached",
  NOT_IN_ALLOW_LIST = "user not in allow list",
  MINT_LIMIT_EXCEEDED = "mint limit exceeded",
  PRECONDITION_NOT_MET = "precondition not met",
  NOT_SUPPORTED = "not supported",
}
