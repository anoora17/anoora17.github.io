 
 // array with inialize value
$(document).ready(function(){

var topics=["dog", "cat","care bears"];
               
 
     // funstion to hold the value of input and push it to an array

    $('#add-giffy').on('click',function(event){
      event.preventDefault()
     
     var userSearch=$("#uInput").val().trim();
     console.log(userSearch)
         topics.push(userSearch);
         newButton();
         $(uInput).val('')
        var queryUrl="http://api.giphy.com/v1/gifs/search?q="+userSearch+"&api_key=dc6zaTOxFJmzC&limit=10";  
  
       $.ajax({url:queryUrl,
        method:"Get"
       }).done(function(response){
             console.log(response)
             console.log(response.data[0].images.rating)
              // $("#giffy-display").html(dimages(response));
             
          });
              
          
            });
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
      b.attr("vaue",topics[i]); 
      b.text(topics[i]);
      $("#buttons-display").append(b)

    }
  
}














// end 

    });        
        
    
   
 




     