import { createTxMessageSend } from './msgSend'

describe('msgSend tests', () => {
  it('valid', async () => {
    const chain = {
      chainId: 9000,
      cosmosChainId: 'realionetwork_9000-1',
    }

    const sender = {
      accountAddress: 'realio1lqjnfmjlx26ss8xc4cskxjdktprdqj74v2kwvx',
      sequence: 1,
      accountNumber: 9,
      pubkey: 'AgTw+4v0daIrxsNSW4FcQ+IoingPseFwHO1DnssyoOqZ',
    }

    const fee = {
      amount: '20',
      denom: 'ario',
      gas: '200000',
    }

    const memo = ''

    const params = {
      destinationAddress: 'realio13wtn4hysumr85p2qs3r55l2gsg0m07fl56gqxh',
      amount: '1',
      denom: 'ario',
    }

    const msg = createTxMessageSend(chain, sender, fee, memo, params)
    expect(
      Buffer.from(msg.legacyAmino.body.serializeBinary()).toString('base64'),
    ).toBe(
      'CokBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmkKLXJlYWxpbzFscWpuZm1qbHgyNnNzOHhjNGNza3hqZGt0cHJkcWo3NHYya3d2eBItcmVhbGlvMTN3dG40aHlzdW1yODVwMnFzM3I1NWwyZ3NnMG0wN2ZsNTZncXhoGgkKBGFyaW8SATE=',
    )
    expect(
      Buffer.from(msg.legacyAmino.authInfo.serializeBinary()).toString(
        'base64',
      ),
    ).toBe(
      'ClkKTwooL2V0aGVybWludC5jcnlwdG8udjEuZXRoc2VjcDI1NmsxLlB1YktleRIjCiECBPD7i/R1oivGw1JbgVxD4iiKeA+x4XAc7UOeyzKg6pkSBAoCCH8YARIQCgoKBGFyaW8SAjIwEMCaDA==',
    )
    expect(msg.legacyAmino.signBytes).toBe(
      'n5ZBYSH1gGTb/wQcmZ7/2Jmf8B6CiXyniF62JlBdkNQ=',
    )

    expect(
      Buffer.from(msg.signDirect.body.serializeBinary()).toString('base64'),
    ).toBe(
      'CokBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmkKLXJlYWxpbzFscWpuZm1qbHgyNnNzOHhjNGNza3hqZGt0cHJkcWo3NHYya3d2eBItcmVhbGlvMTN3dG40aHlzdW1yODVwMnFzM3I1NWwyZ3NnMG0wN2ZsNTZncXhoGgkKBGFyaW8SATE=',
    )
    expect(
      Buffer.from(msg.signDirect.authInfo.serializeBinary()).toString('base64'),
    ).toBe(
      'ClkKTwooL2V0aGVybWludC5jcnlwdG8udjEuZXRoc2VjcDI1NmsxLlB1YktleRIjCiECBPD7i/R1oivGw1JbgVxD4iiKeA+x4XAc7UOeyzKg6pkSBAoCCAEYARIQCgoKBGFyaW8SAjIwEMCaDA==',
    )
    expect(msg.signDirect.signBytes).toBe(
      'dX1bJqhxP4gaFdIqKgWvwBLQqvghs/BiCaPbJ4uMux4=',
    )
  })
})
