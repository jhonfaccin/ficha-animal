angular.module("ficha").controller('fichaCrtl',['$scope','fichaService','animalService',
function($scope,fichaService,animalService) {

    $scope.title = "Lista de Fichas";
    //$scope.animais = animalService.getAll();
    $scope.isVisible = false;

    $scope.excluir = function (ficha){
        fichaService.remove(ficha);
        $scope.fichas = fichaService.getAll()
    }

    $scope.showCadastro = function(visibility){
        $scope.isVisible =  visibility;
    }

    var init = function(){
        var ficha = [
            {id: '111',dataDeCadastro: new Date(),status: 'ativo'}
        ];
        fichaService.add(ficha);
        $scope.fichas = fichaService.getAll();
        console.log($scope.fichas);
    }
}]);