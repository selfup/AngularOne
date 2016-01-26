app.controller("MainController", ['$scope', '$http', ($scope, $http, $q) => {
  $scope.title = 'AngularJS'
  $scope.promo = '50% off!'
  $scope.product = { name: 'Getting Started With AngularJS', price: 9,  pubdate: new Date('2012', '02', '12') }
  $scope.repo = $http({
                        method: 'GET',
                        url: 'https://api.github.com/repos/selfup/DevOpsOne'
                      }).then(function successCallback(response) {
                        $scope.repoName = response.data.name
                      }, function errorCallback(response) {
                        console.log("OH NO")
                      })
  $scope.repoName = $scope.repo
}])
