const $html = document.querySelector('html')
const $checkbox = document.querySelector('#botao')

$checkbox.addEventListener('change', function() {
    $html.classList.toggle('modonoturno')
})