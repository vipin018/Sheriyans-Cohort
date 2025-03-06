function changeTime() {
    const time = document.querySelector('.time');
    time.innerHTML = `[${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}]`;
}

setInterval(changeTime, 1000);
