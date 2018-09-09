angular.module('ficha').factory('fichaService', ['dao',function(dao) {
    
    var add = function (ficha) {
        return dao.add('ficha', ficha);
    };

    var update = function (ficha) {
        return dao.update('ficha', ficha);
    };

    var remove = function (ficha) {
        return dao.remove('ficha', ficha.id);
    };

    var all = function () {
        return dao.getAll('ficha');
    };

    var get = function (id) {
        return dao.get('ficha', id);
    };

    return {
        get: get,
        getAll : all,
        add : add,
        remove : remove,
        update: update
    }
}]);
