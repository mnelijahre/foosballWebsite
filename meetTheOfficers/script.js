const person1 = document.querySelector("#person1");
const person2 = document.querySelector("#person2");
const person3 = document.querySelector("#person3");
const person4 = document.querySelector("#person4");
const people = document.querySelectorAll(".people");
const backgroundMen = document.querySelector("#backgroundMen");

const personName = document.querySelector("#personName");
const personMajor = document.querySelector("#personMajor");
const personDetails = document.querySelector("#personDetails");

function person(name, major, details, backgroundSelected){
    this.name = name;
    this.major = major;
    this.details = details;
    this.backgroundSelected = backgroundSelected;
}

const personOneDetails = new person("Sam", "Computer Science", "A good person", "res/person1.jpg");
const personTwoDetails = new person("John", "Biology", "Nobody special", "res/person2.jpg");
const personThreeDetails = new person("Bret", "Art", "A special man", "res/person3.jpg");
const personFourDetails = new person("George", "Theater", "A dork", "res/person4.jpg");

updateDisplay("person1")

console.log(personOneDetails.name);

console.log(people);
people.forEach((p)=>{
    p.addEventListener("click" ,()=>{
        updateDisplay(p.id);
    })
    console.log(p.id);
})

function updateDisplay(pID){
    const theme = pID + "-page";
    let personSelected;

    if (pID == "person1"){
        personSelected = personOneDetails;
    }
    if (pID == "person2"){
        personSelected = personTwoDetails;
    }
    if (pID == "person3"){
        personSelected = personThreeDetails;
    }
    if (pID == "person4"){
        personSelected = personFourDetails;
    }

    personName.innerHTML = personSelected.name;
    personMajor.innerHTML = personSelected.major;
    personDetails.innerHTML = personSelected.details;
    backgroundMen.style.backgroundImage = "url(" + personSelected.backgroundSelected + ")";
    //personSelected.backgroundSelected;

    document.querySelectorAll(".people").forEach((p)=>{
        p.classList.remove("selectedPerson");
    })
    document.querySelector("#" + pID).classList.add("selectedPerson");

    
}

