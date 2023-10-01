
function sum (num1, num2){
    var sum = num1+num2;
    return sum;
}

var res = sum(30,20);
console.log(res);


function oddeven(num){

    if(num%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

var output = oddeven(10);
console.log(output);