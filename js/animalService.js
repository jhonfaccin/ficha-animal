angular.module('ficha').factory('animalService', ['dao',function(dao) {
    
    var buscarTodos = function () {
        return [
            {id: '1111', nome: 'cachorro'},
            {id: '2222', nome: 'gato'},
            {id: '3333', nome: 'cabrito'},
        ];
    };

    return {
        buscarTodos : buscarTodos,
    }
}]);
