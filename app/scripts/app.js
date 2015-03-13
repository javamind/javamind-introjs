'use strict';

/**
 * @ngdoc overview
 * @name introjsApp
 * @description
 * # introjsApp
 *
 * Main module of the application.
 */
angular.module('introjsApp', ['angular-intro', "ngCookies"]);

/**
 * IntroJS configuration.
 * We want to launch for every new users the introdution. When he clicks on the exit button
 * we use cookies to indicate that the launcher hasn't to be relaunch the next time
 */
angular.module('introjsApp').run(function ($rootScope, $cookieStore) {
 $rootScope.exitIntro = function(){
    $cookieStore.put('intro-autostart', false);
  };

  $rootScope.autostartIntro = function(){
    return $cookieStore.get('intro-autostart') !== false;
  };
});
