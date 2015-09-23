var squareApp = angular.module('squareApp', []);

squareApp.controller('BookListController', ['$scope', '$http', function getData($scope, $http) {  
	$http.get('data/connector.php').success(function (response) {
		$scope.booklist = response.books;
		$scope.bookOrder = 'title';
		$scope.numLimit = 8;

	});



      $(function processData () {
        $('#book_form').on('submit', function (e) {
          e.preventDefault();
          $.ajax({
            type: 'post',
            url: 'data/post.php',
            data: $('#book_form').serialize(),
            success: function(response) {
				getData($scope, $http);
            }
          }); //END $.ajax
		  	//RESET FORM
			$('#book_form').find("input[type=text], textarea").val("");
        }); // END Submit Form

      });
}]);
