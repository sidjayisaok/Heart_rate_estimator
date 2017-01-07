//basic controller
heartApp.controller('heartController', function($scope){
    $scope.heart = {
        age: 25,
        rate: 120,
        range: function(){
          var heartObject;
            heartObject = $scope.heart;
            heartObject.rate = 220 - heartObject.age;
            return heartObject.rate + " bpm";
        },
        light: function(){
            var heartObject;
            heartObject = $scope.heart;
            return Math.floor(.3 * heartObject.rate) + " to " + Math.ceil(.49 * heartObject.rate) + " bpm";
        },
        medium: function(){
            var heartObject;
            heartObject = $scope.heart;
            return Math.floor(.5 * heartObject.rate) + " to " + Math.ceil(.69 * heartObject.rate) + " bpm";
        },
        heavy: function(){
            var heartObject;
            heartObject = $scope.heart;
            return Math.floor(.7 * heartObject.rate) + " to " + Math.ceil(.9 * heartObject.rate) + " bpm";
        }
    }
});