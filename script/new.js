

console.log('ready');
$("label",).click(function(){
  startquestion();
  stop()
 passFail();});

var q1={
	b:" Question One. ",
	 a:"true"
    };
var q2={
	 b:"Question two",
	 a:"false"
};

var q3={
   b:"Question three",
   a:"cannot Say"
};
 var q4={
  b:"Question Four",
   a:"true"
};
 test=[q1,q2,q3,q4]
console.log(q1.b)

console.log(q1.a)
console.log(test)
count=0;
function qdisplay(){
	$('#main').html("<p>" + test[count].b+"</p>");
  console.log("test[count].b" +test[count].b)
}
qdisplay();


function nextq() {
  qdisplay()
  console.log(qdisplay)
  count++;
  // $("#main").html("<p> Question Chnged</p>");
  setTimeout(qdisplay, 1000);
    console.log(qdisplay)
  // TODO: If the count is the same as the length of the test array, reset the count to 0.
  if (count === test.length) {
    count = 0;
     $("#quest").html("<p><h3>FINISHED</h3></p>");
  }
}

function startquestion() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showQ = setInterval(nextq, 10000);


}
function stop(){
  clearInterval(showQ)
};


// Clock coount
var start = 240;// 5 minutes
var c=1;
var timer = setInterval(function() {
     $('#counter').text( Math.floor((start - c) / 60) + " Minutes " + ((start - c) % 60 ) +" Seconds");
     c++;

    if(start === c) {
        window.clearInterval(timer);
       $("#main").html("<p><h3>FINISHED</h3></p>")
    }

}, 1000);

$("#next").on('click',function () {
count++
    qdisplay();
});
     // store the event
     // copare it to correct answer
     // increment the score
   //else if wrong decrese the score






  pass=0;
  fail=0;
 function passFail(){
  $("lable").on("click",function(){
    var userSelctor= $(this).attr("data-value")

    for(i=0; i<= test.length;i++){
      if(userSelctor=== test[i].a){
        pass++
        $('#qid').empty();
        $('#qid').html("<p><h2> Nimber of Correct answers are"+pass+" out of 4 </h2></p> ");
        }
        else{
           fail=0;
           $('#qid').html("<p><h2> Nimber of Correct answers are"+pass+" out of 4 </h2></p> ");
    }
        }
  });


 }
