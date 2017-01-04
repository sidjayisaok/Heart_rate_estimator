heartApp.controller('heartController', function($scope){
    $scope.heart = {
        age: 25,
        rate: 120,
        range: function(){
            var heartObject;
            heartObject = $scope.heart;
            heartObject.rate = 220 - heartObject.age;
            return heartObject.rate + " bpm";
            if(heartObject.rate > 220){
                alert("You cannot enter a number larger than 220");
                return null;
            };
        },
        light: function(){
            var heartObject;
            heartObject = $scope.heart;
            return Math.floor(.5 * heartObject.rate) + " to " + Math.ceil(.65 * heartObject.rate) + " bpm";
        },
        medium: function(){
            var heartObject;
            heartObject = $scope.heart;
            return Math.floor(.66 * heartObject.rate) + " to " + Math.ceil(.75 * heartObject.rate) + " bpm";
        },
        heavy: function(){
            var heartObject;
            heartObject = $scope.heart;
            return Math.floor(.76 * heartObject.rate) + " to " + Math.ceil(.95 * heartObject.rate) + " bpm";
        }
    }
});