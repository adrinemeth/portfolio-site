'use strict';

// Register `navButtons` component, along with its associated controller
angular.
  module('navButtons').
  component('navButtons', {
    templateUrl: 'buttons/nav-buttons.template.html',
    controller: function NavButtonController() {
      this.navbuttonItems = [
        {
          btnText: 'About me',
        }, {
          btnText: 'Check out my portfolio',
        }, {
          btnText: 'Contact me',
        }
      ];
    }
  });