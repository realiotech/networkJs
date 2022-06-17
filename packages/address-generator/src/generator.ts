import { Wallet } from '@ethersproject/wallet'
import { bech32 } from 'bech32'
import {
  isValidChecksumAddress,
  stripHexPrefix,
  toChecksumAddress,
} from 'crypto-addr-codec'

function makeChecksummedHexDecoder(chainId?: number) {
  return (data: string) => {
    const stripped = stripHexPrefix(data)
    if (
      !isValidChecksumAddress(data, chainId || null) &&
      stripped !== stripped.toLowerCase() &&
      stripped !== stripped.toUpperCase()
    ) {
      throw Error('Invalid address checksum')
    }
    return Buffer.from(stripHexPrefix(data), 'hex')
  }
}

function makeChecksummedHexEncoder(chainId?: number) {
  return (data: Buffer) =>
    toChecksumAddress(data.toString('hex'), chainId || null)
}

const hexChecksumChain = (name: string, chainId?: number) => ({
  decoder: makeChecksummedHexDecoder(chainId),
  encoder: makeChecksummedHexEncoder(chainId),
  name,
})

export const ETH = hexChecksumChain('ETH')

function makeBech32Encoder(prefix: string) {
  return (data: Buffer) => bech32.encode(prefix, bech32.toWords(data))
}

function makeBech32Decoder(currentPrefix: string) {
  return (data: string) => {
    const { prefix, words } = bech32.decode(data)
    if (prefix !== currentPrefix) {
      throw Error('Unrecognised address format')
    }
    return Buffer.from(bech32.fromWords(words))
  }
}

const bech32Chain = (name: string, prefix: string) => ({
  decoder: makeBech32Decoder(prefix),
  encoder: makeBech32Encoder(prefix),
  name,
})

export const REALIONETWORK = bech32Chain('REALIONETWORK', 'realio')

export const ethToRealionetwork = (ethAddress: string) => {
  const data = ETH.decoder(ethAddress)
  return REALIONETWORK.encoder(data)
}

export const realioNetworkToEth = (realionetworkAddress: string) => {
  const data = REALIONETWORK.decoder(realionetworkAddress)
  return ETH.encoder(data)
}

export const generateWallet = (): {
  realioAddress: string
  ethAddress: string
  mnemonic: string
} => {
  const wallet = Wallet.createRandom()
  const mnemonic = wallet.mnemonic.phrase
  const ethAddress = wallet.address
  const realioAddress = ethToRealionetwork(ethAddress)

  return { realioAddress, ethAddress, mnemonic }
}
