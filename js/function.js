$(function(){
	//funcoes de abrir e fechar formulario

	abrirJanela();
	verificarCliqueFechar();

	function abrirJanela(){
		$('.btn').click(function(e){
			e.stopPropagation();
			$('.bg').fadeIn();
		});
	}

	function verificarCliqueFechar(){
		var el = $('body, .closeBtn');

		el.click(function(){
			$('.bg').fadeOut();
		})

		$('.popup').click(function(e){
			e.stopPropagation();
		})
	}

		
});