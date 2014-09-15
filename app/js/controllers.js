'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'iPhone 6',
     'snippet': 'little bit bigger, little bit better'},
    {'name': 'E.T. Phone',
     'snippet': 'Phone Home.'},
    {'name': 'MOTORolex™',
     'snippet': 'It is not a fake. We swear.'}
  ];
});
