
//make an onclick event for the porcupine tab that console.logs the textContent when clicked.
const showContent = event => console.log(event.target.textContent)
document.querySelector(".porcupine").onclick = showContent;
document.querySelector(".panther").onclick = (event) => console.log(event.target.tagName) 
// window.onclick =event => console.log (event.target)
document.querySelector(".penguin").onclick = (event) => console.log(event.target.textContent.toUpperCase())
window.onclick =event => console.log(event.target.textContent.toUpperCase())

/////////77ex-3
const pelicanLove = () => {
    for (let i = 0;i< 3; i++)
        console.log("I love Pelicans")
}
document.querySelector(".pelican").addEventListener("click", pelicanLove)


///q3_p2
const birdLove =animal => console.log(`animal ${animal} is a pretty boy`);

////q3 p3

document.querySelector(".parrot").addEventListener("click", (event) => birdLove(event.target.textContent))
document.querySelector(".peacock").addEventListener("click", (event) => birdLove(event.target.textContent))
///////////////ex4

const notAteater =() => console.log("I am not an anteater")
const notArmdillo =() => console.log("I am not armdillo")

// ////
document.querySelector(".pangolin").click = notAteater;
document.querySelector(".pangolin").click = notArmdillo;

//  document.querySelector(".pangolin").addEventListener("click", notAteater );
//  document.querySelector(".pangolin").addEventListener("click", notAteater );

// console.log(document.querySelectorAll(".tab"))

const bestAnimal = animal => {
    console.log((animal.toLowerCase() === "panther") ? `${animal} is the jungle assassin` : `${animal} is the best`);
    // {
    // if (animal.tolowercase() === "panter"){
    //     console.log(`${animal} is the jungle assassin`)
    // } else {
    //     console.log(`${animal} is the best`)
    // }
     }
let animalTabs= Array.from(document.querySelectorAll(".tab"));
animalTabs.forEach(tab => tab.addEventListener("click", () => bestAnimal(tab.textContent)))
// console.log(animalTabs)

document.querySelector("footer p span").addEventListener("click", () => console.log("span"))
document.querySelector("footer").addEventListener("click", () => console.log("footer"), true)
document.querySelector("footer p").addEventListener("click", () => console.log("paragraph"), true)


const setActive =(clickedTab) => {
animalTabs.forEach (tab => tab.classList.remove("active"));
clickedTab.classList.add("active")
document.querySelector(".header__page-title").textContent =clickedTab.textContent

}
animalTabs.forEach(tab => tab.addEventListener("click", () => setActive(tab)))

let animalContent = (document.querySelectorAll("content"));
const findContent = classToMatch => {
    animalContent.forEach(conttentDiv => {
        if (conttentDiv.classList.contains(classToMatch)) {
            conttentDiv.classList.add("featured")
        }
    })
}
 

let  searchInput  =document.querySelector("#search");
 document.querySelector("#search").addEventListener("input",()=> console.log(document.querySelector("#search").value))

 const findTab =( ) => {
    animalTabs.forEach (tab => {
        if (tab.textContent.toLowerCase().includes(searchInput.value)) {
            tab.classList.add("active")
    } else {
        tab.classList.remove("active")
    }
    

    })
 } 
 searchInput.addEventListener("input" , findTab)