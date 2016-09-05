define(['angular'], function (angular) {
    function getRoutesToLoad(target) {
        var result = {};

        if (target === 'admin') {
            result.template = 'admin.html';
            result.controller = 'AdminCtrl';
        } else if (target === 'secret') {
            result.template = 'secret.html';
            result.controller = 'SecretCtrl';
        } else {
            result.template = 'not-found.html';
            result.controller = 'NotFoundCtrl';
        }

        return result;
    }

    return [
        '$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    views: {
                        'main@': {
                            templateUrl: 'js/partials/home.html',
                            controller: 'HomeCtrl',
                            controllerAs: '$ctrl'
                        }
                    }
                })
                .state('triple-view', {
                    url: '/triple-view/{target:.*}',
                    views: {
                        'main@': {
                            templateUrl: function ($stateParams) {
                                var firstParam = $stateParams.target.split('/')[0];
                                return 'js/partials/' +
                                    getRoutesToLoad(firstParam).template;
                            },
                            controllerProvider: function ($stateParams) {
                                var firstParam = $stateParams.target.split('/')[0];
                                return getRoutesToLoad(firstParam).controller;
                            },
                            controllerAs: '$ctrl'
                        },
                        'adminInfo@': {
                            templateUrl: 'js/partials/admin-info.html',
                            controller: 'AdminInfoCtrl',
                            controllerAs: '$ctrl',
                            resolve: {
                                query: function ($stateParams) {
                                    return $stateParams.target.split('/')[1];
                                }
                            }
                        }
                    }
                })
                .state('input-one', {
                    url: '/input-one',
                    views: {
                        'main@': {
                            templateUrl: 'js/partials/input-one.html',
                            controller: 'InputOneCtrl',
                            controllerAs: '$ctrl'
                        }
                    }
                })
                .state('input-two', {
                    url: '/input-two',
                    views: {
                        'main@': {
                            templateUrl: 'js/partials/input-two.html',
                            controller: 'InputTwoCtrl',
                            controllerAs: '$ctrl'
                        }
                    }
                })
                .state('sortable-list', {
                    url: '/sortable-list',
                    views: {
                        'main@': {
                            templateUrl: 'js/partials/sortable-list.html',
                            controller: 'SortableListCtrl',
                            controllerAs: '$ctrl'
                        }
                    }
                })
                .state('inputs-group', {
                    url: '/inputs-group',
                    views: {
                        'main@': {
                            templateUrl: 'js/partials/inputs-group.html',
                            controller: 'InputsGroupCtrl',
                            controllerAs: '$ctrl'
                        }
                    }
                })
                .state('inputs-sum', {
                    url: '/inputs-sum',
                    views: {
                        'main@': {
                            templateUrl: 'js/partials/inputs-sum.html',
                            controller: 'InputsSumCtrl',
                            controllerAs: '$ctrl'
                        }
                    }
                })
                .state('inputs-max-char', {
                    url: '/inputs-max-char',
                    views: {
                        'main@': {
                            templateUrl: 'js/partials/inputs-max-char.html',
                            controller: 'InputsMaxCharCtrl',
                            controllerAs: '$ctrl'
                        }
                    }
                });
        }
    ];
});
