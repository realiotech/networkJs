import {
  createMsgSend as protoMsgSend,
  createTransaction,
} from '@realiotech/proto'


import { Chain, Fee, Sender } from './common'

export interface MessageSendParams {
  destinationAddress: string
  amount: string
  denom: string
}

export function createMessageSend(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MessageSendParams,
) {

  // Cosmos
  const msgSend = protoMsgSend(
    sender.accountAddress,
    params.destinationAddress,
    params.amount,
    params.denom,
  )
  const tx = createTransaction(
    msgSend,
    memo,
    fee.amount,
    fee.denom,
    parseInt(fee.gas, 10),
    'ethsecp256',
    sender.pubkey,
    sender.sequence,
    sender.accountNumber,
    chain.cosmosChainId,
  )

  return {
    signDirect: tx.signDirect,
    legacyAmino: tx.legacyAmino
  }
}
