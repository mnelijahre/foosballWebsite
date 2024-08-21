const person1 = document.querySelector("#person1");
const person2 = document.querySelector("#person2");
const person3 = document.querySelector("#person3");
const person4 = document.querySelector("#person4");
const people = document.querySelectorAll(".people");


const personName = document.querySelector("#personName");
const personMajor = document.querySelector("#personMajor");
const personDetails = document.querySelector("#personDetails");

function person(name, major, details){
    this.name = name;
    this.major = major;
    this.details = details;
}

const personOneDetails = person("Sam", "Computer Science", "N/A");
const personTwoDetails = person("John", "Computer Science", "N/A");
const personThreeDetails = person("Bret", "Computer Science", "N/A");
const personFourDetails = person("George", "Computer Science", "N/A");


console.log(people);
people.forEach((p)=>{
    p.addEventListener("click" ,()=>{
        updateDisplay(p.id);
    })
    console.log(p.id);
})

function updateDisplay(pID){
    const theme = pID + "-page";
    let name, major, details;

    if (pID == "person1"){
        name  = personOneDetails.name;
        major = personOneDetails.major;
        details = personOneDetails.details;
    }
    if (pID == "person2"){
        name = personTwoDetails.name;
        major = personTwoDetails.major;
        details = personTwoDetails.details;
    }
    if (pID == "person3"){
        name = personThreeDetails.name;
        major = personThreeDetails.major;
        details = personThreeDetails.details;
    }
    if (pID == "person4"){
        
    }

    document.querySelectorAll(".people").forEach((p)=>{
        p.classList.remove("selectedPerson");
    })
    document.querySelector("#" + pID).classList.add("selectedPerson");

    
    console.log(theme);
}

