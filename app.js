// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLER
myApp.controller('mainController', function ($scope, $interval)
    {
    $scope.progress = "Loading: |-------------------------------------------------|";
        var po = 1;
    $interval(callAtTimeout, 150, 51);
    function callAtTimeout() {
        if (po <= 50)
            {
            $scope.progress = $scope.progress.replace("-", "*");
            po++;
            }
        else
            {
            progDone();
            }
        }
    function progDone() {
        $scope.progress = "Completed!";
        }
    });





