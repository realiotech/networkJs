//TODO add other asset queries

export function generateEndpointAsset(name: string) {
  return `/realionetwork/asset/v1/${name}`
}

/* eslint-disable camelcase */
export interface Asset {
  name: string
  symbol: string
  total: string
  decimals: string
  authorizationRequired: boolean
  creator: string
  authorized: TokenAuthorization[]
  created: string
}

/* eslint-disable camelcase */
export interface AssetResponse {
  asset: Asset
}

/* eslint-disable camelcase */
export interface TokenAuthorization {
  tokenSymbol: string
  address: string
  authorized: boolean
}
