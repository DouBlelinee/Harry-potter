var angular = angular.module('todoApp', [])
  .controller('TodoListController', function ($scope) {
    $scope.books = [

      {
        name: 'แฮร์รี่ พอตเตอร์ กับ ศิลาอาถรรพ์',
        price: 100,
        img: '/img/1.jpg',
        amount: 1

      },
      {
        name: 'แฮร์รี่ พอตเตอร์ กับ ห้องแห่งความลับ',
        price: 100,
        img: '/img/2.jpg',
        amount: 1

      },
      {
        name: 'แฮร์รี่ พอตเตอร์ กับ นักโทษแห่งอัชคาบัน',
        price: 100,
        img: '/img/3.jpg',
        amount: 1

      },
      {
        name: 'แฮร์รี่ พอตเตอร์ กับ ถ้วยอัคนี',
        price: 100,
        img: '/img/4.jpg',
        amount: 1

      },
      {
        name: 'แฮร์รี่ พอตเตอร์ กับ ภาคนกฟีนิกซ์',
        price: 100,
        img: '/img/5.jpg',
        amount: 1

      },
      {
        name: 'แฮร์รี่ พอตเตอร์ กับ เจ้าชายเลือดผสม',
        price: 100,
        img: '/img/6.jpg',
        amount: 1

      },
      {
        name: 'แฮร์รี่ พอตเตอร์ กับ เครื่องรางยมทูต',
        price: 100,
        img: '/img/7.jpg',
        amount: 1

      }]
    var check = 0
    $scope.bucket = 0
    $scope.selectbook = []

    $scope.add = function (data, index) {
      if (search(data)) {
        $scope.selectbook[check].amount += 1
        $scope.bucket++
      } else {
        $scope.selectbook.push(data)
        $scope.bucket++
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

      $scope.caldiscount(calamount)
    }
    var search = function (data) {
      for (var i = 0; i < $scope.selectbook.length; i++) {
        if (data.name === $scope.selectbook[i].name) {
          check = i
          return true
        }
      }
    }
    $scope.caldiscount = function (calamount) {
      $scope.sell = 0
      var countlist = 0
      var exit = 0
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
        }
        if (countlist === 2) {
          $scope.sell += ((countlist * 100) * 0.1)
        } else if (countlist === 3) {
          $scope.sell += ((countlist * 100) * 0.2)
        } else if (countlist === 4) {
          $scope.sell += ((countlist * 100) * 0.3)
        } else if (countlist === 5) {
          $scope.sell += ((countlist * 100) * 0.4)
        } else if (countlist === 6) {
          $scope.sell += ((countlist * 100) * 0.5)
        } else if (countlist === 7) {
          $scope.sell += ((countlist * 100) * 0.6)
        } else if (countlist === 0) {
          exit = 1
        }
        for (var c = 0; c < calamount.length; c++) {
          if (calamount[c] > 0) {
            calamount[c] -= 1
            countlist = 0
          }
        }
      } while (exit !== 1)
    }
  })
