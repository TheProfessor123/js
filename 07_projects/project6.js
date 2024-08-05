// generate random color

const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]        
    }
    return color
}

let intervalId;
const startChanging = () => {
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000)
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChanging = () => {
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChanging)
document.querySelector('#stop').addEventListener('click', stopChanging)