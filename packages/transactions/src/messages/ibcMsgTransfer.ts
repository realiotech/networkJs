import {
  createIBCMsgTransfer as protoCreateIBCMsgTransfer,
  createTransaction,
} from '@realiotech/proto'

import { TxGenerated, Chain, Fee, Sender } from './common'

export interface MessageIBCMsgTransfer {
  // Channel
  sourcePort: string
  sourceChannel: string
  // Token
  amount: string
  denom: string
  // Addresses
  receiver: string
  // Timeout
  revisionNumber: number
  revisionHeight: number
  timeoutTimestamp: string
}

export function createTxIBCMsgTransfer(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MessageIBCMsgTransfer,
): TxGenerated {
  // Cosmos
  const msgCosmos = protoCreateIBCMsgTransfer(
    params.sourcePort,
    params.sourceChannel,
    params.amount,
    params.denom,
    sender.accountAddress,
    params.receiver,
    params.revisionNumber,
    params.revisionHeight,
    params.timeoutTimestamp,
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
