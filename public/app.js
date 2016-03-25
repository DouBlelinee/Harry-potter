/* global angular */
angular.module('todoApp', [])
  .controller('TodoListController', function ($scope) {
    $scope.books = [

      {
        name: 'Book1',
        price: 100,
        img: '/img/1.jpg',
        amount: 1

      },
      {
        name: 'Book2',
        price: 100,
        img: '/img/2.jpg',
        amount: 1

      },
      {
        name: 'Book3',
        price: 100,
        img: '/img/3.jpg',
        amount: 1

      },
      {
        name: 'Book4',
        price: 100,
        img: '/img/4.jpg',
        amount: 1

      },
      {
        name: 'Book5',
        price: 100,
        img: '/img/5.jpg',
        amount: 1

      },
      {
        name: 'Book6',
        price: 100,
        img: '/img/6.jpg',
        amount: 1

      },
      {
        name: 'Book7',
        price: 100,
        img: '/img/7.jpg',
        amount: 1

      }]
    var check = 0
    $scope.selectbook = []
    $scope.sum = 0
    $scope.caldiscount = 0
    $scope.result = 0
    $scope.sell = 0

    $scope.add = function (data, index) {
      if (search(data)) {
        $scope.selectbook[check].amount += 1
      } else {
        $scope.selectbook.push(data)
      }

      $scope.selectbook.sort(function (a, b) {
        if (a.amount > b.amount) {
          return -1
        }
        if (a.amount < b.amount) {
          return 1
        }
        return 0
      })
      $scope.cal()
    }
    $scope.del = function (deldata) {
      search(deldata)
      if ($scope.selectbook[check].amount > 1) {
        $scope.selectbook[check].amount -= 1
      } else {
        $scope.selectbook.splice(check, 1)
      }

      $scope.cal()
    }
    $scope.cal = function () {
      $scope.sum = 0
      var calamount = []
      for (var i = 0; i < $scope.selectbook.length; i++) {
        $scope.sum += $scope.selectbook[i].amount * 100
        calamount.push($scope.selectbook[i].amount)
      }
      $scope.test(calamount)
    }
    var search = function (data) {
      for (var i = 0; i < $scope.selectbook.length; i++) {
        if (data.name === $scope.selectbook[i].name) {
          check = i
          return true
        }
      }
    }
    $scope.test = function (calamount) {
      $scope.sell = 0
      var countlist = 0
      var exit = 0
      console.log(calamount)
      do {
        for (var i = 0; i < calamount.length; i++) {
          if (calamount[i] !== 0) {
            countlist += 1
          }
          if (calamount[i] === 0) {
            break
          }
        }

        if (countlist === 1) {
          // console.log('1')
        }
        if (countlist === 2) {
          $scope.sell += ((countlist * 100) * 0.1)
        // console.log('2')
        } else if (countlist === 3) {
          $scope.sell += ((countlist * 100) * 0.2)
        // console.log('3')
        } else if (countlist === 4) {
          $scope.sell += ((countlist * 100) * 0.3)
        // console.log('4')
        } else if (countlist === 5) {
          $scope.sell += ((countlist * 100) * 0.4)
        // console.log('5')
        } else if (countlist === 6) {
          $scope.sell += ((countlist * 100) * 0.5)
        // console.log('6')
        } else if (countlist === 7) {
          $scope.sell += ((countlist * 100) * 0.6)
        // console.log('7')
        } else if (countlist === 0) {
          exit = 1
        // console.log('exit')
        }
        for (var c = 0; c < calamount.length; c++) {
          if (calamount[c] > 0) {
            calamount[c] -= 1
            countlist = 0
          }
        }
      } while (exit !== 1)
    // console.log( $scope.sell )
    }
  })
