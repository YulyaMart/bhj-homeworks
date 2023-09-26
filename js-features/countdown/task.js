const timer = document.getElementById('timer')
setInterval ( () => {
    if (timer.textContent == 0) {
        clearInterval(timer);
        alert("Вы победили в конкурсе!")
    } else {timer.textContent = Number(timer.textContent) - 1} 
}, 1000)
