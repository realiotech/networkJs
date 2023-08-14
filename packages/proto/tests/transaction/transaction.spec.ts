import {
  createMsgSend,
  createBody,
  createFee,
  createSignerInfo,
  createAuthInfo,
  createSigDoc,
  createTransaction,
  SIGN_DIRECT,
} from '../../src'

describe('transaction tests', () => {
  it('createBody test', () => {
    const msgSend = createMsgSend(
      'realio10hxw5znr0pz7w0gyvlczkcnjp2530e3kj2u4fc',
      'realio1smp04p5qmzdnsex6hz72w3erlxch3q9hw9cwxk',
      '50000',
      'ario',
    )
    const res = createBody(msgSend, 'realio')
    expect(res.toObject()).toStrictEqual({
      messages: [
        {
          type_url: '/cosmos.bank.v1beta1.MsgSend',
          value: new Uint8Array([
            10, 45, 114, 101, 97, 108, 105, 111, 49, 48, 104, 120, 119, 53, 122,
            110, 114, 48, 112, 122, 55, 119, 48, 103, 121, 118, 108, 99, 122,
            107, 99, 110, 106, 112, 50, 53, 51, 48, 101, 51, 107, 106, 50, 117,
            52, 102, 99, 18, 45, 114, 101, 97, 108, 105, 111, 49, 115, 109, 112,
            48, 52, 112, 53, 113, 109, 122, 100, 110, 115, 101, 120, 54, 104,
            122, 55, 50, 119, 51, 101, 114, 108, 120, 99, 104, 51, 113, 57, 104,
            119, 57, 99, 119, 120, 107, 26, 13, 10, 4, 97, 114, 105, 111, 18, 5,
            53, 48, 48, 48, 48,
          ]),
        },
      ],
      memo: 'realio',
      extension_options: [],
      non_critical_extension_options: [],
      timeout_height: 0,
    })
  })

  it('createFee test', () => {
    const value = '20'
    const denom = 'ario'
    const gas = 20000
    const fee = createFee(value, denom, gas)
    expect(fee.toObject()).toStrictEqual({
      amount: [
        {
          amount: value,
          denom,
        },
      ],
      gas_limit: gas,
      granter: '',
      payer: '',
    })
  })

  it('createSignerInfo test', () => {
    const pubkey = new Uint8Array([
      3, 114, 80, 87, 12, 128, 201, 181, 148, 70, 165, 195, 17, 173, 177, 56,
      168, 249, 229, 116, 5, 171, 180, 90, 245, 94, 157, 66, 20, 117, 176, 131,
      35,
    ])
    const sequence = 0
    const info = createSignerInfo(pubkey, sequence, SIGN_DIRECT)
    expect(info.toObject()).toStrictEqual({
      public_key: {
        type_url: '/ethermint.crypto.v1.ethsecp256k1.PubKey',
        // value: 'A3JQVwyAybWURqXDEa2xOKj55XQFq7Ra9V6dQhR1sIMj'
        value: new Uint8Array([
          10, 33, 3, 114, 80, 87, 12, 128, 201, 181, 148, 70, 165, 195, 17, 173,
          177, 56, 168, 249, 229, 116, 5, 171, 180, 90, 245, 94, 157, 66, 20,
          117, 176, 131, 35,
        ]),
      },
      mode_info: { single: { mode: 1 } },
      sequence: 0,
    })
  })

  it('createAuthInfo test', () => {
    const pubkey = new Uint8Array([
      3, 114, 80, 87, 12, 128, 201, 181, 148, 70, 165, 195, 17, 173, 177, 56,
      168, 249, 229, 116, 5, 171, 180, 90, 245, 94, 157, 66, 20, 117, 176, 131,
      35,
    ])
    const sequence = 0
    const info = createSignerInfo(pubkey, sequence, SIGN_DIRECT)
    const value = '20'
    const denom = 'ario'
    const gas = 20000
    const fee = createFee(value, denom, gas)

    const msg = createAuthInfo(info, fee)
    expect(msg.toObject()).toStrictEqual({
      signer_infos: [
        {
          public_key: {
            type_url: '/ethermint.crypto.v1.ethsecp256k1.PubKey',
            value: new Uint8Array([
              10, 33, 3, 114, 80, 87, 12, 128, 201, 181, 148, 70, 165, 195, 17,
              173, 177, 56, 168, 249, 229, 116, 5, 171, 180, 90, 245, 94, 157,
              66, 20, 117, 176, 131, 35,
            ]),
          },
          mode_info: { single: { mode: 1 } },
          sequence,
        },
      ],
      fee: {
        amount: [
          {
            amount: value,
            denom,
          },
        ],
        gas_limit: gas,
        granter: '',
        payer: '',
      },
    })
  })

  it('createSigDoc test', () => {
    const msgSend = createMsgSend(
      'realio10hxw5znr0pz7w0gyvlczkcnjp2530e3kj2u4fc',
      'realio1smp04p5qmzdnsex6hz72w3erlxch3q9hw9cwxk',
      '10001',
      'ario',
    )
    const body = createBody(msgSend, 'test')

    const pubkey = new Uint8Array([
      3, 114, 80, 87, 12, 128, 201, 181, 148, 70, 165, 195, 17, 173, 177, 56,
      168, 249, 229, 116, 5, 171, 180, 90, 245, 94, 157, 66, 20, 117, 176, 131,
      35,
    ])
    const sequence = 0
    const info = createSignerInfo(pubkey, sequence, 1)
    const value = '20'
    const denom = 'ario'
    const gas = 20000
    const fee = createFee(value, denom, gas)

    const authInfo = createAuthInfo(info, fee)

    const chainId = 'realionetworktest-2022_2022'

    const accountNumber = 0

    const res = createSigDoc(
      body.serializeBinary(),
      authInfo.serializeBinary(),
      chainId,
      accountNumber,
    )
    expect(res.toObject()).toStrictEqual({
      body_bytes: new Uint8Array([
        10, 141, 1, 10, 28, 47, 99, 111, 115, 109, 111, 115, 46, 98, 97, 110,
        107, 46, 118, 49, 98, 101, 116, 97, 49, 46, 77, 115, 103, 83, 101, 110,
        100, 18, 109, 10, 45, 114, 101, 97, 108, 105, 111, 49, 48, 104, 120,
        119, 53, 122, 110, 114, 48, 112, 122, 55, 119, 48, 103, 121, 118, 108,
        99, 122, 107, 99, 110, 106, 112, 50, 53, 51, 48, 101, 51, 107, 106, 50,
        117, 52, 102, 99, 18, 45, 114, 101, 97, 108, 105, 111, 49, 115, 109,
        112, 48, 52, 112, 53, 113, 109, 122, 100, 110, 115, 101, 120, 54, 104,
        122, 55, 50, 119, 51, 101, 114, 108, 120, 99, 104, 51, 113, 57, 104,
        119, 57, 99, 119, 120, 107, 26, 13, 10, 4, 97, 114, 105, 111, 18, 5, 49,
        48, 48, 48, 49, 18, 4, 116, 101, 115, 116,
      ]),
      auth_info_bytes: new Uint8Array([
        10, 87, 10, 79, 10, 40, 47, 101, 116, 104, 101, 114, 109, 105, 110, 116,
        46, 99, 114, 121, 112, 116, 111, 46, 118, 49, 46, 101, 116, 104, 115,
        101, 99, 112, 50, 53, 54, 107, 49, 46, 80, 117, 98, 75, 101, 121, 18,
        35, 10, 33, 3, 114, 80, 87, 12, 128, 201, 181, 148, 70, 165, 195, 17,
        173, 177, 56, 168, 249, 229, 116, 5, 171, 180, 90, 245, 94, 157, 66, 20,
        117, 176, 131, 35, 18, 4, 10, 2, 8, 1, 18, 16, 10, 10, 10, 4, 97, 114,
        105, 111, 18, 2, 50, 48, 16, 160, 156, 1,
      ]),
      chain_id: chainId,
      account_number: accountNumber,
    })
  })
})

describe('transaction', () => {
  it('valid txn', () => {
    const msg = createMsgSend(
      'realio10hxw5znr0pz7w0gyvlczkcnjp2530e3kj2u4fc',
      'realio1smp04p5qmzdnsex6hz72w3erlxch3q9hw9cwxk',
      '1',
      'ario',
    )
    const tx = createTransaction(
      msg,
      '',
      '20',
      'ario',
      200000,
      'A3JQVwyAybWURqXDEa2xOKj55XQFq7Ra9V6dQhR1sIMj',
      1,
      7,
      '',
    )
    expect(
      Buffer.from(tx.legacyAmino.body.serializeBinary()).toString('base64'),
    ).toBe(
      'CokBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmkKLXJlYWxpbzEwaHh3NXpucjBwejd3MGd5dmxjemtjbmpwMjUzMGUza2oydTRmYxItcmVhbGlvMXNtcDA0cDVxbXpkbnNleDZoejcydzNlcmx4Y2gzcTlodzljd3hrGgkKBGFyaW8SATE=',
    )
    expect(
      Buffer.from(tx.legacyAmino.authInfo.serializeBinary()).toString('base64'),
    ).toBe(
      'ClkKTwooL2V0aGVybWludC5jcnlwdG8udjEuZXRoc2VjcDI1NmsxLlB1YktleRIjCiEDclBXDIDJtZRGpcMRrbE4qPnldAWrtFr1Xp1CFHWwgyMSBAoCCH8YARIQCgoKBGFyaW8SAjIwEMCaDA==',
    )
    expect(
      Buffer.from(tx.signDirect.body.serializeBinary()).toString('base64'),
    ).toBe(
      'CokBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmkKLXJlYWxpbzEwaHh3NXpucjBwejd3MGd5dmxjemtjbmpwMjUzMGUza2oydTRmYxItcmVhbGlvMXNtcDA0cDVxbXpkbnNleDZoejcydzNlcmx4Y2gzcTlodzljd3hrGgkKBGFyaW8SATE=',
    )
    expect(
      Buffer.from(tx.signDirect.authInfo.serializeBinary()).toString('base64'),
    ).toBe(
      'ClkKTwooL2V0aGVybWludC5jcnlwdG8udjEuZXRoc2VjcDI1NmsxLlB1YktleRIjCiEDclBXDIDJtZRGpcMRrbE4qPnldAWrtFr1Xp1CFHWwgyMSBAoCCAEYARIQCgoKBGFyaW8SAjIwEMCaDA==',
    )
  })
})
