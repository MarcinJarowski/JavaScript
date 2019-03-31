// 1 Napisz funkcje która przyjmuje 2 liczby jako argument i zwraca liczbę, która jest większa.
//Użyj ternary operator

const compare = (a, b) => a > b ? a : b;
console.log(compare(12312312,1231231233333));

// // 2
// // Na podstawie ponizszych danych, wylistuj logi, ktore wystapily po 1 stycznia 2019 roku.

const logs = [
  {
    type: 'error',
    message: 'Error on production',
    date: 'December 17, 2018'
  },
  {
    type: 'warning',
    message: 'Only warning - problem with message',
    date: 'January 12, 2019'
  },
  {
    type: 'log',
    message: 'Log data',
    date: 'January 17, 2018'
  },
  {
    type: 'critical',
    message: 'Critical Error on producition',
    date: 'February 21, 2019'
  },{
    type: 'error',
    message: 'Error on production',
    date: 'March 28, 2019'
  },
  {
    type: 'log',
    message: 'only log data -> dont worry ',
    date: 'February 27, 2019'
  },
  {
    type: 'critical',
    message: 'Critical error, do something',
    date: 'February 22, 2019'
  },
  {
    type: 'warning',
    message: 'Just warning',
    date: 'December 11, 2018'
  },
  {
    type: 'bug',
    message: 'We found a bug!',
    date: 'March 27, 2019'
  },
  {
    type: 'error',
    message: 'Error on production',
    date: 'December 1, 2018'
  }
];
// const dataStyczen = new Date("January 1, 2019");
// console.log(dataStyczen.getTime());
// const newestLogs = logs.reduce((result, log)=>{
//     console.log(log);
//     const dateInMs = new Date(log.date).getTime()
//     console.log(dateInMs);

//     if(dateInMs >= dataStyczen.getTime()){
//         result.push(log);
//     return result;
//     }
// }, [])   ////cos mnie tu nie dzialczy

// // Napisz funkcje ktora wyswietli najnowszy blad z logow.


// // Napisz funkcje ktora wyswietli najstarszy blad.

// const start = new Date().getTime();
// console.log(start);
// let end;

// setTimeout(()=>{
//     end = new Date().getTime();
//     console.log(end - start);
//     const timeInSeconds = (end-start)/1000
//     console.log(timeInSeconds);
// }, 3000)







// // 3 Napisz funkcje ktora dla tablicy logs policzy ile bylo jakich rodzajow bledow.
// // Oczekiwany wynik { error: 3, warning: 2, log: 2, critical: 2, bug: 1 }


// // Uwaga, funkcja musi byc uniwersalna nie deklaruj nigdzie jawnie typów pól






// // 4
// // Dostajesz od swojego dostawcy dancyh takie dane w takim formacie:
const data = ['name', 'Michal', 'lastName', 'Kowalski', 'age', '21', 'job', 'programmer'];


const dataObject = data.reduce((result, currentData, index, array) => {
    if(index % 2 ===0){
        result[array[index]]= array[index+1]
    }

    return result;
}, {})

console.log(dataObject);
// // Stworz z tego obiekt
// // {
// //   name: ...
// //   lastName: ...
// //   ...
// // }
// // Jesli bedziesz potrzebowal zobacz jakie jeszcze dane przyjmuje metoda reduce:
// // https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/Reduce







// // 5
// // policz ile oskarów dostały filmy w danych kategoriach
// // Oczekiwany wynik:
// // {
// //   'New Releases': 7,
// //   Dramas: 3
// // }

var movieLists = [
  {
    name: "New Releases",
    videos: [
      {
        "title": "Die Hard",
        "rating": 4.0,
        "oscars": 2
      },
      {
        "title": "Bad Boys",
        "rating": 5.0,
        "oscars": 0
      },
      {
        "title": "Harry Potter",
        "rating": 5.0,
        "oscars": 1
      },
      {
        "title": "Mission Impossible ",
        "rating": 3.0,
        "oscars": 0
      },
      {
        "title": "Matrix",
        "rating": 5.0,
        "oscars": 4
      }
    ]
  },
  {
    name: "Dramas",
    videos: [
      {
        "title": "Green book",
        "rating": 5.0,
        "oscars": 1
      },
      {
        "title": "12 Strong",
        "rating": 3.0,
        "oscars": 2
      },
      {
        "title": "Leave no trace",
        "rating": 3.0,
        "oscars": 0
      },
      {
        "title": "Creed 2",
        "rating": 4.5,
        "oscars": 0
      },
    ]
  }
];

const moviesWithOscars = movieLists.reduce((result, movieType) => {
    console.log(movieType);
    const sumOfOscars = movieType.videos.reduce((resultOfOscarsCount, currentMovie)=>{


    })
})





// // 6 Dostajesz liste z plikami jakie sa na serwerze:
// const files = ['index.php', 'img1.png', 'img2.jpg', 'index.html', 'script.js', 'script2.js', 'script3.js', 'file.bmp',
//   'run.exe', 'script.sh'];

// // Chcesz pokazac uzytkownikowi jakie rozszerzenia znajduja sie na serwerze, ale uwaga,  nie chcesz
// // pokazac uzytkownikowi, ze sa takie rozszerzenia jak exe, sh -  Chcesz to ukryc przed uzytkownikiem
// // Jezeli plikow jednego typu jest kilka, to w wynikowej liscie powinna byc tylko jedna informacja o tym typie
// // Oczekiwany rezultat: ['.php', '.png', '.jpg', '.html', '.js', '.bmp']







// // 7
// // Dla danej tablicy wylicz wage slowa. Waga slowa to suma indexow kazdej litery w alfabecie
// // Wyswietl slowo o najwiekszej wadze
// // Oczekiwana opowiedz "Parmezan"
// const alphabet = 'abcdefghijklmnoprstuwxyz';
// const names = ['Kalafior', 'Brokuł', 'Pomidor', 'Banan', 'Parmezan', 'ABCS', 'AAAAa']








// //8 Z obiektu:
// const obj = {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3',
//   key4: 'value4'
// };
// //
// // // Stworz taka tablice:
// // // [ 'key1',
// // //   'value1',
// // //   'key2',
// // //   'value2',
// // //   'key3',
// // //   'value3',
// // //   'key4',
// // //   'value4' ]

// // // Nie korzystaj z metody Object.entries()










// //9 Z obiektu:
// const obj = {
//   key1: 'value1',
//   key2: 'value2',
//   key3: '',
//   key4: '',
//   key5: null,
//   key6: undefined,

// };
// //
// // Stworz nowy obiekt ktory nie zawiera pustych pól, lub pól z wartościami null, undefined
// // // Nie korzystaj z metody Object.entries()





// //10
// // Napisz funkje, ktora tych obiektow:
// const users = [
//   {
//     name: "Michal",
//     lastname: "Kowalski",
//     age: "23"
//   },
//   {
//     name: "Jan",
//     age: "12"
//   },
//   {
//     name: "Kuba",
//     lastname: "Czerwony",
//     age: "82"
//   },
//   {
//     name: "Joanna",
//     age: "31"
//   },
//   {
//     name: "Anna",
//     lastname: "Brazowa",
//     age: "26"
//   },
//   {
//     name: "Agnieszka",
//     lastname: "Zolta",
//     age: "18"
//   },
// ];

// // dodaje nowe pole fullName i wypelnia je wartoscia z imienia i nazwiska name + lastName
// // Uwaga niektore obiekty nie posiadaja pola lastName. Jestli taka sutuacja wystapi, nie dodawaj takiej osoby do nowej listy
