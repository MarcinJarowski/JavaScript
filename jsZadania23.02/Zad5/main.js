/* TODO.1 Napisz instrukcję IF  / ELSE, która:
 - wyświetli console.log("Cześć, jestem junior devem!") w przypadku,
  jeśli zmienna developer jest równa 'junior js dev'
 - a jeśli nie jest, to wyświetli ("Jednak nie junior dev:( ");
 */

var developer = 'junior js dev';

if(developer = 'junior js dev'){
console.log("Cześć, jestem junior devem!");
}else{
    console.log("Jednak nie junior dev");
}



/* TODO.2: Napisz instrukcję IF / ELSE IF / ELSE, która:
    - wyświetli console.log("Czas na emeryturę!") jeśli Twój wiek jest >= 67
    - wyświetli console.log("Średni wiek!") jeśli Twój wiek jest < 67 i > 33
    - wyświetli console.log("Czas na emeryturę!") jeśli Twój wiek jest <= 33 i > 18
    - wyświetli console.log("Hej młodziaku!") jeśli Twój wiek jest <= 18
 */
var age = 19;

if(age>=67){
    console.log("Czas na emeryturę!");
}
else if(age < 67 && age > 33){
    console.log("Średni wiek!");
}
else if(age <= 33 && age > 18){
    console.log("Czas na emeryturę!");
}
else{
    console.log("Hej mlodziaku!");
}


/* TODO.3: Napisz instrukcje, która zwraca true jeśli:
    - wartość zmiennej skill jest równa 'javaScript' lub 'HTML' lub 'CSS'
 */

var skill = 'HTML';
if(skill = 'javaScript' || 'HTML' || 'CSS'){
    console.log(true);
}

/* TODO.4: Wykorzystując SWITCH, napisz instrukcje, która jako parametr przyjmuje stringa o nazwie day i:
 - która wyrzuca w konsoli wymyślony tekst, w zależności czy "case" jest spełniony
 - case mają odpowiadać kolejnym dniom: "Monday", "Tuesday", "Wednesday" etc...
 - ma być parę przynajmniej przypadków (np. Monday, Tuesday, Saturday)
 - w przypadku jeśli case nie pasuje do żadnego przypadku, to funkcja ma wyświetlić w konsoli tekst: "Taki dzień nie istnieje!";
 */
var day = 'Monday'
switch (day) {
    case 'Monday':
        console.log('dzisiaj mamy poniedzialek')
        break;
    case 'Tuesday':
        console.log('dzisiaj mamy wtorek')
        break;
    case 'Wednesday':
        console.log('dzisiaj mamy sroda')
        break;
    case 'Thursday':
        console.log('dzisiaj mamy czwartek')
        break;
    case 'Friday':
        console.log('dzisiaj mamy piatek')
        break;
    default:
        console.log('WEEKEND !!!!')
}

/* TODO.5: Wykorzystując TERNARY OPERATOR:
    - przypisz do zmiennej price wartość: '2.00$' jeśli isMember = true a jeśli nie to '10.00$';
        czy
  */

  var price = "2.00$";
  isMember = true;
  console.log(isMember ? price : "10.00$");