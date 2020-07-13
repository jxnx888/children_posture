$(function() {
	var swiper = new Swiper('#topBaiKe', {
		slidesPerView: 1.1,
		freeMode: true,
	})

	var left_twoHeight = $(".left_twoHeight").find(".video_img").width();
	var right_oneHeight2 = $(".right_oneHeight2").find("img").height();
	$(".right_oneHeight").css({
		"height": left_twoHeight / 2
	});
	$(".right_oneHeight2").css({
		"margin-top": left_twoHeight / 2 - right_oneHeight2
	});

	/**
	 * 视频div循环点击事件
	 */
	$('.video-box').each(function() { //遍历视频列表
		$(this).click(function() { //这个视频被点击后执行
			var img = $(this).attr('vpath'); //获取视频预览图
			var video = $(this).attr('ipath'); //获取视频路径
			var videoHtml =
				'<video id="video" class="video-js" loop="loop" muted="" controls="controls" preload="auto" poster=' + img +
				' autoplay="autoplay">';
			videoHtml += '<source class="video-source" src="' + video + '" type="video/mp4">'
			videoHtml += '<!--[if IE 9]>';
			videoHtml += '<source id="videoSource" class="video-source" type="video/mp4" src="视频连接videoUrl">';
			videoHtml += '<![endif]-->';
			videoHtml +=
				'<p class="vjs-no-js">The current browser does not support video direct playback, click here to download the video: <a style="color:#e5a442;" id="vjs-no-link" href="https://img.kidsproductwholesale.com/importcsvimg/webpic/img/overseavide/mindy/520964008900.mp4" target="_blank">Download video</a></p>';
			videoHtml += "</video>"
			videoHtml += '<div class="video_close" onClick="closeVideo()">X</div>'
			$('#videoPopUp').html(videoHtml);
			$('#videoPopUp').show();
			$("body").addClass("has_popup");
		});
	});
})
/**
 * 视频弹窗关闭
 */
function closeVideo() {
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if (e && e.stopPropagation) {
		e.stopPropagation();
	} else { //ie
		window.event.cancelBubble = true;
	}

	$("body").removeClass("has_popup");
	var v = document.getElementById('video'); //获取视频节点
	v.pause();
	$('#videoPopUp').css("display", "none"); //点击关闭按钮关闭暂停视频
	$('#videoPopUp').html("");
}
