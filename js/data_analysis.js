$(function() {
	var swiper = new Swiper('#monthes', {
		slidesPerView: 6.5,
		freeMode: true,
	})
	var swiper = new Swiper('#date', {
		slidesPerView: 7,
		freeMode: true,
	})

	var swiper = new Swiper('#trainningVideo', {
		slidesPerView: 1.5,
		freeMode: true,
		spaceBetween : 10,
	})
	
	/**
	 * 视频div循环点击事件
	 */
	$('.video-box').each(function () { //遍历视频列表
	    $(this).click(function () { //这个视频被点击后执行
	        var img = $(this).attr('vpath');//获取视频预览图
	        var video = $(this).attr('ipath');//获取视频路径
			var videoHtml = '<video id="video" class="video-js" loop="loop" muted="" controls="controls" preload="auto" poster=' + img + ' autoplay="autoplay">';
			videoHtml += '<source class="video-source" src="'+video+'" type="video/mp4">'
			videoHtml += '<!--[if IE 9]>';
		    videoHtml += '<source id="videoSource" class="video-source" type="video/mp4" src="视频连接videoUrl">';
		    videoHtml += '<![endif]-->';
			videoHtml += '<p class="vjs-no-js">The current browser does not support video direct playback, click here to download the video: <a style="color:#e5a442;" id="vjs-no-link" href="https://img.kidsproductwholesale.com/importcsvimg/webpic/img/overseavide/mindy/520964008900.mp4" target="_blank">Download video</a></p>';
			videoHtml += "</video>"
			videoHtml +='<div class="video_close" onClick="closeVideo()">X</div>'
			$('#videoPopUp').html(videoHtml);
	        $('#videoPopUp').show();
			$("body").addClass("has_popup");
	    });
	});
	
	showEchart();
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
	var v = document.getElementById('video');//获取视频节点
	$('#videoPopUp').css("display", "none");//点击关闭按钮关闭暂停视频
	v.pause();
	$('#videoPopUp').html("");
}
function getCurrentInfo(obj) {
	var currentName = $(obj).text();
	$("#currentName").html(currentName + " &#xe7ee;")
	$("#nameList").fadeOut(300);
}

function showNameList() {
	$("#nameList").fadeToggle(300);
}

function changeMonth(month, obj) {
	$(".active_month").removeClass("active_month")
	$(obj).addClass("active_month")
}

function changeDate(date, obj) {
	$(".active_date").removeClass("active_date")
	$(obj).addClass("active_date")
}

function showEchart() {
	var myChart = echarts.init(document.getElementById('main'));
	option = {
		grid: {
			top: "0px",
			left: "0px",
			right: "0px",
			bottom: "40px"
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['7am', '8 am', '9am', '10am', '11am', '12pm', '13pm', '7am', '8 am', '9am', '10am', '11am', '12pm', '13pm',
				'13pm', '14pm', '15pm', '16pm', '17pm', '18pm', '19pm', '20pm', '21pm', '22pm', '23pm', '24pm'
			],
			axisLabel: {
				show: true,
				textStyle: {
					color: '#51516B'
				}
			}
		},
		yAxis: {
			type: 'value',
			min: -10,
			max: 50,

		},
		series: [{
			data: [30, 35, 28, 22, 17, 25, 0, 30, 35, 28, 22, 10, 0, 30],
			type: 'line',
			areaStyle: {
				normal: {
					//颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(21, 255, 203, 1)'
					}, {
						offset: .34,
						color: 'rgba(27, 200, 238, 1)'
					}, {
						offset: 1,
						color: 'rgba(30, 173, 255, 0)'
					}])


				}
			},
			itemStyle: {
				normal: {
					color: 'rgba(30, 173, 255, 0)', //改变折线点的颜色
					lineStyle: {
						color: 'rgba(21, 255, 203, 1)' //改变折线颜色
					}
				}
			},
		}],

	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}
