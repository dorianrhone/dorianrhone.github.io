// Button for Exercise 1 and Exercise 2
const btnEx1 = document.getElementById("btn-ex1");
const btnEx2 = document.getElementById("btn-ex2");

btnEx1.onclick = () => {
    document.querySelector("#main-nav").classList.toggle("hidden");
};

btnEx2.onclick = () => {
    console.log("Exercise 2 button clicked");
};

// Points deduction for missing class
document.getElementById("txt-num-days").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const pMessage = document.getElementById("p-message");
    
    if(numDays < 2){
        pMessage.innerHTML = `You will lose no point(s) for missing class. One unexcused absence is allowed.`;
    } else if(numDays >= 2){
        pMessage.innerHTML = `You will lose ${numDays-1} points for missing class.`;
    }
};

// Days left in the semester
const pDaysLeft = document.getElementById("d-left");
const cTime = document.getElementById("c-message");

