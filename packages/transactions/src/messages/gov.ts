import {
  createMsgVote as protoCreateMsgVote,
  createMsgSubmitProposal as protoCreateMsgSubmitProposal,
  createMsgDeposit as protoCreateMsgDeposit,
  createTransaction,
  createAnyMessage,
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

export interface MsgSubmitProposalParams {
  content: any
  denom: string
  amount: string
  proposer: string
}

export function createTxMsgSubmitProposal(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgSubmitProposalParams,
) {
  const contentAsAny = createAnyMessage(params.content)
  // Cosmos
  const msgCosmos = protoCreateMsgSubmitProposal(
    contentAsAny,
    params.denom,
    params.amount,
    params.proposer,
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

export interface MsgDepositParams {
  proposalId: number
  deposit: {
    denom: string
    amount: string
  }
}
export function createTxMsgDeposit(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgDepositParams,
) {
  // Cosmos
  const msgCosmos = protoCreateMsgDeposit(
    params.proposalId,
    sender.accountAddress,
    params.deposit,
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
