import {
  createTxMsgDelegate,
  createTxMsgBeginRedelegate,
  createTxMsgWithdrawDelegatorReward,
} from './staking'

describe('staking tests', () => {
  it('valid delegation', async () => {
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
      validatorAddress: 'realiovaloper1lqjnfmjlx26ss8xc4cskxjdktprdqj74c745aq',
      amount: '1',
      denom: 'ario',
    }

    const msg = createTxMsgDelegate(chain, sender, fee, memo, params)
    expect(
      Buffer.from(msg.legacyAmino.body.serializeBinary()).toString('base64'),
    ).toBe(
      'CpcBCiMvY29zbW9zLnN0YWtpbmcudjFiZXRhMS5Nc2dEZWxlZ2F0ZRJwCi1yZWFsaW8xbHFqbmZtamx4MjZzczh4YzRjc2t4amRrdHByZHFqNzR2Mmt3dngSNHJlYWxpb3ZhbG9wZXIxbHFqbmZtamx4MjZzczh4YzRjc2t4amRrdHByZHFqNzRjNzQ1YXEaCQoEYXJpbxIBMQ==',
    )
    expect(
      Buffer.from(msg.legacyAmino.authInfo.serializeBinary()).toString(
        'base64',
      ),
    ).toBe(
      'ClkKTwooL2V0aGVybWludC5jcnlwdG8udjEuZXRoc2VjcDI1NmsxLlB1YktleRIjCiECBPD7i/R1oivGw1JbgVxD4iiKeA+x4XAc7UOeyzKg6pkSBAoCCH8YARIQCgoKBGFyaW8SAjIwEMCaDA==',
    )
    expect(msg.legacyAmino.signBytes).toBe(
      'KzvSmkMzcf9xTa1SR6iM1iQA7rmAAaW3kAg9ILpIk1Y=',
    )

    expect(
      Buffer.from(msg.signDirect.body.serializeBinary()).toString('base64'),
    ).toBe(
      'CpcBCiMvY29zbW9zLnN0YWtpbmcudjFiZXRhMS5Nc2dEZWxlZ2F0ZRJwCi1yZWFsaW8xbHFqbmZtamx4MjZzczh4YzRjc2t4amRrdHByZHFqNzR2Mmt3dngSNHJlYWxpb3ZhbG9wZXIxbHFqbmZtamx4MjZzczh4YzRjc2t4amRrdHByZHFqNzRjNzQ1YXEaCQoEYXJpbxIBMQ==',
    )
    expect(
      Buffer.from(msg.signDirect.authInfo.serializeBinary()).toString('base64'),
    ).toBe(
      'ClkKTwooL2V0aGVybWludC5jcnlwdG8udjEuZXRoc2VjcDI1NmsxLlB1YktleRIjCiECBPD7i/R1oivGw1JbgVxD4iiKeA+x4XAc7UOeyzKg6pkSBAoCCAEYARIQCgoKBGFyaW8SAjIwEMCaDA==',
    )
    expect(msg.signDirect.signBytes).toBe(
      'G/A7bbCHVf00FMCuFHLYAM/v0qEDjrOUa+b9unJ7PMk=',
    )
  })
  it('valid redelegation', async () => {
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
      validatorSrcAddress:
        'realiovaloper1lqjnfmjlx26ss8xc4cskxjdktprdqj74c745aq',
      validatorDstAddress:
        'realiovaloper13wtn4hysumr85p2qs3r55l2gsg0m07flqwt6h3',
      amount: '1',
      denom: 'ario',
    }

    const msg = createTxMsgBeginRedelegate(chain, sender, fee, memo, params)
    expect(
      Buffer.from(msg.legacyAmino.body.serializeBinary()).toString('base64'),
    ).toBe(
      'CtUBCiovY29zbW9zLnN0YWtpbmcudjFiZXRhMS5Nc2dCZWdpblJlZGVsZWdhdGUSpgEKLXJlYWxpbzFscWpuZm1qbHgyNnNzOHhjNGNza3hqZGt0cHJkcWo3NHYya3d2eBI0cmVhbGlvdmFsb3BlcjFscWpuZm1qbHgyNnNzOHhjNGNza3hqZGt0cHJkcWo3NGM3NDVhcRo0cmVhbGlvdmFsb3BlcjEzd3RuNGh5c3Vtcjg1cDJxczNyNTVsMmdzZzBtMDdmbHF3dDZoMyIJCgRhcmlvEgEx',
    )
    expect(
      Buffer.from(msg.legacyAmino.authInfo.serializeBinary()).toString(
        'base64',
      ),
    ).toBe(
      'ClkKTwooL2V0aGVybWludC5jcnlwdG8udjEuZXRoc2VjcDI1NmsxLlB1YktleRIjCiECBPD7i/R1oivGw1JbgVxD4iiKeA+x4XAc7UOeyzKg6pkSBAoCCH8YARIQCgoKBGFyaW8SAjIwEMCaDA==',
    )
    expect(msg.legacyAmino.signBytes).toBe(
      'xdu6HdVPApJi5+jv1MaPjqeM3Zxm2Uu0S0cnXRf57gg=',
    )

    expect(
      Buffer.from(msg.signDirect.body.serializeBinary()).toString('base64'),
    ).toBe(
      'CtUBCiovY29zbW9zLnN0YWtpbmcudjFiZXRhMS5Nc2dCZWdpblJlZGVsZWdhdGUSpgEKLXJlYWxpbzFscWpuZm1qbHgyNnNzOHhjNGNza3hqZGt0cHJkcWo3NHYya3d2eBI0cmVhbGlvdmFsb3BlcjFscWpuZm1qbHgyNnNzOHhjNGNza3hqZGt0cHJkcWo3NGM3NDVhcRo0cmVhbGlvdmFsb3BlcjEzd3RuNGh5c3Vtcjg1cDJxczNyNTVsMmdzZzBtMDdmbHF3dDZoMyIJCgRhcmlvEgEx',
    )
    expect(
      Buffer.from(msg.signDirect.authInfo.serializeBinary()).toString('base64'),
    ).toBe(
      'ClkKTwooL2V0aGVybWludC5jcnlwdG8udjEuZXRoc2VjcDI1NmsxLlB1YktleRIjCiECBPD7i/R1oivGw1JbgVxD4iiKeA+x4XAc7UOeyzKg6pkSBAoCCAEYARIQCgoKBGFyaW8SAjIwEMCaDA==',
    )
    expect(msg.signDirect.signBytes).toBe(
      'SGEqv0Ugl83YKQGmJVanJG0F3cLlgTGYJlJvch8Q6JY=',
    )
  })
  it('valid withdrawel', async () => {
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
      validatorAddress: 'realiovaloper1lqjnfmjlx26ss8xc4cskxjdktprdqj74c745aq',
    }

    const msg = createTxMsgWithdrawDelegatorReward(
      chain,
      sender,
      fee,
      memo,
      params,
    )
    expect(
      Buffer.from(msg.legacyAmino.body.serializeBinary()).toString('base64'),
    ).toBe(
      'CqABCjcvY29zbW9zLmRpc3RyaWJ1dGlvbi52MWJldGExLk1zZ1dpdGhkcmF3RGVsZWdhdG9yUmV3YXJkEmUKLXJlYWxpbzFscWpuZm1qbHgyNnNzOHhjNGNza3hqZGt0cHJkcWo3NHYya3d2eBI0cmVhbGlvdmFsb3BlcjFscWpuZm1qbHgyNnNzOHhjNGNza3hqZGt0cHJkcWo3NGM3NDVhcQ==',
    )
    expect(
      Buffer.from(msg.legacyAmino.authInfo.serializeBinary()).toString(
        'base64',
      ),
    ).toBe(
      'ClkKTwooL2V0aGVybWludC5jcnlwdG8udjEuZXRoc2VjcDI1NmsxLlB1YktleRIjCiECBPD7i/R1oivGw1JbgVxD4iiKeA+x4XAc7UOeyzKg6pkSBAoCCH8YARIQCgoKBGFyaW8SAjIwEMCaDA==',
    )
    expect(msg.legacyAmino.signBytes).toBe(
      'pXfCTjK9bNzs2uG8QSS5m+u0oORqI52YOsFtNdv22/Q=',
    )

    expect(
      Buffer.from(msg.signDirect.body.serializeBinary()).toString('base64'),
    ).toBe(
      'CqABCjcvY29zbW9zLmRpc3RyaWJ1dGlvbi52MWJldGExLk1zZ1dpdGhkcmF3RGVsZWdhdG9yUmV3YXJkEmUKLXJlYWxpbzFscWpuZm1qbHgyNnNzOHhjNGNza3hqZGt0cHJkcWo3NHYya3d2eBI0cmVhbGlvdmFsb3BlcjFscWpuZm1qbHgyNnNzOHhjNGNza3hqZGt0cHJkcWo3NGM3NDVhcQ==',
    )
    expect(
      Buffer.from(msg.signDirect.authInfo.serializeBinary()).toString('base64'),
    ).toBe(
      'ClkKTwooL2V0aGVybWludC5jcnlwdG8udjEuZXRoc2VjcDI1NmsxLlB1YktleRIjCiECBPD7i/R1oivGw1JbgVxD4iiKeA+x4XAc7UOeyzKg6pkSBAoCCAEYARIQCgoKBGFyaW8SAjIwEMCaDA==',
    )
    expect(msg.signDirect.signBytes).toBe(
      'RuBeRrrWoxiSU2oQExa3OXQ/HKe7zY2pnJ6YEjTRrNg=',
    )
  })
})
