const person1 = document.querySelector("#person1");
const person2 = document.querySelector("#person2");
const person3 = document.querySelector("#person3");
const person4 = document.querySelector("#person4");
const people = document.querySelectorAll(".people");


console.log(people);
people.forEach((p)=>{
    p.addEventListener("click" ,()=>{
        updateDisplay(p.id);
    })
    console.log(p.id);
})

function updateDisplay(pID){
    const theme = pID + "-page";
    
    console.log(theme);
}