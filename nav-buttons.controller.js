// Register `navButtons` component, along with its associated controller and template
portfolioApp.controller('NavButtonController', function NavButtonController($scope) {
      $scope.navbuttonItems = [
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
