import * as bridge from '../proto/realionetwork/bridge/v1/tx'
import * as coin from '../proto/cosmos/base/v1beta1/coin'

export function createMsgBridgeIn(
  authority: string,
  receiver: string,
  amount: string,
  denom: string,
) {
  const mintableCoin = new coin.cosmos.base.v1beta1.Coin({
    denom,
    amount,
  })

  const message = new bridge.realionetwork.bridge.v1.MsgBridgeIn({
    authority,
    coin: mintableCoin,
    reciever: receiver,
  })

  return {
    message,
    path: 'realionetwork.bridge.v1.MsgBridgeIn',
  }
}

export function createMsgBridgeOut(
  signer: string,
  amount: string,
  denom: string,
) {
  const burnableCoin = new coin.cosmos.base.v1beta1.Coin({
    denom,
    amount,
  })

  const message = new bridge.realionetwork.bridge.v1.MsgBridgeOut({
    signer,
    coin: burnableCoin,
  })

  return {
    message,
    path: 'realionetwork.bridge.v1.MsgBridgeOut',
  }
}
