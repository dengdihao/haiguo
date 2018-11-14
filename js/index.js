$(function () {
	// 点击追剧
		$(document).on("click",".zhankai",function () {
			$(".site_head_drawer").animate({height:"372px"},200);
			$(".drawer_watch_list").css("top","0px");
			$(this).hide();
			$(".shouqi").show()
			$(".zhuiju").css("background","none")
		});
		$(document).on("click",".shouqi",function () {
			$(".site_head_drawer").css("height","34px");
			$(".drawer_watch_list").css("top","-236px");
			$(this).hide();
			$(".zhankai").show()
			$(".zhuiju").css("backgroundColor","rgba(29,29,33,.8)")
		})
		$(".zhankai").hover(function () {
			$(".drawer_watch_item").css("top","150px");
			$(".zhuiju").css("opacity","0.5")
		},function () {
			$(".drawer_watch_item").css("top","60px")
			$(".zhuiju").css("opacity","1")
		})
		//关闭追剧
		$(".close_drawer").on("click",function () {
			$(".site_head_drawer").hide()
		});
		//上一页下一页
		$(".next_ye").on("click",function () {
			var _left = $(".site_head_drawer").width()*-1
			$(".drawer_watch_list").css("left",_left)
		})
		$(".last_ye").on("click",function () {
			
			$(".drawer_watch_list").css("left",0)
		})
	//搜索部分
		$(".search_input").on("click",function () {
			event.stopPropagation();
			$(".mod_smartbox").show()
			if($(this).val()==""){
				$(".sb_hot").show();
				$(".sb_suggest").hide()
				$(".sb_history").show()
				if($(".sb_history .sb_body").html()==""){
					$(".sb_history").hide()
				}
			}else{
				$(".sb_history,.sb_hot").hide();
				$(".sb_suggest").show()
			}
		})
		$(".search_input").on("keydown",function () {
			$(".mod_smartbox").show()
			$(".sb_history,.sb_hot").hide();
			$(".sb_suggest").show()
		})
		//搜索历史存在数组中
		var arr = [];
		$(".search_btn").on("click",function () {
			// alert(111)
			$(".mod_smartbox").hide()
			var _text = $(".search_input").val();
			if(_text!=""){
				arr.push(_text)
			}
			var str ='';
			for (var i = 0; i<arr.length; i++) {
				str +='<div class="sb_item"><a href="#">'+arr[i]+'</a></div>'
			}
			$(".sb_history .sb_body").html(str)
		})
		$(document).on("click",function(){
			$(".mod_smartbox").hide()
		})
		//清空历史记录
		$(".sb_del").on("click",function (event) {
			 event.stopPropagation();
			arr= [];
			$(".sb_history .sb_body").html("")
			$(".mod_smartbox").hide()
		})

	//导航菜单hover
		var _timer1=null;
		$(".nav_sub_area").on("mouseover",function () {
			$(this).addClass('current')
		})
		$(".nav_sub_area").on("mouseout",function () {
				$(this).removeClass('current')
		})

		$('.main_nav a').hover(function () {
			var _content = $(this).html();
			$(".nav_sub_area[data-nav="+_content+"]").addClass('current').siblings().removeClass('current');
		},function () {
			var _content = $(this).html();
			$(".nav_sub_area").removeClass('current');
		})
	//轮播图
		var _index = 0;
		var timer;
		function play(_index){
			timer=setTimeout(function(){
				$(".slider_inner .slider_item").eq(_index).addClass("in").siblings().removeClass('in');
				$(".slider_nav .nav_link").eq(_index).addClass("current").siblings().removeClass('current');
				_index++
				if(_index==10){
					_index=0
				}
				play(_index);
			},3000)
		}
		//鼠标进入是 定时器停止
		function stop(){
			clearTimeout(timer)
		}
		$(".slider_nav .nav_link").hover(function(){
			$(this).addClass("current").siblings().removeClass('current');
			var _order = $(this).index()
			$(".slider_inner .slider_item").eq(_order).addClass("in").siblings().removeClass('in');
			_index = _order
			stop()
		},function () {
			play(_index)
		})
		play(_index)
	//底部定位
		$(".mod_float_banner_trigger").on("click",function () {
			$(this).hide()
			$(".mod_float_banner").show()
		})
		$(".fb_close").on("click",function () {
			$(".mod_float_banner").hide()
			$(".mod_float_banner_trigger").show()
		})
	//返回顶部
		$("#toTop").on("click",function(){
			$(document).scrollTop(0)
		})
		$(window).scroll(function(){
		    if( $(window).scrollTop() > 800){
		 		$("#toTop").show()
		 		$(".site_channel_top .site_head").css("position","fixed")
		 		$(".site_channel_top .site_head").css("background-color","rgba(255,255,255,.95)")
		 		$(".mod_search").addClass("top_mod_search")
		 		$(".site_channel").show()
		 		$(".mod_quick").addClass("mod_quick_d")
		    }else{
		    	$("#toTop").hide()
		    	$(".site_channel_top .site_head").css("position","absolute")
		    	$(".site_channel_top .site_head").css("background-color","rgba(0,0,0,0)")
		    	$(".mod_search").removeClass("top_mod_search")
		    	$(".site_channel").hide()
		    	$(".mod_quick").removeClass("mod_quick_d")
		    }
		})
	//关yu定位侧边栏
		$(".x_vcoin_att").on("click",function(){
			$(".dingwei_box").css("right","38px")
			$(this).css("right","-38px")
		})
		$(".dingwei_box").on("mouseleave",function(){
			$(this).css("right","-100px")
			$(".x_vcoin_att").css("right","0px")
		})
	// //header  hover 效果
 		$(".nav_list").on("mouseover",function(){
 			$(this).find(".head_hover").show()
 		})
 		$(".nav_list").on("mouseout",function(){
 			$(this).find(".head_hover").hide()
 		})
 		$(".touxiang").on("mouseover",function(){
 			$(this).find(".head_hover").show()
 		})
 		$(".touxiang").on("mouseout",function(){
 			$(this).find(".head_hover").hide()
 		})
 		$(".head_hover").on("mouseover",function(){
 			$(this).show()
 		})
 		$(".head_hover").on("mouseout",function(){
 			$(this).hide()
 		})
 	//头部点击加载
 		$(document).on("click",".jia_move_kai",function(){
 			$(this).removeClass("jia_move_kai").addClass("jia_move_close")
 			//$(".site_head_nav").show()
 			$(".site_head_nav_box").show()
 			$(".site_channel_top .site_head").addClass("site_head_zhankai")
 			// $(".site_channel_top .site_head").ss("site_head_zhankai")
 		})
 		$(document).on("click",".jia_move_close",function(){
 			$(this).removeClass("jia_move_close").addClass("jia_move_kai")
 			//$(".site_head_nav").hide()
 			$(".site_head_nav_box").hide()
 			$(".site_channel_top .site_head").removeClass("site_head_zhankai")
 		})

		var index_t=null;
		var listTop = $(".site_channel").find("a");
		for(var i =0 ;i<listTop.length;i++){
			$(listTop[i]).mouseover(function(){
				index_t =$(this).attr("data-id");
				$("div[data-navtitle="+index_t+"]").addClass("current").siblings().removeClass("current");
			}).mouseleave(function(){
				index_t =$(this).attr("data-id");
				$("div[data-navtitle="+index_t+"]").removeClass("current");
			})
		}



})