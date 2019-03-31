const car = {
  make: "Ford",
  model: "Explorer",
  year: 2008,
  color: "red",
  fuel: "gas",
  mpg: 18,
  doors: "",
  maxSpeed: ""
};


//1. Uzywajac metody for ... in wyswietl wszystkie pola obiektu car
for(let pole in car){
  // console.log(pole);
}
//2. Uzywajac metody for ... in wyswietl wszystkie wartosci z obiektu car w takim porządku:
//   "nazwaPola": "wartosc Pola"  console.log(object[property]) 


// console.log(Object.values(car));  //daje tablice
for(let pole in car){
  console.log(pole + car[pole]);
}



//3. Uzywajac metody for ... in stworz nowy obiekt ktory bedzie zawieral pola z obiektu car tylko te ktore maja NIE pusta wartość
// Oczekiwana struktura nowego obiektu:
//
// const nonEmptyCar = {
//   make: "Ford",
//   model: "Explorer",
//   year: 2008,
//   color: "red",
//   fuel: "gas",
//   mpg: 18
// }

const nonEmptyCar = {

}

for(let property in car){
  console.log(car[property]);
  console.log(property);

  if(car[property].toString().length > 0){
    nonEmptyCar[property] = car[property];
  }
}
console.log(nonEmptyCar);




//4. Uzywajac metody Object.values() wyswietl wszystkie wartosci pól z obiektu car



//5. Uzywajac metody Object.keys() wyswietl wszystkie nazwy pól z obiektu car

//6. Korzystajac z metody Object.values() pokaz tylko te wartosci pól które nie są puste


//7 Sprawdz czy w obiecie car sa pola: isBike, gas, eco, mpg, year
// I wydrukuj to w formacie:
// Obiekt ma pole isBike: false,
// Obiekt ma pole gas: false,
// Obiekt ma pole mpg: true,
// itd.


//8. PRzy uzyciu metody Object.entries() zamien obiekt car na tablice w formacie [[klucz, wartosc], [klucz, wartosc], ...]


