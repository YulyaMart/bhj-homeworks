const timer = document.getElementById('timer')
let timerId = setInterval ( () => {
    if (timer.textContent == 0) {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!")
    } else {timer.textContent = Number(timer.textContent) - 1} 
}, 1000)
