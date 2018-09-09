angular.module('ficha').factory('animalService', ['dao',function(dao) {
    
    var getAll = function () {
        return [
            {id: '1111', nome: 'cachorro'},
            {id: '2222', nome: 'gato'},
            {id: '3333', nome: 'cabrito'},
        ];
    };

    return {
        getAll : getAll,
    }
}]);
