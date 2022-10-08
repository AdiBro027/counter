function countDownTimer() {

		var endTime = new Date("03 December 2022 00:00:00 GMT+0530");			
			endTime = (Date.parse(endTime) / 1000);
			var currentTime = new Date();
			currentTime = (Date.parse(currentTime) / 1000);

			var timer = endTime - currentTime;

			var dd = Math.floor(timer / 86400); 
			var hh = Math.floor((timer - (dd * 86400)) / 3600);
			var mm = Math.floor((timer - (dd * 86400) - (hh * 3600 )) / 60);
			var ss = Math.floor((timer - (dd * 86400) - (hh * 3600) - (mm * 60)));
  
			if (hh < "10") { hh = "0" + hh; }
			if (mm < "10") { mm = "0" + mm; }
			if (ss < "10") { ss = "0" + ss; }

			$(".days").html(dd + "<span>Days</span>");
			$(".hours").html(hh + "<span>Hours</span>");
			$(".minutes").html(mm + "<span>Minutes</span>");
			$(".seconds").html(ss + "<span>Seconds</span>");		

	}

	setInterval(function() { countDownTimer(); }, 1000);