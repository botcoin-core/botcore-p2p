'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on botcore-p2p Module {0}'
};

module.exports = require('botcore-lib').errors.extend(spec);
