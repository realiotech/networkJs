import { createTxMsgVote } from './gov'

describe('gov tests', () => {
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
      proposalId: 123,
      option: 1,
    }

    const msg = createTxMsgVote(chain, sender, fee, memo, params)
    expect(
      Buffer.from(msg.legacyAmino.body.serializeBinary()).toString('base64'),
    ).toBe(
      'ClIKGy9jb3Ntb3MuZ292LnYxYmV0YTEuTXNnVm90ZRIzCHsSLXJlYWxpbzFscWpuZm1qbHgyNnNzOHhjNGNza3hqZGt0cHJkcWo3NHYya3d2eBgB',
    )
    expect(
      Buffer.from(msg.legacyAmino.authInfo.serializeBinary()).toString(
        'base64',
      ),
    ).toBe(
      'ClkKTwooL2V0aGVybWludC5jcnlwdG8udjEuZXRoc2VjcDI1NmsxLlB1YktleRIjCiECBPD7i/R1oivGw1JbgVxD4iiKeA+x4XAc7UOeyzKg6pkSBAoCCH8YARIQCgoKBGFyaW8SAjIwEMCaDA==',
    )
    expect(msg.legacyAmino.signBytes).toBe(
      'IqoFYA9kxO0BxNv1obsstI88QPcww2VthvDIgMWyqXs=',
    )

    expect(
      Buffer.from(msg.signDirect.body.serializeBinary()).toString('base64'),
    ).toBe(
      'ClIKGy9jb3Ntb3MuZ292LnYxYmV0YTEuTXNnVm90ZRIzCHsSLXJlYWxpbzFscWpuZm1qbHgyNnNzOHhjNGNza3hqZGt0cHJkcWo3NHYya3d2eBgB',
    )
    expect(
      Buffer.from(msg.signDirect.authInfo.serializeBinary()).toString('base64'),
    ).toBe(
      'ClkKTwooL2V0aGVybWludC5jcnlwdG8udjEuZXRoc2VjcDI1NmsxLlB1YktleRIjCiECBPD7i/R1oivGw1JbgVxD4iiKeA+x4XAc7UOeyzKg6pkSBAoCCAEYARIQCgoKBGFyaW8SAjIwEMCaDA==',
    )
    expect(msg.signDirect.signBytes).toBe(
      's0cmHB4jwe86QggJlEOZKUCiPRI2k3etzdPVn17Ue9M=',
    )
  })
})
