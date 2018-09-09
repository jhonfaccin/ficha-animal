angular.module('ficha').factory('fichaService', ['dao',function(dao) {
    
    var adicionaFicha = function (ficha) {
        return dao.add('ficha', ficha);
    };

    var removeFicha = function (ficha) {
        return dao.remove('ficha', ficha);
    };

    var all = function () {
        return dao.getAll('ficha');
    };

    return {
        getAll : all,
        add : adicionaFicha,
        remove : removeFicha,
    }
}]);
