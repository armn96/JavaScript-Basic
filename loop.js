var numbers = [1,2,3,4,5,6,7,8,9,10];

// for(var i=0;i<numbers.length;i++){
//     console.log("Index:"+i+" "+"="+" "+"Value:"+numbers[i]);
// }

for(var i=0;i<numbers.length;i++){
    var elements = numbers[i];
    if(elements == 5){
        console.log("Number is Found")
    }
}

var str = ["arman", "hero", "zakaria"]

for(var i=0;i<str.length;i++){
    var elements = str[i];
    if(elements == "hero"){
        console.log("Found");
        break;
    }
    else{
        console.log("Not Found");
    }
}