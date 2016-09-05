/*global require*/
'use strict';

require(
    ['angular', 'uiRouter', 'angular-animate'],
    function (angular, uiRouter, ngAnimate) {
        require([
            'routing',
            'controllers/home',
            'controllers/admin',
            'controllers/secret',
            'controllers/not-found',
            'controllers/admin-info',
            'controllers/input-one',
            'controllers/input-two',
            'controllers/sortable-list',
            'controllers/inputs-group',
            'controllers/inputs-sum',
            'controllers/inputs-max-char',
            'services/comm-service',
            'directives/phone-directive',
            'directives/cash-directive',
            'directives/max-char-directive'
        ], function (
            routingConfig, homeCtrl, adminCtrl, secretCtrl, notFoundCtrl, adminInfoCtrl,
            inputOneCtrl, inputTwoCtrl, sortableList, inputsGroupCtrl,
            inputsSumCtrl, inputsMaxCharCtrl,
            commService, phoneDirective, cashDirective, maxCharDirective
        ) {
            angular
                .module(
                    'wallethub',
                    ['ui.router', 'ngAnimate',
                     commService, phoneDirective, cashDirective, maxCharDirective]
                )
                .config(routingConfig)
                .controller('HomeCtrl', homeCtrl)
                .controller('AdminCtrl', adminCtrl)
                .controller('SecretCtrl', secretCtrl)
                .controller('NotFoundCtrl', notFoundCtrl)
                .controller('AdminInfoCtrl', adminInfoCtrl)
                .controller('InputOneCtrl', inputOneCtrl)
                .controller('InputTwoCtrl', inputTwoCtrl)
                .controller('InputsGroupCtrl', inputsGroupCtrl)
                .controller('InputsSumCtrl', inputsSumCtrl)
                .controller('InputsMaxCharCtrl', inputsMaxCharCtrl)
                .controller('SortableListCtrl', sortableList);

            angular.bootstrap(document, ['wallethub']);
        });
    });
