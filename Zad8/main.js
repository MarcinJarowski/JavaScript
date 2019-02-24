// TODO: 0. W jednym console.logu(2 parametry) wyswietl index jezyka 'English' i nazwe ostatniego jezyka z langs
var langs = ['Polish', 'English', 'Spanish'];
var index = langs.indexOf('English');
var last = langs[2];
console.log(index + " " + last);



// TODO: 1. Do tablicy users, dodaj nowego użytkownika na początku i na koncu tablicy
var logins = [
    {login: 'John', password: 'h4x'},
    {login: 'Kajtek', password: 'lubie_placki'},
];
logins.push({login: 'Andrzej', password: 'h4xawdawda'});
logins.unshift({login: 'Andrzejkowy', password: 'h4xaawdawddawda'});
console.log(logins);


/* TODO: 2a. dodaj parametr isAvaiable do przedmiotw z kolekcji items jesli jest wyporzyczony przyjmuje wartosc false inaczej wartosc true
        2b. stworz kolekcje rentedItems ktora bedzie zawierala przedmioty z isAvaiable===false od najnizszego id do najwyzeszego przy zalozeniu ze w kolekcji items elementy posiadaja rosnace wartosci id
*/        
var rentedItemsIds = [2, 5, 29, 32, 34];
var items = [
  {id: 1, name: 'Konewka'},
  {id: 2, name: 'Łopata'},
  {id: 3, name: 'Szlauf'},
  {id: 4, name: 'Grabki'},
  {id: 5, name: 'Doniczka1'},
  {id: 6, name: 'Sweter'},
  {id: 29, name: 'Krzesło'},
  {id: 32, name: 'Doniczka2'},
  {id: 38, name: 'Rura'}
];

for(var i=0; i<items.length; i++){
    
    items[i].isAvaiable = rentedItemsIds.indexOf(items[i].id)

}
console.log(items[i].isAvaiable);




/* TODO: 3a. Wyświtl obiekt użytkownika nieposiadającego hasła w konsoli
          3b Dla użytkownika nieposiadającego uzupełnionego hasła wyświetl w konsoli: "Proszę NAZWA_UZYTKOWNIKA o uzupełnienie hasła"
          3c Uzupełnij brakujące hasło w kolekcji users    
  */
var users = [
    {login: 'Bartek', password: 'Testtest'},
    {login: 'Kamil', password: 'Testtest12'},
    {login: 'Agatka', password: 'Agatka1'},
    {login: 'Anastazja', password: '12341234'},
    {login: 'Władzia', password: 'XjsdSASDsd'},
    {login: 'John', password: null},
    {login: 'Bartek', password: 'SdsSsadsad'},
    {login: 'Asia', password: 'lubie_placki'},
];

// TODO: 4. Jesli login w users zaczyna się na A albo W wyciągnij tych użytkowników i stwórz osobną tablice z tymi użytkownikami
/*TODO: 5a Powtarzajace sie hobby u pary uzytkownikow wyswietl w konsoli
        5b Wyswietl w konsoli "Hobby NAZWA_HOBBY jest wspoldzielone przez UZYTKOWNIK i UZYTKOWNIK "
*/
var persons = [
    {login: 'Bartek', hobby: ['tenis', 'poker', 'footbal']},
    {login: 'Kamil', hobby: ['pływanie', 'programowanie']},
    {login: 'Agatka', hobby: ['poker', 'taniec']}
]