const buttons = document.querySelectorAll('.drum');

buttons.forEach(element => {
    element.addEventListener("click", handleClick);
    element.addEventListener("keypress", handleClick);
});

document.addEventListener("keydown", event =>{
    const key = event.key;
    buttonAnimation(key);
    playSound(key);
});


function handleClick() {
    const button = this.innerText;
    buttonAnimation(button);
    playSound(button);
}

function playSound(keyOrClick) {
    switch(keyOrClick) {
        case 'w':
            const tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            const tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            const tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;   
        case 'd':
            const tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            const snare= new Audio('sounds/snare.mp3');
            snare.play();
            break;   
        case 'k':
            const crash= new Audio('sounds/crash.mp3');
            crash.play();
            break; 
        case 'l':
            const kick= new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;                        
    }
}

function buttonAnimation(button) {
    let activeButton = document.querySelector(`.${button}`);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 200);
}