// Get the button element by its ID
const myButtonQ = document.getElementById('btn-q');
const myButtonW = document.getElementById('btn-w');
const myButtonE = document.getElementById('btn-e');
const myButtonA = document.getElementById('btn-a');
const myButtonS = document.getElementById('btn-s');
const myButtonD = document.getElementById('btn-d');
const myButtonZ = document.getElementById('btn-z');
const myButtonX = document.getElementById('btn-x');
const myButtonC = document.getElementById('btn-c');
const audioQ = document.getElementById('audioQ');
const audioW = document.getElementById('audioW');

function playAudioQ(){
    audioQ.play();
};
function playAudioW(){
    audioW.play();
}




// Function to set triggered state
function setTriggeredStateQ() {
    myButtonQ.classList.add('triggered');
}
function setTriggeredStateW() {
    myButtonW.classList.add('triggered');
}
function setTriggeredStateE() {
    myButtonE.classList.add('triggered');
}
function setTriggeredStateA() {
    myButtonA.classList.add('triggered');
}
function setTriggeredStateS() {
    myButtonS.classList.add('triggered');
}
function setTriggeredStateD() {
    myButtonD.classList.add('triggered');
}
function setTriggeredStateZ() {
    myButtonZ.classList.add('triggered');
}
function setTriggeredStateX() {
    myButtonX.classList.add('triggered');
}
function setTriggeredStateC() {
    myButtonC.classList.add('triggered');
}

// Function to reset triggered state
function resetTriggeredState() {
    myButtonQ.classList.remove('triggered');
    myButtonW.classList.remove('triggered');
    myButtonE.classList.remove('triggered');
    myButtonA.classList.remove('triggered');
    myButtonS.classList.remove('triggered');
    myButtonD.classList.remove('triggered');
    myButtonZ.classList.remove('triggered');
    myButtonX.classList.remove('triggered');
    myButtonC.classList.remove('triggered');
}

// Event listener for the "q" key press
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is 'q' (key code 81)
    if (event.keyCode === 81) {
        setTriggeredStateQ(); // Set triggered state when the key is pressed
        myButtonQ.click();
    } else if(event.keyCode === 87){
        setTriggeredStateW(); // Set triggered state when the key is pressed
        myButtonW.click();
    } else if (event.keyCode === 69){
        setTriggeredStateE(); // Set triggered state when the key is pressed
        myButtonE.click();
    } else if (event.keyCode === 65){
        setTriggeredStateA(); // Set triggered state when the key is pressed
        myButtonA.click();
    } else if (event.keyCode === 83){
        setTriggeredStateS(); // Set triggered state when the key is pressed
        myButtonS.click();
    } else if (event.keyCode === 68){
        setTriggeredStateD(); // Set triggered state when the key is pressed
        myButtonD.click();
    } else if (event.keyCode === 90){
        setTriggeredStateZ(); // Set triggered state when the key is pressed
        myButtonZ.click();
    } else if (event.keyCode === 88){
        setTriggeredStateX(); // Set triggered state when the key is pressed
        myButtonX.click();
    } else if (event.keyCode === 67){
        setTriggeredStateC(); // Set triggered state when the key is pressed
        myButtonC.click();
}}
)




// Event listener for the "q" key release
document.addEventListener('keyup', function(event) {
    // Check if the released key is 'q' (key code 81)
    if (event.keyCode === 81 || event.keyCode === 87 || event.keyCode === 69 || event.keyCode === 65 || event.keyCode === 83 || 
        event.keyCode === 68  || event.keyCode === 90 || event.keyCode === 88 || event.keyCode === 67) {
        resetTriggeredState(); // Reset triggered state when the key is released
    } 
});

// Event listener for the button click
myButtonQ.addEventListener('click', function() {
    console.log('HelloQ');
    playAudioQ();

});
myButtonW.addEventListener('click', function() {
    console.log('HelloW');
    playAudioW();
});
myButtonE.addEventListener('click', function() {
    console.log('HelloE');
});
myButtonA.addEventListener('click', function() {
    console.log('HelloA');
});
myButtonS.addEventListener('click', function() {
    console.log('HelloS');
});
myButtonD.addEventListener('click', function() {
    console.log('HelloD');
});
myButtonZ.addEventListener('click', function() {
    console.log('HelloZ');
});
myButtonX.addEventListener('click', function() {
    console.log('HelloX');
});
myButtonC.addEventListener('click', function() {
    console.log('HelloC');
});
