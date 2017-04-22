'use strict';

// Register `navButtons` component, along with its associated controller
angular.
  module('portfolioApp').
  component('navButtons', {
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