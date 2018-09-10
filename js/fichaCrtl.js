angular.module("ficha").controller('fichaCrtl',
    ['$scope', '$location', 'fichaService', 'animalService',
        function ($scope, $location, fichaService, animalService) {


            $scope.buscar = function (pesquisa) {

                $scope.fichas = fichaService.pesquisar(pesquisa);
                if (pesquisa.id) {
                    $scope.fichas = [fichaService.buscar(pesquisa.id)];
                    $scope.mostrarFichasCadastradas = true;
                    return;
                }
                var todasAsFichas = fichaService.buscarTodos();

                var i;
                for (i = 0; i < todasAsFichas.length; i++) {
                    todasAsFichas[i].dataDeCadastro = new Date(todasAsFichas[i].dataDeCadastro)

                }
                $scope.fichas = todasAsFichas.filter(ficha =>
                    ficha.dataDeCadastro > pesquisa.dataInicio &&
                    ficha.dataDeCadastro < pesquisa.dataFim);
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