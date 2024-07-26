//geerating random color 
const randomColor = () => {
    let hex = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
    let intervalID;

const startChangingColor = () => {
    intervalID = setInterval(changeBg, 2000)

    function changeBg (){ 
    document.body.style.backgroundColor = randomColor();
}
    
}

const stopChangingColor = () => {
    clearInterval(intervalID);

}
document.getElementById("start").addEventListener("click", startChangingColor,)
document.getElementById("stop").addEventListener("click", stopChangingColor)

