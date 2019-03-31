/*function getAverage (a,b){

    var average = (a + b) / 2; //local variable
    console.log(average);
} 

getAverage(7,12);

*/

function getAverage (a,b,c,d,e,f){ 

    var average = (a + b + c + d + e + f) / 6; //local variable 
    console.log(average);
    return average;
}
var myResult = getAverage(7,8,9,10,11,12); //global variable


function logResult(){
    console.log("The average is " + myResult + " inside the function");
}

logResult();