var squareApp = angular.module('squareApp', []);

squareApp.controller('BookListController', ['$scope', '$http', function($scope, $http) {    
	$http.get('data/resources.json').success(function(data) {
			$scope.booklist = data;
			$scope.bookOrder = 'title';

	});
}]);




