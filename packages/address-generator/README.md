# Address generator

Exposes functionality to generate Realio Network addresses and convert between `ETH` address and `ethsecp256k1`/`realio` addresses.

## Installation

``` sh
npm install @realiotech/address-generator
```

## Usage


### Generate

``` ts
import {generateWallet} "@realiotech/address-generator"

let wallet = generateWallet()
{
  realioAddress: 'realio1wvu02n2h8d62mmqc4n3paquml09hae6sdnlu6m',
  ethAddress: '0x7338f54D573b74AdeC18AcE21e839bfbCb7Ee750',
  mnemonic: 'lumber flight plunge wait repair knee year deer chuckle cherry involve start'
}

```


### Converter

``` ts
import {realioNetworkToEth, ethToRealionetwork} from "@realiotech/address-generator"

let address = realioNetworkToEth("realio1wvu02n2h8d62mmqc4n3paquml09hae6sdnlu6m")
// "0x7338f54D573b74AdeC18AcE21e839bfbCb7Ee750"

let address = ethToRealionetwork("0x7338f54D573b74AdeC18AcE21e839bfbCb7Ee750")
// "realio1wvu02n2h8d62mmqc4n3paquml09hae6sdnlu6m"
```

### Decoders

``` ts
import {ETH, REALIONETWORK} from "@realiotech/address-generator"
let hex = ETH.decoder("0x7338f54D573b74AdeC18AcE21e839bfbCb7Ee750")
// hex.toString('hex') === "7338f54d573b74adec18ace21e839bfbcb7ee750"

hex = REALIONETWORK.decoder("realio1wvu02n2h8d62mmqc4n3paquml09hae6sdnlu6m")
// hex.toString('hex') === "7338f54d573b74adec18ace21e839bfbcb7ee750"
```

### Encoders

``` ts
import {ETH, REALIONETWORK} from "@realiotech/address-generator"
let address = ETH.encoder(Buffer.from("7338f54D573b74AdeC18AcE21e839bfbCb7Ee750","hex"))
// address === "0x7338f54D573b74AdeC18AcE21e839bfbCb7Ee750"

address = REALIONETWORK.encoder(Buffer.from("7338f54D573b74AdeC18AcE21e839bfbCb7Ee750","hex"))
// address === "realio1wvu02n2h8d62mmqc4n3paquml09hae6sdnlu6m"
```



## Reference

- [ENSDOMAINS-AddressEnconder](https://github.com/ensdomains/address-encoder)