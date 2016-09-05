define([], function () {
    // InputTwoCtrl for /input-one and /input-two exercise
    return ['$scope', 'commService', function ($scope, commService) {
        var $ctrl = this;

        $ctrl.syncedInput = commService.read();
    }];
});
