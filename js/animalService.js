angular.module('ficha').factory('animalService', ['$http',function($http) {
    
    var buscarTodos = function () {
        return $http.get("http://localhost:8080/ficha-animal-server/api/animal");
    };

    return {
        buscarTodos : buscarTodos,
    }
}]);
