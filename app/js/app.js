var app = angular.module('myApp', ["ngRoute"]);
// rotas são para aplicações que funcionam em uma pagina só
// no geral é como fazer uma aplicação de multi-telas, mas tem o beneficio de diminuir
// a quantidade de request necessaria visto que tudo é carregado no inicio
app.config(function($routeProvider){
  //esse lugar é usado para definir as rotas, ou seja, para cada caminho
  //ele retornara um template "o .html" e um controller para aquele template

  $routeProvider

  .when("/",{
    templateUrl : "./partials/home.html",
    controller : "homeCtrl"
  })

  .when("/sobre",{
    templateUrl : "./partials/sobre.html",
    controller : "sobreCtrl"
  })
  .when("/caronas",{
    templateUrl : "./partials/sobre.html",
    controller : "caronasCtrl"
  })
  .when("/criar-caronas",{
    templateUrl : "./partials/criar-carona.html",
    controller : "criar-caronaCtrl"
  })


});
