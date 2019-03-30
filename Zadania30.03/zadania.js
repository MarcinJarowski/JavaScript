// Zadania:

// 1.
// Przy uzyciu funkcji for napisz petle ktora zamieni tekst elementow z tablicy na pisane duzymi literami:
const ex1 = ['anna', 'maciej', 'michal', 'Monika', 'JOANNA'];
for(i = 0; i < ex1.length; i++){
  ex1[i]= ex1[i].toUpperCase();
}
console.log(ex1);

//2. Wykonaj to samo zadanie z funkcja map
const ex2 = ['anna', 'maciej', 'michal', 'Monika', 'JOANNA'];
let ex2new = ex2.map( x => x.toUpperCase());
console.log(ex2new);
//3. Dostajesz z jakiegoś zródła danych taki napis:

const names = "anna maciej michal Monika JOANNA"

//Potrzebujesz zrobic z tego liste.
let namesArray = names.split(" ")
console.log(namesArray);
//Nastepnie wyswietl tylko kobiece imiona
let womanNames = [];
for(let i=0; i < namesArray.length; i++){
  namesArray[i] = namesArray[i].toLowerCase();
  if(namesArray[i].charAt(namesArray[i].length-1) == 'a'){
    womanNames.push(namesArray[i])
  }
}
console.log(womanNames);

//Nastepnie spraw aby pierwsza litera byla zawsze duza, a reszta imienia byla malymi literami
let womanNamesCapital = womanNames.map(function(name){
  console.log(name[0].toUpperCase());
  return `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`

});
console.log(womanNamesCapital);


//4.
//Dostajesz liste obiektow. Kazdy obiekt zawiera informacje odnosnie uzytkownika (jego imie, nazwisko, wiek)
//Wyswietl te dane w formie przyjaznej uzytkownikowi
const users = [
  {
    name: "Michal",
    lastname: "Kowalski",
    age: "23"
  },
  {
    name: "Jan",
    lastname: "Zielony",
    age: "12"
  },
  {
    name: "Kuba",
    lastname: "Czerwony",
    age: "82"
  },
  {
    name: "Joanna",
    lastname: "Niebieska",
    age: "31"
  },
  {
    name: "Anna",
    lastname: "Brazowa",
    age: "26"
  },
  {
    name: "Agnieszka",
    lastname: "Zolta",
    age: "18"
  },
];

let singleUser = users.map(function(user){
return `Imie: ${user.name}, Nazwisko: ${user.lastname}, Wiek: ${user.age}`
});
console.log(singleUser);


//5. Do swojej aplikacji planujesz dodac nowa funkcjonalnosc. Osoby ponizej 18 roku zycia musza byc odpowiednio oznaczone.
// Dodaj do kazdego obiektu w tablicy pole isAdult, ktore bedzie mialo wartosc true jesli osoba jest pelnoletnia, i wartosc false jesli nie jest
// pelnoletnia
let addIsAdult = users.map(function(user){
  if(user.age >= 18){
    return user.addIsAdult = true;
  }else{
    return user.addIsAdult = false;
  }
});
console.log(users);

//6 Orzymales tablice tablic [[..], [...]], potrzebujesz z niej zrobic plaska tablice [...]. Uzyj reduce
const array3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flatArray3 = array3.reduce((acc, value)=>acc.concat(value));
console.log(flatArray3);
// 7 Masz taka liste zakupów, podlicz ile bedzie kosztowac taki koszyk zakupow (wynik: 227005 :) )
const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

const totalPrice = wishlist.reduce((acc, element)=>acc += element.price ,0)
console.log(totalPrice);

// 8. Masz liste z glosowania obywateli. Sprawdz jak rozklado sie glosowanie w przedzialach wiekowych
// 18-25 - young, 26-35 - medium, 36-55 - senior

// Oczekiwany rezultat: { young: 1, medium: 3, senior: 3 }
const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

let youngArray = [];
let mediumArray  = [];
let seniorArray = [];

for(let i=0; i<voters.length; i++){
  if(voters[i].age >= 18 && voters[i].age <= 25 && voters[i].voted === true){
    youngArray.push(voters[i]);
  }else if(voters[i].age >= 26 && voters[i].age <= 35 && voters[i].voted === true){
    mediumArray.push(voters[i]);
  }else if(voters[i].age >= 36 && voters[i].age <= 55 && voters[i].voted === true){
    seniorArray.push(voters[i]);
  }
}
let goodVotes = {
  young: youngArray.length,
  medium: mediumArray.length,
  senior: seniorArray.length
}
// console.log(goodVotes);

console.log(voters.reduce((obj, e) => {
  if (18 <= e.age && e.age <= 25 && e.voted === true) {
    obj.young += 1;
  } else if (26 <= e.age && e.age <= 35 && e.voted === true) {
    obj.medium += 1;
  } else if (36 <= e.age && e.age <= 55 && e.voted === true) {
    obj.senior += 1;
  }
  return obj;
 }, {
  young:0,
  medium:0,
  senior:0
 }));

 ////zadanka dodatkowe////
 //1 Z tablicy:
const array = [1,2,2,3,4,5,6,2,4,5,4,7,8,7,3,6,9,11];
//Usun powtorzenia
function unique(a){
  return array.from(new Set(a));
}
// 2. Z tablic
const a1 = [1,2,3,4,5,6]
const a2 = [2,3,4,5,6,7]
//dodaj wartosci tak aby uzyskac efekt:
//[3,5,7,9,11,13] czyli 1+2, 2+3 itd
//3. Napisz funkcje ktora z dwoch tablic wypisze wartosci ktore sa unikalne
 const a3 =  [1, 2, 3];
const a4 = [100, 2, 1, 10];
//Efekt oczekiwany ["1", "2", "3", "10", "100"]
//4. Rozwnin poprzednia funkje, aby dzialala dla takich tablic
const a5 = [1, 2, 3, 4, 5];
const a6 = [1, [2], [3, [[4]]],[5,6]];
//Oczekiwany wynik