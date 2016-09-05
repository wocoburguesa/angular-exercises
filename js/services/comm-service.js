define([], function () {
	var serviceName = 'CommService';
	angular
		.module(serviceName, [])
		.factory('commService', function () {
            var syncedMessage;

            return {
                update: function (message) {
                    syncedMessage = message;
                },
                read: function () {
                    return syncedMessage;
                }
            };
        });
    return serviceName;
});
