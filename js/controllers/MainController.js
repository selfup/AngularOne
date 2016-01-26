app.controller("MainController", ['$scope', ($scope) => {
  $scope.title = 'AngularJS'
  $scope.promo = '50% off!'
  $scope.product = { name: 'Getting Started With AngularJS', price: 9,  pubdate: new Date('2012', '02', '12') }
}])
