angular.module("ficha").controller('fichaCrtl',
    ['$scope', '$location', 'fichaService', 'animalService',
        function ($scope, $location, fichaService, animalService) {


            $scope.buscar = function (pesquisa) {
                $scope.fichas = fichaService.pesquisar(pesquisa);
                $scope.mostrarFichasCadastradas = true;
            }

            $scope.excluir = function (ficha) {
                if (confirm('Tem certeza?')) {
                    fichaService.remover(ficha);
                    $scope.fichas = fichaService.buscarTodos();
                }
            }

            $scope.editar = function (ficha) {
                $location.path('cadastro/' + ficha.id);
            }
        }]);