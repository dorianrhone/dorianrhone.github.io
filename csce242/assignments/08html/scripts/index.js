// CSCE 242 Dorian Rhone
// JavaScript for Assignment 8
// Button for Exercise 1 and Exercise 2
const btnEx1 = document.getElementById("btn-ex1");
const btnEx2 = document.getElementById("btn-ex2");

const exercise1 = document.getElementById("exercise1");
const exercise2 = document.getElementById("exercise2");

btnEx1.onclick = () => {
    exercise1.classList.remove("hidden");
    exercise2.classList.add("hidden");
};

btnEx2.onclick = () => {
    exercise1.classList.add("hidden");
    exercise2.classList.remove("hidden");
};

// Points deduction for missing class
document.getElementById("txt-num-days").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const pMessage = document.getElementById("p-message");
    const p2Message = document.getElementById("p2-message");

    
    if(numDays < 2){
        pMessage.innerHTML = `You will lose no point(s) for missing class. One unexcused absence is allowed.`;
    } else if(numDays >= 2){
        pMessage.innerHTML = `You will lose ${((numDays - 1)/24 * 7).toFixed(1)}% points for missing class.`;
        p2Message.innerHTML = 'This is not an online class, you are missing valuable learning oprotunities.';
    }

};

// Days left in the semester
const pDaysLeft = document.getElementById("d-left");
const cMessage = document.getElementById("c-message");

setInterval(() => {
    const date = new Date();
    const endOfSemester = new Date("2026-12-4");
    const timeDiff = endOfSemester - date;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    pDaysLeft.innerHTML = `There are ${daysLeft} day(s) left in the semester.`;
    
    if(daysLeft > 60){
        cMessage.innerHTML = 'Counter will not start till there are less than 60 days left in the semester.';
    } else if(daysLeft < 60){
        cMessage.innerHTML = 'You have less than 60 days left in the semester. Make the most of your time!';
    } else if(daysLeft < 30){
        cMessage.innerHTML = 'You have less than 30 days left in the semester. Keep up the good work!';
    } else if(daysLeft < 14){
        cMessage.innerHTML = 'You have less than 14 days left in the semester. Stay focused and finish strong!';
    } else if(daysLeft < 7){
        cMessage.innerHTML = 'You have less than 7 days left in the semester. Do your best!';
    } else if(daysLeft < 1){
        cMessage.innerHTML = 'One more classes!';
    }

}, 1000);