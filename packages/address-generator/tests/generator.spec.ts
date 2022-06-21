import {
  ETH,
  REALIONETWORK,
  ethToRealionetwork,
  realioNetworkToEth,
  generateWallet,
} from '../src'

describe('address generator tests', () => {
  it('generator', () => {
    // ETH
    const generated = generateWallet()
    expect(Object.keys(generated)).toStrictEqual([
      'realioAddress',
      'ethAddress',
      'mnemonic',
    ])
    expect(generated.realioAddress.startsWith('realio')).toBe(true)
  })

  it('decoders', () => {
    // ETH
    let hex = ETH.decoder('0x7338f54D573b74AdeC18AcE21e839bfbCb7Ee750')
    expect(hex.toString('hex')).toBe('7338f54d573b74adec18ace21e839bfbcb7ee750')
    // REALIONETWORK
    hex = REALIONETWORK.decoder('realio1wvu02n2h8d62mmqc4n3paquml09hae6sdnlu6m')
    expect(hex.toString('hex')).toBe('7338f54d573b74adec18ace21e839bfbcb7ee750')
  })

  it('encoders', () => {
    // ETH
    let address = ETH.encoder(
      Buffer.from('7338f54d573b74adec18ace21e839bfbcb7ee750', 'hex'),
    )
    expect(address).toBe('0x7338f54D573b74AdeC18AcE21e839bfbCb7Ee750')
    // REALIONETWORK
    address = REALIONETWORK.encoder(
      Buffer.from('7338f54d573b74adec18ace21e839bfbcb7ee750', 'hex'),
    )
    expect(address).toBe('realio1wvu02n2h8d62mmqc4n3paquml09hae6sdnlu6m')
  })

  it('converters', () => {
    // ETH
    let address = ethToRealionetwork(
      '0x7338f54D573b74AdeC18AcE21e839bfbCb7Ee750',
    )
    expect(address).toBe('realio1wvu02n2h8d62mmqc4n3paquml09hae6sdnlu6m')

    // REALIONETWORK
    address = realioNetworkToEth(
      'realio1wvu02n2h8d62mmqc4n3paquml09hae6sdnlu6m',
    )
    expect(address).toBe('0x7338f54D573b74AdeC18AcE21e839bfbCb7Ee750')
  })
})
