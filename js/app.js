angular.module("ficha-animal",[]).controller('fichaCrtl',['$scope', function($scope) {

    $scope.title = "Lista de Fichas";
    $scope.fichas = [
        {id: '111',dataDeCadastro: new Date(),status: 'ativo'},
        {id: '222',dataDeCadastro: new Date(),status: 'inativo'},
        {id: '333',dataDeCadastro: new Date(),status: 'ativo'}
    ];
}]);