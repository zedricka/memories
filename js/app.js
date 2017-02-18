function shuffle(){
  var order = []

  for (var i = 8; i > 0; i--) {
    order.push(i); 
  }
  var reorder = []
  for (var i = 8; i > 0; i--){
    ra = order.splice(Math.floor(Math.random() * i), 1)[0];
    reorder.push(ra);
    console.log(reorder)
  }
  
  document.getElementById("cardeffect").style.order = reorder[0];
  document.getElementById("cardeffect1").style.order = reorder[1];
  document.getElementById("cardeffect2").style.order = reorder[2];
  document.getElementById("cardeffect3").style.order = reorder[3];
  document.getElementById("cardeffect4").style.order = reorder[4];
  document.getElementById("cardeffect5").style.order = reorder[5];
  document.getElementById("cardeffect6").style.order = reorder[6];
  document.getElementById("cardeffect7").style.order = reorder[7];

}
window.onload = shuffle;

var firstFlip = 0;
var secondFlip = 0;
var flipCounter = 0;

function changea(){
  document.getElementById("flip1").style.transform = "rotateY(0deg)";
  document.getElementById("backflip1").style.transform= "rotateY(-180deg)";
  firstFlip = 1;
  flipCounter++;
}

function changeb(){
  document.getElementById("flip2").style.transform = "rotateY(0)";
  document.getElementById("backflip2").style.transform= "rotateY(-180deg)";
  firstFlip = 2;
  flipCounter++;
}

function changec(){
  document.getElementById("flip5").style.transform = "rotateY(0deg)";
  document.getElementById("backflip5").style.transform= "rotateY(-180deg)";
  firstFlip = 3;
  flipCounter++;
}

function changed(){
  document.getElementById("flip7").style.transform = "rotateY(0deg)";
  document.getElementById("backflip7").style.transform= "rotateY(-180deg)";
  firstFlip = 4;
  flipCounter++;
}

function changee(){
  document.getElementById("flip3").style.transform = "rotateY(0deg)";
  document.getElementById("backflip3").style.transform= "rotateY(-180deg)";
  secondFlip = 1;
  flipCounter++;
}

function changef(){
  document.getElementById("flip4").style.transform = "rotateY(0deg)";
  document.getElementById("backflip4").style.transform= "rotateY(-180deg)";
  secondFlip = 2;
  flipCounter++;
}

function changeg(){
  document.getElementById("flip6").style.transform = "rotateY(0deg)";
  document.getElementById("backflip6").style.transform= "rotateY(-180deg)";
  secondFlip = 3;
  flipCounter++;
}

function changeh(){
  document.getElementById("flip8").style.transform = "rotateY(0deg)";
  document.getElementById("backflip8").style.transform= "rotateY(-180deg)";
  secondFlip = 4;
  flipCounter++;

}

function check(){
  console.log(firstFlip);
  console.log(secondFlip);
  console.log(flipCounter);
  console.log(cardcount);
  console.log("--------");

setTimeout(function(){
  if(firstFlip == secondFlip){
    if(firstFlip == 1){
      document.getElementById("cardeffect").style.display = "none";
      document.getElementById("cardeffect2").style.display = "none";
      cardcount++;
      document.getElementById("points").innerText = cardcount;
    }
    if(firstFlip == 2){
      document.getElementById("cardeffect1").style.display = "none";
      document.getElementById("cardeffect3").style.display = "none";
      cardcount++;
      document.getElementById("points").innerText = cardcount;
    }
    if(firstFlip == 3){
      document.getElementById("cardeffect4").style.display = "none";
      document.getElementById("cardeffect5").style.display = "none";
      cardcount++;
      document.getElementById("points").innerText = cardcount;
    }
    if(firstFlip == 4){
      document.getElementById("cardeffect6").style.display = "none";
      document.getElementById("cardeffect7").style.display = "none";
      cardcount++;
      document.getElementById("points").innerText = cardcount;
    }
    //Victory Message
    if(cardcount == 4) {
    document.getElementById("winnah").style.fontSize = "xx-large";
    document.getElementById("winnah").innerText = "You Win!";
    }


    flipCounter = 0;
    firstFlip = 0;
    secondFlip = 0; 
  }
}, 1500);

setTimeout(
  function delay(){
    if(flipCounter == 2 && firstFlip != secondFlip){
      flipCounter = 0;
      firstFlip = 0;
      secondFlip = 0;
      
      var idFrontNames = ["flip1", "flip2", "flip3", "flip4", "flip5", "flip6", "flip7", "flip8"];
      var idBackNames = ["backflip1", "backflip2", "backflip3", "backflip4", "backflip5", "backflip6", "backflip7", "backflip8"];
      for(var z = idFrontNames.length; z > 0; z--){
        frontId = idFrontNames.splice(0, 1)[0];
        backId = idBackNames.splice(0, 1)[0];
        
        document.getElementById(frontId).style.transform = "rotateY(-180deg)";
        document.getElementById(backId).style.transform = "rotateY(0deg)";    
      }
    }
  },1000);
}

var cardcount = 0;
