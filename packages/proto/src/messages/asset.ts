import * as asset from '../proto/realionetwork/asset/v1/tx'

export function createMsgCreateToken(
  fromAddress: string,
  name: string,
  symbol: string,
  total: number,
  decimals: number,
  authorizationRequired: boolean,
) {

  const message = new asset.realionetwork.asset.v1.MsgCreateToken({
    creator: fromAddress,
    name: name,
    symbol: symbol,
    total: total,
    decimals: decimals,
    authorizationRequired: authorizationRequired
  })
  return {
    message,
    path: 'realionetwork.asset.v1.MsgCreateToken',
  }
}
