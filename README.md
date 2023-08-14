# realioJs
Js / Ts library for Realio Network


## Packages

RealioJs is a library that consists of many smaller npm packages within the
[@realiotech namespace](https://www.npmjs.com/org/realiotech), a so called monorepo.

Here are some of them to get an idea:

- https://www.npmjs.com/package/@realiotech/realiojs
- https://www.npmjs.com/package/@realiotech/address-generator
- https://www.npmjs.com/package/@realiotech/proto
- https://www.npmjs.com/package/@realiotech/provider
- https://www.npmjs.com/package/@realiotech/transactions

## Installation

You can install the main realiojs package which exports all the libraries or any individual package
```bash
npm i @realiotech/realiojs # or using yarn
```

```bash
npm i @realiotech/transactions # install just the transactions package
```

## Example 

### Get account information

Get the account number, sequence and pubkey from an address.
NOTE: if the address had not sent any transaction to the blockchain, the pubkey value are going to be empty.

```ts
import { ethToRealionetwork } from '@realiotech/address-converter'
import { generateEndpointAccount } from '@realiotech/provider'

const sender = 'realio1...'
let destination = 'realio1....'

// Query the node
const options = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
}

let addrRawData = await fetch(
  `http://127.0.0.1:1317${generateEndpointAccount(sender)}`,
  options,
)
// NOTE: the node returns status code 400 if the wallet doesn't exist, catch that error

let addrData = await addRawData.json()

// Response format at @realiotech/provider/rest/account/AccountResponse
/*
  account: {
    '@type': string
    base_account: {
      address: string
      pub_key?: {
        '@type': string
        key: string
      }
      account_number: string
      sequence: string
    }
    code_hash: string
  }
*/
```

### Create a MsgSend Transaction

The transaction can be signed using EIP712 on Metamask and SignDirect on Keplr.

```ts
import { createMessageSend } from '@realiotech/transactions'

const chain = {
  chainId: 9000,
  cosmosChainId: 'realionetwork_9000-1',
}

const sender = {
  accountAddress: 'realio1tfegf50n5xl0hd5cxfzjca3ylsfpg0fned5gqm',
  sequence: 1,
  accountNumber: 9,
  pubkey: 'BcTw+5v0daIrxsNSW4FcQ+IoingPseFwHO1DnssyoOqZ',
}

const fee = {
  amount: '20',
  denom: 'ario',
  gas: '200000',
}

const memo = ''

const params = {
  destinationAddress: 'realio1pmk2r32ssqwps42y3c9d4clqlca403yd9wymgr',
  amount: '1',
  denom: 'ario',
}

const msg = createMessageSend(chain, sender, fee, memo, params)

// msg.signDirect is the transaction in Keplr format
// msg.legacyAmino is the transaction with legacy amino
// msg.eipToSign is the EIP712 data to sign with metamask
```

### Signing with Keplr

```ts
// Follow the previous step to generate the msg object
import { createTxRaw } from '@realiotech/proto'
import {
  generateEndpointBroadcast,
  generatePostBodyBroadcast,
} from '@realiotech/provider'

let sign = await window?.keplr?.signDirect(
  chain.cosmosChainId,
  sender.accountAddress,
  {
    bodyBytes: msg.signDirect.body.serializeBinary(),
    authInfoBytes: msg.signDirect.authInfo.serializeBinary(),
    chainId: chain.cosmosChainId,
    accountNumber: new Long(sender.accountNumber),
  },
  // @ts-expect-error the types are not updated on Keplr side
  { isEthereum: true },
)

if (sign !== undefined) {
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

## TODO

- Add docs and examples to all the packages.
- Add more cosmos messages