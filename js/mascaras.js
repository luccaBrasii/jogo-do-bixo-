$('#telefone').mask('(99)99999-9999')


function verifica(el) {
    if (el.val().length == 0) {
        campoInvalido(el)

        return false
    } else {
        campoValido(el)
        return true
    }
}


function campoInvalido(el) {
    el.css('border', '2px solid red')

}
function campoValido(el) {
    el.css('border', 'none')
}

