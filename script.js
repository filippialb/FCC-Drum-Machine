const buttons = document.querySelectorAll('.drum-pad');
const audioElements = {
    '81': new Audio('/songs/fbi-open-up-explosion.mp3'),
    '87': new Audio('/songs/acaba-pelo-amor-deus-acabaaa.mp3'),
    '69': new Audio('/songs/feiao.mp3'),
    '65': new Audio('/songs/galaxy-meme.mp3'),
    '83': new Audio('/songs/larissa-manoel-pedindo-pix.mp3'),
    '68': new Audio('/songs/o-james-eu-quero-uma-salada-de-fruta.mp3'),
    '90': new Audio('/songs/que-nojo.mp3'),
    '88': new Audio('/songs/se-eu-largar-o-freio-oficial.mp3'),
    '67': new Audio('/songs/why-are-you-gay_W5G134P.mp3'),


    // Add similar entries for other keys
};
let currentAudio = null;
const outputDiv = document.getElementById('songNameOutput');

function playAudio(key) {
    if(currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    const audio = audioElements[key];
    if (audio) {
        audio.play();
        currentAudio = audio;
    }
}

function displayText(text) {
    outputDiv.textContent = text;
}

function handleButtonClick(event) {
    const key = event.target.dataset.key;
    if (key) {
        console.log(`Hello${String.fromCharCode(key)}`);
        playAudio(key);
        const songFileName = audioElements[key].src.split('/').pop(); // Extracting the file name from the audio element's URL
        displayText(songFileName);
    }
}

function resetButtons() {
    buttons.forEach(button => button.classList.remove('triggered'));
}

function handleKeyPress(event) {
    const key = event.keyCode.toString();
    const button = document.querySelector(`[data-key="${key}"]`);
    if (button) {
        button.classList.add('triggered');
        button.click();
    }
}

function handleKeyRelease(event) {
    const key = event.keyCode.toString();
    if (audioElements[key]) {
        resetButtons();
    }
}

buttons.forEach(button => button.addEventListener('click', handleButtonClick));
document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', handleKeyRelease);
