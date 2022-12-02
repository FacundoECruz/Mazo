const armar = document.getElementById('armar') 
const jugar = document.getElementById('jugar')

const randomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const mazoCompleto = [];
const palos = ['Espada', 'Basto', 'Oro', 'Copa']

//Generar mazo completo
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 12; j++) {
        mazoCompleto.push({ numero: j + 1, palo: `${palos[i]}` })
    }
}

let mazoTruco = mazoCompleto.filter(carta => carta.numero != 8 && carta.numero != 9)

//Partida de altisima
let jugadores = 4
let cartasPorRonda = [];
let roundCounter = 0;

const armarRondas = (jug) => {
    for (let i = 0; i < 9; i++) {
        let maxCart = (40 / jug) + 1
        cartasPorRonda[i] = randomNum(3, maxCart)
    }
    console.log(cartasPorRonda);
}

//Repartir cartas a cada jugador
const repartir = (qty) => {
    for (let i = 0; i < qty; i++) {
        let indice = randomNum(0, 40)
        let carta = mazoTruco[indice];
        if (carta !== undefined) {
            mazoTruco.splice(indice, 1);
            console.log(`${i},`, `${carta.numero} de ${carta.palo},`, `ml: ${mazoTruco.length}.`);
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

