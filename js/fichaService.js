angular.module('ficha').factory('fichaService', ['dao',function(dao) {
    
    var adicionar = function (ficha) {
        return dao.adicionar('ficha', ficha);
    };

    var atualizar = function (ficha) {
        return dao.atualizar('ficha', ficha);
    };

    var remover = function (ficha) {
        return dao.remover('ficha', ficha.id);
    };

    var buscarTodos = function () {
        return dao.buscarTodos('ficha');
    };

    var buscar = function (id) {
        return dao.buscar('ficha', id);
    };

    var pesquisar = function (pesquisa) {
    };

    return {
        buscar: buscar,
        buscarTodos : buscarTodos,
        adicionar : adicionar,
        remover : remover,
        atualizar: atualizar
    }
}]);
