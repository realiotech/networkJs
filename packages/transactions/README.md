# transactions

Transaction generator for Realio Network

## Installation

``` sh
npm install @realiotech/transactions
```

## Usage
```javascript
import { provider, transactions, addressGenerator } from '@realiotech/realiojs'

const sender = { accountAddress: 'realio10hxw5znr0pz7w0gyvczkjp2530e3kj2u4fc', sequence: 0, accountNumber: 0, pubkey: 'A3JQVwyAybWURqXDEa2xOKj5q7Ra9V6dQhR1sIMj', }
const params = { destinationAddress: 'realio1smp04p5qmzdnhz72w3erlxch3q9hw9cwxk', amount: '5500', denom: 'urio', }
let fee = { amount: '3000000000000000000', denom: 'ario', gas: '300000', }
const memo = 'a memo'
const chain = { chainId: 1000, cosmosChainId: 'realionetwork_1000-2', }
 
const tx = createMessageSend(chain, sender, fee, memo, params)

// msg.signDirect is the transaction in Keplr format
// msg.legacyAmino is the transaction with legacy amino
// msg.eipToSign is the EIP712 data to sign with metamask
  
//...sign and broadcast..
// todo add examples for keplr, metamask (when eip added)

if (signedTx !== undefined) {
    let rawTx = createTxRaw(sign.signed.bodyBytes, sign.signed.authInfoBytes, [
        new Uint8Array(Buffer.from(sign.signature.signature, 'base64')),
    ])

    // Broadcast it
    const postOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: generatePostBodyBroadcast(rawTx),
    }

    let broadcastPost = await fetch(
        `http://localhost:1317${generateEndpointBroadcast()}`,
        postOptions,
    )
    let response = await broadcastPost.json()
}

```

# todo
- add txns for staking module
- add eip712 txn support
