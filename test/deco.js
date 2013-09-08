var mocha = require('mocha'),
  expect  = require('chai').expect,
  deco = require('../lib/deco.js');

describe('Testing param.decorator:', function() {

  describe('#threeArgs', function() {
    it('should take 2 arguments and make the 3', function(done) {
      var test = deco(function() {
        expect(arguments).to.have.length(3);
        expect(arguments[0]).to.equal('1');
        expect(arguments[1]).to.be.an('object');
        expect(arguments[2]).to.be.a('function');
        done();
      });
      test('1', function() {});
    });
    it('should take 2 arguments and make the 3', function(done) {
      var test = deco(function() {
        expect(arguments).to.have.length(3);
        expect(arguments[0]).to.equal(1);
        expect(arguments[1]).to.be.an('object');
        expect(arguments[2]).to.be.a('function');
        done();
      });
      test(1, function() {});
    });
    it('should take make null second argument an object', function(done) {
      var test = deco(function() {
        expect(arguments).to.have.length(3);
        expect(arguments[0]).to.equal('1');
        expect(arguments[1]).to.be.an('object');
        expect(arguments[2]).to.be.a('function');
        done();
      });
      test('1', null, function() {});
    });
    it('should preserve parameter properties', function(done) {
      var test = deco(function() {
        expect(arguments).to.have.length(3);
        expect(arguments[0]).to.equal('1');
        expect(arguments[1]).to.be.an('object');
        expect(arguments[1]).to.have.property('one', 1);
        expect(arguments[1]).to.have.property('two', 2);
        expect(arguments[2]).to.be.a('function');
        done();
      });
      test('1', {one: 1, two: 2}, function() {});
    });
  });

  describe('#twoArgs', function() {
    it('should take make null first argument an object', function(done) {
      var test = deco(function() {
        expect(arguments).to.have.length(2);
        expect(arguments[0]).to.be.an('object');
        expect(arguments[1]).to.be.a('function');
        done();
      });
      test(null, function() {});
    });
    it('should preserve parameter properties', function(done) {
      var test = deco(function() {
        expect(arguments).to.have.length(2);
        expect(arguments[0]).to.be.an('object');
        expect(arguments[0]).to.have.property('one', 1);
        expect(arguments[0]).to.have.property('two', 2);
        expect(arguments[1]).to.be.a('function');
        done();
      });
      test({one: 1, two: 2}, function() {});
    });
    it('should take 1 argument and make 2', function(done) {
      var test = deco(function() {
        expect(arguments).to.have.length(2);
        expect(arguments[0]).to.be.an('object');
        expect(arguments[1]).to.be.a('function');
        done();
      });
      test(function() {});
    });
  });


});