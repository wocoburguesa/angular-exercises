define([], function () {
	var directiveName = 'PhoneInput';
	angular
		.module(directiveName, [])
		.directive('phoneInput', [function () {
			return {
                restrict: 'E',
                scope: {
                    ngModel: '='
                },
                template: '<input ng-model="ngModel" ng-change="validate()"/>',
                link: function ($scope, $element, $attrs) {
                    var lastValue = '';
                    var parenthesesApplied = false;
                    var dashApplied = false;

                    $scope.validate = function () {
                        var lastChar = $scope.ngModel[$scope.ngModel.length - 1];
                        var isNumber = !isNaN(parseInt(lastChar));
                        var isEmpty = !$scope.ngModel;
                        var isDeleting = $scope.ngModel.length < lastValue.length;
                        var isIncomplete = $scope.ngModel.length <= 14;

                        if ((isNumber || isEmpty || isDeleting) &&
                            isIncomplete) {
                            $scope.format(isDeleting);
                            lastValue = $scope.ngModel;
                        } else {
                            $scope.ngModel = lastValue;
                        }
                    };

                    $scope.format = function (deleting) {
                        if (!deleting) {
                            if ($scope.ngModel.length >= 3 &&
                                !parenthesesApplied) {
                                $scope.ngModel = '(' +
                                    $scope.ngModel.slice(0, 3) + ') ' +
                                    $scope.ngModel.slice(3);
                                parenthesesApplied = true;
                            } else if ($scope.ngModel.length >= 9 &&
                                       !dashApplied) {
                                $scope.ngModel = $scope.ngModel.slice(0, 9) +
                                    '-' + $scope.ngModel.slice(9);
                                dashApplied = true;
                            }
                        } else {
                            if ($scope.ngModel.length <= 4) {
                                $scope.ngModel = $scope.ngModel.slice(1);
                                parenthesesApplied = false;
                                dashApplied = false;
                            } else if ($scope.ngModel.length <= 9) {
                                dashApplied = false;
                            }
                        }
                    };
                }
            };
		}]);
	return directiveName;
});
