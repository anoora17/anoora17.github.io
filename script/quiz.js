var answer = ["","","",""];
var count = 0;
var qtime = new Date();
var qdelay = 30000;
function userAnswer(e) {
	
		var userClick = e.value;
		console.log(userClick);
		answer[count] = userClick;
		//alert("Answer: " + answer[count]);

	 
		
	
}
function begin()
{
	$("#StartBody").hide();
	$("#QuizBody").show();
	// Clock coount
	var start = 240;// 5 minutes
	var c = 1;
	var timer = setInterval(function () {
		$('#timer').text(Math.floor((start - c) / 60) + " Minutes " + ((start - c) % 60) + " Seconds");
		c++;
		var currentdate = new Date();
		$("#time_remain").text("Time left: " + Math.round((qdelay - (currentdate.getTime() - qtime.getTime())) / 1000));

		if (start === c) {
			window.clearInterval(timer);
			$("#main").html("<p><h3>FINISHED</h3></p>")
		}

	}, 1000);

	var q1 = {
		b: " Q1:It is possible that permanent staff who are on holiday can have their work carried out by students",
		a: "true"
	};
	var q2 = {
		b: "Q2:Students in summer employment are given the same paid holiday benefit as permanent staff.",
		a: "false"
	};

	var q3 = {
		b: " Q3:Students are subject to the organisation’s standard disciplinary and grievance procedures.",
		a: "cannot Say"
	};
	var q4 = {
		b: "Q4:Some companies have more work to do in the summer when students are available for vacation work.",
		a: "true"
	};
	test = [q1, q2, q3, q4]
	console.log(q1.b)
	console.log(q1.a)
	console.log(test[1].b)
	count = -1;
	//function to select randum qestions

	function qdisplay() {
		$('#main').html("<p>" + test[count].b + "</p>");
		console.log("test[count].b" + test[count].b)
	}
	// qdisplay();

	function nextq() {
		qtime = new Date();
		count++;
		if (count === test.length) {
			count = 0;
			stop();
			passfail();
		}
		else {
			qdisplay()
			console.log(qdisplay)
			// $("#main").html("<p> Question Chnged</p>");
			setTimeout(qdisplay, 60000);
			console.log(qdisplay)
			// TODO: If the count is the same as the length of the test array, reset the count to 0.

		}

	}
	nextq();
	function startquestion() {
		showQ = setInterval(nextq, qdelay);
	}
	startquestion();
	function stop() {
		clearInterval(showQ);
		$("#main").html("<p><h3>FINISHED</h3></p>");

	};

	$("#next").on("click", nextq)
	function passfail() {
		var pass = 0;
		var fail = 0;
		for (var i = 0; i < test.length; i++) {
			if (answer[i] == test[i].a){
				pass++;
			 //  alert(" Correct Answer " + pass)
			}
			else{
				fail++;
			 // alert(" wrong Answer " + fail)
			}
		}
		$(".lead").hide();
		$("#quiz").hide();
		$(".display-3").html("Correct answers:" + pass + " , wrong answers: " + fail);
	}

	console.log(answer[count]);

	// end
}

$(document).ready(
	function () {
		$("#QuizBody").hide();
	}
  
 
);
