$(function () {
	$(".figures_list li").on("mouseover",function(){
		$(this).addClass("hover").siblings().removeClass("hover")
	})
	// 展开收起
	$(".weekline_bt").on("click",function(){
		if($(this).hasClass("kai")){
			$(".figures_list").css("max-height","1000px")
			$(".up_arr").html("全部收起")
			$(this).removeClass("kai")
		}else{
			$(".figures_list").css("max-height","290px")
			$(".up_arr").html("全部展开")
			$(this).addClass("kai")
			$(".figures_list .first").addClass("hover").siblings().removeClass("hover")
		}
	})
	//预告片翻页
	$(".btn_prev").on("click",function(){
		$(".figures_pos_list").css("left","0px")
		$(this).hide()
		$(this).removeClass('xian').siblings().addClass("xian")
	})
	$(".btn_next").on("click",function(){
		$(this).hide()
		$(".figures_pos_list").css("left","-390px")
		$(this).removeClass('xian').siblings().addClass("xian")
	})
	$(".figures_scroll").on({mouseover:function(){
		$(".xian").css("display","inline-block")
		},mouseout:function(){
		$(".movie_fanye").hide()
	}})
	$(".figures_pos_list .list_pos_item").on({mouseover:function(){

			$(".list_pos_item").find('.figure_mask').show()
			$(this).find('.figure_mask').hide()
		},mouseout:function(){
			$(".list_pos_item").find('.figure_mask').show()
	}})
	//推广广告
	$("._ad_spread_list .list_item").hover(function() {
		var _index = $(this).index()
		if(_index==4){
			_index=3
		}
		$("._ad_spread_list").css("left",_index*-248+"px")
		$(".link_pic_more").hide()
		$(this).find(".link_pic_more").show()
	}, function() {
		$(".link_pic_more").hide()
		$("._ad_spread_list").css("left","0px")
	});
	//票房榜排行tab
	$(".mod_box_tab li").on("click mouseover",function(){
		that=$(this);
		var _ind = $(this).index()
		setTimeout(function(){
			that.addClass("current").siblings().removeClass("current")
			$(".mod_box_tab_cont_inner").eq(_ind).show().siblings().hide()
		},500)
	})
	//广告位轮播图
	var _num = 0;
		var timer;
		function play(_num){
			timer=setTimeout(function(){
				$("._switchad li").eq(_num).addClass("current").siblings().removeClass('current');
				$(".ad_page .page_item").eq(_num).addClass("current").siblings().removeClass('current');
				_num++
				if(_num==3){
					_num=0
				}
				play(_num);
			},2000)
		}
		//鼠标进入是 定时器停止
		function stop(){
			clearTimeout(timer)
		}
		$(".ad_page .page_item").hover(function(){
			stop()
			var _order = $(this).index()
			$(".ad_page .page_item").eq(_order).addClass("current").siblings().removeClass('current');
			$("._switchad li").eq(_order).addClass("current").siblings().removeClass('current');
			_num = _order
		},function () {
			play(_num)
		})
		play(_num);
		// 策划tab切换
	$(".cehua a").each(function(index, el) {
		$(el).on("mouseover",function(){
			// var _len = $(this).index();
			$(this).closest('.wrapper').find('.mod_bd').eq(index).show().siblings().hide()
			$(".mod_hd").show()
		})
	});
})