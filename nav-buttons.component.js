// Register `navButtons` component, along with its associated controller and template
angular.
  module('navButtons').
  component('navButtons', {
    templateUrl: 'navbar/nav-buttons.template.html',
    controller: function NavButtonsController() {
      this.navbuttonItems = [
        {
          btnText: 'About me',
        }, {
          btnText: 'Portfolio',
        }, {
          btnText: 'Contact',
        }
      ];
    }
  });
