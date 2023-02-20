import * as asset from '../proto/realionetwork/asset/v1/tx'

export function createMsgCreateToken(
  fromAddress: string,
  name: string,
  symbol: string,
  total: string,
  decimals: string,
  authorizationRequired: boolean,
) {
  const message = new asset.realionetwork.asset.v1.MsgCreateToken({
    creator: fromAddress,
    name,
    symbol,
    total,
    decimals,
    authorizationRequired,
  })
  return {
    message,
    path: 'realionetwork.asset.v1.MsgCreateToken',
  }
}
