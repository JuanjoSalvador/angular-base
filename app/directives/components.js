angular.module('app.components', [])
    .directive('myAwesomeComponent', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/partials/awesome.html'
        };
    });