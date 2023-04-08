const jugar = document.getElementById("play");

// Generate random num between min and max
const randomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const completeDeck = [];
const symbols = ["Espada", "Basto", "Oro", "Copa"];
const validNums = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

//Generar mazo completo

for (let i = 0; i < symbol.length; i++) {
  for (let j = 0; j < 12; j++) {
    completeDeck.push({ number: j + 1, symbol: `${symbol[i]}` });
  }
}

let trucoDeck = completeDeck.filter(
  (card) => card.number != 8 && card.number != 9
);

//Partida de altisima
let players = 4;
let cardsPerRound = [];
let roundCounter = 0;
const defaultRounds = 9;
const maxCardsInDeck = 40;

const makeRounds = (players) => {
  for (let i = 0; i < defaultRounds; i++) {
    let maxCardsByRound = maxCardsInDeck / players;
    const minCardsByRound = 3;
    cardsPerRound[i] = randomNum(minCardsByRound, maxCardsByRound + 1);
  }
  console.log(cardsPerRound);
};

//Repartir cartas a cada jugador
const deal = (cardsInRound, mazoTrucoCopia) => {
  for (let i = 0; i < cardsInRound; i++) {
    let indice = randomNum(0, 40);
    let carta = mazoTrucoCopia[indice];
    if (carta !== undefined) {
      mazoTrucoCopia.splice(indice, 1);
      console.log(
        `${i},`,
        `${carta.numero} de ${carta.palo},`,
        `ml: ${mazoTrucoCopia.length}.`
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
