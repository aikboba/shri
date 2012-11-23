$(document).ready(function(){
	$('.menuChapter').eq(0).addClass('active');

	$('.question').click(function(){
		$(this).parent().find('.answer').slideToggle('fast', function(){
			if ($(this).parent().find('.answer').css('display')=='block'){
				$(this).parent().addClass('active');
			}else{
				$(this).parent().removeClass('active');
			}
		});
		return false;
	});
	
	$('.mainMenu li').click(function(){
		$('.menuChapter').each(function(){
			$(this).removeClass('active');
			$(this).hide();
		});
		$('.menuChapter').eq($(this).index()).fadeIn('slow', function(){
			$('.menuChapter').eq($(this).index()).addClass('active');
		});
		return false;
	})
})