let i = 0;


while (i <= 100) {
    text = i.toString();
    if (text.includes("3") && text.includes("7")) {
        console.log("FizzBuzz");
    }
    else if (text.includes("3")) {
        console.log("Fizz");
    }
    else if (text.includes("7")) {
        console.log("Buzz");
    }
    else if (i == 0) {
        console.log(i);
    }
    else if (i % 3 == 0 && i % 7 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 7 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
    
    i++;
}