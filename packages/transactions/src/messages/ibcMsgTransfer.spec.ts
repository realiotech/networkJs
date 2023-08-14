import { createTxIBCMsgTransfer } from './ibcMsgTransfer'

describe('ibc transfer tests', () => {
  it('valid', async () => {
    const chain = {
      chainId: 9000,
      cosmosChainId: 'realionetwork_9000-1',
    }

    const sender = {
      accountAddress: 'realio17e8wqetf9m7r0djdpssk7chgasdkw4hxnwlkl7',
      sequence: 1,
      accountNumber: 9,
      pubkey: 'AgTw+4v0daIrxsNSW4FcQ+IoingPseFwHO1DnssyoOqZ',
    }

    const fee = {
      amount: '20000000',
      denom: 'ario',
      gas: '200000',
    }

    const memo = ''

    const params = {
      sourcePort: 'transfer',
      sourceChannel: 'channel-1',
      receiver: 'osmo14jk3eflzgunquxgmjkjkmm4y3dn2ydeu9752nf',
      amount: '10000000000000000000',
      denom: 'ario',
      revisionNumber: 1,
      revisionHeight: 10957089,
      timeoutTimestamp: '1691855342513734439',
    }

    const msg = createTxIBCMsgTransfer(chain, sender, fee, memo, params)
    expect(
      Buffer.from(msg.legacyAmino.body.serializeBinary()).toString('base64'),
    ).toBe(
      'CtABCikvaWJjLmFwcGxpY2F0aW9ucy50cmFuc2Zlci52MS5Nc2dUcmFuc2ZlchKiAQoIdHJhbnNmZXISCWNoYW5uZWwtMRocCgRhcmlvEhQxMDAwMDAwMDAwMDAwMDAwMDAwMCItcmVhbGlvMTdlOHdxZXRmOW03cjBkamRwc3NrN2NoZ2FzZGt3NGh4bndsa2w3Kitvc21vMTRqazNlZmx6Z3VucXV4Z21qa2prbW00eTNkbjJ5ZGV1OTc1Mm5mMgcIARCh4pwFOICGg++Fr6u9Fw==',
    )
    expect(
      Buffer.from(msg.legacyAmino.authInfo.serializeBinary()).toString(
        'base64',
      ),
    ).toBe(
      'ClkKTwooL2V0aGVybWludC5jcnlwdG8udjEuZXRoc2VjcDI1NmsxLlB1YktleRIjCiECBPD7i/R1oivGw1JbgVxD4iiKeA+x4XAc7UOeyzKg6pkSBAoCCH8YARIWChAKBGFyaW8SCDIwMDAwMDAwEMCaDA==',
    )
    expect(msg.legacyAmino.signBytes).toBe(
      'YX8OvrvPlLIaEhcu/+L+GCfGwKhsvXssjGsx3WviEdg=',
    )

    expect(
      Buffer.from(msg.signDirect.body.serializeBinary()).toString('base64'),
    ).toBe(
      'CtABCikvaWJjLmFwcGxpY2F0aW9ucy50cmFuc2Zlci52MS5Nc2dUcmFuc2ZlchKiAQoIdHJhbnNmZXISCWNoYW5uZWwtMRocCgRhcmlvEhQxMDAwMDAwMDAwMDAwMDAwMDAwMCItcmVhbGlvMTdlOHdxZXRmOW03cjBkamRwc3NrN2NoZ2FzZGt3NGh4bndsa2w3Kitvc21vMTRqazNlZmx6Z3VucXV4Z21qa2prbW00eTNkbjJ5ZGV1OTc1Mm5mMgcIARCh4pwFOICGg++Fr6u9Fw==',
    )
    expect(
      Buffer.from(msg.signDirect.authInfo.serializeBinary()).toString('base64'),
    ).toBe(
      'ClkKTwooL2V0aGVybWludC5jcnlwdG8udjEuZXRoc2VjcDI1NmsxLlB1YktleRIjCiECBPD7i/R1oivGw1JbgVxD4iiKeA+x4XAc7UOeyzKg6pkSBAoCCAEYARIWChAKBGFyaW8SCDIwMDAwMDAwEMCaDA==',
    )
    expect(msg.signDirect.signBytes).toBe(
      'kX0I+khngLKapYr6tvQNhNxrXaio6ul0ByrPEPi44lY=',
    )
  })
})
