var total_user_number =  $(".user_each").length;
var changedName;//修改名字
var changedFlag = false;//是否改变了任一参数
var addOrEdit = 0; //0:add 1 :edit
var setTime;//setTimeout
$(function(){
	if(total_user_number>= 3){ //添加成员也算其中之一
		$(".add_user").hide();
	}
	else{
		$(".add_user").show();
	}
	getEquipments();
})
/**
 * 添加新成员
 */
function addNewMember(obj){
	addOrEdit = 0;
	if(total_user_number<3){
		$("#userName").text("");
		$("#userGender").text("");
		$("#userMonitorType").text("");
		$("#userHeight").text("");
		$("#userWeight").text("");
		$("#userMTime").text("");
		$("#userData").text("");
		$(".user_info").show();
	}
	else{
		
	}
}

/**
 * 成员编辑
 */
function eidtUser(obj){
	addOrEdit = 1;
	obj = {"name":"张三","gender":"男","type":"高低肩","height":"152 cm","weight":"50 KG", "monitorTime":"7：20AM-10:00PM","result":"偏差6cm，中度症状"}
	$("#userName").text(obj.name);
	$("#userGender").text(obj.gender);
	$("#userMonitorType").text(obj.type);
	if(obj.height){
		$("#userHeight").text(obj.height).removeClass("unset");
	}
	else{
		$("#userHeight").text("未设置").addClass("unset");
	}
	if(obj.weight){
		$("#userWeight").text(obj.weight).removeClass("unset");
	}
	else{
		$("#userWeight").text("未设置").addClass("unset");
	}
	if(obj.monitorTime){
		$("#userMTime").text(obj.weight).removeClass("unset");
	}
	else{
		$("#userMTime").text("未设置").addClass("unset");
	}
	$("#userData").text(obj.result);
	$(".user_info").show();
}
function hideEdit(){
	changedFlag = false;
	$(".user_info").hide();
	$("#userName").text("");
	$("#userGender").text("");
	$("#userMonitorType").text("");
	$("#userHeight").text("");
	$("#userWeight").text("");
	$("#userMTime").text("");
	$("#userData").text("");
}

function ChangeWindow(type){
	if(type == 0){
		if(addOrEdit == 0){
			$(".change_title").text("新增用户名")
		}
		else if(addOrEdit == 1){
			$(".change_title").text("修改用户名")
		}
		$("#changedUserName").val($("#userName").text());
		$(".popChange,.popChange_bg").show();
	}
	else if(type == 1){
		$(".popChange,.popChange_bg").hide();
	}
}
function changeDone(){
	changedFlag = true;
	$("#userName").text(changedName);
	ChangeWindow(1);
}
function insertName(obj){
	changedName = $(obj).val();
	if(changedName.length>1){
		$(".change_done").removeClass("changing_btn");
		$(".change_done").attr("onclick","changeDone()");
	}
	else{
		$(".change_done").addClass("changing_btn");
		$(".change_done").attr("onclick","");
	}
}
function clearName(){
	$("#changedUserName").val("");
	$(".change_done").removeClass("changing_btn");
	$(".change_done").addClass("changing_btn");
	$(".change_done").attr("onclick","");
}

function submitChange(){
	var newName = $("#userName").text();
	var newGender = $("#userGender").text();
	var newType = $("#userMonitorType").text();
	var newHeight = $("#userHeight").text();
	var newWeight = $("#userWeight").text();
	var newTime = $("#userMTime").text();
	var newData = $("#userData").text();
	if(newName){
		if(newGender){
			if(newType){
				if(total_user_number==1){
					newUserHtmlFn(1,newName,newType)
				}
				else if(total_user_number==2){
					newUserHtmlFn(2,newName,newType)
				}
			}
			else{
				$("#typeWrapper").addClass("color_red");
				setTime = setTimeout(function(){
					$("#typeWrapper").removeClass("color_red");
				},1500)
				return;
			}
		}
		else{
			$("#genderWrapper").addClass("color_red");
			setTime = setTimeout(function(){
				$("#genderWrapper").removeClass("color_red");
			},1500)
			return;
		}
	}
	else{
		$("#userNameWrapper").addClass("color_red");
		setTime = setTimeout(function(){
			$("#userNameWrapper").removeClass("color_red");
		},1500)
		return;
	}
	$(".user_info").hide();
	$("#userName").text("");
	$("#userGender").text("");
	$("#userMonitorType").text("");
	$("#userHeight").text("");
	$("#userWeight").text("");
	$("#userMTime").text("");
	$("#userData").text("");
}

function newUserHtmlFn(userNumber,newName,newType){ //type 1: 1个用户 2， 2个用户
	var newUserHtml = '';
	if(userNumber == 1){
		newUserHtml+='<div class="each_user_wrapper col-xs-4 padding25">';
	}
	else{
		newUserHtml+='<div class="each_user_wrapper col-xs-4 padding-left5">';
	}
	newUserHtml+='<div class="each_user user_each" onclick="eidtUser(this)">';
	newUserHtml+='<div class="row">';
	newUserHtml+='<div class="col-xs-6 user_name padding-right5">'+newName+'</div>';
	newUserHtml+='<div class="col-xs-6 user_type padding-left5">'+newType+'</div>';
	newUserHtml+='<div class="col-xs-12 user_result"> </div>';
	newUserHtml+='<div class="col-xs-8 padding-right5">本周数据</div>';
	newUserHtml+='<div class="col-xs-4 iconfont padding-left5">&#xe7eb;</div>';
	newUserHtml+='</div></div></div>';
	$("#addUserWrapper").before(newUserHtml);
	if(userNumber == 1){
		
	}
	else{
		$("#addUserWrapper,.note").remove();
		
	}
}

function getEquipments() {
	$.ajax({
		type: "GET",
		url:"../static/list.json",
		dataType: "JSON",
		beforeSend: function () {
		 
		},
		success:function(res){
			if(true){
				var equipment = res.data;
				var equipmentHtml = '';
				for(var i in equipment){
					var eachEquipmentHtml='<div class="row">';
					eachEquipmentHtml += '<div class="col-xs-12 equipment_title text-left">'+ i +'</div><div class="col-xs-12">';
					var eachEquipment = equipment[i];
					for(var j in eachEquipment){
						eachEquipmentHtml += '<div class="row each_equipment">';
						eachEquipmentHtml += '<div class="col-xs-4 left_img"><div class="img_wrapper"><img src="'+eachEquipment[j].url +'" alt=""></div></div>';
						eachEquipmentHtml += '<div class="col-xs-8 right_info"><div class="row text-left">';
						eachEquipmentHtml += '<div class="col-xs-12 each_title">'+eachEquipment[j].name +'</div>';
						eachEquipmentHtml += '<div class="col-xs-12 each_desc">'+eachEquipment[j].detail +'</div>';
						eachEquipmentHtml += '</div></div></div>';
					}
					eachEquipmentHtml += '</div></div>';
					equipmentHtml +=eachEquipmentHtml;
				}
				$(".list_wrapper").html(equipmentHtml)
			}
		},
		error:function(res){
			console.log(res);
		}
	})
}

function showEquipment(type){
	if(type == 0){
		$(".equipment_list").show();
	}
	else if(type == 1){
		$(".equipment_list").hide();
	}
}