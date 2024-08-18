let i = 0;

while (i <= 100) {
    if (i % 3 == 0) {
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