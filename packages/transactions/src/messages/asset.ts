import {
  createMsgCreateToken as protoMsgCreateToken,
  createMsgUpdateToken as protoMsgUpdateToken,
  createMsgAuthorizeAddress as protoMsgAuthorizeAddress,
  createMsgUnAuthorizeAddress as protoMsgUnAuthorizeAddress,
  createMsgTransferToken as protoMsgTransferToken,
  createTransaction,
} from '@realiotech/proto'

import { Chain, Fee, Sender } from './common'

export interface MsgCreateTokenParams {
  name: string
  symbol: string
  total: string
  authorizationRequired: boolean
}

export function createTxMsgCreateToken(
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
    params.authorizationRequired,
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

export interface MsgUpdateTokenParams {
    symbol: string
    authorizationRequired: boolean
    manager: string

}
export function createTxMsgUpdateToken(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgUpdateTokenParams,
) {
  // Cosmos
  const protoMessage = protoMsgUpdateToken(
      params.manager,
      params.symbol,
      params.authorizationRequired,
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

export interface MsgAuthorizeAddressParams {
  symbol: string,
  manager: string,
  address: string,
}
export function createTxAuthorizeAddress(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgAuthorizeAddressParams,
) {
  // Cosmos
  const protoMessage = protoMsgAuthorizeAddress(
      params.manager,
      params.symbol,
      params.address,
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

export function createTxUnAuthorizeAddress(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgAuthorizeAddressParams,
) {
  // Cosmos
  const protoMessage = protoMsgUnAuthorizeAddress(
      params.manager,
      params.symbol,
      params.address,
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

export interface MsgTransferTokenParams {
  from: string,
  to: string,
  symbol: string,
  amount: string,
}

export function createTxMsgTransferToken(
  chain: Chain,
  sender: Sender,
  fee: Fee,
  memo: string,
  params: MsgTransferTokenParams,
) {
  // Cosmos
  const protoMessage = protoMsgTransferToken(
    params.from,
    params.to,
    params.symbol,
    params.amount,
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