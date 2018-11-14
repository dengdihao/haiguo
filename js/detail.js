$(function(){
	//调整头部
	$(window).scroll(function(){
		 $(".mod_quick").addClass("mod_quick_d")
	
	})
	//演员阵容介绍
	$(".actor_list .item").on({mouseover:function(){
		$(this).find(".actor_pop").show()
	},mouseout:function(){
		$(this).find(".actor_pop").hide()
	}})
	//c查看全部
	$(document).on("click",".item_all",function(){
		$(this).hide()
		$(".shenglue").hide()
		$(".item_hide").css("display","inline-block")
	})
	
	//小视频剧照
	 var _timer = null;
	    var _video_sec;
	    var _video;
	    var flag_1 = true;
	    $("._video_poster_list .list_item").mouseenter(function (e) {
	    	$("._video_poster_list").find(".figure_video_start").show()
	    	$(this).find('.figure_video_start').hide()
	    	$("._video_poster_list").find(".figure_video_tools").hide()
	    	$(this).find('.figure_video_tools').show()
	        var index = null;
	        var self = this;
	        $("video")[0].pause();
	        clearInterval(_timer)
	        _video = $(this).find("video")
	        _video_sec = $(this).find(".figure_info")
	        _video_sec.html(8 + "秒")
	        _video[0].currentTime = 0;
	        e.stopPropagation();
	        if (flag_1) {
                _video[0].play();
                flag_1 = false;
                // video1[0].muted = true;//静音
	        }
	        var _that = $(this)
	        _timer = setInterval(function () {
	            var curTime = Math.round(_video[0].currentTime)
	            index = 8 - curTime;
	            _video_sec.html(index + "秒")
	            if (index == 0) {
	                // _video[0].play();
	                // _video_sec.html(8 + "秒")
	                _that.find('.figure_video_tools').hide()
	               _that.find('.figure_video_start').show()
	                clearInterval(_timer)
	            }
	        }, 1000)
	    })

	    $("._video_poster_list .list_item").mouseleave(function (e) {
	        e.stopPropagation();
	        _video = $(this).find("video")
	        // video1[0].muted = true ;
	        flag_1 = true;
	        _video[0].pause();
	        clearInterval(_timer)
	    })
	    //导航
	    $(".related_list .item").on("click",function(){
	    	$(this).addClass("current").siblings().removeClass('current')
	    	var data_id = $(this).find("a").attr("data-id")
	    	if(data_id=="全部"){
	    		$(".mod_row_s4").show()
	    	}else{
		    	$(document).find(".mod_row_s4").eq(data_id).show().siblings().hide()
		    	$("#_nav_backTop").show()
	    	}
	    })
	   

})