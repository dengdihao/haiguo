$(function () {
    $(document).on('mousemove', ".haver_keyframes", function (ev) {

        ev = ev || window.event;
        var mousePos = mouseCoords(ev);
        $(this).offset().left;
        var x = mousePos.x - $(this).offset().left;
        var index = 33;
        var index2 = -241;
        if (x > index) {
            $(".haver_keyframes img").css({left: "-241px", top: 0})
            $(".keyframes_value_hover").css("width", "37")
        }
        if (x > index * 2) {
            $(".haver_keyframes img").css({left: "-482px", top: 0})
            $(".keyframes_value_hover").css("width", "74")
        }
        if (x > index * 3) {
            $(".haver_keyframes img").css({left: 0, top: "-136px"})
            $(".keyframes_value_hover").css("width", "111")
        }
        if (x > index * 4) {
            $(".haver_keyframes img").css({left: "-241px", top: "-136px"})
            $(".keyframes_value_hover").css("width", "148")
        }
        if (x > index * 5) {
            $(".haver_keyframes img").css({left: "-482", top: "-136px"})
            $(".keyframes_value_hover").css("width", "188")
        }
    });
    function mouseCoords(ev) {
        if (ev.pageX || ev.pageY) {
            return {x: ev.pageX, y: ev.pageY};
        }
        return {
            x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
            y: ev.clientY + document.body.scrollTop - document.body.clientTop
        };
    }

    //翻页------------
    function crosspage() {
        var index = 0;
        if (index == 0) {
            $(this).hide();
        }
        $(".next_page").click(function () {
            index++
            if (index <= 1) {
                var leftX = index * -1200 + "px"
            } else {
                index = 1;
            }
            $(this).parent().parent().find(".content_ul").css("marginLeft", leftX)
        })
        $(".up_page").click(function () {
            index--
            var leftX = index * -1200 + "px"
            if (index <= 0) {
                leftX = 0;
                index = 0
            }
            $(this).parent().parent().find(".content_ul").css("marginLeft", leftX)
        })
    }

    crosspage();
    //video--------------------
    var timer = null;
    var _video_sec;
    var video1;
    var flag_1 = true;
    $(".exclusive_top").mouseenter(function (e) {
        var index = null;
        var self = this;
        $("video")[0].pause();
        clearInterval(timer)
        video1 = $(this).parent().find("video")
        _video_sec = $(this).parent().find(".video_sec")
        e.stopPropagation();
        if (flag_1) {
            $(self).parent().find(".hover_video").show(0, function () {
                video1[0].play();
                flag_1 = false;
                video1[0].muted = true;//静音
            });
        }
        timer = setInterval(function () {
            var curTime = Math.round(video1[0].currentTime)
            index = 8 - curTime;
            _video_sec.text(index + "秒")
            if (index == 0) {
                video1[0].play();
                _video_sec.text(8 + "秒")
            }
        }, 1000)

    })

    $(".hover_video").mouseleave(function (e) {
        e.stopPropagation();
        video1 = $(this).parent().find("video")
        /*video1[0].muted = true ;*/
        $(".hover_video").fadeOut(0, function () {
            flag_1 = true;
        });
        video1[0].pause();
        clearInterval(timer)
    })
    var recommendFlag = true;
    //加载更多--------------------
    $(".mod_fold_box").click(function () {
        $(".btn_fold").show();
        if (!recommendFlag) {
            $(".recommend").show();
            recommendFlag = true;
        } else {
            $.ajax({
            type: "get",
            dataType: "json",
            url: "../json/loadmore.json",
            success: function (msg) {
                    var lis = '';
                    for (var i = 0; i < 12; i++) {
                        lis +=
                            '<li class="original_item">'
                            + '		<span class="mark_quickplay"></span>'
                            + '		<a class="figure_auto " href="#">'
                            + '			<img class="original_txt " src="'+msg.currentSrc+'" alt="'+msg.imgAlt+'">'
                            + '		</a>'
                            + '		<span class="tuijian_time">'+msg.time+'</span>'
                            + '		<div class="figure_detail original_detail">'
                            + '			<a class="figure_txt original_txt" href="#"> '+msg.txt+'</a>'
                            + '		</div>'
                            + '		<div class="haver_keyframes original_keyframes">'
                            + '			<img src="'+msg.keyframesSrc+'" alt="">'
                            + '			<div class="keyframes_value">'
                            + '				<div class="keyframes_value_hover"></div>'
                            + '			</div>'
                            + '		</div>'
                            + '	</li>'
                    }
                    $(".recommend").append(lis);
            },
         });

        }


        
    })
    $(".btn_fold").click(function (e) {
        e.stopPropagation();
        $(".recommend").hide();
        $(".btn_fold").hide();
        recommendFlag = false;
    })


})