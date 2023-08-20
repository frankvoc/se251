/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
const option = document.getElementById(`side`)
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
const fillPaddle = document.querySelectorAll('.fill');
const fillOutputs = document.querySelectorAll('.fill-output');

//function using index of player to change current player color.
function updatePaddleFill(playerIndex) {
    //gets color from wheel/input
  const selectedColor = fillPaddle[playerIndex].value;
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
const strokeInputs = document.querySelectorAll('.stroke');
const strokeOutputs = document.querySelectorAll('.output.stroke-output');

function updatePaddleStroke(playerIndex) {
  const selectedColor = strokeInputs[playerIndex].value;
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
const uInputs = document.querySelectorAll('.u');
uInputs.forEach((input, index) => { //goes through each of the up inputs we selected
  input.value = player[index].keys.u; //sets value of the Up key to current player index
  input.addEventListener('keydown', (e) => { 
    input.value = e.key;
    e.preventDefault();

    //updates new player index key press
    player[index].keys.u = e.key.toLowerCase(); //changes input to lowercase
    const output = input.nextElementSibling.nextElementSibling.nextElementSibling; //changes current div output
    output.textContent = player[index].keys.u;  //updates div
  });
  //pause fuinctionality
  input.addEventListener('focus', () => {
    if (currentState !== 'pause') {
      currentState = 'pause';//pauses game
    }
  });
});
//same logic for down
const dInputs = document.querySelectorAll('.d');
dInputs.forEach((input, index) => {
  input.value = player[index].keys.d;
  input.addEventListener('keydown', (e) => {
    input.value = e.key; 
    e.preventDefault(); 
    player[index].keys.d = e.key.toLowerCase();
    const output = input.nextElementSibling.nextElementSibling.nextElementSibling; 
    output.textContent = player[index].keys.d;
  });
  input.addEventListener('focus', () => {
    if (currentState !== 'pause') {
      currentState = 'pause';
    }
  });
});
