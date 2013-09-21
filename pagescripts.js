/*Animates the buttons */

$.fn.btnAnimate = function () {
		$(this).hover(
				function () {
					$(this).stop().animate({marginTop:'-20px'});
				},
				function () {
					$(this).stop().animate({marginTop:'0px'});
				}
		);
		};
		
/*Event to call button animation*/
		$("#Btn1").on("mouseover", $("#Btn1").btnAnimate());
		$("#Btn2").on("mouseover", $("#Btn2").btnAnimate());
		$("#Btn3").on("mouseover", $("#Btn3").btnAnimate());
		$("#Btn4").on("mouseover", $("#Btn4").btnAnimate());
		
/*Button Clicks to show and hide divs*/
		$("#Btn1").on("click",function(){
				$("#placeHolder,#nav1,#nav2,#nav3,#nav4").hide(200);
				$("#nav1").show(200);
				#("#nav1").class = "contentbox";
		});
		$("#Btn2").on("click",function(){
				$("#placeHolder,#nav1,#nav2,#nav3,#nav4").hide(200);
				$("#nav2").show(200);
				#("#nav2").class = "contentbox";
		});
		$("#Btn3").on("click",function(){
				$("#placeHolder,#nav1,#nav2,#nav3,#nav4").hide(200);
				$("#nav3").show(200);
				#("#nav3").class = "contentbox";
		});
		$("#Btn4").on("click",function(){
				$("#placeHolder,#nav1,#nav2,#nav3,#nav4").hide(200);
				$("#nav4").show(200);
				#("#nav4").class = "contentbox";
		});
