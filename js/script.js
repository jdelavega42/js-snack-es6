// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bikeArray = [
    {
        brand: "Aethos",
        weight: 6.1,
    },
    {
        brand: "Cannondale",
        weight: 7.5,
    },
    {
        brand: "Giant",
        weight: 7.3,
    },
    {
        brand: "Tarmac",
        weight: 8.6,
    },
    {
        brand: "Scott",
        weight: 5.9,
    },
]


let lowestWeight = Number.POSITIVE_INFINITY;
bikeArray.forEach((curBike) => {
    const {brand, weight} = curBike;
    lower = weight;
    if(lower < lowestWeight){
        lowestWeight = lower;
        lowestBrand = brand;
    }
})
console.log(`La bici più leggera é ${lowestBrand} con un peso di ${lowestWeight}kg`);

// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const serieA = [
    {
        squadra: "Roma",
        PF: 0,
        FS: 0,
    },
    {
        squadra: "Lazio",
        PF: 0,
        FS: 0,
    },
    {
        squadra: "Fiorentina",
        PF: 0,
        FS: 0,
    },
    {
        squadra: "Milan",
        PF: 0,
        FS: 0,
    },
    {
        squadra: "Inter",
        PF: 0,
        FS: 0,
    },
    {
        squadra: "Juventus",
        PF: 0,
        FS: 0,
    },
    {
        squadra: "Parma",
        PF: 0,
        FS: 0,
    },
];
const serieZ = [];
serieA.forEach((currentTeam) =>{
    let {squadra, PF, FS} = currentTeam;
    PF = Math.floor(Math.random() * 114);
    FS = Math.floor(Math.random() * 10000);
    const teamZ = Object.create(currentTeam)
    teamZ.squadra = squadra;
    teamZ.FS = FS;
    serieZ.push(teamZ)
});
console.log(serieZ);

// Snack Bonus
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.