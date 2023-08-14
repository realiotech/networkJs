import * as asset from '../proto/realionetwork/asset/v1/tx'

export function createMsgCreateToken(
  fromAddress: string,
  name: string,
  symbol: string,
  total: string,
  authorizationRequired: boolean,
) {
  const message = new asset.realionetwork.asset.v1.MsgCreateToken({
    manager: fromAddress,
    name,
    symbol,
    total,
    authorizationRequired,
  })
  return {
    message,
    path: 'realionetwork.asset.v1.MsgCreateToken',
  }
}

export function createMsgUpdateToken(
  manager: string,
  symbol: string,
  authorizationRequired: boolean,
) {
  const message = new asset.realionetwork.asset.v1.MsgUpdateToken({
    manager,
    symbol,
    authorizationRequired,
  })
  return {
    message,
    path: 'realionetwork.asset.v1.MsgUpdateToken',
  }
}

export function createMsgAuthorizeAddress(
  manager: string,
  symbol: string,
  address: string,
) {
  const message = new asset.realionetwork.asset.v1.MsgAuthorizeAddress({
    manager,
    symbol,
    address,
  })
  return {
    message,
    path: 'realionetwork.asset.v1.MsgAuthorizeAddress',
  }
}

export function createMsgUnAuthorizeAddress(
  manager: string,
  symbol: string,
  address: string,
) {
  const message = new asset.realionetwork.asset.v1.MsgUnAuthorizeAddress({
    manager,
    symbol,
    address,
  })
  return {
    message,
    path: 'realionetwork.asset.v1.MsgUnAuthorizeAddress',
  }
}

export function createMsgTransferToken(
  from: string,
  to: string,
  symbol: string,
  amount: string,
) {
  const message = new asset.realionetwork.asset.v1.MsgTransferToken({
    from,
    to,
    symbol,
    amount,
  })
  return {
    message,
    path: 'realionetwork.asset.v1.MsgTransferToken',
  }
}
