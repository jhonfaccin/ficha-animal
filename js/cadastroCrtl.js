angular.module("ficha").controller('cadastroCtrl', 
['$scope', '$location', '$routeParams', 'fichaService', 'animalService',
    function ($scope, $location, $routeParams,  fichaService, animalService) {

        var init = function () {
            $scope.animais = animalService.buscarTodos();
            if ($routeParams.idFicha) {
                $scope.ficha = fichaService.buscar($routeParams.idFicha);
                $scope.ficha.dataDeCadastro = new Date($scope.ficha.dataDeCadastro);
            } else {
                $scope.ficha = { status: 'Ativo', dataDeCadastro: new Date()};
            }
        }

        $scope.cancelarCadastro = function () {
            delete $scope.ficha;
            $location.path('/');
        }

        $scope.salvar = function (ficha) {
            if (ficha.id) {
                fichaService.atualizar(angular.copy(ficha));
            } else {
                fichaService.adicionar(ficha);
            }
            $location.path('/');
        }
        init();
}]);