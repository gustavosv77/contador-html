const h2 = document.querySelector("h2");

function aumentar() {
    // h2.innerText = +h2.innerTex + 1
    // h2.innerText = parseInt(h2) + 1
    h2.innerText ++
}

function diminuir() {
    // h2.innerText = h2.innerText - 1
    h2.innerText -= 1
}

function zerar() {
    h2.innerText = 0
}