angular.module('ficha').factory('fichaService', ['dao',function(dao) {
    
    var add = function (ficha) {
        return dao.add('ficha', ficha);
    };

    var remove = function (ficha) {
        return dao.remove('ficha', ficha);
    };

    var all = function () {
        return dao.getAll('ficha');
    };

    return {
        getAll : all,
        add : add,
        remove : remove
    }
}]);
