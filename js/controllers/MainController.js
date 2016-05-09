app.controller("MainController", ['$scope', '$http', (s, h) => {
  s.color   = { change: "orange"}
  s.title   = 'AngularJS'
  s.promo   = '50% off!'
  s.product = { name: 'Getting Started With AngularJS',
                price: 9,
                pubdate: new Date('2012', '02', '12') }
                
  s.repo = h({ 
               method: 'GET',
               url: 'http://idea.selfup.me/api/v1/ideas'
             }).then(function successCallback(response) {
               s.repoName = response.data[0]
             }, function errorCallback(response) {
               console.log(response)
             })
             
  s.repoName     = s.repo
  s.colorCounter = 1
  
  s.changeColor  = function(index) {
    this.colorCounter += 1
    if (this.colorCounter % 2 === 0) {
      s.color.change = "teal"
    } else {
      s.color.change = "orange"
    }
  }
}])
