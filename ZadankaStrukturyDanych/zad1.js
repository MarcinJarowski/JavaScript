
//podstawowe zadania na tablicach

function od1do7(){
let newArray = [1, 2, 3, 4, 5]; //1
newArray.push(6); //2
newArray.unshift(0); //3
newArray.pop(); //4
newArray.shift(); //5
let index = newArray.indexOf(3); //6
let join = newArray.join(","); //7
}
// od1do7();

function findElement(i){    //8
    let checkIndex = newArray.indexOf(i);
        if(checkIndex < 0 ){
            newArray.push(i)
        }
        console.log(newArray);
    }
    // findElement(9);

function obiektZTablicy(){   // dodanie wlasciwosci, z samochodami by moglo byc np. {predkosc: 200km/h, kolor: czarny}
    const items = ["pierogi", "nic", "cos"];
    console.log(items);
    const mojeObiady = items.map(function(item){
        return { mojObiadTo: items, dobre: "tak" }
    });
    console.log(items);
    console.log(mojeObiady);
}
// obiektZTablicy();

function wiekszeNiz3(){   // nowa tablica z liczbami wiekszymi od 3
    const numbers = [1,2,3,4,5,6,7,8];
    const biggerThanFive = numbers.filter(function(number){
        return number > 3;
    });
    console.log(biggerThanFive);
};

// wiekszeNiz3();

// items longer then var i
const items = ['Bulbasaur', 'Muk', 'Charizard', 'Metapod', 'Nidoqueen',
'Vulpix', 'Kadabra', 'Dewgong'];

function longerThenFive(i){
    const longerNizFive = items.filter(function(items){
        return items.length > i;
    });
console.log(longerNizFive)
}
// longerThenFive(7);

// array chaining 
function multiplyAdd(){
    const numbers = [1, 2, 3, 4, 5];
    const doubledSum = numbers.map(function(number){
        return number*2;
    }).reduce(function(result, number){
        return result + number;
    });    //zero jest domyslne tu nie trzeba definiowac
}
// multiplyAdd();
function odejmijdlugosciod100(){
    const mySum = items.reduce(function(result, currentPokemon){
        return result - currentPokemon.length;
        },100);
    console.log(mySum);
    }
// odejmijdlugosciod100();


