'use strict';

angular.module('app', [
                        'app.controllers', 'app.services', 'app.components', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state({
      name: 'login',
      url: '/',
      templateUrl: 'views/login.html',
      controller: loginCtrl
    })

    // By default
   $urlRouterProvider.when('', '/');
});