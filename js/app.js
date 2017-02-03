function turncard(cardeffect){ 
  document.getElementById(cardeffect).style.transform = 'rotateY(180deg)';
  
  if (document.getElementById(cardeffect).style.transform === 'rotateY(180deg)') {
    setTimeout(function(){document.getElementById(cardeffect).style.transform = 'rotateY(0deg)';
    }, 1000);
  }
}

var pokemon = ["./assets/userious.jpeg/", "./assets/digging.jpeg", "./assets/charizard.jpeg", "./assets/high.jpeg", "./assets/troll.jpeg"];