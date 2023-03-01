$('#whats').click(() => {

    // substitua o número de telefone abaixo pelo número do destinatário
    var phone_number = "55" + formatarNumero($('#telefone').val());

    // substitua a mensagem abaixo pela mensagem que deseja enviar
    var message = `Nome: ` + $('#nome').val() + ` | Telefone: ` + $('#telefone').val() + ` | Valor da aposta: R$` + $('#valor').val() + `| Nº do bixo: ` + numAposta + ``;

    // crie a URL com os parâmetros phone e text
    var url = "https://api.whatsapp.com/send?phone=" + phone_number + "&text=" + encodeURIComponent(message);

    // abra a URL em uma nova janela
    window.open(url);

})

function formatarNumero(numTel) {
    // substitui parênteses e traços por uma string vazia
    return numTel.replace(/\(|\)|\-/g, "");
}
