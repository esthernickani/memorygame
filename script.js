const gameContainer = document.getElementById("game");
const startGame = document.querySelector('.start')

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];





// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray, i) {
  for (let [i, color] of colorArray.entries()) {
    // create a new div
    const newDiv = document.createElement("div");
    const ids = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
    
    newDiv.setAttribute("id", ids[i]);

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);

  }

  
}

// TODO: Implement this function!
let counter = 0;
let arr = [];
let clickedColorArr = [];

function handleCardClick(event) {
  setTimeout(function() {
   if (counter === 2) {
      counter = 0;
      arr.length = 0;
      clickedColorArr.length = 0;
   }
  // you can use event.target to see which element was clicked
  //console.log("you just clicked", event.target.tagName, event.target.id);
  //showing the color picked
  
  //if the element clicked on is a square box, increase the coun
  if (event.target.tagName.toLowerCase() === 'div' && counter < 2 && arr[0] !== event.target.id) {
    counter ++;//increasing the count so I keep track that it's only two cards that have been clicked
    event.target.style.backgroundColor = event.target.classList[0];//changing the color of the card
    arr.push(event.target.id);//pushing it to the array to check that its not the same card that has been clicked
    clickedColorArr.push(event.target.classList[0]);//to push the colors to an array to check if they are same
    

    console.log(`counter:${counter}, arr:${arr}, color array: ${clickedColorArr}`)
  }

  let a;
  let b;

  a = arr[0];
  b = arr[1];

  console.log(a, b)

  if (counter === 2 && arr[0] !== arr[1] && clickedColorArr[0] !== clickedColorArr[1]) {
    let divOne = document.querySelector(`#${a}`);
    let divTwo = document.querySelector(`#${b}`);

    setTimeout(() => {
      if (divOne.classList[0] !== divTwo.classList[0]) {
        divOne.style.backgroundColor = '';
        divTwo.style.backgroundColor = '';
    }

      },1000)
   
    console.log(divOne.classList[0], divTwo.classList[0])

    
  }

  //console.log(`counter:${counter}; arr:${arr}; ${typeof(arr)}; ${arr[0]};color array: ${clickedColorArr}`)
  //console.log(clickedColorArr[0])
  }, 300)
}


// when the DOM loads
createDivsForColors(shuffledColors);
