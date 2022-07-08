import {
  createMsgBeginRedelegate as protoMsgBeginRedelegate,
  createMsgDelegate as protoMsgDelegate,
  createMsgUndelegate as protoMsgUndelegate,
  createMsgWithdrawDelegatorReward as protoMsgWithdrawDelegatorReward,
  createMsgWithdrawValidatorCommission as protoMsgWithdrawValidatorCommission,
  MsgWithdrawDelegatorRewardProtoInterface,
  createTransaction,
  createTransactionWithMultipleMessages,
} from '@realiotech/proto'


import { Chain, Fee, Sender } from './common'

export interface MsgDelegateParams {
  validatorAddress: string
  amount: string
  denom: string
}

export function createTxMsgDelegate(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgDelegateParams,
) {

  // Cosmos
  const protoMessage = protoMsgDelegate(
    sender.accountAddress,
    params.validatorAddress,
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

export interface MsgBeginRedelegateParams {
  validatorSrcAddress: string
  validatorDstAddress: string
  amount: string
  denom: string
}

export function createTxMsgBeginRedelegate(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgBeginRedelegateParams,
) {
  // Cosmos
  const protoMessage = protoMsgBeginRedelegate(
    sender.accountAddress,
    params.validatorSrcAddress,
    params.validatorDstAddress,
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

export interface MsgUndelegateParams {
  validatorAddress: string
  amount: string
  denom: string
}

export function createTxMsgUndelegate(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgUndelegateParams,
) {

  // Cosmos
  const protoMessage = protoMsgUndelegate(
    sender.accountAddress,
    params.validatorAddress,
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

export interface MsgWithdrawDelegatorRewardParams {
  validatorAddress: string
}

export function createTxMsgWithdrawDelegatorReward(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgWithdrawDelegatorRewardParams,
) {
  // Cosmos
  const protoMessage = protoMsgWithdrawDelegatorReward(
    sender.accountAddress,
    params.validatorAddress,
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

// Multiple WithdrawRewards
export interface MsgMultipleWithdrawDelegatorRewardParams {
  validatorAddresses: string[]
}

export function createTxMsgMultipleWithdrawDelegatorReward(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgMultipleWithdrawDelegatorRewardParams,
) {

  // Cosmos
  const protoMsgs: MsgWithdrawDelegatorRewardProtoInterface[] = []
  params.validatorAddresses.forEach((validator) => {
    protoMsgs.push(
      protoMsgWithdrawDelegatorReward(sender.accountAddress, validator),
    )
  })

  // Cosmos
  const tx = createTransactionWithMultipleMessages(
    protoMsgs,
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

export interface MsgWithdrawValidatorCommissionParams {
  validatorAddress: string
}

export function createTxMsgWithdrawValidatorCommission(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgWithdrawValidatorCommissionParams,
) {

  // Cosmos
  const protoMessage = protoMsgWithdrawValidatorCommission(
    params.validatorAddress,
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