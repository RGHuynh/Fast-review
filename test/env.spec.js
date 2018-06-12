var env = require('dotenv').config();
var assert = require('assert');

describe('Env', function(){
  it('should return an environment key', function(){
    assert.equal(process.env.DB_HOST, 'localhost');
  });
});