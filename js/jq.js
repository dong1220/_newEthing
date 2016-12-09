
$(function () {
	/*易购首页*/
		/*classify-r*/
		$(".c_right #a1").find(".li-word").hide().eq(1).show();
		$(".c_right #a1").find(".letter").children("li").click(function(){
			$(this).addClass("up").siblings().removeClass("up");
			$(".c_right #a1").find(".li-word").eq($(this).index()).show().siblings().hide();
		});
		$(".c_right #a2").find(".li-word").hide().eq(1).show();
		$(".c_right #a2").find(".letter").children("li").click(function(){
			$(this).addClass("up").siblings().removeClass("up");
			$(".c_right #a2").find(".li-word").eq($(this).index()).show().siblings().hide();
		});
		$(".c_right #a3").find(".li-word").hide().eq(1).show();
		$(".c_right #a3").find(".letter").children("li").click(function(){
			$(this).addClass("up").siblings().removeClass("up");
			$(".c_right #a3").find(".li-word").eq($(this).index()).show().siblings().hide();
		});
		$(".c_right #a4").find(".li-word").hide().eq(1).show();
		$(".c_right #a4").find(".letter").children("li").click(function(){
			$(this).addClass("up").siblings().removeClass("up");
			$(".c_right #a4").find(".li-word").eq($(this).index()).show().siblings().hide();
		});
		$(".c_right #a5").find(".li-word").hide().eq(1).show();
		$(".c_right #a5").find(".letter").children("li").click(function(){
			$(this).addClass("up").siblings().removeClass("up");
			$(".c_right #a5").find(".li-word").eq($(this).index()).show().siblings().hide();
		});
		$(".c_right #a6").find(".li-word").hide().eq(1).show();
		$(".c_right #a6").find(".letter").children("li").click(function(){
			$(this).addClass("up").siblings().removeClass("up");
			$(".c_right #a6").find(".li-word").eq($(this).index()).show().siblings().hide();
		});
		/*classify-l*/
        $(".classify .c_left > li").hover(function () {
            var $_index= $(this).index();

            $(".classify .c_right").show()
            $(".classify .c_right .pro").eq($_index).show().siblings().hide();
        },function(){
            $(".classify .c_right").hide();
        });
	//易购首页-热卖
	$(".hot-box").hover(function(){
		$(".hot-box > a").show();
	},function(){
		$(".hot-box > a").hide();
	});
	
	$(".service-cont4").hover(function(){
		$(".service-cont4 > a").show();
	},function(){
		$(".service-cont4 > a").hide();
	});
	
    $("#next1,#next2,#next3,#next4,#next5").click(function(){
		var index=parseInt($(this).siblings("span").text());
    	var a=$(this).siblings("div").find(".hot-b-groom");
    	var b=$(this).siblings("div").find(".hot-b-groom > li");
    	if(index<b.length-4){
    		index=index+1;
       		left=-index*250;
       		$(this).siblings("span").text(index);
    		a.css("margin-left",left+"px");
    	}
    });
    $("#last1,#last2,#last3,#last4,#last5").click(function(){
		var index=parseInt($(this).siblings("span").text());
    	var a=$(this).siblings("div").find(".hot-b-groom");
    	if(index>0){
    		index=index-1;
       		left=-index*250;
       		$(this).siblings("span").text(index);
    		a.css("margin-left",left+"px");
    	}
    });
    //汽车整车
    $(".car-cont-groom2 .car-pro").not(":first").hide();;
    $(".car-cont-groom1 li").first().addClass("cur").children("i").show();
    $(".car-cont-groom1 li").hover(function(){
    	$(this).addClass("cur").siblings().removeClass("cur");
    	$(this).children("i").show().end().siblings().children("i").hide();
    });
    $(".car-cont-groom1 li").click(function(){
    	$(this).addClass("cur").siblings().removeClass("cur");
    	$(this).children("i").show().end().siblings().children("i").hide();
    	$(".car-cont-groom2 .car-pro").eq($(this).index()).show().siblings().hide();
    });
	
        })