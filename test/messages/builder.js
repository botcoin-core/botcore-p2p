'use strict';

var should = require('chai').should();
var P2P = require('../../');
var builder = P2P.Messages.builder;
var botcore = require('botcore-lib');

describe('Messages Builder', function() {

  describe('@constructor', function() {

    it('should return commands based on default', function() {
      // instantiate
      var b = builder();
      should.exist(b);
    });

    it('should return commands with customizations', function() {
      // instantiate
      var b = builder({
        network: botcore.Networks.testnet,
        Block: botcore.Block,
        Transaction: botcore.Transaction
      });
      should.exist(b);
    });

  });

});
