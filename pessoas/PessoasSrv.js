pessoas
	.factory('PessoasSrv', function($resource){
		return $resource(
			'/index.php/pessoas'
		);
	});