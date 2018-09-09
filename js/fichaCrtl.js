angular.module("ficha").controller('fichaCrtl', ['$scope', 'fichaService', 'animalService',
    function ($scope, fichaService, animalService) {

        $scope.mostrarBuscaDeFichas = true;
        $scope.mostrarCadastraFicha = false;
        $scope.mostrarFichasCadastradas = false;

        $scope.excluir = function (ficha) {
            fichaService.remove(ficha);
            $scope.fichas = fichaService.getAll();
        }

        $scope.showCadastro = function () {
            $scope.mostrarBuscaDeFichas = false;
            $scope.mostrarCadastraFicha = true;
            $scope.mostrarFichasCadastradas = false;
            $scope.animais = animalService.getAll();
        }

        $scope.cancelarCadastro = function () {
            $scope.mostrarCadastraFicha = false;
            $scope.mostrarBuscaDeFichas = true;
        }

        $scope.buscar = function () {
            $scope.fichas = fichaService.getAll();
            $scope.mostrarFichasCadastradas = true;
        }

        $scope.cadastrarFicha = function (ficha) {
            fichaService.add(ficha);
            $scope.fichas = fichaService.getAll();
            $scope.mostrarBuscaDeFichas = true;
            $scope.mostrarCadastraFicha = false;
            $scope.mostrarFichasCadastradas = true;
        }

    }]);