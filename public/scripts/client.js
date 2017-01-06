console.log('js is working');

var myApp = angular.module( 'myApp', [] );

myApp.controller( 'AssController', [ '$scope', '$http', function( $scope, $http ){
  console.log('NG is working');

  $scope.getAss = function(){
    console.log('in the getting ass func');

    $http({
      method: 'GET',
      url: '/assignment'
    }).then( function( response ){
      console.log('this is what we got: ', response);
      $scope.assignments = response.data;
    });// end http
  }// end getAss()

  $scope.getAss();
}]);
