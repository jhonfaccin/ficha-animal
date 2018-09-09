angular.module("ficha").controller('fichaCrtl', 
['$scope', '$location', 'fichaService', 'animalService',
    function ($scope, $location, fichaService, animalService) {
        
        $scope.buscar = function () {
            $scope.fichas = fichaService.getAll();
            $scope.mostrarFichasCadastradas = true;
        }

        $scope.excluir = function (ficha) {
            if (confirm('Tem certeza?')){
                fichaService.remove(ficha);
                $scope.fichas = fichaService.getAll();
            }
        }

        $scope.editar = function(ficha){
            $location.path('cadastro/'+ficha.id);
        }
}]);