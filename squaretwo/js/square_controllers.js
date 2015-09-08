var squareApp = angular.module('squareApp', []);

squareApp.controller('BookListController', ['$scope', '$http', function($scope, $http) {    
	//$http.get('data/resources.json').success(function(data) {
	$http.get('data/connector.php').success(function(response) {

			$scope.booklist = response.books;
			$scope.bookOrder = 'title';

	});
}]);
