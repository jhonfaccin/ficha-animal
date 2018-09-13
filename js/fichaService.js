angular.module('ficha').factory('fichaService', ['$http', function ($http) {

    var adicionar = function (ficha) {
        return $http.post("http://localhost:8080/ficha-animal-server/api/ficha",ficha);
    };

    var pesquisar = function (pesquisa) {
        return $http.get("http://localhost:8080/ficha-animal-server/api/pesquisa",
        {params: {id:pesquisa.id,dataDeCadastro:pesquisa.dataInicio,dataFim:pesquisa.dataFim}});
    };

    var remover = function(ficha){
        return $http.delete("http://localhost:8080/ficha-animal-server/api/ficha/"+ficha.id);
    };

    return {
        pesquisar: pesquisar,
        adicionar: adicionar,
        remover: remover
    }
}]);
