/* global describe,it */
require('mocha-generators').install()
var Nightmare = require('nightmare')
var expect = require('chai').expect // jshint ignore:line
describe('test harry book', function () {
  it('choose 1 book', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .type('input[title="Search"]', 'github nightmare')
      .click('#book1')
      .wait(3000)
      .evaluate(function () {
        return document.querySelector('#total').innerHTML
      })
    expect(link).to.equal('100')
  })
  it('choose 3 book unique', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .type('input[title="Search"]', 'github nightmare')
      .click('#book1')
      .wait(3000)
      .evaluate(function () {
        return document.querySelector('#total').innerHTML
      })
    expect(link).to.equal('100')
  })
})
