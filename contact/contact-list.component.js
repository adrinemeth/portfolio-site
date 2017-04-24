angular.
  module('contactList').
  component('contactList', {
    templateUrl: 'contact-list.template.html',
    controller: function ContactListController(commonData) {
      this.contactItems = [
        {
          network: 'LinkedIn',
          icon: commonData.icons.linkedIn,
          url: 'https://hu.linkedin.com/in/nemethadrienn'
        },{
          network: 'freeCodeCamp',
          icon: commonData.icons.freeCodeCamp,
          url: 'http://www.freecodecamp.com/adrinemeth'
        },{
          network: 'gitHub',
          icon: commonData.icons.gitHub,
          url: 'https://github.com/adrinemeth'
        }
      ];
    }
  });
