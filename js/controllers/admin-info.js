define([], function () {
    return ['$scope', 'query', function ($scope, query) {
        /* This is the controller for showing additional
           information in the optional state parameter.
           The extra info is 'query'.
        */
        var $ctrl = this;

        $ctrl.query = query;
    }];
});
