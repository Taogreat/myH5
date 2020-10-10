// 页面动画
function animation(){
	$('#loading').fadeOut()
	let length=$('.content').children().length
	let i=0
	let interval=setInterval(function(){
		if(i<length){
			// console.log($('.content').children()[i],i,$('.content').children()[1])
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

// 页面资源请求完毕，执行动画
// 方案一  不行
// window.onload=function(){
//     animation()
// }

// 方案二 不行
// document.onreadystatechange=function(){
// 	// console.log(document.readyState)
// 	console.log('onreadystatechange')
// 	if(document.readyState == "complete"){
// 		animation()
// 	}
// }


// 方案三 判断所有资源的onload  
// 图片 img.onload  音视频 media.oncanplay

$(function(){
	let i=0
	let imgArr=['bg.jpg','img01.jpg','img02.gif','img03.jpg']
	let total=imgArr.length+1 //加1是audio只有一个
	imgArr.forEach(function(item,index){
		let img=new Image()
		img.src=`./img/${item}`
		img.onload=function(){
			if(++i/total==1){
				animation()
			}
		}
	})
	// $('#mp4').on('canplay',function(){
	// 	if(++i/total==1){
	// 		animation()
	// 	}
	// })
	$('#music').on('canplay',function(){
		if(++i/total==1){
			animation()
		}
	})
	
})
