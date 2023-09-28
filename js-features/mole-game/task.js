const dead = document.getElementById('dead')
const lost = document.getElementById('lost')
getHole = index => document.getElementById(`hole${index}`)

for (let i=1; i<10; i++) {
    getHole(i).onclick = () => {
        if (getHole(i).className.includes( 'hole_has-mole' )) {
            dead.textContent = Number(dead.textContent) + 1
            let gameResult = function(alertText) {
                alert(alertText)
                dead.textContent = 0
                lost.textContent = 0
            }
            if (dead.textContent == '10') {
                gameResult('Победа!')
            }
        }
        else {
            lost.textContent = Number(lost.textContent) + 1
            if (lost.textContent == '5') {
                gameResult('Вы проиграли!')
            }
        }
    }
}
