// Dorian Rhone CSCE242 assignment11

class Place {
    constructor(iframe, title, Type, description, toDo) {
        this.iframe = iframe;
        this.title = title;
        this.type = Type;
        this.description = description;
        this.toDo = toDo;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("place");
        section.classList.add("project-card");

        section.append(this.placeName());
        section.append(this.placeImage());
        section.append(this.moreInfo());

        const moreInfo = section.querySelector(".more-info");
        moreInfo.classList.add("hidden");

       section.querySelector("a").onclick = () => {
            moreInfo.classList.toggle("hidden");
        };

        return section;
    }

    placeName() {
        const h3 = document.createElement("h3");
        const a = document.createElement("a");
        h3.append(a);
        a.textContent = this.title;
        a.href="#";

        return h3;
    }

    placeImage() {
        const img = document.createElement("img");
        img.src= `images/${this.pic}`;
        img.alt = `Picture of ${this.title}`;
        return img;
    }

    placeIframe() {
        const iframe = document.createElement("iframe");
        iframe.src = this.iframe;
        iframe.width = "100%";
        iframe.height = "300";
        return iframe;
    }

    moreInfo(){
        const ul = document.createElement("ul");
        ul.classList.add("more-info");
        ul.append(this.liInfo("", this.iframe));
        ul.append(this.liInfo("Type: ", this.type));
        ul.append(this.liInfo("Description: ", this.description));
        ul.append(this.liInfo("Things to Do: ", this.toDo));

        return ul;
    }

    liInfo(property, value) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${property}</strong>: ${value}`;
        return li;
    }

}



const place = [];

place.push(new Place("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8802791.986539215!2d-84.07379989486603!3d35.8172209078169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88598ca93c0f6f09%3A0x94ef31c106343a5d!2sAsheville%2C%20NC!5e1!3m2!1sen!2sus!4v1790564659479!5m2!1sen!2sus", "Asheville", "Mountain", "Description 1", "To Do 1"));
place.push(new Place("iframe2", "Boone", "Mountain", "Description 2", "To Do 2"));
place.push(new Place("iframe3", "Hot Springs", "Mountain", "Description 3", "To Do 3"));
place.push(new Place("iframe4", "Table Rock", "Mountain", "Description 4", "To Do 4"));
place.push(new Place("iframe5", "Sunset Beach", "Beach", "Description 5", "To Do 5"));
place.push(new Place("iframe6", "Edisto Beach", "Beach", "Description 6", "To Do 6"));
place.push(new Place("iframe7", "Oak Island", "Beach", "Description 7", "To Do 7"));
place.push(new Place("iframe8", "Pawleys Island", "Beach", "Description 8", "To Do 8"));

const placeDiv = document.querySelector(".place");

place.forEach((place)=>{
    placeDiv.append(place.item);
});


