document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello World!";
    e.target.innerHTML = "done!";
};

// styles
document.getElementById("link").onclick = (e) => {
    e.preventDefault(); //don't go to links destinsation
    e.target.classList.add("cool-link");
};

// When the bounce button is clicked make the ball bounce
document.getElementById("btn-bounce").onclick = (e) => {
    console.log("bounce button clicked");
    document.getElementById("ball").classList.toggle("bouncing-ball");
}
