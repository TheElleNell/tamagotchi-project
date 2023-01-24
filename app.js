// TAMAGOTCHI PROJECT


class Dragon {
  constructor(name, age, hunger, happiness, rest) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.happiness = 0;
  this.rest = 0
  }
}

// NAME DRAGON 
const Sunny = new Dragon('Sunny')

console.log(Sunny.hunger)

let startGameButton = document.querySelector(".dragon-name")

let dragonName1 = document.querySelector(".dragon-input-name")
  
startGameButton.addEventListener("click", nameDragon)

function nameDragon () {
  dragonName = ""
  let dragonNaming = prompt("Please enter the name")
  dragonName1.innerHTML += dragonNaming
  
}



// SETTING UP REMOVING DRAGON

// let removeDragon= document.getElementsById(".dragon")
// removeDragon.removeChild

function removeDragon() {
  document.getElementById('#dragon').remove()
}

// stack images 
// absolute 

// nameDragon()

// SETTING UP FEED FUNCTION 

console.log("Before Feeding", Sunny)

let feedDragon = document.querySelector(".feed")

feedDragon.addEventListener("click", feedClick)

function feedClick() {
  Sunny.hunger += 10
  Sunny.rest += -10
  Sunny.happiness += 5

  document.body.style.backgroundImage = "url(assets/1590956.gif)"

  console.log("After Feeding", Sunny)

  removeDragon()
}

// SETTING UP REST FUNCTION 
console.log("Before Rest", Sunny)

let restDragon = document.querySelector(".rest")

restDragon.addEventListener("click", restClick)

function restClick() {
  Sunny.hunger += -20
  Sunny.rest += 10
  Sunny.happiness += 5

  document.body.style.backgroundImage = "url(assets/image_processing20210506-22509-1re4amp.gif)"
 
  console.log("After rest", Sunny)
}

// SETTING UP THE HAPPINESS FUNCTION 

console.log("Before Happy", Sunny)

let happyDragon = document.querySelector(".happy")

happyDragon.addEventListener("click", happyClick)

function happyClick() {
  Sunny.hunger += 5
  Sunny.rest += 5
  Sunny.happiness += 30

  document.body.style.backgroundImage = "url(assets/de6inxb-3d0d453b-abbf-4ed0-a863-ea5ba9f95d6a.gif)"

  console.log("After happy", Sunny)
}

// SET AGE OF DRAGON

// let dragonAge = document.querySelector(".dragon-age")

// function increaseAge() {
//   this.age.innerHTML = parseInt(this.age.innerHTML) +1
// }

// let ageInterval = setInterval(function() {
  
//   Sunny.age += 1
//   let dragonAge = document.querySelector(".dragon-age")
//   // ageNumber = parseInt()
//   dragonAge.innerHTML += 1


  
//   // parseInt(dragonAge)
//   console.log(dragonAge)

//   console.log(Sunny)

// }, 3000)

// console.log(ageInterval)








// SECTION 7 - using setinterval to run decreaseMetrics and increaseAge methods every 3 seconds
    // need to have explicit reference to the increaseAge method in order to work 
    // let interval = setInterval(function(){
    //   tomagotchiInstance.decreaseMetrics()
    //   tomagotchiInstance.increaseAge()
    //   // SECTION 8 - if the method reachEnd is true, then stop the decreaseMetrics and increaseAge methods and end the game
    //    if (tomagotchiInstance.reachEnd() === true){
    //        clearInterval(interval)
    //        tomagotchiInstance.endGame()
    //        }
    //   }, 3000);

// prompt

// event listener 

// counter 

// set interval 


// feedClick()


  // let submitButton = document.createElement('input')
  // submitButton.setAttribute("type", "submit")
  
  // let dragonName = document.getElementById(".dragon-input-name")
  // // dragonName.innerText = "hi"
  
  // dragonName.appendChild(input)




// }

// namePrompt = () => {
//   let promptName = prompt("Welcome to Dragon Life")
//   document.querySelector(".dragon-input.name").innerHTML = promptName
//   return Prompt

// }

// namePrompt()





// document.getElementById('dragon-name').addEventListener('click', nameDragon)

// function startGame () {

//   feedDragon.addEventListener("click", function(){
//     Sunny.feedClick()
//   })
// }

// startGame() 