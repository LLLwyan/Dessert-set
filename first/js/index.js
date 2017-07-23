$(function(){
	/*顶部特效*/
	(function(){
		$("#loadkhd").mouseenter(function(){
		$(".right .erwei").show();
		})
		$("#loadkhd").mouseleave(function(){
			$(".right .erwei").hide();

		/*$("#loadewm").mouseenter(function(){
			$(".right .erwei").show();
		})
		$("#loadewm").mouseleave(function(){
			$(".right .erwei").hide();*/
		})
	})();
	(function(){
		var timer;
		var index=0;
		var n=$(".ban_img").length;
		auto();
		function auto(){
			timer=setInterval(function(){
			$(".ban_img").eq(index).fadeOut();	
				index++;
				if(index>=n){
					index=0;
				}
			$(".ban_img").eq(index).fadeIn();
			},3000)
		}
		$(".banner .left,.banner .right").hover(function(){
				clearInterval(timer);
			},function(){
				auto();
			})
		$(".banner ul,.banner .left,.banner .right").hover(function(){
			$(".banner .left,.banner .right").fadeIn();
		},function(){
			$(".banner .left,.banner .right").fadeOut();
		})


		/*$(".banner .left,.banner .right,.banner ul").hover(function(){
				clearInterval(timer);
			},function(){
				auto();
			})*/

		/*左右btn*/
		$(".banner .left").mousedown(function(){
			$(".ban_img").eq(index).fadeOut();
			index--;
			if(index<0){
				index=n-1;
			}
			$(".ban_img").eq(index).fadeIn();
		})
		$(".banner .right").mousedown(function(){
			$(".ban_img").eq(index).fadeOut();
			index++;
			if(index>=n){
				index=0;
			}
			$(".ban_img").eq(index).fadeIn();
		})
	})();
	
	(function(){
		var index=0;
		
		
		$(".content .con_3 ul li").hover(function(){
			
			index=$(this).index();
			$(".content .con_3 .bg_hover").eq(index).show();
			$(".content .con_3 .title").eq(index).css("display","none");
			
		},function(){
			$(".content .con_3 .show_2").eq(index).css("display","none");
			$(".content .con_3 .bg_hover").eq(index).hide();			
			$(".content .con_3 .title").eq(index).css("display","block");
			$(".content .con_3 .show_2").eq(index).css("display","block");
			})
	
	})();
	(function(){
		$("footer section div:nth-child(1) div:nth-child(2) p:nth-child(1)").hover(function(){
			$(".show_dy_fw").show();
		},function(){
			$(".show_dy_fw").hide();
		})
	})();
});
