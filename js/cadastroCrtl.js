angular.module("ficha").controller('cadastroCtrl', 
['$scope', '$location', '$routeParams', 'fichaService', 'animalService',
    function ($scope, $location, $routeParams,  fichaService, animalService) {

        var init = function () {
            animalService.buscarTodos().then(function(response){
                $scope.animais = response.data;
            });
            if ($routeParams.idFicha) {
                fichaService.buscar($routeParams.idFicha).then(response => {
                    $scope.ficha = response.data;
                    $scope.ficha.dataDeCadastro = new Date($scope.ficha.dataDeCadastro);
                });
            } else {
                $scope.ficha = { ativo: true, dataDeCadastro: new Date()};
            }
        }

        $scope.cancelarCadastro = function () {
            delete $scope.ficha;
            $location.path('/');
        }

        $scope.salvar = function (ficha) {
            if (ficha.id) {
                fichaService.atualizar(ficha.id, angular.copy(ficha)).then(response => {
                    $location.path('/');
                });
            } else {
                fichaService.adicionar(ficha).then(response => {
                    $location.path('/');
                });
            }
        }
        init();
}]);