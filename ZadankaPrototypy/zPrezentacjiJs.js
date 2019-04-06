var dog = {name: "Max"};
var dog2 = {name: "Burek"};

var bark = function(target, target2){
    return `${this.name} is barking at ${target} and ${target2}`
}

// console.log(bark.call(dog, "postman", "neighbor")); 
// console.log(bark.apply(dog2, ['Ziutek', 'Blablabla']));

const o = {
    a: "o object",
    method: function(a, b, c) {
        return [this, a, b, c];
    }
};

const x = {
    a: "x object"
};

// console.log(o.method(1, 2)); // this === o, [1, 2]
// console.log(o.method.call(x, 1, 2, 3)); // this === x, [1, 2, 3]
// console.log(o.method.apply(x, [1, 2, 3, 16])); // this === x, [1, 2, 3]

////BIND CALL APPLY////

let car = {
    speed: 100,
    color: "green",
    sound: "brum brum",
    giveSound: function giveSound(){
        return this.sound
    }
};
let bike = {
    speed: 30,
    color: "red",
    sound: "alezapierdalam",
    }
let scooter = {
    speed: 15,
    color: "black",
    sound: "noga mnie juz boli",
    }



// let boundFunction = car.giveSound.bind(car);
// console.log(boundFunction());
// let boundFunction1 = bike.giveSound.bind(bike);
// console.log(boundFunction1());
// let boundFunction2 = bike.giveSound.bind(scooter);
// console.log(boundFunction2());    ///tu w kazdym obiekcie byla funkcja a mozna zbindowac inne obiekty jak w 1 jest tylko funkcja

let boundFunction = car.giveSound.bind(car);
console.log(boundFunction());
let boundFunction1 = car.giveSound.bind(bike);
console.log(boundFunction1());
let boundFunction2 = car.giveSound.bind(scooter);
console.log(boundFunction2());


let cat = {
    name: "Rudy",
}
let cat2 = {
    name: "Szary"
}

let miau = function(target1, target2){
    return `${this.name} mialczy na ${target1} i ${target2}`
}

console.log(miau("Patryka", "Szynke")); ///undefined bedzie bo nie ma cata
console.log(miau.call(cat, "szyneczke", "flaszeczke"));
console.log(miau.apply(cat2, ["myszke", "szyszke"]));

//prototyp z obiektem animal, funkcja jedz i wyswietla co je, i co robi, jak je, instancja kota ktory dziedziczy prototyp po animal i 
// kot niech ma wartosc name ktorego nie mozemy zmienic ale zeby byl wyswietlany

const animal = {
    eat: function eatEat(){
        return this.sound;
    }
}

let cat4 = Object.create(animal, {
    'name': {
        value: 'Miauczek',
        writable: false,
        enumerable: true,
    },
    'sound': {
        value: "miaumiau",
        writable: false,
        enumerable: true
    }
});
console.log(cat4);


let first = {name: 'Tony'};
let last = {lastName: 'Stark'};
let person = Object.assign([], first, last); ///pierwszy parametr to jest to do czego wrzucamy a drugi parametr to co wrzucamy 

console.log(person);
console.log(first);

let objectA = {
    name: "Brajanek",
    surname: "Grzegorski"
}

let objectB = {
    age: "22",
    height: "160cm"
}
let objectC = Object.assign({}, objectA, objectB) /// nie mozna kopiowac jezeli w objectA jest inny obiekt, musi byc plaski

console.log(objectC);
console.log(objectA);

// Merge and overwrite equal keys
let b = Object.assign({foo: 0}, {foo: 1}, {foo: 2});
console.log(b) // {foo: 2}  ///nadpisze bo sa takie same i wezmie te ktora jest na ostatnim miejscu

// Clone an object

let obj = {person: 'Thor Odinson'};
let clone = Object.assign({}, obj);
console.log(clone); // {person: 'Thor Odinson'}  
