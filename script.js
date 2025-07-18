// const minNum=1;
// const maxNum=100;
// const answer=Math.floor(Math.random() * (maxNum -minNum +1)) + minNum;

// let attempts=0;
// let guess;
// let running=true;

// while(running){
    
//     guess=window.prompt(`Enter the numbers between ${minNum} and ${maxNum}`);
//     guess=Number(guess);   

//     if(isNaN(guess)){
//         window.alert("Please enter a valid number");
//     }
//     else if(guess<minNum || guess >maxNum){
//         window.alert("Please enter a valid number");
//     }
//     else{
//         attempts++;
//         if(guess<answer){
//             window.alert("Your assumption is below! Try again");
//         }
//         else if(guess>answer){
//             window.prompt("your assumption is above! Try again");
//         }
//         else{
//             window.prompt("Congratulations! Your guess is  correct");
//               running=false;
//         }
        
//     }
   
   
// }
// console.log(`Your Lucky number is  ${attempts}`);

let heading = document.getElementById("heading");
let my_btn = document.getElementById("my_btn");
let result = document.getElementById("result");

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let running = true;

my_btn.onclick = function () {
    if (!running) {
        result.textContent = "Game over! Refresh to play again.";
        return;
    }

    let guess = Number(document.getElementById("giving").value);

    if (isNaN(guess)) {
        result.textContent = " Please enter a valid number.";
    } else if (guess < minNum || guess > maxNum) {
        result.textContent = `Enter a number between ${minNum} and ${maxNum}.`;
    } else {
        attempts++;
        if (guess < answer) {
            result.textContent = " Your guess is too low!";
        } else if (guess > answer) {
            result.textContent = " Your guess is too high!";
        } else {
            result.textContent = ` Congratulations! You guessed it in ${attempts} attempts.`;
            running = false;
        }
    }

    // Trigger blink effect
    result.classList.remove("blink"); // Remove if already added
    void result.offsetWidth; // Force reflow to restart animation
    result.classList.add("blink");
};





