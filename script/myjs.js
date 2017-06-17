  $(document).ready(function(){
console.log('ready');
$("label",).click(startquestion);

var q1={
   q:" It is possible that permanent staff who are on holiday can have their work carried out by students. ",
   a:"True"
    };
var q2={
   q:"Students in summer employment are given the same paid holiday benefit as permanent staff",
   a:"False"
};

var q3={
   q:"Students are subject to the organisation standard disciplinary and grievance procedures",
   a:"Cannot Say"
};
 var q4={
   q:"Some companies have more work to do in the summer when students are available for vacation work",
   a:"True"
};
 test=[q1,q2,q3,q4]
console.log(q1.q)

console.log(q1.a)
console.log(test)
count=0;
function qdisplay(){
  $('#main').html("<p>" + test[count].q+"</p>");
}
function nextq() {
  //  TODO: Increment the count by 1.
  count++;

  // TODO: Show the loading gif in the "image-holder" div.
  $("#main").html("<p> Question Chnged</p>");

  // TODO: Use a setTimeout to run question after 1 second for testing.
  setTimeout(qdisplay, 60000);

  // TODO: If the count is the same as the length of the test array, reset the count to 0.
  if (count === test.length) {
    count = 0;
     $("#main").html("<p><h3>FINISHED</h3></p>");
  }
}

function startquestion() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showQ = setInterval(nextq, 30000);

}


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

 }

 });