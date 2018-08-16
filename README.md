Botcoincore P2P
=======

[![NPM Package](https://img.shields.io/npm/v/@botcoin-core/botcore-p2p.svg?style=flat-square)](https://www.npmjs.org/package/@botcoin-core/botcore-p2p)
[![Build Status](https://img.shields.io/travis/botcoin-core/botcore-p2p.svg?branch=master&style=flat-square)](https://travis-ci.org/botcoin-core/botcore-p2p)
[![Coverage Status](https://img.shields.io/coveralls/botcoin-core/botcore-p2p.svg?style=flat-square)](https://coveralls.io/r/botcoin-core/botcore-p2p?branch=master)

`botcore-p2p` adds Botcoin protocol support for Botcoincore.

See [the main botcore repo](https://github.com/botcoin-core/botcore) for more information.

## Getting Started

```sh
npm install @botcoin-core/botcore-p2p
```
In order to connect to the Botcoin network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('@botcoin-core/botcore-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [botcore guide](http://botcore.io/guide/peer.html) on the usage of the `Peer` class.

## Contributing

See [CONTRIBUTING.md](https://github.com/botcoin-core/botcore/blob/master/CONTRIBUTING.md) on the main botcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/dachevo/botcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
