import {
  createMsgBridgeIn as protoMsgBridgeIn,
  createMsgBridgeOut as protoMsgBridgeOut,
  createTransaction,
} from '@realiotech/proto'

import { Chain, Fee, Sender } from './common'

export interface MsgBridgeInParams {
  authority: string
  receiver: string
  denom: string
  amount: string
}

export function createTxMsgBridgeIn(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgBridgeInParams,
) {
  // Cosmos
  const protoMessage = protoMsgBridgeIn(
    params.authority,
    params.receiver,
    params.amount,
    params.denom,
  )
  const tx = createTransaction(
    protoMessage,
    memo,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )

  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
  }
}

export interface MsgBridgeOutParams {
  signer: string
  denom: string
  amount: string
}

export function createTxMsgBridgeOut(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgBridgeOutParams,
) {
  // Cosmos
  const protoMessage = protoMsgBridgeOut(
    params.signer,
    params.amount,
    params.denom,
  )
  const tx = createTransaction(
    protoMessage,
    memo,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )

  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino,
  }
}
