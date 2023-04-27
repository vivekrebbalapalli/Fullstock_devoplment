let marks = 85
if (marks > 90) {
    document.write("A")
}
else if (marks > 80 && marks <= 90) {
    document.write("B")
}
else if (marks > 70 && marks <= 80) {
    document.write("C")
}
else  {
    document.write(fail)
}

//assignment on greatest among three numbers
let a = 10;
let b = 20;
let c = 40;

if (a > b && a > c) {
    console.log(a + " is the greatest number.");
} else if (b > a && b > c) {
    console.log(b + " is the greatest number.");
} else {
    console.log(c + " is the greatest number.");
}

//check the number even or odd
function checknumber(){
    let n=-99
    if (n>0){
        console.log("Number is positive")
    }
    else if(n<0){
        console.log("Number is negitive")
    }
    else{
        console.log("Number is zero")
    }
   
}
checknumber()