var app = angular.module("app", []);

app.controller("produtoController", function($scope){
  $scope.produtos = [];
  $scope.flag = true;

  $scope.insert = function() {
    var produto = {
      id: $scope.produtos.length + 1,
      nome: $scope.nome,
      preco: $scope.preco
    }
    $scope.produtos.push(produto);
    limpaModelo();
  }

  function limpaModelo() { 
    $scope.id = 0;
    $scope.nome ='';
    $scope.preco ='';
  }

  $scope.deletar = function(produto){
    var index = $scope.produtos.indexOf(produto);
    console.log(index);

    $scope.produtos.splice(index, 1);
  }

  $scope.bindData = function(produto) {
    $scope.id = produto.id;
    $scope.nome =produto.nome;
    $scope.preco = produto.preco;
    $scope.flag = false;
  }

  $scope.update = function() {
    console.log("teste");
    $.grep($scope.produtos, function(p){
      if(p.id ==+ $scope.id) {
        p.nome = $scope.nome;
        p.preco = $scope.preco;
      }
      $scope.flag = true;
      limpaModelo();

    });
  }



})