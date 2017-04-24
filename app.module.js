'use strict';
// Define the `portfolioApp` module
angular.module('portfolioApp', [
  // ...which depends on the `navList` module
  'navList',
  'projectList',
  'navButtons'
])

.service('commonData', function () {
    this.icons = {
      home: 'glyphicon glyphicon-home',
      user: 'glyphicon glyphicon-user',
      picture: 'glyphicon glyphicon-picture',
      envelope: 'glyphicon glyphicon-envelope'
    };
    this.ids = {
      home: 'home',
      about: 'about',
      portfolio: 'portfolio',
      contact: 'contact'
    }
});