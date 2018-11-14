$(function () {
    $(".action_item ").hover(function () {
        $(this).addClass("open").siblings().removeClass("open");
    },function () {
        $(this).removeClass("open");
    })

    $("#summary_details").click(function () {
        $(".video_summary").addClass("open");
        $(this).hide();
        $("#summary_stop").show()
    })
    $("#summary_stop").click(function () {
        $(".video_summary").removeClass("open");
        $(this).hide();
        $("#summary_details").show()
    })
    $(".mod_title_nav").on("click","li",function () {
        if($(this).index()==0){
            $(this).addClass("current").siblings().removeClass("current")
            $(".mod_summary").show()
            $(".mod_story").hide()
        }else {
            $(".mod_summary").hide();
            $(this).addClass("current").siblings().removeClass("current")
            $(".mod_story").eq(1).show()
        }
    })
    $("#allEpisodes").click(function () {
        $(".mod_story").eq(0).show();
        $(".mod_story").eq(1).hide();
    })
    $("#stopBtn").click(function () {
        $(".mod_story").eq(1).show();
        $(".mod_story").eq(0).hide();
    })
      //翻页
    $(".figure_scroll").on({mouseover:function () {

       $(this).find(".xian").css("display","inline-block")
    },mouseout:function(){
        // $(".fanye").hide()
    }})
    $(".mod_actor_list li").hover(function(){
        $(this).addClass("current").siblings().removeClass("current")
    })
    $(".btn_prev").on("click",function(){
        $(this).parent().find(".moveBox").css("left","0px")
        $(this).hide()
        $(this).removeClass('xian').siblings("a").addClass("xian").css("display","inline-block")
    })
     $(".btn_next").on("click",function(){
        $(this).parent().find(".moveBox").css("left","-860px")
        $(this).hide()
        $(this).removeClass('xian').siblings("a").addClass("xian").css("display","inline-block")
    })
    $(".mod_figure_s_sm .list_item").on({mousemove:function(){
        $(this).addClass("current").siblings().removeClass("current")
        $(this).children('.figure').hide();
        $(this).find(".mod_layer_meme").show()
    },mouseout:function(){
        $(this).removeClass("current")
        $(this).children('.figure').show();
        $(this).find(".mod_layer_meme").hide()
    }})
})
