
 // array with inialize value
$(document).ready(function(){

var topics=["dog", "cat","care bears"];
               
 
     // funstion to hold the value of input and push it to an array

    $('#add-giffy').on('click',function(event){
      event.preventDefault()
     
     var userSearch=$("#uInput").val().trim();
     var stat=$(this).attr('data-state');
     console.log(userSearch)
         topics.push(userSearch);
         newButton();
         
        var queryUrl="http://api.giphy.com/v1/gifs/search?q="+userSearch+"&api_key=dc6zaTOxFJmzC&limit=10";  
  
       $.ajax({url:queryUrl,
        method:"Get"
       }).done(function(response){
            
       
         $("#giffy-display").html(dimages(response));

          
             
        
              
          
      $('div.img').mouseover(function(){
                alert("over")
                var state = $(this).attr("data-state");
                if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    };
    $("#giffy-display").empyt();
          
            });
    });
         });
//         
    // funstion to display the images 
function dimages(response){
  
  for(i=0;i<=9;i++){ 
$('.imge-display').append($('<img>').attr('src',response.data[i].images.fixed_height_downsampled.url));
$('.r').append("Raiting: "+response.data[i].rating);
   
    
    //loops end
    }

// function dimages end hear
}

function newButton(){

  var b=$('<button>');

for(i=0;i<=topics.length;i++){
      b.attr("value",topics[i]); 
      b.text(topics[i]);
      b.addClass("mygiphy")
      $("#buttons-display").append(b)
      
      

    }
  $(uInput).val('')
}





// end 

    });        
        
    




     