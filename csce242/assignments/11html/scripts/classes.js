// Dorian Rhone CSCE242 assignment11

class Place {
    constructor(iframe, title, Type, description, toDo, pic) {
        this.iframe = iframe;
        this.title = title;
        this.type = Type;
        this.description = description;
        this.toDo = toDo;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("place");
        section.classList.add("project-card");

        section.append(this.placeName());
        section.append(this.placeType());
        section.append(this.placeImage());

       section.querySelector("a").onclick = (e) => {
            e.preventDefault();
            
            const modal = document.getElementById("modal");
            const modalBody = document.getElementById("modal-body");
            
            modalBody.innerHTML = "";
            
            const mLeft = document.createElement("div");
            mLeft.classList.add("modal-left");

            const mRight = document.createElement("div");
            mRight.classList.add("modal-right");

            const h2 = document.createElement("h2");
            h2.textContent = this.title;

            const ul = document.createElement("ul");
            ul.append(this.liInfo("Type", this.type));
            ul.append(this.liInfo("Description", this.description));
            ul.append(this.liInfo("Things to Do", this.toDo));

            mLeft.append(h2);
            mLeft.append(this.placeIframe());
            mRight.append(ul);

            modalBody.append(mLeft, mRight);
            modal.showModal();
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

    placeType() {
        const p = document.createElement("p");
        p.textContent = `${this.type} Vacation`;
        return p;
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

    liInfo(property, value) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${property}</strong>: ${value}`;
        return li;
    }

}

const place = [];

place.push(new Place("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8802791.986539215!2d-84.07379989486603!3d35.8172209078169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88598ca93c0f6f09%3A0x94ef31c106343a5d!2sAsheville%2C%20NC!5e1!3m2!1sen!2sus!4v1790564659479!5m2!1sen!2sus",
    "Asheville",
    "Mountain",
    "A Blue Ridge Mountain city known for arts, food, and outdoor recreation.",
    "Visit Biltmore Estate, hike the Blue Ridge Parkway, explore downtown",
    "asheville.png"));
place.push(new Place("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60227.37194810201!2d-81.66336795!3d36.208377500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850d12869945a65%3A0x6e0a346179f5a6e9!2sBoone%2C%20NC!5e1!3m2!1sen!2sus!4v1790954592517!5m2!1sen!2sus",
    "Boone",
    "Mountain",
    "A mountain town known for its university, outdoor activities, and arts scene.",
    "Explore Appalachian State University, hike Grandfather Mountain, visit local breweries",
    "boone.png"));
place.push(new Place("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120933.61390487588!2d-82.91106481268116!3d35.89608647423473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885a3218bdd5fedd%3A0x79a534f1577692ee!2sHot%20Springs%2C%20NC%2028743!5e1!3m2!1sen!2sus!4v1790954681217!5m2!1sen!2sus",
    "Hot Springs",
    "Mountain",
    "A small mountain town known for natural hot springs and the Appalachian Trail.",
    "Soak in the hot springs, hike the Appalachian Trail, go rafting",
    "hotsprings.png"));
place.push(new Place("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60470.72775186246!2d-81.92399966569292!3d35.89095309423535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850b8b9fdfebc2f%3A0xd8c8e189b89c9adf!2sTable%20Rock%20Mountain!5e1!3m2!1sen!2sus!4v1790954760249!5m2!1sen!2sus",
    "Table Rock",
    "Mountain",
    "A prominent mountain peak offering hiking trails and scenic views.",
    "Hike to the summit, enjoy panoramic views, photograph the landscape",
    "tablerock.png"));
place.push(new Place("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123915.99601575788!2d-78.60043744102421!3d33.89516268587093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x890082b0f127f05b%3A0xd1e58176f5ff4a78!2sSunset%20Beach%2C%20NC!5e1!3m2!1sen!2sus!4v1790954802049!5m2!1sen!2sus",
    "Sunset Beach",
    "Beach",
    "A popular beach destination known for its sunsets and family-friendly atmosphere.",
    "Relax on the beach, watch the sunset, visit local shops and restaurants",
    "sunsetbeach.png"));
place.push(new Place("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125917.90122026824!2d-80.4033879936496!3d32.491700864728905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fc3ae2a89e0b85%3A0xa0f4cdb4a15e1fae!2sEdisto%20Beach%2C%20SC!5e1!3m2!1sen!2sus!4v1790954848035!5m2!1sen!2sus",
    "Edisto Beach",
    "Beach",
    "A serene beach known for its natural beauty and outdoor activities.",
    "Swim in the ocean, explore the marshes, go kayaking",
    "edistobeach.png"));
place.push(new Place("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495343.82914003363!2d-78.47214047670067!3d33.950207077940135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8900a081b16e4cb3%3A0xb94fac3c2cceea73!2sOak%20Island%2C%20NC!5e1!3m2!1sen!2sus!4v1790954881947!5m2!1sen!2sus" ,
    "Oak Island",
    "Beach",
    "A charming beach town with a relaxed atmosphere and beautiful coastline.",
    "Sunbathe on the beach, go fishing, explore local shops and restaurants",
    "oakisland.png"));
place.push(new Place("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495343.82914003363!2d-78.47214047670067!3d33.950207077940135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8900310270ac82d3%3A0xb93d3315efe428d2!2sPawleys%20Island%2C%20SC!5e1!3m2!1sen!2sus!4v1790954904547!5m2!1sen!2sus",
    "Pawleys Island",
    "Beach",
    "A picturesque barrier island known for its pristine beaches and wildlife.",
    "Walk along the beach, birdwatch, visit the local nature reserves",
    "pawleysisland.png"));

const placeDiv = document.querySelector(".projects.place");

place.forEach((place)=>{
    placeDiv.append(place.item);
});

const modal = document.getElementById("modal");
const close = document.querySelector(".close");

close.onclick = () => {
    modal.close();
}

