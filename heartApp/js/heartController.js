//basic controller
heartApp.controller('heartController', function($scope){
    //set scope name
    $scope.heart = {
        //presets
        age: 25,
        rate: 120,
        //this function sets the rate dynamically
        range: function(){
          var heartObject;
            heartObject = $scope.heart;
            heartObject.rate = 220 - heartObject.age;
            return heartObject.rate + " bpm";
        },
        //this function sets the light range dynamically
        light: function(){
            var heartObject;
            heartObject = $scope.heart;
            return Math.floor(.3 * heartObject.rate) + " to " + Math.ceil(.49 * heartObject.rate) + " bpm";
        },
        //this function sets the medium range dynamically
        medium: function(){
            var heartObject;
            heartObject = $scope.heart;
            return Math.floor(.5 * heartObject.rate) + " to " + Math.ceil(.69 * heartObject.rate) + " bpm";
        },
        //this function sets the heavy range dynamically
        heavy: function(){
            var heartObject;
            heartObject = $scope.heart;
            return Math.floor(.7 * heartObject.rate) + " to " + Math.ceil(.9 * heartObject.rate) + " bpm";
        },
        //this function sets the ideal range dynamically
        ideal: function(){
            var heartObject;
            heartObject = $scope.heart;
            return Math.floor(.5 * heartObject.rate) + " to " + Math.ceil(.85 * heartObject.rate) + " bpm.";
        }
    }
});