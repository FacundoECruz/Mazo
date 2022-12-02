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

const armarRondas = (jug) => {
    for (let i = 0; i < 9; i++) {
        let maxCart = (40 / jug) + 1
        cartasPorRonda[i] = randomNum(3, maxCart)
    }
    console.log(cartasPorRonda);
}

const repartir = (qty) => {
    for (let i = 0; i < qty; i++) {
        let indice = randomNum(0, 40)
        console.log(`Indice: ${indice},`,`cartasPorRonda: ${qty}.`)
        let carta = mazoTruco[indice];
        if (carta !== undefined) {
            mazoTruco.splice(indice, 1);
            console.log(`i: ${i},`, `Carta: ${carta.numero} de ${carta.palo},`, `MazoLength: ${mazoTruco.length}.`);
        } else {
        console.log('Salio undefined')
        i = i - 1;  
    }
    }
}

armarRondas(jugadores);
repartir(cartasPorRonda[0]);

// const rondas = () => {
//     for (let i = 0; i < cartasPorRonda.length; i++) {
//         for (let j = 0; j < jugadores; j++) {
//             repartir();
//         }
//     }
// }

// armarRondas(jugadores);
// rondas();

