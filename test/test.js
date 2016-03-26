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
      .click('#book2')
      .click('#book3')
      .wait(3000)

      .evaluate(function () {
        return document.querySelector('#total').innerHTML
      })
    expect(link).to.equal('240')
  })
  it('choose 7 book unique', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .type('input[title="Search"]', 'github nightmare')

      .click('#book1')
      .click('#book2')
      .click('#book3')
      .click('#book4')
      .click('#book5')
      .click('#book6')
      .click('#book7')
      .wait(3000)

      .evaluate(function () {
        return document.querySelector('#total').innerHTML
      })
    expect(link).to.equal('280')
  })
  it('choose 2  2 book  choose 3  2 book choose 7  1 book ', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .type('input[title="Search"]', 'github nightmare')

      .click('#book2')
      .click('#book2')
      .click('#book3')
      .click('#book3')
      .click('#book7')
      .wait(3000)

      .evaluate(function () {
        return document.querySelector('#total').innerHTML
      })
    expect(link).to.equal('420')
  })
  it('choose 5  5 book  choose 4  2 book  ', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .type('input[title="Search"]', 'github nightmare')

      .click('#book5')
      .click('#book5')
      .click('#book5')
      .click('#book5')
      .click('#book5')
      .click('#book4')
      .click('#book4')
      .wait(3000)

      .evaluate(function () {
        return document.querySelector('#total').innerHTML
      })
    expect(link).to.equal('660')
  })
  it('choose 7  1 book  choose 6  1 book  choose 5  1 book  ', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .type('input[title="Search"]', 'github nightmare')

      .click('#book7')
      .click('#book6')
      .click('#book5')
      .wait(3000)

      .evaluate(function () {
        return document.querySelector('#total').innerHTML
      })
    expect(link).to.equal('240')
  })
  it('choose 4  1 book  ', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .type('input[title="Search"]', 'github nightmare')

      .click('#book4')
      .wait(3000)

      .evaluate(function () {
        return document.querySelector('#total').innerHTML
      })
    expect(link).to.equal('100')
  })
  it('choose 5  1 book choose 1  1 book ', function * () {
    this.timeout(30000)
    var nightmare = Nightmare()
    var link = yield nightmare
      .goto('http://localhost:5000')
      .type('input[title="Search"]', 'github nightmare')

      .click('#book5')
      .click('#book1')
      .wait(3000)

      .evaluate(function () {
        return document.querySelector('#total').innerHTML
      })
    expect(link).to.equal('180')
  })
})
