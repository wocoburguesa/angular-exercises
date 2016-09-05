define([], function () {
    var directiveName = 'MaxChar';
    angular
        .module(directiveName, [])
        .directive('maxChar', [function () {
            return {
               restrict: 'E',
                template: '<input type="text" class="first-input"/>' +
                    '<input type="text" class="second-input"/>' +
                    '<input type="text" class="third-input"/>',
                link: function ($scope, $element, $attrs) {
                    var first = $element[0].getElementsByClassName('first-input')[0];
                    var second = $element[0].getElementsByClassName('second-input')[0];
                    var third = $element[0].getElementsByClassName('third-input')[0];

                    first.next = third.previous = second;
                    second.next = third;
                    second.previous = first;

                    function onFocusCheck() {
                        if (!this.value && this.previous &&
                            this.previous.value.length < 5) {
                            this.previous.focus();
                        }
                    }

                    function checkForJump(e) {
                        if (this.value.length === 5) {
                            if (this.next) {
                                this.next.focus();
                            }
                        }

                        if (e.which === 8 && !this.value) { //backspace
                            if (this.previous) {
                                this.previous.focus();
                            }
                        }
                    }

                    first.onfocus = second.onfocus = third.onfocus = onFocusCheck;
                    first.onkeyup = second.onkeyup = third.onkeyup = checkForJump;
                }
            };
		}]);
	return directiveName;
});
