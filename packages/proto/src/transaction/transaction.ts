import { Keccak } from 'sha3'
import * as tx from '../proto/cosmos/tx/v1beta1/tx'
import * as signing from '../proto/cosmos/tx/signing/v1beta1/signing'
import * as coin from '../proto/cosmos/base/v1beta1/coin'
import * as eth from '../proto/ethermint/crypto/v1/ethsecp256k1/keys'
import * as secp from '../proto/cosmos/crypto/secp256k1/keys'

import { createAnyMessage, MessageGenerated } from '../messages/utils'

export const ETH_SECP256K1 = 'ethsecp256k1'
export const SECP256K1 = 'secp256k1'

export const SIGN_DIRECT =
  signing.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT
export const LEGACY_AMINO =
  signing.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_LEGACY_AMINO_JSON

export namespace protoTxNamespace {
  /* global cosmos */
  /* eslint no-undef: "error" */
  export import txn = tx.cosmos.tx.v1beta1
}

// TODO: messages should be typed as proto message. A types package is needed to export that type without problems
export function createBodyWithMultipleMessages(messages: any[], memo: string) {
  const content: any[] = []

  messages.forEach((message) => {
    content.push(createAnyMessage(message))
  })

  return new tx.cosmos.tx.v1beta1.TxBody({
    messages: content,
    memo,
  })
}

export function createBody(message: any, memo: string) {
  return createBodyWithMultipleMessages([message], memo)
}

export function createFee(fee: string, denom: string, gasLimit: number) {
  return new tx.cosmos.tx.v1beta1.Fee({
    amount: [
      new coin.cosmos.base.v1beta1.Coin({
        denom,
        amount: fee,
      }),
    ],
    gas_limit: gasLimit,
  })
}

export function createSignerInfo(
  publicKey: Uint8Array,
  sequence: number,
  mode: number,
  algo: string = ETH_SECP256K1,
) {
  let pubkey: MessageGenerated

  if (algo === SECP256K1) {
    pubkey = {
      message: new secp.cosmos.crypto.secp256k1.PubKey({
        key: publicKey,
      }),
      path: 'cosmos.crypto.secp256k1.PubKey',
    }
  } else {
    // default to ETH_SECP256K1 because realio network accounts have this in the prototype
    pubkey = {
      message: new eth.ethermint.crypto.v1.ethsecp256k1.PubKey({
        key: publicKey,
      }),
      path: 'ethermint.crypto.v1.ethsecp256k1.PubKey',
    }
  }

  const signerInfo = new tx.cosmos.tx.v1beta1.SignerInfo({
    public_key: createAnyMessage(pubkey),
    mode_info: new tx.cosmos.tx.v1beta1.ModeInfo({
      single: new tx.cosmos.tx.v1beta1.ModeInfo.Single({
        mode,
      }),
    }),
    sequence,
  })

  return signerInfo
}

export function createAuthInfo(
  signerInfo: tx.cosmos.tx.v1beta1.SignerInfo,
  fee: tx.cosmos.tx.v1beta1.Fee,
) {
  return new tx.cosmos.tx.v1beta1.AuthInfo({
    signer_infos: [signerInfo],
    fee,
  })
}

export function createSigDoc(
  bodyBytes: Uint8Array,
  authInfoBytes: Uint8Array,
  chainId: string,
  accountNumber: number,
) {
  return new tx.cosmos.tx.v1beta1.SignDoc({
    body_bytes: bodyBytes,
    auth_info_bytes: authInfoBytes,
    chain_id: chainId,
    account_number: accountNumber,
  })
}

// TODO: messages should be typed as proto message. A types package is needed to export that type without problems
export function createTransactionWithMultipleMessages(
  messages: any,
  memo: string,
  fee: string,
  denom: string,
  gasLimit: number,
  pubKey: string,
  sequence: number,
  accountNumber: number,
  chainId: string,
  algo: string = ETH_SECP256K1
) {
  const body = createBodyWithMultipleMessages(messages, memo)
  const feeMessage = createFee(fee, denom, gasLimit)
  const pubKeyDecoded = Buffer.from(pubKey, 'base64')

  // AMINO
  const signInfoAmino = createSignerInfo(
    new Uint8Array(pubKeyDecoded),
    sequence,
    LEGACY_AMINO,
    algo
  )

  const authInfoAmino = createAuthInfo(signInfoAmino, feeMessage)

  const signDocAmino = createSigDoc(
    body.serializeBinary(),
    authInfoAmino.serializeBinary(),
    chainId,
    accountNumber,
  )

  const hashAmino = new Keccak(256)
  hashAmino.update(Buffer.from(signDocAmino.serializeBinary()))
  const toSignAmino = hashAmino.digest('binary')

  // SignDirect
  const signInfoDirect = createSignerInfo(
    new Uint8Array(pubKeyDecoded),
    sequence,
    SIGN_DIRECT,
    algo
  )

  const authInfoDirect = createAuthInfo(signInfoDirect, feeMessage)

  const signDocDirect = createSigDoc(
    body.serializeBinary(),
    authInfoDirect.serializeBinary(),
    chainId,
    accountNumber,
  )

  const hashDirect = new Keccak(256)
  hashDirect.update(Buffer.from(signDocDirect.serializeBinary()))
  const toSignDirect = hashDirect.digest('binary')

  return {
    legacyAmino: {
      body,
      authInfo: authInfoAmino,
      signBytes: toSignAmino.toString('base64'),
    },
    signDirect: {
      body,
      authInfo: authInfoDirect,
      signBytes: toSignDirect.toString('base64'),
    },
  }
}

export function createTransaction(
  message: any,
  memo: string,
  fee: string,
  denom: string,
  gasLimit: number,
  pubKey: string,
  sequence: number,
  accountNumber: number,
  chainId: string,
  algo: string = ETH_SECP256K1,
) {
  return createTransactionWithMultipleMessages(
    [message],
    memo,
    fee,
    denom,
    gasLimit,
    pubKey,
    sequence,
    accountNumber,
    chainId,
    algo
  )
}
