app.controller("MainController", ['$scope', '$http', ($scope, $http) => {
  $scope.color = { change: "orange"}
  $scope.title = 'AngularJS'
  $scope.promo = '50% off!'
  $scope.product = {
                     name: 'Getting Started With AngularJS',
                     price: 9,
                     pubdate: new Date('2012', '02', '12')
                   }

  $scope.repo = $http({
                        method: 'GET',
                        url: 'http://idea.selfup.me/api/v1/ideas'
                      }).then(function successCallback(response) {
                        $scope.repoName = response.data[0]
                      }, function errorCallback(response) {
                        console.log("OH NO")
                      })
  $scope.repoName = $scope.repo
  $scope.colorCounter = 1
  $scope.changeColor = function(index) {
    this.colorCounter += 1
    if (this.colorCounter % 2 === 0) {
      $scope.color.change = "teal"
    } else {
      $scope.color.change = "orange"
    }
  }
}])
