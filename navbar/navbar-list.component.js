// Register `navList` component, along with its associated controller and template
angular.
  module('navList').
  component('navList', {
    templateUrl: 'navbar/nav-bar.template.html',
    controller: function NavListController() {
      this.navbarItems = [
        {
          id: 'home',
          name: ' HOME',
          icon: 'glyphicon glyphicon-home'
        }, {
          id: 'about',
          name: ' ABOUT',
          icon: 'glyphicon glyphicon-user'
        }, {
          id: 'portfolio',
          name: ' PORTFOLIO',
          icon: 'glyphicon glyphicon-picture'
        }, {
          id: 'contact',
          name: ' CONTACT',
          icon: 'glyphicon glyphicon-envelope'
        }
      ];
    }
  });
