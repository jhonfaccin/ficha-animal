angular.module("ficha").controller('fichaCrtl',
    ['$scope', '$location', 'fichaService', 'animalService',
        function ($scope, $location, fichaService, animalService) {

            $scope.pesquisa = {};

            $scope.buscar = function (pesquisa) {
                fichaService.pesquisar(pesquisa).then(function(response){
                    $scope.fichas = response.data || [];
                    console.log($scope.fichas)
                });
                $scope.mostrarFichasCadastradas = true;
            }

            $scope.excluir = function (ficha) {
                if (confirm('Tem certeza?')) {
                    fichaService.remover(ficha).then(function(response){
                        $scope.fichas = $scope.fichas.filter(f => f.id != ficha.id)
                    });
                }
            }

            $scope.editar = function (ficha) {
                $location.path('cadastro/' + ficha.id);
            }
        }]);