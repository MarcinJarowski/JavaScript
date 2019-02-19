var Car = function(maxSpeed, driver){

        this.maxSpeed=maxSpeed;
        this.driver=driver;
        this.drive=function(speed, time){
                console.log(speed*time);
        };
        this.logDriver=function(){
                console.log("driver name is " + this.driver);
        };
}

var myCar=new Car(70, "Jaros");
var myCar2= new Car(40, "Piotrek");
var myCar3= new Car(12, "Grandma");
var myCar4= new Car(123, "Pro");

myCar.drive(30,8);
myCar4.logDriver();