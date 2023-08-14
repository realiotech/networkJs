import {
  createMsgVote as protoCreateMsgVote,
  createTransaction,
} from '@realiotech/proto'

import { Chain, Fee, Sender } from './common'

export interface MessageMsgVote {
  proposalId: number
  option: number
}

export function createTxMsgVote(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MessageMsgVote,
) {
  // Cosmos
  const msgCosmos = protoCreateMsgVote(
    params.proposalId,
    params.option,
    sender.accountAddress,
  )
  const tx = createTransaction(
    msgCosmos,
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
    eipToSign: undefined,
  }
}
