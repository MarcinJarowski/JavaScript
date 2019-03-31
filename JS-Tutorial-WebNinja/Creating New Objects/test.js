var myArray = new Array();
myArray[0] = 8; 
myArray[1] = "hello";

var myCar = new Object(); // long way to create an object//
myCar.maxSpeed = 50;
myCar.driver = "Marcin";
myCar.drive = function(){ console.log("now driving");
};

myCar.drive();


var myCar2 = {

    maxSpeed: 70,
    driver: "Jaros",
    drive: function(speed, time){
         console.log(speed * time);
}  // {}  is a shortcut for creating an object//

};

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);