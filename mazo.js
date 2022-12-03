const armar = document.getElementById('armar') 
const jugar = document.getElementById('jugar')

const randomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const mazoCompleto = [];
const palos = ['Espada', 'Basto', 'Oro', 'Copa']

//ARRAY CON NUMEROS VALIDOS
//Generar mazo completo
for (let i = 0; i < palos.length; i++) {
    for (let j = 0; j < 12; j++) {
        mazoCompleto.push({ numero: j + 1, palo: `${palos[i]}` })
    }
}

let mazoTruco = mazoCompleto.filter(carta => carta.numero != 8 && carta.numero != 9)

//Partida de altisima
let jugadores = 4
let cartasPorRonda = [];
let roundCounter = 0;
const rondasDefault = 9;
const maxCardsInDeck = 40;

const armarRondas = (jug) => {
    for (let i = 0; i < rondasDefault; i++) {
        let maxCardsByRound = (maxCardsInDeck / jug) 
        const minCardsByRound = 3;
        cartasPorRonda[i] = randomNum(minCardsByRound, maxCardsByRound + 1)
    }
    console.log(cartasPorRonda);
}

//Repartir cartas a cada jugador
const repartir = (qty) => {
    let mazoTrucoCopia = [].concat(mazoTruco)
    for (let i = 0; i < qty; i++) {
        let indice = randomNum(0, 40)
        let carta = mazoTrucoCopia[indice];
        if (carta !== undefined) {
            mazoTrucoCopia.splice(indice, 1);
            console.log(`${i},`, `${carta.numero} de ${carta.palo},`, `ml: ${mazoTrucoCopia.length}.`);
        } else {
            i = i - 1;
        }
    }
}

//Cada ronda
const rondas = (round) => {
    for (let i = 0; i < jugadores; i++) {
        repartir(cartasPorRonda[round]);
        console.log('****************');
    }
}

const juego = () => {
    console.log(`RONDA ${roundCounter + 1}`)
    rondas(roundCounter);
    roundCounter += 1;
}

armar.addEventListener('click', armarRondas(jugadores));
jugar.addEventListener('click', juego);

//***************************** */
//******REINICIAR MAZO EN CADA RONDA */
