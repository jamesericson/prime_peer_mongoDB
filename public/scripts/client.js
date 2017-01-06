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

  $scope.postAss = function(){
    console.log('in the postting ass func');

    $http({
      method: 'POST',
      url: '/assignment',
      data: {
        name: $scope.nameIn,
        student_id: $scope.studentIdIn,
        score: $scope.scoreIn,
        date: $scope.TurntIn
      }
    }).then( function( response ){
      console.log('after da post: ', response);
      $scope.getAss();
    });// end http
    $scope.nameIn = '';
    $scope.studentIdIn = '';
    $scope.scoreIn = '';
    $scope.TurntIn = '';
  }// end getAss()

  $scope.deleteAss = function(id){
    console.log('in working off ass func, with this index: ', id);

    $http({
      method: 'DELETE',
      url: '/assignment/'+id,
      data: {
        name: $scope.nameIn,
        student_id: $scope.studentIdIn,
        score: $scope.scoreIn,
        date: $scope.TurntIn
      }
    }).then( function( response ){
      console.log('da delete happened: ', response);
      $scope.getAss();
    });// end http
  }; // end deleteAss

  $scope.getAss();
}]);
