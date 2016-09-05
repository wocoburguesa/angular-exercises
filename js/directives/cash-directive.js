define([], function () {
	var directiveName = 'CashInput';
	angular
		.module(directiveName, [])
		.directive('cashInput', [function () {
			return {
                restrict: 'E',
                scope: {
                    ngModel: '='
                },
                template: '<input ng-model="ngModel" ng-change="validate()"/>',
                link: function ($scope, $element, $attrs) {
                    var lastValue = '';
                    var dollarSignApplied = false;
                    var numbersAdded = 0;

                    $scope.validate = function () {
                        var lastChar = $scope.ngModel[$scope.ngModel.length - 1];
                        var isNumber = !isNaN(parseInt(lastChar));
                        var isEmpty = !$scope.ngModel;
                        var isDeleting = $scope.ngModel.length < lastValue.length;

                        if (isNumber || isEmpty || isDeleting) {
                            $scope.format(isDeleting);
                            lastValue = $scope.ngModel;
                        } else {
                            $scope.ngModel = lastValue;
                        }
                    };

                    $scope.format = function (deleting) {
                        var alreadyComma;
                        if (!deleting) {
                            numbersAdded++;
                            if ($scope.ngModel.length >= 1 &&
                                !dollarSignApplied) {
                                $scope.ngModel = '$' + $scope.ngModel;
                                dollarSignApplied = true;
                            }

                            alreadyComma = $scope.ngModel.slice(
                                $scope.ngModel.length - 4,
                                $scope.ngModel.length - 3
                            ) === ',';
                            if (numbersAdded % 3 === 1 && numbersAdded > 3 &&
                                !alreadyComma) {
                                $scope.ngModel = $scope.ngModel.slice(
                                    0, $scope.ngModel.length - 3) + ',' +
                                    $scope.ngModel.slice($scope.ngModel.length - 3);
                            }
                        } else {
                            numbersAdded--;
                            if ($scope.ngModel[$scope.ngModel.length - 1] === ',') {
                                $scope.ngModel = $scope.ngModel.slice(
                                    0, $scope.ngModel.length - 1
                                );
                            }

                            if ($scope.ngModel.length <= 1) {
                                dollarSignApplied = false;
                                numbersAdded = 0;
                            }
                        }
                    };
                }
            };
		}]);
	return directiveName;
});
