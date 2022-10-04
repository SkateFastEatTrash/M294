const number = Math.floor(Math.random() * 100);
let guess = null
let tries = null


while (guess != number){
    tries ++
    let guess = prompt("Please enter your guess here:");
    if (guess > number){
        alert("Your guess was too high")
    }
    if (guess < number){
        alert("Your guess was too low")    
    }
    if (guess == number) {
    alert(`You guessed right you used ${tries} tries`);
    break;
    };
};
document.getElementById("body").innerHTML = tries;