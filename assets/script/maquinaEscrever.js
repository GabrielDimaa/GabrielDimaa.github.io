const typeWrite = (array, tag) => {
   array.forEach((letra, index) => {
        setTimeout(() => {
            tag.innerHTML += letra
        }, 75 * index)
    })
}

const h1 = document.querySelector('#h1')
const h2 = document.querySelector('#h2')

const titulo = h1.innerHTML.split('')
const subtitulo = h2.innerHTML.split('')

h1.innerHTML = ""
h2.innerHTML = ""

setTimeout(() => {
    typeWrite(titulo, h1)
    setTimeout(() => {
        typeWrite(subtitulo, h2)
    }, 1500);
}, 500);