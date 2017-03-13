angular.module('APIGet', [])
.controller('Nomes', function($scope, $http)
{
    $http.get('http://localhost:9000/user/1').
        then
		(function(response) 
		{
            $scope.resultado = response.data;
        });
});