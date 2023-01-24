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


function deadDragon1() {

  let deadDragon = alert("Your dragon needs rest")

  if (Sunny.rest <= 0){
  return deadDragon
  }


}

// deadDragon1()

// SETTING UP REMOVING DRAGON

// let removeDragon= document.getElementById(".dragon")
// removeDragon.removeChild

// let removeDragon= document.getElementById(".dragon")

let removeDragon= document.getElementById(".dragon")

// removeDragon.addEventListener("click", removeDragonFunction)

// function removeDragonFunction() {

//   removeDragon.addEventListener('click', () => {
//   document.getElementById("dragon").style.display = "none"
//   })
//   console.log("is this working")
// }

// removeDragonFunction()

// SETTING UP FEED FUNCTION 

console.log("Before Feeding", Sunny)

let feedDragon = document.querySelector(".feed")

feedDragon.addEventListener("click", feedClick)

function feedClick() {
  Sunny.hunger += 10
  Sunny.rest += -10
  Sunny.happiness += 5
  // document.getElementById("dragon").style.display = "none"
  document.getElementById("dragon").src = "assets/fire-dragon.gif"
  // document.body.style.backgroundImage = "url(assets/1590956.gif)"

  console.log("After Feeding", Sunny)
  if (Sunny.rest < -5 ){
    alert("Your dragon needs rest")
  }
  else if (Sunny.happiness > 50){
    alert("Your dragon needs food")
  // deadDragon1()
  // deadDragon1()
  // removeDragon()
}
}

// SETTING UP REST FUNCTION 
console.log("Before Rest", Sunny)

let restDragon = document.querySelector(".rest")

restDragon.addEventListener("click", restClick)

function restClick() {
  Sunny.hunger += -20
  Sunny.rest += 10
  Sunny.happiness += -5

  document.getElementById("dragon").src = "assets/resting-dragon1.gif"
 
  console.log("After rest", Sunny)
  if (Sunny.rest < -5){
    alert("Your dragon needs rest")
  }  
  else if (Sunny.happiness > 50){
    alert("Your dragon needs food")
  // deadDragon1()
  // deadDragon1()
}
}




// let deadDragon = alert("Your dragon needs rest")



// deadDragon()
// SETTING UP THE HAPPINESS FUNCTION 

console.log("Before Happy", Sunny)

let happyDragon = document.querySelector(".happy")

happyDragon.addEventListener("click", happyClick)

function happyClick() {
  Sunny.hunger += -5
  Sunny.rest += -5
  Sunny.happiness += 30

  document.getElementById("dragon").src = "assets/flying-fixed.gif"

  console.log("After happy", Sunny)


  if (Sunny.rest < -5){
    alert("Your dragon needs food")
  }
  // deadDragon1()
}

// FUNCTIONS FOR GAME

// DRAGON NEEDS REST 




// console.log(dragonNeedRest())



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








// NOTES 

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