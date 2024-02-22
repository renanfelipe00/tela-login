const Titulo = document.querySelector('#Titulo');
const Boto = document.querySelector('#Boto')
const Som = document.querySelector('#Lulinha')


Boto.onclick = function() {
    Titulo.innerHTML = `<h1> Cuzinho </h1>`;
    Som.play()
}

