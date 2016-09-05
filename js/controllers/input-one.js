define([], function () {
    // InputOneCtrl for /input-one and /input-two exercise
    return ['$scope', 'commService', function ($scope, commService) {
        var $ctrl = this;

        $ctrl.syncedInput = commService.read();
        $ctrl.sync = function () {
            commService.update($ctrl.syncedInput);
        };
    }];
});
