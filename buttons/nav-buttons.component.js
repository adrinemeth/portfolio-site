'use strict';

// Register `navButtons` component, along with its associated controller
angular.
  module('navButtons').
  component('navButtons', {
    templateUrl: 'buttons/nav-buttons.template.html',
    controller: function NavButtonController(commonData) {
      this.navbuttonItems = [
        {
          id: commonData.ids.about,
          btnText: 'About me',
        }, {
          id: commonData.ids.portfolio,
          btnText: 'Check out my portfolio',
        }, {
          id: commonData.ids.contact,
          btnText: 'Contact me',
        }
      ];
    }
  });