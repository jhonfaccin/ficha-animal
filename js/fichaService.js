angular.module('ficha').factory('fichaService', ['$http', function ($http) {

    var adicionar = function (ficha) {
        return $http.post("http://localhost:8080/ficha-animal-server/api/ficha",ficha);
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
        return $http.get("http://localhost:8080/ficha-animal-server/api/ficha");
    };

    var pesquisar = function (pesquisa) {

        if (!pesquisa) {
            return;
        }

        if (pesquisa.id) {
            return buscar(pesquisa.id);
        }
        var todasAsFichas = buscarTodos();

        var fichas = todasAsFichas.filter(ficha =>
            new Date(ficha.dataDeCadastro).getTime() > pesquisa.dataInicio.getTime() &&
            new Date(ficha.dataDeCadastro).getTime() < pesquisa.dataFim.getTime());
        return fichas;
    };

    return {
        buscar: buscar,
        pesquisar: pesquisar,
        buscarTodos: buscarTodos,
        adicionar: adicionar,
        remover: remover,
        atualizar: atualizar
    }
}]);
