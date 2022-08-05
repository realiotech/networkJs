import {
  createMsgCreateToken as protoMsgCreateToken,
  createTransaction,
} from '@realiotech/proto'


import { Chain, Fee, Sender } from './common'

export interface MsgCreateTokenParams {
  name: string
  symbol: string
  total: number
  decimals: number
  authoriztionRequired: boolean
}

export function createTxMsgDelegate(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgCreateTokenParams,
) {

  // Cosmos
  const protoMessage = protoMsgCreateToken(
    sender.accountAddress,
    params.name,
    params.symbol,
    params.total,
    params.decimals,
    params.authoriztionRequired,
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