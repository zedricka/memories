// Flip

function turncard(cardeffect){ 
  console.log (document.getElementById(cardeffect))
  document.getElementById(cardeffect).style.transform = 'rotateY(180deg)';
  
  if (document.getElementById(cardeffect).style.transform === 'rotateY(180deg)') {
    setTimeout(function(){document.getElementById(cardeffect).style.transform = 'rotateY(0deg)';
    }, 1000);
  }
}

// Pictures

var pokemon = ["../assets/userious.png", "../assets/digging.png", "../assets/charizard.png", "../assets/high.png", "../assets/troll.png"];


