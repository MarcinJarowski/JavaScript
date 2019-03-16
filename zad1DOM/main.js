// zadanie 1
function doYouWant(){
   var ochota = window.confirm("Czy masz ochote odpowiedziec na wiecej pytan?");
   if(ochota){
       var name = window.prompt("Jak masz na imie?");
       window.alert("Siema " + name);
   }
}
// doYouWant();

// zadanie 2
function dajstrone(){
    var url = window.prompt("Podaj strone ziomek, pamietaj o https://");
    if(url){
        window.location = url; 
    }

}
// dajstrone();


// zadanie 3a
function podmianakoloru(color1, color2){

    var zielone = document.getElementById("important");
    zielone.style.backgroundColor = color1;
    var red = document.getElementsByClassName("red");
    red[0].style.backgroundColor = color2 ; 
}

// podmianakoloru("red", "green");
function lastPyellow(){
    var pTagsCollection = document.getElementsByTagName("p");
    pTagsCollection[pTagsCollection.length -1].style.backgroundColor = "yellow";
}
// lastPyellow();

function addFrame(){
    var firstElement = document.querySelector("#important");
    firstElement.firstElementChild.style.border = "3px solid gray";
    var parentOFElement = document.querySelector("#important");
    firstElement.parentElement.style.border = "3px solid red";

}
//addFrame(); 
function reference(){
    var before = document.getElementById("important");
    var previousSibling = before.previousSibling;
    console.log("zmienna" + previousSibling);
    var comebackImportant = previousSibling.nextSibling;
    console.log("comeback do important" + comebackImportant);
}
// reference();   DO POPRAWY NIE DZIALA

//USUWANIE ELEMENTOW DOM/dodawanie
//element.remove();
//document.createElement(); tworzy element o okreslonym tagu
// .appendChild(); dodaje element na koncu listy dzieci elementow, trzeba znalezc konteren
// .insertBefore, dodaje element do listy dzieci elementow

// zadanie DODAJ PUSTY DIV
function addDiv(){
    var e = document.createElement("div");
    console.log(e);
    var containet = document.getElementById("important");
    containet.appendChild(e);
    e.style.backgroundColor = "pink";
    e.style.height = "10px";
}
// addDiv();

// zadanie dodaj 2 p tagi. 1 na koncu 1 na poczatku

function addPTags(){
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var zlapimp = document.getElementById("important");

    zlapimp.appendChild(p1);
    zlapimp.insertBefore(p2);
    console.log(zlapimp);
}
// addPTags(); nIE DZIALA    slackkk

//document.createTextNode(); tworzy wezel tekstowy
function text(){
    var hajeden= document.querySelector("h1");
    var textH = "HELLO DUDE";  
    var textHNode = document.createTextNode(textH); //bo trzeba przekazac wezel
    hajeden.appendChild(textHNode);

}
// text();
// element.hasChildNodes(); zwaraca true or false czy ma dzieci
// element.innerHTML; przesciwosc przechowujaca zawartosc
// element.innerText przechowujaca zawarotsc elementu 

function addNewDiv(){
    var nowyDiv = document.createElement("div"); /*nowy div*/
    console.log(nowyDiv);
    var nowyP = document.createElement("p");  /*nowy p*/
    var nowyPe = nowyDiv.appendChild(nowyP); /*umiejscowienie p*/
    nowyP.innerText= "Marcin Jarowski"; /*dodanie tekstu p*/
}

// addNewDiv();

// add remove class
function addRemoveClass(){

    var element = document.querySelector('.red.wrapper__box');
    console.log(element);
    element.classList;
    console.log(element);
    element.classList.add('red');
    element.classList.toggle('dupajasiu');
    console.log(element);
}
// addRemoveClass();



// var headline = document.getElementsByTagName("h1")[0];
// console.log(headline);
// headline.style.backgroundColor= "pink"

// DODAJ RAMKE W ULUBIONYM KOLORZE 

function AskAddFrame(){
    var color = window.prompt("jaki jest twoj ulubiony kolor? napisz po angielsku");
    var firstElement = document.querySelector("#important");
    firstElement.style.border = "20px solid " + color;
}
// AskAddFrame()


function AskNameAndEmail(){
    var form = document.querySelector('form');
    var inputMail = document.querySelector('#email');
    var inputName = document.querySelector('#name');

    var imie = window.prompt("podaj imie");
    var email = window.prompt("podaj email");

    inputMail.value = email;
    inputName.value = imie;




    if(imie && email){
        form.submit()
    }
}
// AskNameAndEmail();

// element.addEventListener(type, listener[, options]);

// element.addEventListener("click", myFunction);
// function myFunction(){
//     alert("Hello World");
// }

// var nowyDiv = document.querySelector('elemento');
// nowyDiv.style.height = "300px";
// nowyDiv.style.width = "300px";
// nowyDiv.style.backgroundColor = "red";
// nowyDiv.addEventListener("mouseover", setGreen);
// nowyDiv.addEventListener("mouseout", setRed);

// function setGreen(){
//     nowyDiv.style.backgroundColor = 'green';
// }
// function setRed(){
//     nowyDiv.style.backgroundColor = 'red';
// }
// NIEEEEEE DZIALAAAA SLACK

var catbox = document.querySelector('.catbox');
var emoji = document.createTextNode("🐱");

catbox.addEventListener("click", newEmoji);
    function newEmoji(){
        catbox.appendChild(emoji);

    }
newEmoji();