/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 24 Dec 2015
    Description : Base for Dashboard Application module
    
    Change Log
    s.no      date    author     description     
    

 ===========================================================*/

var dashboard = angular.module('dashboard', ['ui.router', 'ngAnimate', 'ngMaterial', 'angularUtils.directives.dirPagination', 'chart.js']);


dashboard.config(["$stateProvider", function($stateProvider) {

    //dashboard home page state
    $stateProvider.state('app.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/modules/dashboard/views/home.html',
        controller: 'HomeController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Home'
        }
    });

    //skills page state
    $stateProvider.state('app.skills', {
        url: '/skills',
        templateUrl: 'app/modules/dashboard/views/skills.html',
        controller: 'SkillController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Skills'
        }
    });

    //education page state
    $stateProvider.state('app.education', {
        url: '/education',
        templateUrl: 'app/modules/dashboard/views/education.html',
        controller: 'EducationController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Dashboard Home'
        }
    });

    //Achievements page state
    $stateProvider.state('app.achievements', {
        url: '/achievements',
        templateUrl: 'app/modules/dashboard/views/achievements.html',
        controller: 'AchievementsController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Achievements'
        }
    });

    //Recent Projects page state
    $stateProvider.state('app.recent', {
        url: '/recent-projects',
        templateUrl: 'app/modules/dashboard/views/recent.html',
        controller: 'RecentController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Recent Projects'
        }
    });

    //Experience page state
    $stateProvider.state('app.experience', {
        url: '/experience',
        templateUrl: 'app/modules/dashboard/views/experience.html',
        controller: 'ExperienceController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Experience'
        }
    });

    // Portfolio page state
    $stateProvider.state('app.portfolio', {
        url: '/portfolio',
        templateUrl: 'app/modules/dashboard/views/portfolio.html',
        controller: 'PortfolioController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Portfolio'
        }
    });

    //About Me page state
    $stateProvider.state('app.about', {
        url: '/about-me',
        templateUrl: 'app/modules/dashboard/views/about.html',
        controller: 'AboutController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'About Me'
        }
    });

    //Contact page state
    $stateProvider.state('app.contact', {
        url: '/contact',
        templateUrl: 'app/modules/dashboard/views/contact.html',
        controller: 'ContactController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Contact Me'
        }
    });

    //Websites page state
    $stateProvider.state('app.websites', {
        url: '/websites',
        templateUrl: 'app/modules/dashboard/views/websites.html',
        controller: 'WebsitesController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Websites'
        }
    });

    //Gallery page state
    $stateProvider.state('app.gallery', {
        url: '/gallery',
        templateUrl: 'app/modules/dashboard/views/gallery.html',
        controller: 'GalleryController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Gallery'
        }
    });

    //Search page state
    $stateProvider.state('app.search', {
        url: '/search',
        templateUrl: 'app/modules/dashboard/views/search.html',
        controller: 'appCtrl',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Search'
        }
    });

    /*$stateProvider.state('app.devicedata', {
        url: '/devicedata',
        templateUrl: 'app/modules/dashboard/views/devicedata.html',
        controller: 'DeviceDataController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Device Data'
        }
    });*/

    $stateProvider.state('app.devices', {
        url: '/devicedata',
        templateUrl: 'app/modules/dashboard/views/devicedata.html',
        controller: 'DeviceDataController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Devices List'
        }
    });

    $stateProvider.state('app.deviceshistory', {
        url: '/deviceshistory',
        templateUrl: 'app/modules/dashboard/views/deviceshistory.html',
        controller: 'DeviceHistoryController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Devices History'
        }
    });

    $stateProvider.state('app.beacons', {
        url: '/beacondata',
        templateUrl: 'app/modules/dashboard/views/beacons.html',
        controller: 'BeaconsController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Beacons List'
        }
    });

    $stateProvider.state('app.stores', {
        url: '/storesdata',
        templateUrl: 'app/modules/dashboard/views/stores.html',
        controller: 'StoresController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Stores List'
        }
    });

    $stateProvider.state('app.users', {
        url: '/usersdata',
        templateUrl: 'app/modules/dashboard/views/users.html',
        controller: 'UserController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Users List'
        }
    });

    $stateProvider.state('app.notifications', {
        url: '/notifications',
        templateUrl: 'app/modules/dashboard/views/notification.html',
        controller: 'NotificationController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Notifications List'
        }
    });

    $stateProvider.state('app.employees', {
        url: '/employees',
        templateUrl: 'app/modules/dashboard/views/employee.html',
        controller: 'EmployeeController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Employee List'
        }
    });

    $stateProvider.state('app.sections', {
        url: '/sections',
        templateUrl: 'app/modules/dashboard/views/section.html',
        controller: 'SectionController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Section List'
        }
    });


    $stateProvider.state('app.crm', {
        url: '/crm',
        templateUrl: 'app/modules/dashboard/views/crm.html',
        controller: 'CrmController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'CRM List'
        }
    });

    
    $stateProvider.state('app.settings', {
        url: '/settings',
        templateUrl: 'app/modules/dashboard/views/settings.html',
        controller: 'SettingController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Setting List'
        }
    });

    
    $stateProvider.state('app.departmentmanager', {
        url: '/departmentmanager',
        templateUrl: 'app/modules/dashboard/views/deptmanager.html',
        controller: 'DeptMangController',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Dept manager List'
        }
    });



    $stateProvider.state('app.empnotification', {
        url: '/employeenotification',
        templateUrl: 'app/modules/dashboard/views/employeenotification.html',
        controller: 'EmployeeNotification',
        controllerAs: 'vm',
        data: {
            pageTitle: 'Employee Notification LIST'
        }
    });








}]);
