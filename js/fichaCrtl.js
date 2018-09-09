angular.module("ficha").controller('fichaCrtl', ['$scope', 'fichaService', 'animalService',
    function ($scope, fichaService, animalService) {

        $scope.mostrarBuscaDeFichas = true;
        $scope.mostrarCadastraFicha = false;
        $scope.mostrarFichasCadastradas = false;
        $scope.excluir = function (ficha) {
            if (confirm('Tem certeza?')){
                fichaService.remove(ficha);
                $scope.fichas = fichaService.getAll();
            }
        }

        $scope.showCadastro = function () {
            $scope.animais = animalService.getAll();
            $scope.mostrarBuscaDeFichas = false;
            $scope.mostrarCadastraFicha = true;
            $scope.mostrarFichasCadastradas = false;
            $scope.ficha = { status: 'Ativo', dataDeCadastro: new Date() };
        }

        $scope.cancelarCadastro = function () {
            $scope.mostrarCadastraFicha = false;
            $scope.mostrarBuscaDeFichas = true;
            delete $scope.ficha;
        }

        $scope.buscar = function () {
            $scope.fichas = fichaService.getAll();
            $scope.mostrarFichasCadastradas = true;
        }

        $scope.editar = function(ficha){
            $scope.ficha = angular.copy(ficha);
            $scope.ficha.dataDeCadastro = new Date($scope.ficha.dataDeCadastro);
            $scope.mostrarBuscaDeFichas = false;
            $scope.mostrarCadastraFicha = true;
            $scope.mostrarFichasCadastradas = false;
        }

        $scope.salvar = function (ficha) {
            if (ficha.id) {
                fichaService.update(angular.copy(ficha));
            } else {
                fichaService.add(ficha);
            }
            $scope.fichas = fichaService.getAll();
            $scope.mostrarBuscaDeFichas = true;
            $scope.mostrarCadastraFicha = false;
            $scope.mostrarFichasCadastradas = true;
        }

    }]);