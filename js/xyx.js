$(document).ready(function() {
	$(".start").click(function() {
		$(".welcome").hide();
		$(".start").hide();
		$(".more").hide();
		$(".mask").hide();
		$(".time").show();
		startTime = new Date();
		timer = setInterval(function() {
				timeUse = new Date() - startTime;
				var m = parseInt(timeUse / 1000 / 60);
				var s = (timeUse / 1000) % 60;
				timeStr = (m > 0 ? m + "分" : "") + s.toFixed(2) + "秒";
				$(".time").text("用时：" + timeStr)
			},
			25)
	})
	$(".reload").click(function() {
		$(".result").hide();
		$(".reload").hide();
		$(".mask").hide();
		$(".success").hide();
		$(".failure").hide();
		$(".more").hide();
		$(".time").show();
		startTime = new Date();
		timer = setInterval(function() {
				timeUse = new Date() - startTime;
				var m = parseInt(timeUse / 1000 / 60);
				var s = (timeUse / 1000) % 60;
				timeStr = (m > 0 ? m + "分" : "") + s.toFixed(2) + "秒";
				$(".time").text("用时：" + timeStr)
			},
			25)
		num = 0;
		chuan = 160;
		kzc += 1;
		nan = 0;
		nv = 0;
		console.log(kzc);
		$(".boat").css("left", chuan + "px");
		for(var b = 0; b < yline_girl.length; b++) {
			yline_girl[b].index = b;
			yline_girl[b].innerHTML = "<div class='girl'></div>";
			yline_boy[b].index = b;
			yline_boy[b].innerHTML = "<div class='boy'></div>";
			zline_boy[b].index = b;
			zline_boy[b].innerHTML = "";
			zline_girl[b].index = b;
			zline_girl[b].innerHTML = "";
		}
		//		for(var b = 0; b < yline_boy.length; b++) {
		//				yline_boy[b].index = b;
		//				yline_boy[b].innerHTML = "<div class='boy'></div>";
		//			}
		//		for(var b = 0; b < zline_boy.length; b++) {
		//				zline_boy[b].index = b;
		//				zline_boy[b].innerHTML = "";
		//			}
		//		for(var b = 0; b < zline_girl.length; b++) {
		//				zline_girl[b].index = b;
		//				zline_girl[b].innerHTML = "";
		//			}
		for(var c = 0; c < seat.length; c++) {
			seat[c].index = c;
			seat[c].innerHTML = "";
		}
		//	右边船上小人上岸点击事件绑定
		for(var c = 0; c < seat.length; c++) {
			seat[c].index = c;
			seat[c].addEventListener("click", y_go);
		}
		//	左边船上小人上岸点击事件解绑
		for(var c = 0; c < seat.length; c++) {
			seat[c].index = c;
			seat[c].removeEventListener("click", z_go);
		}
		//	右边岸上boy点击事件绑定
		for(var a = 0; a < yline_boy.length; a++) {
			yline_boy[a].index = a;
			yline_boy[a].addEventListener("click", y_boy);
		}
		//	左边岸上boy点击事件解绑
		for(var a = 0; a < zline_boy.length; a++) {
			zline_boy[a].index = a;
			zline_boy[a].removeEventListener("click", z_boy);
		}
		//	右边岸上girl点击事件绑定
		for(var a = 0; a < yline_girl.length; a++) {
			yline_girl[a].index = a;
			yline_girl[a].addEventListener("click", y_girl);
		}
		//	左边岸上girl点击事件解绑
		for(var a = 0; a < zline_girl.length; a++) {
			zline_girl[a].index = a;
			zline_girl[a].removeEventListener("click", z_girl);
		}
	})
	//	右边岸上的div
	var R = document.getElementsByClassName("R")[0];
	var yline_boy = R.getElementsByClassName("line_boy");
	var yline_girl = R.getElementsByClassName("line_girl");
	//	左边岸上的div
	var L = document.getElementsByClassName("L")[0];
	var zline_boy = L.getElementsByClassName("line_boy");
	var zline_girl = L.getElementsByClassName("line_girl");

	//	开船按钮
	var seat = document.getElementsByClassName("seat");
	var num = 0;

	//	右边岸上boy点击事件
	for(var a = 0; a < yline_boy.length; a++) {
		yline_boy[a].index = a;
		yline_boy[a].addEventListener("click", y_boy);
	}
	//	左边岸上boy点击事件
	//	for(var a = 0; a < zline_boy.length; a++) {
	//		zline_boy[a].index = a;
	//		zline_boy[a].addEventListener("click", z_boy);
	//	}
	//	右边岸上girl点击事件
	for(var a = 0; a < yline_girl.length; a++) {
		yline_girl[a].index = a;
		yline_girl[a].addEventListener("click", y_girl);
	}
	//	左边岸上girl点击事件
	//	for(var a = 0; a < zline_girl.length; a++) {
	//		zline_girl[a].index = a;
	//		zline_girl[a].addEventListener("click", z_girl);
	//	}
	//	右边船上小人上岸点击事件
	for(var c = 0; c < seat.length; c++) {
		seat[c].index = c;
		seat[c].addEventListener("click", y_go);
	}
	//	左边船上小人上岸点击事件
	//	for(var c = 0; c < seat.length; c++) {
	//		seat[c].index = c;
	//		seat[c].addEventListener("click", z_go);
	//	}
	var chuan = 160;
	var kzc = 0;
	var nan = 0;
	var nv = 0;
	var ynan = 0;
	var ynv = 0;
	$(".go").click(function() {
		kzc++;
		console.log(kzc);
		if(kzc % 2 == 0) {
			chuan = 160;
			nan = 0;
			nv = 0;
			ynan = 0;
			ynv = 0;
			//船在右边时执行的代码
			//	右边船上小人上岸点击事件绑定
			for(var c = 0; c < seat.length; c++) {
				seat[c].index = c;
				seat[c].addEventListener("click", y_go);
			}
			//	左边船上小人上岸点击事件解绑
			for(var c = 0; c < seat.length; c++) {
				seat[c].index = c;
				seat[c].removeEventListener("click", z_go);
			}
			//	右边岸上boy点击事件绑定
			for(var a = 0; a < yline_boy.length; a++) {
				yline_boy[a].index = a;
				yline_boy[a].addEventListener("click", y_boy);
			}
			//	左边岸上boy点击事件解绑
			for(var a = 0; a < zline_boy.length; a++) {
				zline_boy[a].index = a;
				zline_boy[a].removeEventListener("click", z_boy);
			}
			//	右边岸上girl点击事件绑定
			for(var a = 0; a < yline_girl.length; a++) {
				yline_girl[a].index = a;
				yline_girl[a].addEventListener("click", y_girl);
			}
			//	左边岸上girl点击事件解绑
			for(var a = 0; a < zline_girl.length; a++) {
				zline_girl[a].index = a;
				zline_girl[a].removeEventListener("click", z_girl);
			}

			$(".boat").css("left", chuan + "px");

			setTimeout(function() {
				console.log(seat[0].children[0]);
				console.log(seat[1].firstChild);
				if(zline_boy[0].firstChild != null) {
					nan++;
				}
				if(yline_boy[0].firstChild != null) {
					ynan++;
				}
				if(zline_boy[1].firstChild != null) {
					nan++;
				}
				if(yline_boy[1].firstChild != null) {
					ynan++;
				}
				if(zline_boy[2].firstChild != null) {
					nan++;
				}
				if(yline_boy[2].firstChild != null) {
					ynan++;
				}
				if(zline_girl[0].firstChild != null) {
					nv++;
				}
				if(yline_girl[0].firstChild != null) {
					ynv++;
				}
				if(zline_girl[1].firstChild != null) {
					nv++;
				}
				if(yline_girl[1].firstChild != null) {
					ynv++;
				}
				if(zline_girl[2].firstChild != null) {
					nv++;
				}
				if(yline_girl[2].firstChild != null) {
					ynv++;
				}
				if(seat[0].firstChild != undefined) {
					if(seat[0].firstChild.className == "boy") {
						ynan++;
					}
					if(seat[0].firstChild.className == "girl") {
						ynv++;
					}
				}
				if(seat[1].firstChild != null) {
					if(seat[1].firstChild.className == "boy") {
						ynan++;
					}
					if(seat[1].firstChild.className == "girl") {
						ynv++;
					}
				}

				//												alert("z男"+nan);
				//												alert("z女"+nv);
				//												alert("y男"+ynan);
				//												alert("y女"+ynv);
				if(nv != 0 && nan > nv) {
					clearInterval(timer);
					$(".mask").show();
					$(".go").hide();
					$(".time").hide();
					$(".failure").show();
					$(".more").css("left", 150).css("top", 270).show();
					$(".reload").show();
				} else if(ynv != 0 && ynan > ynv) {
					clearInterval(timer);
					$(".mask").show();
					$(".go").hide();
					$(".time").hide();
					$(".failure").show();
					$(".more").css("left", 150).css("top", 270).show();
					$(".reload").show();
				}
			}, 1000)

		} else if(kzc % 2 != 0) {

			chuan = 0;
			nan = 0;
			nv = 0;
			ynan = 0;
			ynv = 0;
			//			船在左边时执行的代码
			//	右边船上小人上岸点击事件解绑
			for(var c = 0; c < seat.length; c++) {
				seat[c].index = c;
				seat[c].removeEventListener("click", y_go);
			}
			//	左边船上小人上岸点击事件绑定
			for(var c = 0; c < seat.length; c++) {
				seat[c].index = c;
				seat[c].addEventListener("click", z_go);
			}
			//	右边岸上boy点击事件解绑
			for(var a = 0; a < yline_boy.length; a++) {
				yline_boy[a].index = a;
				yline_boy[a].removeEventListener("click", y_boy);
			}
			//	左边岸上boy点击事件绑定
			for(var a = 0; a < zline_boy.length; a++) {
				zline_boy[a].index = a;
				zline_boy[a].addEventListener("click", z_boy);
			}
			//	右边岸上girl点击事件解绑
			for(var a = 0; a < yline_girl.length; a++) {
				yline_girl[a].index = a;
				yline_girl[a].removeEventListener("click", y_girl);
			}
			//	左边岸上girl点击事件绑定
			for(var a = 0; a < zline_girl.length; a++) {
				zline_girl[a].index = a;
				zline_girl[a].addEventListener("click", z_girl);
			}

			$(".boat").css("left", chuan + "px");
			console.log(seat[0].firstChild);
			console.log(seat[1].firstChild);
			setTimeout(function() {
				if(zline_boy[0].firstChild != null) {
					nan++;
				}
				if(yline_boy[0].firstChild != null) {
					ynan++;
				}
				if(zline_boy[1].firstChild != null) {
					nan++;
				}
				if(yline_boy[1].firstChild != null) {
					ynan++;
				}
				if(zline_boy[2].firstChild != null) {
					nan++;
				}
				if(yline_boy[2].firstChild != null) {
					ynan++;
				}
				if(zline_girl[0].firstChild != null) {
					nv++;
				}
				if(yline_girl[0].firstChild != null) {
					ynv++;
				}
				if(zline_girl[1].firstChild != null) {
					nv++;
				}
				if(yline_girl[1].firstChild != null) {
					ynv++;
				}
				if(zline_girl[2].firstChild != null) {
					nv++;
				}
				if(yline_girl[2].firstChild != null) {
					ynv++;
				}
				if(seat[0].firstChild != null) {
					if(seat[0].firstChild.className == "boy") {
						nan++;
					} else if(seat[0].firstChild.className == "girl") {
						nv++;
					}
				}
				if(seat[1].firstChild != null) {
					if(seat[1].firstChild.className == "boy") {
						nan++;
					}

					if(seat[1].firstChild.className == "girl") {
						nv++;
					}
				}

				//				alert(nan);
				//				alert(nv);
				if(nv != 0 && nan > nv) {
					clearInterval(timer);
					$(".mask").show();
					$(".go").hide();
					$(".time").hide();
					$(".failure").show();
					$(".more").css("left", 150).css("top", 270).show();
					$(".reload").show();
				} else if(ynv != 0 && ynan > ynv) {
					clearInterval(timer);
					$(".mask").show();
					$(".go").hide();
					$(".time").hide();
					$(".failure").show();
					$(".more").css("left", 150).css("top", 270).show();
					$(".reload").show();
				}

			}, 1000)

		}

	})

	function y_boy() {
		num++;
		console.log(num);
		if(num == 1) {
			for(var b = 0; b < yline_boy.length; b++) {
				yline_boy[b].index = b;
				yline_boy[this.index].innerHTML = "";
			}
			for(var d = 0; d < seat.length; d++) {
				seat[d].index = d;
				if(seat[0].innerHTML == "") {
					seat[0].innerHTML = "<div class='boy'></div>";
					break;
				} else if(seat[1].innerHTML == "") {
					seat[1].innerHTML = "<div class='boy'></div>";
					break;
				}
			}
		} else if(num == 2) {
			for(var b = 0; b < yline_boy.length; b++) {
				yline_boy[b].index = b;
				yline_boy[this.index].innerHTML = "";
			}
			for(var d = 0; d < seat.length; d++) {
				seat[d].index = d;
				if(seat[0].innerHTML == "") {
					seat[0].innerHTML = "<div class='boy'></div>";
					break;
				} else if(seat[1].innerHTML == "") {
					seat[1].innerHTML = "<div class='boy'></div>";
					break;
				}
			}
		} else if(num > 2) {
			num = 2;
			for(var b = 0; b < yline_boy.length; b++) {
				yline_boy[b].index = b;
			}
		}
		//			控制开船按钮的显示
		if(num > 0) {
			$(".go").show();
		} else {
			$(".go").hide();
		}
	}

	function z_boy() {
		num++;

		if(num == 1) {
			for(var b = 0; b < zline_boy.length; b++) {
				zline_boy[b].index = b;
				zline_boy[this.index].innerHTML = "";
			}
			for(var d = 0; d < seat.length; d++) {
				seat[d].index = d;
				if(seat[0].innerHTML == "") {
					seat[0].innerHTML = "<div class='boy'></div>";
					break;
				} else if(seat[1].innerHTML == "") {
					seat[1].innerHTML = "<div class='boy'></div>";
					break;
				}
			}
		} else if(num == 2) {
			for(var b = 0; b < zline_boy.length; b++) {
				zline_boy[b].index = b;
				zline_boy[this.index].innerHTML = "";
			}
			for(var d = 0; d < seat.length; d++) {
				seat[d].index = d;
				if(seat[0].innerHTML == "") {
					seat[0].innerHTML = "<div class='boy'></div>";
					break;
				} else if(seat[1].innerHTML == "") {
					seat[1].innerHTML = "<div class='boy'></div>";
					break;
				}
			}
		} else if(num > 2) {
			num = 2;
			for(var b = 0; b < zline_boy.length; b++) {
				zline_boy[b].index = b;
			}
		}
		//			控制开船按钮的显示
		if(num > 0) {
			$(".go").show();
		} else {
			$(".go").hide();
		}
	}

	function y_girl() {
		num++;

		if(num == 1) {
			for(var b = 0; b < yline_girl.length; b++) {
				yline_girl[b].index = b;
				yline_girl[this.index].innerHTML = "";
			}
			for(var d = 0; d < seat.length; d++) {
				seat[d].index = d;
				if(seat[0].innerHTML == "") {
					seat[0].innerHTML = "<div class='girl'></div>";
					break;
				} else if(seat[1].innerHTML == "") {
					seat[1].innerHTML = "<div class='girl'></div>";
					break;
				}
			}
		} else if(num == 2) {
			for(var b = 0; b < yline_girl.length; b++) {
				yline_girl[b].index = b;
				yline_girl[this.index].innerHTML = "";
			}
			for(var d = 0; d < seat.length; d++) {
				seat[d].index = d;
				if(seat[0].innerHTML == "") {
					seat[0].innerHTML = "<div class='girl'></div>";
					break;
				} else if(seat[1].innerHTML == "") {
					seat[1].innerHTML = "<div class='girl'></div>";
					break;
				}
			}
		} else if(num > 2) {
			num = 2;
			for(var b = 0; b < yline_girl.length; b++) {
				yline_girl[b].index = b;
			}
		}
		//			控制开船按钮的显示
		if(num > 0) {
			$(".go").show();
		} else {
			$(".go").hide();
		}
	}

	function z_girl() {
		num++;

		if(num == 1) {
			for(var b = 0; b < zline_girl.length; b++) {
				zline_girl[b].index = b;
				zline_girl[this.index].innerHTML = "";
			}
			for(var d = 0; d < seat.length; d++) {
				seat[d].index = d;
				if(seat[0].innerHTML == "") {
					seat[0].innerHTML = "<div class='girl'></div>";
					break;
				} else if(seat[1].innerHTML == "") {
					seat[1].innerHTML = "<div class='girl'></div>";
					break;
				}
			}
		} else if(num == 2) {
			for(var b = 0; b < zline_girl.length; b++) {
				zline_girl[b].index = b;
				zline_girl[this.index].innerHTML = "";
			}
			for(var d = 0; d < seat.length; d++) {
				seat[d].index = d;
				if(seat[0].innerHTML == "") {
					seat[0].innerHTML = "<div class='girl'></div>";
					break;
				} else if(seat[1].innerHTML == "") {
					seat[1].innerHTML = "<div class='girl'></div>";
					break;
				}
			}
		} else if(num > 2) {
			num = 2;
			for(var b = 0; b < zline_girl.length; b++) {
				zline_girl[b].index = b;
			}
		}
		//			控制开船按钮的显示
		if(num > 0) {
			$(".go").show();
		} else {
			$(".go").hide();
		}
	}

	function y_go() {
		num--;
		for(var d = 0; d < seat.length; d++) {
			seat[d].index = d;
			//			console.log(seat[this.index].innerHTML);
			//			seat[this.index].innerHTML = " ";
			//			if(seat[this.index].innerHTML == "<div class='boy'></div>") {
			//				seat[this.index].innerHTML = "";
			//				if(yline_boy[0].innerHTML == "") {
			//					yline_boy[0].innerHTML = "<div class='boy'></div>";
			//					break;
			//				} else if(yline_boy[1].innerHTML == "") {
			//					yline_boy[1].innerHTML = "<div class='boy'></div>";
			//					break;
			//				} else if(yline_boy[2].innerHTML == "") {
			//					yline_boy[2].innerHTML = "<div class='boy'></div>";
			//					break;
			//				}
			//			}
			//			if(seat[this.index].innerHTML == "<div class='girl'></div>") {
			//				seat[this.index].innerHTML = "";
			//				if(yline_girl[0].innerHTML == "") {
			//					yline_girl[0].innerHTML = "<div class='girl'></div>";
			//					break;
			//				} else if(yline_girl[1].innerHTML == "") {
			//					yline_girl[1].innerHTML = "<div class='girl'></div>";
			//					break;
			//				} else if(yline_girl[2].innerHTML == "") {
			//					yline_girl[2].innerHTML = "<div class='girl'></div>";
			//					break;
			//				}
			//			}
			//			console.log(seat[this.index].children[0].className);
			if(seat[this.index].children[0] != null) {
				if(seat[this.index].children[0].className == "boy") {
					seat[this.index].innerHTML = "";
					//				alert("boy");
					if(yline_boy[0].innerHTML == "") {
						yline_boy[0].innerHTML = "<div class='boy'></div>";

					} else if(yline_boy[1].innerHTML == "") {
						yline_boy[1].innerHTML = "<div class='boy'></div>";

					} else if(yline_boy[2].innerHTML == "") {
						yline_boy[2].innerHTML = "<div class='boy'></div>";

					}
				} else if(seat[this.index].children[0].className == "girl") {
					seat[this.index].innerHTML = "";
					//				alert("girl");
					if(yline_girl[0].innerHTML == "") {
						yline_girl[0].innerHTML = "<div class='girl'></div>";

					} else if(yline_girl[1].innerHTML == "") {
						yline_girl[1].innerHTML = "<div class='girl'></div>";

					} else if(yline_girl[2].innerHTML == "") {
						yline_girl[2].innerHTML = "<div class='girl'></div>";

					}
				}
			}

		}
		//			控制开船按钮的显示
		if(num > 0) {
			$(".go").show();
		} else {
			$(".go").hide();
		}
	}

	function z_go() {
		num--;
		//		for(var d = 0; d < seat.length; d++) {
		//			seat[d].index = d;
		//			console.log(seat[this.index].innerHTML);
		//			console.log(zline_boy[0].innerHTML)
		//			console.log(zline_boy[1].innerHTML)
		//			console.log(zline_boy[2].innerHTML)
		//			console.log(zline_girl[0].innerHTML)
		//			console.log(zline_girl[1].innerHTML)
		//			console.log(zline_girl[2].innerHTML)
		//			seat[this.index].innerHTML = "";
		//			if(seat[this.index].innerHTML == "<div class='boy'></div>") {
		//				seat[this.index].innerHTML = "";
		//				if(zline_boy[0].innerHTML == "") {
		//					zline_boy[0].innerHTML = "<div class='boy'></div>";
		//					break;
		//				} else if(zline_boy[1].innerHTML == "") {
		//					zline_boy[1].innerHTML = "<div class='boy'></div>";
		//					break;
		//				} else if(zline_boy[2].innerHTML == "") {
		//					zline_boy[2].innerHTML = "<div class='boy'></div>";
		//					break;
		//				}
		//			}
		//			if(seat[this.index].innerHTML == "<div class='girl'></div>") {
		//				seat[this.index].innerHTML = "";
		//				if(zline_girl[0].innerHTML == "") {
		//					zline_girl[0].innerHTML = "<div class='girl'></div>";
		//					break;
		//				} else if(zline_girl[1].innerHTML == "") {
		//					zline_girl[1].innerHTML = "<div class='girl'></div>";
		//					break;
		//				} else if(zline_girl[2].innerHTML == "") {
		//					zline_girl[2].innerHTML = "<div class='girl'></div>";
		//					break;
		//				}
		//			}
		//		}
		for(var d = 0; d < seat.length; d++) {
			seat[d].index = d;
			if(seat[this.index].children[0] != null) {
				if(seat[this.index].children[0].className == "boy") {
					//			alert("boy");
					seat[this.index].innerHTML = "";
					if(zline_boy[0].innerHTML == "") {
						zline_boy[0].innerHTML = "<div class='boy'></div>";
						break;
					} else if(zline_boy[1].innerHTML == "") {
						zline_boy[1].innerHTML = "<div class='boy'></div>";
						break;
					} else if(zline_boy[2].innerHTML == "") {
						zline_boy[2].innerHTML = "<div class='boy'></div>";
						break;
					}
				} else if(seat[this.index].children[0].className == "girl") {
					//			alert("girl");
					seat[this.index].innerHTML = "";
					if(zline_girl[0].innerHTML == "") {
						zline_girl[0].innerHTML = "<div class='girl'></div>";
						break;
					} else if(zline_girl[1].innerHTML == "") {
						zline_girl[1].innerHTML = "<div class='girl'></div>";
						break;
					} else if(zline_girl[2].innerHTML == "") {
						zline_girl[2].innerHTML = "<div class='girl'></div>";
						break;
					}
				}
			}

		}

		//		if(zline_boy[0].children[0] == "<div class='boy'></div>") {
		//			alert("成功");
		//		}
		//			控制开船按钮的显示
		if(num > 0) {
			$(".go").show();
		} else {
			$(".go").hide();
		}
		//		console.log(yline_boy[0].children[0])

		if(yline_boy[0].children[0] == undefined && yline_boy[0].children[1] == undefined && yline_boy[0].children[2] == undefined && yline_girl[0].children[0] == undefined && yline_girl[0].children[1] == undefined && yline_girl[0].children[2] == undefined && seat[0].children[0] == undefined && seat[1].children[0] == undefined) {
			success();
		}
	}

	function success() {
		clearInterval(timer);
		$(".mask").show();
		$(".go").hide();
		$(".time").hide();
		$(".success").show();
		$(".more").css("left", 150).css("top", 270).show();
		$(".reload").show();
		$(".result").text("你用了 " + timeStr + " 完成了任务！").show();
		//		successHandler(-1, timeUse)
	};
})