//wanted to do something a little more complicated so I looked up some stuff on how to make objects and how to shuffle a list.

const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function makeDeck() {
  let deck = new Array();

  for(let i = 0; i < suits.length; i++) {
    for(let j = 0; j <values.length; j++) {
      let card = {Value: values[j], Suit: suits[i]};
      deck.push(card);
    }
  }
  return deck;
}

//using the Fisher-Yates shuffle algorithm https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleDeck(deck) {
  let currentIndex = deck.length, temporaryValue, randomIndex;
  
  while (0 !== currentIndex) {
    
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }
  return deck;
}

function printDeck(deck) {
  
  for (let i = 0; i < deck.length; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`);
  }
}

let myDeck = makeDeck();
myDeck = shuffleDeck(myDeck);

printDeck(myDeck);
console.log(myDeck.length);

