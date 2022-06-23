import { createMsgSend } from '../../src'

describe('msgSend tests', () => {
  it('create message send', async () => {
    const message = createMsgSend(
      'realio10hxw5znr0pz7w0gyvlczkcnjp2530e3kj2u4fc',
      'realio1smp04p5qmzdnsex6hz72w3erlxch3q9hw9cwxk',
      '50000',
      'urio',
    )
    const expectedObject = {
      from_address: 'realio10hxw5znr0pz7w0gyvlczkcnjp2530e3kj2u4fc',
      to_address: 'realio1smp04p5qmzdnsex6hz72w3erlxch3q9hw9cwxk',
      amount: [
        {
          denom: 'urio',
          amount: '50000',
        },
      ],
    }

    expect(message.message.toObject()).toStrictEqual(expectedObject)
    expect(message.path).toBe('cosmos.bank.v1beta1.MsgSend')
  })
})
