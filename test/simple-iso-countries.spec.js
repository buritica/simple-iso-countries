var chai = require('chai');
var countries = require('../');

var expect = chai.expect;

describe('simple-iso-countries', function() {
  it('exists', function() {
    expect(countries).to.be.ok;
    expect(countries).to.be.an('object');
  });

  it('is a map of common names with alpha-2 code as key', function() {
    expect(countries).to.have.property('CO', 'Colombia');
    expect(countries).to.have.property('US', 'United States');
    expect(countries).to.have.property('AU', 'Australia');
  });
});