angular.module('ficha').factory('dao', ['$window', function($window) {


    var readBanco = function () {
        if (!$window.localStorage['banco']){
            return $window.localStorage.banco = JSON.stringify({});
        }else{
            return JSON.parse($window.localStorage.banco);
        }
    };

    var writeBanco = function (key, values) {
        var banco = readBanco();
        banco[key] = values;
        $window.localStorage.banco = JSON.stringify(banco);
    };

    var add = function (key, value) {
        var values = all(key);
        value.id = Math.floor(Math.random() * 1000000000000) + '-' + new Date().getTime();
        values[value.id] = value;
        writeBanco(key, values);
        return value;
    };

    var get = function (key, id) {
        return all(key)[id];
    };

    var all = function (key) {
        var values = readBanco();
        return values[key] ? values[key] : createProperty(key);
    };

    var getAll = function (key) {
        return Object.values(all(key));
    };

    var remove = function (key, id) {
        var values = all(key);
        delete values[id];
        writeBanco(key, values);
    };

    var update = function (key, value) {
        var values = all(key);
        values[value.id] = value;
        writeBanco(key, values);
        return value;
    };

    var createProperty = function (key) {
        writeBanco(key, {});
        return readBanco()[key];
    };


    return {
        add : add,
        getAll: getAll,
        get : get,
        update : update,
        remove : remove,
    }
}]);
