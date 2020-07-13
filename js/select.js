var picker,pickerType,pickerWeight,pickerGender ;

$(function(){
	showLevelHeight();
	showGender();
	showType();
	showWeight();
})

function showLevelHeight() {
		picker = new mui.PopPicker({
			layer: 1,
			buttons: ['取消','确定']
		});
		picker.setData(
			[
				{value: "1",text: "140 cm"}, 
				{value: "2",text: "141 cm"},
				{value: "3",text: "142 cm"},	
				{value: "4",text: "143 cm"},
				{value: "5",text: "144 cm"},
				{value: "6",text: "145 cm"},
				{value: "7",text: "146 cm"},
				{value: "8",text: "147 cm"},
				{value: "9",text: "148 cm"},
				{value: "10",text: "149 cm"},
				{value: "11",text: "150 cm"},
				{value: "12",text: "151 cm"},
				{value: "13",text: "152 cm"},
				{value: "14",text: "153 cm"},
				{value: "15",text: "154 cm"},
				{value: "16",text: "155 cm"},
				{value: "17",text: "156 cm"},
				{value: "18",text: "157 cm"},
				{value: "19",text: "158 cm"},
				{value: "20",text: "159 cm"},
				{value: "21",text: "160 cm"},
				{value: "22",text: "161 cm"},
				{value: "23",text: "162 cm"},
				{value: "24",text: "163 cm"},
				{value: "25",text: "164 cm"},
				{value: "26",text: "165 cm"},
				{value: "27",text: "166 cm"},
				{value: "28",text: "167 cm"},
				{value: "29",text: "169 cm"},
				{value: "30",text: "170 cm"},
				{value: "31",text: "171 cm"},
				{value: "32",text: "172 cm"},
			    {value: "33",text: "173 cm"},
			    {value: "34",text: "174 cm"},
			    {value: "35",text: "175 cm"},
			    {value: "36",text: "176 cm"},
			    {value: "37",text: "177 cm"},
			    {value: "38",text: "178 cm"},
			    {value: "39",text: "179 cm"},
			    {value: "40",text: "180 cm"},
				{value: "41",text: "181 cm"},
				{value: "42",text: "182 cm"},
				{value: "43",text: "183 cm"},
				{value: "44",text: "184 cm"},
				{value: "45",text: "185 cm"},
				{value: "46",text: "186 cm"},
				{value: "47",text: "187 cm"},
				{value: "48",text: "188 cm"},
				{value: "49",text: "189 cm"},
				{value: "50",text: "190 cm"},
				{value: "51",text: "191 cm"},
				{value: "52",text: "192 cm"},
				{value: "53",text: "193 cm"},
				{value: "54",text: "194 cm"},
				{value: "55",text: "195 cm"},
				{value: "56",text: "196 cm"},
				{value: "57",text: "197 cm"},
				{value: "58",text: "198 cm"},
				{value: "59",text: "199 cm"},
				{value: "60",text: "200 cm"}
			]
		);
		document.getElementById("heightWrapper").addEventListener('tap', function(event) {
			var currentHeight = $("#userHeight").text();
			var checkData = picker.pickers[0].items;
			var currentIndex = 20;
			for(var i in checkData){
				if(checkData[i].text == currentHeight){
					currentIndex = i
					break;
				}
			}
			picker.pickers[0].setSelectedIndex(currentIndex, 2000);
			picker.show(function(selectItems) {
				var text = selectItems[0].text;
				$("#userHeight").text(text);
				$("#userHeight").removeClass('unset');
				 window.sessionStorage.setItem('userHeight',text);
			});
			
		});
	}
function showGender() {
	pickerGender = new mui.PopPicker({
		layer: 1,
		buttons: ['取消','确定']
	});
	pickerGender.setData(
		[
			{value: "1",text: "男"}, 
			{value: "2",text: "女"},
		]
	);
	document.getElementById("genderWrapper").addEventListener('tap', function(event) {
		var currentHeight = $("#userGender").text();
		var checkData = pickerGender.pickers[0].items;
		var currentIndex = 0;
		for(var i in checkData){
			if(checkData[i].text == currentHeight){
				currentIndex = i
				break;
			}
		}
		pickerGender.pickers[0].setSelectedIndex(currentIndex, 2000);
		pickerGender.show(function(selectItems) {
			var text = selectItems[0].text;
			$("#userGender").text(text);
			$("#userGender").removeClass('unset');
			 window.sessionStorage.setItem('userGender',text);
		});
	});
}
function showType() {
	pickerType = new mui.PopPicker({
		layer: 1,
		buttons: ['取消','确定']
	});
	pickerType.setData(
		[
			{value: "1",text: "高低肩"}, 
			{value: "2",text: "驼背"},
		]
	);
	document.getElementById("typeWrapper").addEventListener('tap', function(event) {
		var currentHeight = $("#userMonitorType").text();
		var checkData = pickerType.pickers[0].items;
		var currentIndex =0;
		for(var i in checkData){
			if(checkData[i].text == currentHeight){
				currentIndex = i
				break;
			}
		}
		$(".select_bg").show();
		pickerType.pickers[0].setSelectedIndex(currentIndex, 2000);
		pickerType.show(function(selectItems) {
			var text = selectItems[0].text;
			$("#userMonitorType").text(text);
			$("#userMonitorType").removeClass('unset');
			$(".select_bg").hide();
			 window.sessionStorage.setItem('userMonitorType',text);
		});
	});
	
}
function showWeight() {
	pickerWeight = new mui.PopPicker({
		layer: 1,
		buttons: ['取消','确定']
	});
	pickerWeight.setData(
		[
			{value: "1",text: "30 KG"}, 
			{value: "2",text: "31 KG"},
			{value: "3",text: "32 KG"},	
			{value: "4",text: "33 KG"},
			{value: "5",text: "34 KG"},
			{value: "6",text: "35 KG"},
			{value: "7",text: "36 KG"},
			{value: "8",text: "37 KG"},
			{value: "9",text: "38 KG"},
			{value: "10",text: "39 KG"},
			{value: "11",text: "40 KG"},
			{value: "12",text: "41 KG"},
			{value: "13",text: "42 KG"},
			{value: "14",text: "43 KG"},
			{value: "15",text: "44 KG"},
			{value: "16",text: "45 KG"},
			{value: "17",text: "46 KG"},
			{value: "18",text: "47 KG"},
			{value: "19",text: "48 KG"},
			{value: "20",text: "49 KG"},
			{value: "21",text: "50 KG"},
			{value: "22",text: "51 KG"},
			{value: "23",text: "52 KG"},
			{value: "24",text: "53 KG"},
			{value: "25",text: "54 KG"},
			{value: "26",text: "55 KG"},
			{value: "27",text: "56 KG"},
			{value: "28",text: "57 KG"},
			{value: "29",text: "58 KG"},
			{value: "30",text: "59 KG"},
			{value: "31",text: "60 KG"},
			{value: "32",text: "61 KG"},
			{value: "33",text: "62 KG"},
			{value: "34",text: "63 KG"},
			{value: "35",text: "64 KG"},
			{value: "36",text: "65 KG"},
			{value: "37",text: "66 KG"},
			{value: "38",text: "67 KG"},
			{value: "39",text: "68 KG"},
			{value: "40",text: "69 KG"},
			{value: "41",text: "70 KG"},
			{value: "42",text: "71 KG"},
			{value: "43",text: "72 KG"},
			{value: "44",text: "73 KG"},
			{value: "45",text: "74 KG"},
			{value: "46",text: "75 KG"},
			{value: "47",text: "76 KG"},
			{value: "48",text: "77 KG"},
			{value: "49",text: "78 KG"},
			{value: "50",text: "79 KG"},
			{value: "51",text: "80 cm"},
			
		]
	);
	document.getElementById("weightWrapper").addEventListener('tap', function(event) {
		var currentHeight = $("#userWeight").text();
		var checkData = pickerWeight.pickers[0].items;
		var currentIndex = 0;
		for(var i in checkData){
			if(checkData[i].text == currentHeight){
				currentIndex = i
				break;
			}
		}
		pickerWeight.pickers[0].setSelectedIndex(currentIndex, 2000);
		pickerWeight.show(function(selectItems) {
			var text = selectItems[0].text;
			$("#userWeight").text(text);
			$("#userWeight").removeClass('unset');
			 window.sessionStorage.setItem('userWeight',text);
		});
		
	});
}
