angular.module('ficha').factory('fichaService', ['$http', function ($http) {

    var adicionar = function (ficha) {
        return $http.post("http://localhost:8080/ficha-animal-server/api/ficha",ficha);
    };
    var atualizar = function (idFicha, ficha) {
        return $http.put("http://localhost:8080/ficha-animal-server/api/ficha/"+idFicha,ficha);
    };

    var pesquisar = function (pesquisa) {
        var params = {};
        if (pesquisa.id) {
            params.id = pesquisa.id;
        }
        if (pesquisa.dataInicio) {
            params.dataInicio = pesquisa.dataInicio.getTime();
        }
        if (pesquisa.dataFim) {
            params.dataFim = pesquisa.dataFim.getTime();
        }
        return $http.get("http://localhost:8080/ficha-animal-server/api/pesquisa", { params: params });
    };

    var buscar = function (id) {
        return $http.get("http://localhost:8080/ficha-animal-server/api/ficha/" + id);
    };

    var remover = function(ficha){
        return $http.delete("http://localhost:8080/ficha-animal-server/api/ficha/"+ficha.id);
    };

    return {
        pesquisar: pesquisar,
        adicionar: adicionar,
        remover: remover,
        buscar: buscar,
        atualizar:atualizar
    }
}]);
