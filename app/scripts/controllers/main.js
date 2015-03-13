'use strict';

/**
 * @ngdoc function
 * @name introjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the introjsApp
 */
angular.module('introjsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.introJsOptions = {
      steps: [
        {
          element: '#step1',
          intro: '<strong>Etape1</strong> Welcome in our website',
          position : 'bottom'
        },
        {
          element: '.step2',
          intro: 'We used Yeoman to generate this example',
          position : 'right'
        }
      ]
    };
  });
