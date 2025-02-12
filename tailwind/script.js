function changeTime(){
    const time = document.querySelector('.time');
    time.innerHTML = new Date().toLocaleTimeString();
}

setInterval(changeTime, 1000);