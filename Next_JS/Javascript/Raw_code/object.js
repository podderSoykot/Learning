const car = {
    type: "Fiat",
    model: "500",
    color: "white",
    weight: "2500 kg"
};

const person = {
    name: "Soykot Podder",
    Id: "Senior AI Developer (Way-Wise Tech)",
    Department: "AI",
    Current_Project: "Chatbot Development",
    Progress: "Initial Phase",
    Budget: 500,

    //display propertyes into a loop
    full_bio: function() {
        let bio = "";
        for (let key in this) {
            if (typeof this[key] !== "function") { // skip functions
                bio += `${key}: ${this[key]}\n`;
            }
        }
        return bio.trim();
    }
};

console.log("Person Object:", person);
console.log("Car Object:", car);

console.log("\nFull Bio:\n" + person.full_bio());

