app.controller("MainController", ['$scope', '$http', ($scope, $http, $httpProvider) => {
  $scope.title = 'AngularJS'
  $scope.promo = '50% off!'
  $scope.product = { name: 'Getting Started With AngularJS', price: 9,  pubdate: new Date('2012', '02', '12') }
  $scope.repo = $http({
                        method: 'GET',
                        url: 'http://idea.selfup.me/api/v1/ideas'
                      }).then(function successCallback(response) {
                        $scope.repoName = response.data[0].quality
                      }, function errorCallback(response) {
                        console.log("OH NO")
                      })
  $scope.repoName = $scope.repo
}])
