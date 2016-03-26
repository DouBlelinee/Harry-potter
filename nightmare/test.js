var Nightmare = require('nightmare')
var nightmare = Nightmare({show: true, paths: {userData: './public/index.html'}})

nightmare
  .goto('http://localhost:5000/')
  .wait('#book1')
  .click('#book1')
  .click('#book1')
  .click('#book1')
  .wait(1000)
  .click('#book2')
  .click('#book2')
  .click('#book2')
  .wait(1000)

  .evaluate(function () {
    return document.querySelector('#total').innerHTML
  })
  .end()
  .then(function (result) {
    console.log(result)
    if (result === '540') {
      console.log('YES')
    }else {
      console.log('NO')
    }
  })
