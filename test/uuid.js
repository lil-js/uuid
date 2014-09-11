var uuid = require('../uuid')
var expect = require('chai').expect

describe('uuid', function () {
  it('should expose the VERSION property', function () {
    expect(uuid.VERSION).to.be.a('string')
  })

  it('should generate a valid UUID version 4', function () {
    expect(uuid.isUUID(uuid(), 4)).to.be.true
  })

  it('should be a valid UUID version 3', function () {
    expect(uuid.isUUID('4482e285-3f19-40b7-8084-308f08ccf6ab')).to.be.true
  })

  it('should be a valid UUID without specifying version', function () {
    expect(uuid.isUUID('6ba7b810-9dad-11d1-80b4-00c04fd430c8')).to.be.true
  })

  it('should not be a valid UUID version 5', function () {
    expect(uuid.isUUID('invalid')).to.be.false
    expect(uuid.isUUID(null)).to.be.false
    expect(uuid.isUUID(undefined)).to.be.false
    expect(uuid.isUUID({})).to.be.false
    expect(uuid.isUUID([])).to.be.false
  })
})
