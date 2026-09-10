document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello World!";
    e.target.innerHTML = "done!";
};

// styles
document.getElementById("link").onclick = (e) => {
    e.preventDefault(); //don't go to links destinsation
    e.target.classList.add("cool-link");
};