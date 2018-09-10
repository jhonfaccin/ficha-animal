angular.module('ficha').factory('dao', ['$window', function($window) {


    var leBanco = function () {
        if (!$window.localStorage['banco']){
            return $window.localStorage.banco = JSON.stringify({});
        }else{
            return JSON.parse($window.localStorage.banco);
        }
    };

    var escreveBanco = function (chave, valores) {
        var banco = leBanco();
        banco[chave] = valores;
        $window.localStorage.banco = JSON.stringify(banco);
    };

    var adicionar = function (chave, valor) {
        var valores = todos(chave);
        valor.id = Math.floor(Math.random() * 1000000000000) + '-' + new Date().getTime();
        valores[valor.id] = valor;
        escreveBanco(chave, valores);
        return valor;
    };

    var buscar = function (chave, id) {
        return todos(chave)[id];
    };

    var todos = function (chave) {
        var valores = leBanco();
        return valores[chave] ? valores[chave] : criaPropriedade(chave);
    };

    var buscarTodos = function (chave) {
        return Object.values(todos(chave));
    };

    var remover = function (chave, id) {
        var valores = todos(chave);
        delete valores[id];
        escreveBanco(chave, valores);
    };

    var atualizar = function (chave, valor) {
        var valores = todos(chave);
        valores[valor.id] = valor;
        escreveBanco(chave, valores);
        return valor;
    };

    var criaPropriedade = function (chave) {
        escreveBanco(chave, {});
        return leBanco()[chave];
    };

    return {
        adicionar : adicionar,
        buscarTodos: buscarTodos,
        buscar : buscar,
        atualizar : atualizar,
        remover : remover,
    }
}]);
