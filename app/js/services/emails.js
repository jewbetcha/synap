app.factory('emails', ['$http', function($http) {
	// Get email data from API
	return $http.get('https://morning-falls-3769.herokuapp.com/api/messages.json')

	.success(function(data) {
		return data;
	})
	.error(function(err) {
		return err;
	});
}]);