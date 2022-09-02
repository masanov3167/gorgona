const timeElement = document.querySelector('.old__time');

const time = () =>{
    const date = new Date();
    const hours = date.getHours().toString().padStart(2,0);
    const minute = date.getMinutes().toString().padStart(2,0);
    const second = date.getSeconds().toString().padStart(2,0);
    return `${hours}:${minute}:${second}`;
}


setInterval(() =>{
    timeElement.textContent = time();
}, 1000)
