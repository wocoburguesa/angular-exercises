define([], function () {
    // InputsSumCtrl for /inputs-sum exercise
    return ['$scope', function ($scope) {
        var $ctrl = this;

        var previousSum = 0;
        var weights = {
            input1: null,
            input2: null,
            input3: null
        };

        function updateWeights() {
            weights.input1 = parseFloat($ctrl.input1 || 0) / $ctrl.sum;
            weights.input2 = parseFloat($ctrl.input2 || 0) / $ctrl.sum;
            weights.input3 = parseFloat($ctrl.input3 || 0) / $ctrl.sum;

            if (!weights.input1 && !weights.input2 && !weights.input3) {
                weights.input1 = weights.input2 = weights.input3 = 1/3;
            }
        }

        $ctrl.sumInputs = function () {
            $ctrl.sum =
                parseFloat($ctrl.input1 || 0) +
                parseFloat($ctrl.input2 || 0) +
                parseFloat($ctrl.input3 || 0);

            previousSum = $ctrl.sum;
            updateWeights();
        };

        $ctrl.distribute = function () {
            var difference = $ctrl.sum - previousSum;
            $ctrl.input1 = parseFloat($ctrl.input1 || 0) + difference * weights.input1;
            $ctrl.input2 = parseFloat($ctrl.input2 || 0) + difference * weights.input2;
            $ctrl.input3 = parseFloat($ctrl.input3 || 0) + difference * weights.input3;

            updateWeights();
            previousSum = $ctrl.sum;
        };
    }];
});
