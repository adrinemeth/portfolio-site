// Register `navList` component, along with its associated controller and template
angular.
  module('navList').
  component('navList', {
    templateUrl: 'navbar/nav-bar.template.html',
    controller: function NavListController(commonData) {
      this.navbarItems = [
        {
          id: commonData.ids.home,
          name: ' HOME',
          icon: commonData.icons.home
        }, {
          id: commonData.ids.about,
          name: ' ABOUT',
          icon: commonData.icons.user
        }, {
          id: commonData.ids.portfolio,
          name: ' PORTFOLIO',
          icon: commonData.icons.picture
        }, {
          id: commonData.ids.contact,
          name: ' CONTACT',
          icon: commonData.icons.envelope
        }
      ];
    }
  });
