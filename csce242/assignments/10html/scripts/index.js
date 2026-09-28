// Dorian Rhone CSCE242 Assignment 10

const mArray = []; 
    mArray["Ashville"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8802791.986539215!2d-84.07379989486603!3d35.8172209078169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88598ca93c0f6f09%3A0x94ef31c106343a5d!2sAsheville%2C%20NC!5e1!3m2!1sen!2sus!4v1790564659479!5m2!1sen!2sus"
    mArray["Boone"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66129.3921163506!2d-81.70465321165973!3d36.2083704103054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850d12869945a65%3A0x6e0a346179f5a6e9!2sBoone%2C%20NC!5e1!3m2!1sen!2sus!4v1790564901262!5m2!1sen!2sus";
    mArray["Hot Springs"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33196.13133517557!2d-82.84947840642548!3d35.89611273383372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885a3218bdd5fedd%3A0x79a534f1577692ee!2sHot%20Springs%2C%20NC%2028743!5e1!3m2!1sen!2sus!4v1790564952902!5m2!1sen!2sus";
    mArray["Table Rock"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66396.60273427756!2d-81.95661856797456!3d35.890937567887725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850b8b9fdfebc2f%3A0xd8c8e189b89c9adf!2sTable%20Rock%20Mountain!5e1!3m2!1sen!2sus!4v1790564996802!5m2!1sen!2sus";

const bArray = [];
    bArray["Myrtle Beach"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d136337.74197547243!2d-78.96809296369234!3d33.720184476675705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x890068953b552101%3A0xbc0fb115b5d09618!2sMyrtle%20Beach%2C%20SC!5e1!3m2!1sen!2sus!4v1790565261102!5m2!1sen!2sus";
    bArray["Hilton Head Island"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d138728.25085359355!2d-80.8248009664534!3d32.18394667787751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fc79dc8ed319ad%3A0x2ce5a67aeba2283d!2sHilton%20Head%20Island%2C%20SC!5e1!3m2!1sen!2sus!4v1790565294751!5m2!1sen!2sus";
    bArray["Isle of Palms"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68890.05779029358!2d-79.80511939150605!3d32.8008965769878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe72dbd627eff3%3A0xf3291e17b2fd2956!2sIsle%20of%20Palms%2C%20SC!5e1!3m2!1sen!2sus!4v1790565331484!5m2!1sen!2sus";
    bArray["Folly Beach"] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68890.05779029358!2d-79.80511939150605!3d32.8008965769878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fdd7c752411441%3A0x8608c6d0749993c2!2sFolly%20Beach%2C%20SC!5e1!3m2!1sen!2sus!4v1790565364034!5m2!1sen!2sus";


document.getElementById("destination").onchange = (e) => {
    const div = document.getElementById("destination-output");
    div.innerHTML = "";

    document.getElementById("map").classList.add("hidden");

    const selection = e.target.value;
    let selArray = null;

    if(selection === "mountain") {
        selArray = mArray;
    } else if(selection === "beach") {
        selArray = bArray;
    }

    if(selArray) {
        for (let destName in selArray) {
            const p = document.createElement("p");
            const link = document.createElement("a");

            link.innerHTML = destName;
            link.onclick = () => {
                document.getElementById("map-iframe").src = selArray[destName];
                document.getElementById("map").classList.remove("hidden");
            };
            p.append(link);
            div.append(p);
        }
    }
}