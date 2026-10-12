
// Dorian Rhone - CSCE 242 Part 7

const base_url = "https://dorianrhone.github.io/csce242/projects/part7/";

const getMenu = async() => {
    const url = `${base_url}menu.json`;
    const response = await fetch(url);
    return response.json();
};

const showMenu = async() => {
    const menu = await getMenu();

    menu.forEach((item) => {
        const category = item.category.toLowerCase().replace(/[^a-z]/g, "");

        document.getElementById(category).append(displayItem(item));
    });
};

const displayItem = (item) => {
    const section = document.createElement("section");
    section.classList.add("menu-item");

    const img = document.createElement("img");
    img.src = base_url + item.img_name;
    img.alt = item.name;
    img.classList.add("menu-item-image");
    section.append(img);

    const info = document.createElement("div");

    const h3 = document.createElement("h3");
    h3.innerHTML = item.name;
    info.append(h3);

    const p = document.createElement("p");
    p.innerHTML = item.description;
    info.append(p);

    section.append(info);

    const price = document.createElement("span");
    price.innerHTML = `$${item.price}`;
    section.append(price);

    return section;
};

showMenu();
