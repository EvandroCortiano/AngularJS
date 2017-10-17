/**
 * http://usejsdoc.org/
 */
angular
	.module('pessoas', ['ngRoute'])
	.config(function($routeProvider, $locationProvider){
		$locationProvider.hashPrefix('');
		$routeProvider
			.when('/', {
				templateUrl: 'listar.html'
			})
			.when('/pessoa/adicionar', {
				templateUrl: 'adicionar.html',
				controller: 'CtrlAdicionar'
			})
			.when('/pessoa/:index',{
				templateUrl: 'editar.html',
				controller: 'CtrlEditar'
			});
	})
	.controller('CtrlPessoas', function($scope){
		
		$scope.pessoas = [
			{nome: "Maria", cidade: "Sao Paulo"},
			{nome: "Pedro", cidade: "Salvador"},
			{nome: "Joao", cidade: "Parnaiba"},
			{nome: "Cleber", cidade: "Manaus"}
		]
		
	})
	.controller('CtrlAdicionar', function($scope){
		$scope.add = function(){
			$scope.pessoas.push($scope.pessoa);
			
			$scope.pessoa = "";
			$scope.result = "Registro adicionado com sucesso!";
		};
	})
	.controller('CtrlEditar', function($scope, $routeParams){
		$scope.pessoa = $scope.pessoas[$routeParams.index];
	});