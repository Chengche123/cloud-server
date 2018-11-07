/*  welcome attribute */
var welcome_attribute = (
	function () {
		/*  css attribute */
		var _class = document.getElementsByClassName("class_welcome");
		_class[0].className = "-royalBlue";
		/* content attribute */
		var _id = document.getElementById("id_welcome");

		var newContent;
		now = new Date(), hour = now.getHours()
		if (hour < 6) {
			newContent = "凌晨好"
		} else if (hour < 9) {
			newContent = "早上好"
		} else if (hour < 12) {
			newContent = "上午好"
		} else if (hour < 14) {
			newContent = "中午好"
		} else if (hour < 17) {
			newContent = "下午好"
		} else if (hour < 19) {
			newContent = "傍晚好"
		} else if (hour < 22) {
			newContent = "晚上好"
		} else {
			newContent = "夜里好"
		}
		newContent = newContent + "，当前界面为主界面。" ;




		_id.innerText = newContent;

	}

	()
);
var control_attribute = (
	function () {
		/*  css change  */
		var css = document.getElementsByClassName("class_control");
		css[0].className = "-red";
		/*  content change   */

	}
	()
);
var spy_attribute = (
	function() {
		/*  css change  */
		var css = document.getElementsByClassName("class_spy") ;
		css[0].className = "-yellow" ;
		
		
		
	}
()
);



function myFunction()
{

  var id_save = document.getElementById("savebtn") ;
	if ( id_save.innerText == "当前状态为关，点击打开" ) {
		id_save.innerText = "当前状态为开，点击关闭" ;
	}
	else {
		id_save.innerText = "当前状态为关，点击打开" ;
	}
  
 

  var xhr = new XMLHttpRequest();
  var url = "http://192.168.11.4/control_1_toggle";



  xhr.open("GET", url, true);  /*  设置新的html页面 */
  xhr.send();	/*  数据有序化成json */
  
}
