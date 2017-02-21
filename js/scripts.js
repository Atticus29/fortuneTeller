//BACKEND
var luck;
var luckArray = [];

// LUCK METER
// var luckMeter = function(luckArray){
//   if (luckArray.length >=3){
//     return
//     $("#reveal").append("<meter value=".3" low=".25" title="Luck Prediction"></meter>");
//     } else{
//     }
//   }

var giveLuckString = function(len){
  var returnVal = "whoops";
  switch (len) {
    case 1:
    returnVal = "Watch out. Fortune does not favor you this moon cycle";
    break;
    case 3:
    returnVal = "You walk the line with force of good and evil equally on each side.";
    break;
    case 4:
    returnVal = "The Force is not strong with you but the winds blow favorably your direction";
    break;
    case 5:
    returnVal = "Things are looking up. Blessings are headed your way";
    break;
    case 6:
    returnVal = "All obstacles shall be lifted from your path and your journey shall be swift and rewarding";
    break;

    default:
    returnVal = "The Oracle is having a hard time seeing your future. Please come back again soon.";
  }
  return returnVal;
}

var divineHopes = function(hopeArray){
  var returnVal = 0;
  if(hopeArray.indexOf("money")>-1 && hopeArray.indexOf("ambition")>-1){
    returnVal = "Alright, Voldemort. You have drive and crave wordly things. You will go very far, but at what cost??";
  }
  if(hopeArray.indexOf("contentment")>-1 && hopeArray.indexOf("love")>-1){
    returnVal = "You're a hopeless romantic. Wait long enough, and you'll find your One!"
  }
  if(hopeArray.indexOf("athleticism")>-1 || hopeArray.indexOf("intellect")>-1){
    returnVal = "Get training! Work smart and you'll get to where you want to be!"
  }
  if(returnVal === 0){
    returnVal = "The Oracle is having a hard time seeing your future. Please come back again soon.";
  }
  return returnVal;
}

var hopeArray = [];

$(function(){
  $("#formInput").submit(function (){
    event.preventDefault();
    $("#reveal").show();
    $("input:checkbox[name=luck]:checked").each(function(){
      var luckType = $(this).val();
      console.log(luckType);
      $("#revealSpan").append(luckType + "<br>");
      luckArray.push(luckType);
      // luckMeter(luckArray);
    });
    $("#formInput").hide();
    $("#luckMeter").append("<meter value='" +  luckArray.length  +  "' min='0' low='2' optimum='6' high='5' max='6' title='Luck Prediction'></meter>");
    $("#futureLuck").text(giveLuckString(luckArray.length));
    $("input:checkbox[name=hopes]:checked").each(function(){
      var hopeType = $(this).val();
      hopeArray.push(hopeType);
      // $("#hope-list").append("<li>"+hopeType+"</li>");
    });
    console.log("hopeArray is " + hopeArray);
    console.log("divineHopes run yields " + divineHopes(hopeArray));
    $("#revealHope").append("<h4>" +divineHopes(hopeArray) + "</h4>");


  });

});
