/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
var player1Name = document.getElementById('player1name');
var player2Name = document.getElementById('player2name');
//function to get player names
function setPlayerNames() {
  var p1Name = prompt('Enter Player 1 Username:');
  if (p1Name) {
    player1Name.textContent = p1Name;
  }
  console.log(player1Name)

  var p2Name = prompt('Enter player 2 Username:');
  if (p2Name) {
    player2Name.textContent = p2Name;
  }
}
onload = setPlayerNames;//prompts user first

//light dark mode btns
//select dark and light mode buttons
var lightModeBtn = document.getElementById('lightModeBtn');
var darkModeBtn = document.getElementById('darkModeBtn');
//select body
var body = document.body;
//click on light button => removes dark-mode css and add light-mode css
lightModeBtn.addEventListener('click', () => {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
});
//reverse of light button click
darkModeBtn.addEventListener('click', () => {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
});

//hide options
var option = document.getElementById(`side`)
function hide()
{
    if(option.style.display==="none")
    {
        option.style.display = "block";
    }
    else
    {
        option.style.display ="none";
    }
}

/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
//Updating Paddle Fill
//selecting elements with class fill and class output.fill to output hex color
var fillPaddle = document.querySelectorAll('.fill');
var fillOutputs = document.querySelectorAll('.fill-output');
//function using index of player to change current player color.
function updatePaddleFill(playerIndex) {
    //gets color from wheel/input
  var selectedColor = fillPaddle[playerIndex].value;
  //updates new player with selected color
  player[playerIndex].fill = selectedColor;
  //updates .fill property with seleted color
  player[playerIndex].pad.fill = selectedColor;
  //updates fill-output with new hexdecimal color code
  fillOutputs[playerIndex].textContent = selectedColor;
}
fillPaddle.forEach((input, index) => {
    //waits for color to be changed(input) and calls updatePaddleFill function
  input.addEventListener('input', (e) => {
    updatePaddleFill(index);
  });

  //Updating Paddle Stroke

});
var strokeInputs = document.querySelectorAll('.stroke');
var strokeOutputs = document.querySelectorAll('.output.stroke-output');

function updatePaddleStroke(playerIndex) {
  var selectedColor = strokeInputs[playerIndex].value;
  player[playerIndex].stroke = selectedColor;
  player[playerIndex].pad.stroke = selectedColor;
  strokeOutputs[playerIndex].textContent = selectedColor;
}
strokeInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    updatePaddleStroke(index);
  });
});


/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
//selects all inputs with u class
var uInputs = document.querySelectorAll('.u');
uInputs.forEach((input, i)=> { //goes through each of the up inputs we selected
  input.value = player[i].keys.u; //sets value of the Up key to current player index
  input.addEventListener('keydown', (e) => { 
    input.value = e.key;
    e.preventDefault();

    //updates new player index key press
    player[i].keys.u = e.key.toLowerCase(); //changes input to lowercase
    var output = input.nextElementSibling.nextElementSibling.nextElementSibling; //changes current div output
    output.textContent = player[i].keys.u;  //updates div
  });
  //pause fuinctionality
  input.addEventListener('focus', () => {
    if (currentState !== 'pause') {
      currentState = 'pause';//pauses game
    }
  });
});
//same logic for down
var dInputs = document.querySelectorAll('.d');
dInputs.forEach((input, i) => {
  input.value = player[i].keys.d;
  input.addEventListener('keydown', (e) => {
    input.value = e.key; 
    e.preventDefault(); 
    player[i].keys.d = e.key.toLowerCase();
    var output = input.nextElementSibling.nextElementSibling.nextElementSibling; 
    output.textContent = player[i].keys.d;
  });
  input.addEventListener('focus', () => {
    if (currentState !== 'pause') {
      currentState = 'pause';
    }
  });
});

