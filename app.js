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

const Sunny = new Dragon('Sunny')

console.log(Sunny.hunger)

let startGameButton = document.querySelector(".dragon-name")

let dragonName1 = document.querySelector(".dragon-input-name")
  
startGameButton.addEventListener("click", nameDragon)

function nameDragon () {
  dragonName1 = ""
  let dragonNaming = prompt("Please enter the name")
  dragonName1.innerHTML += dragonNaming
  
}





// nameDragon()

// SETTING UP FEED FUNCTION 

console.log("Before Feeding", Sunny)

let feedDragon = document.querySelector(".feed")

feedDragon.addEventListener("click", feedClick)

function feedClick() {
  Sunny.hunger += 10
  Sunny.rest += -10
  Sunny.happiness += 5

  console.log("After Feeding", Sunny)
}

// SETTING UP REST FUNCTION 
console.log("Before Rest", Sunny)

let restDragon = document.querySelector(".rest")

restDragon.addEventListener("click", restClick)

function restClick() {
  Sunny.hunger += -20
  Sunny.rest += 10
  Sunny.happiness += 5

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