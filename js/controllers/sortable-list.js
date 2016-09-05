define([], function () {
    // SortableListCtrl for /sortable-list exercise
    return ['$scope', function ($scope) {
        var $ctrl = this;

        function randomName() {
            var length = 5;
            var newName = '';

            while (length--) {
                newName += String.fromCharCode(97 + parseInt(Math.random() * 27));
            }

            return newName;
        }

        function randomNumber() {
            var length = 3;
            var number = 0;

            while (length--) {
                number += parseInt(Math.random() * 10) ** length;
            }

            return number;
        }

        $ctrl.peopleList = [];

        $ctrl.sort = function (field) {
            if (field === $ctrl.currentSort) {
                $ctrl.peopleList.reverse();
                return;
            }
            $ctrl.currentSort = field;

            $ctrl.peopleList.sort(function (a, b) {
                if (a[field] > b[field]) {
                    return 1;
                } else if (a[field] === b[field]){
                    return 0;
                } else {
                    return -1;
                }
            });

        };

        for (var i = 0; i < 50; i++) {
            $ctrl.peopleList.push({
                name: randomName(),
                lastName: randomName(),
                id: randomNumber()
            });
        }
    }];
});
