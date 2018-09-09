angular.module("ficha").controller('fichaCrtl',['$scope','fichaService','animalService',
function($scope,fichaService,animalService) {

    $scope.title = "Lista de Fichas";
    $scope.fichas = fichaService.getAll();

    $scope.excluir = function (ficha){
        fichaService.remove(ficha);
        //$scope.fichas = fichaService.getAll()
        console.log(ficha);
    }

    $scope.showCadastro = function(visibility){
        $scope.isVisible =  visibility;
        $scope.animais = animalService.getAll();

        console.log($scope.fichas);
    }

    $scope.cadastrarFicha = function (ficha){
        if (ficha.status === true){
            ficha.status = 'Ativo';
        }else{
            ficha.status = 'Inativo'
        }
        fichaService.add(ficha);
    }

}]);