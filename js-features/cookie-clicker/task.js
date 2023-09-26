const clicker__counter = document.getElementById('clicker__counter')
const img_cookie = document.getElementById('cookie')

img_cookie.onclick = () => {
    clicker__counter.textContent = Number(clicker__counter.textContent) + 1
    if (clicker__counter.textContent % 2) {
        img_cookie.width += 20
        img_cookie.height += 20
    } else {    
        img_cookie.width -= 20
        img_cookie.height -= 20
    }
}