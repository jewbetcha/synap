app.controller('MainController', ['$scope', 'emails', '$http', function($scope, emails, $http) {
	emails.success(function(data) {
		$scope.emails = data;
	});

	// Function for reset button
	$scope.reset = function () {
		$scope.sender = '';
	};

}]);