function flipCard(cardNumber) {
    var card = document.querySelector('.card:nth-child(' + cardNumber + ')');
    var front = card.querySelector('.front');
    var back = card.querySelector('.back');
    var cardText = document.getElementById('cardText');
  
    if (front.classList.contains('visible')) {
      front.classList.remove('visible');
      back.classList.add('visible');
      cardText.innerText = back.innerText;
    } else {
      front.classList.add('visible');
      back.classList.remove('visible');
      cardText.innerText = "";
    }
  
    card.classList.toggle('flipped');
  }