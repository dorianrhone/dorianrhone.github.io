// Dorian Rhone CSCE242

// function to create a car with the specified 
// position and color within the road-scene
function createCar(x, y, color) {
    const scene = document.getElementById("road-scene");

    const car = document.createElement("div");
    car.classList.add("car");
    car.style.left = x + "px";
    car.style.top = y + "px";
    car.style.backgroundColor = color;
    scene.appendChild(car);

    const carTop = document.createElement("div");
    carTop.classList.add("car-top");
    carTop.style.backgroundColor = color;
    car.appendChild(carTop);

    const window = document.createElement("div");
    window.classList.add("window");
    car.appendChild(window);

    const frontWheel = document.createElement("div");
    frontWheel.classList.add("wheel-front");
    car.appendChild(frontWheel);

    const backWheel = document.createElement("div");
    backWheel.classList.add("wheel-back");
    car.appendChild(backWheel);
};


// load the page with cars with a for loop to create 8 colored cars
// in a random postion within the lanes of the road
window.onload = function() {
    const colors = ["red", "blue", "green", "yellow", "purple"];
    
    for (let i = 0; i < 8; i++) {
        const x = Math.random() * 800;
        let y;

        if (Math.random() > 0.5) {
            y = 85;
        } else {
            y = 155;
        }

        const color = colors[Math.floor(Math.random() * colors.length)];
        createCar(x, y, color);
    }
};