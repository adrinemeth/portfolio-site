angular.
  module('projectList').
  component('projectList', {
    templateUrl: 'project-list.template.html',
    controller: function ProjectListController() {
      this.projectItems = [
        {
          siteUrl: 'http://s.codepen.io/adrinemeth/debug/PZBMrr',
          appName: 'Random Quote Machine',
          appDescription: 'Looking for some inspiration? You are at the right place!',
          imgSrc: 'http://s12.postimg.org/yermj5b2l/N_vtelen.png'
        },{
          siteUrl: 'http://s.codepen.io/adrinemeth/debug/QyYXVN',
          appName: 'Local Weather',
          appDescription: 'Will you be needing an umbrella? Come check it here!',
          imgSrc: 'http://s17.postimg.org/6na7w05cf/N_vtelen.png'
        },{
          siteUrl: 'http://s.codepen.io/adrinemeth/debug/KVOmom',
          appName: 'Wikipedia Viewer',
          appDescription: 'Helps you find all the information you need!',
          imgSrc: 'http://s23.postimg.org/ac5k4ykhn/Untitled1.png'
        },{
          siteUrl: 'http://s.codepen.io/adrinemeth/debug/eJLJGZ',
          appName: 'JavaScript Calculator',
          appDescription: 'A cool way to calculate basic problems, anywhere!',
          imgSrc: 'http://s12.postimg.org/qjcefb50d/N_vtelen.png'
        },{
          siteUrl: 'http://s.codepen.io/adrinemeth/debug/LNmWJZ',
          appName: 'Pomodoro Clock',
          appDescription: 'Awesome Pomodoro Clock to plan your work',
          imgSrc: 'http://s4.postimg.org/5nyig45rx/N_vtelen.png'
        },{
          siteUrl: 'http://s.codepen.io/adrinemeth/debug/OXbVJR',
          appName: 'Tic Tac Toe Game',
          appDescription: 'Beatable TicTacToe game for beginners',
          imgSrc: 'https://s31.postimg.org/s0mgxs5wb/N_vtelen.png'
        },
      ];
    }
  });
