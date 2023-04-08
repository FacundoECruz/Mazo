const jugar = document.getElementById("play");

// Generate random num between min and max
const randomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const generateTrucoDeck = () => {
  const symbols = ["Espada", "Basto", "Oro", "Copa"];
  const validNums = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
  let fullDeck = [];
  
  for (let i = 0; i < symbols.length; i++) {
    for (let j = 0; j < validNums.length; j++) {
      fullDeck.push({ number: validNums[j], symbol: `${symbols[i]}` });
    }
  }
  return fullDeck;
}

let trucoDeck = generateTrucoDeck();

//Partida de altisima
let players = 4;
let roundCounter = 0;
const defaultRounds = 9;
const maxCardsInDeck = 40;

const generateCardsPerRound = (players) => {
  let cardsPerRound = [];
  for (let i = 0; i < defaultRounds; i++) {
    let maxCardsByRound = maxCardsInDeck / players;
    const minCardsByRound = 3;
    cardsPerRound[i] = randomNum(minCardsByRound, maxCardsByRound + 1);
  }
  return cardsPerRound;
};

const cardsPerRound = generateCardsPerRound(players)

const deal = (cardsPerRound, trucoDeck) => {
  for (let i = 0; i < cardsPerRound; i++) {
    let index = randomNum(0, 40);
    let card = trucoDeck[index];
    if (card !== undefined) {
      trucoDeck.splice(index, 1);
      console.log(
        `${i},`,
        `${card.number} de ${card.symbol},`,
        `ml: ${trucoDeck.length}.`
      );
    } else {
      i = i - 1;
    }
  }
};

//Cada ronda
const rounds = (round) => {
  let mazoTrucoCopia = [].concat(trucoDeck);
  for (let i = 0; i < players; i++) {
    deal(cardsPerRound[round], mazoTrucoCopia);
    console.log("****************");
  }
};

const game = () => {
  console.log(`RONDA ${roundCounter + 1}`);
  rounds(roundCounter);
  roundCounter += 1;
};

jugar.addEventListener("click", game);
