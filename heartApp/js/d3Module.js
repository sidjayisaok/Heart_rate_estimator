// heartApp.controller('heartD3', function($scope){
//     // Chart options
//     $scope.options = {
//             chart: {
//             type: 'bulletChart',
//             duration: 500
//         }
//     };
//     // Chart data
//     $scope.data = {
//         "title": "heart range",
//         "subtitle": "measurement",
//         "ranges": [0,120,220],
//         "measures": [120],
//         "markers": [heartObject.variable()]
//     };
//     // Variable
//     $scope.heart = {
//         rate: 120,
//         variable: function(){
//             var heartObject;
//             heartObject = $scope.heart;
//             return heartObject.rate;
//         }
//     }

//     })