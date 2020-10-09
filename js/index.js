
window.onload=function(){
    animation()
}
function animation(){
	$('#loading').fadeOut()
	let length=$('.content').children().length
	let i=0
	let interval=setInterval(function(){
		if(i<length){
			console.log($('.content').children()[i],i,$('.content').children()[1])
			$($('.content').children()[i]).addClass('show')
			i++
		}else{
			clearInterval(interval)
		}
	},2000)
	let inte
	$('.content').on('click','.btn span',function(){
		$('dl').fadeIn()
		setTimeout(function(){
			$('dl').hide()
			$('.yyqx').fadeIn()
		},1500)
		setTimeout(function(){
			$('dt').show()
			let time=10
			inte=setInterval(function(){
				if(time<=0){
					clearInterval(inte)
					$('.container').html('').css('background','#000')
				}else{
					$('i').html(--time)
				}
			},1000)
		},2000)
	
	})
}