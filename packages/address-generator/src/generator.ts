import { Wallet } from '@ethersproject/wallet'

export const generateMnemonic = (): string => {
  const wallet = Wallet.createRandom()
  return wallet.mnemonic.phrase
}
