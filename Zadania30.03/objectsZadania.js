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
  console.log(pole);
}
//2. Uzywajac metody for ... in wyswietl wszystkie wartosci z obiektu car w takim porządku:
//   "nazwaPola": "wartosc Pola"


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


