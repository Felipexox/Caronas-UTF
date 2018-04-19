var app = angular.module('myApp', ["ngRoute"]);
// rotas são para aplicações que funcionam em uma pagina só
// no geral é como fazer uma aplicação de multi-telas, mas tem o beneficio de diminuir
// a quantidade de request necessaria visto que tudo é carregado no inicio
app.config(function($routerProvider){
  //esse lugar é usado para definir as rotas, ou seja, para cada caminho
  //ele retornara um template "o .html" e um controller para aquele template

  $routerProvider

  .when('/',{
    template : "<h1> ola </h1>",
    controller : 'homeCtrl',
  })

});

app.controller('homeCtrl', function($scope){

});
