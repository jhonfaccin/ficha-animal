angular.module('ficha').factory('animalService', ['dao',function(dao) {
    
    var getAll = function () {
        return [
            {id: '1111',name: 'piriquita'},
            {id: '2222',name: 'marcola'},
            {id: '3333',name: 'popeye'},
        ];
    };

    return {
        getAll : getAll,
    }
}]);
