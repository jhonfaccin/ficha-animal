angular.module("ficha",['ngRoute']);
angular.module("ficha").config(function($routeProvider) {
    $routeProvider
    .when("/", {
        controller: 'fichaCrtl',
        templateUrl : "templates/busca.html"
    })
    .when("/cadastro/:idFicha?", {
        controller: 'cadastroCtrl',
        templateUrl : "templates/cadastro.html"
    })
    .otherwise({redirectTo: '/'});
});
