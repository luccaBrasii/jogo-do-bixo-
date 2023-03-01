$(() => {

    //LOCAL STORAGE
    const itens = JSON.parse(localStorage.getItem('item')) || []

    itens.forEach(e => {
        var tr = document.createElement('tr');

        var tdNome = document.createElement('td');
        var tdTel = document.createElement('td');
        var tdVal = document.createElement('td');
        var tdData = document.createElement('td');
        var tdBixo = document.createElement('td');

        tdNome.textContent = e.nome;
        tdTel.textContent = e.telefone;
        tdVal.textContent = e.aposta;
        tdData.textContent = e.data;
        tdBixo.textContent = e.bixo;


        tr.append(tdNome, tdTel, tdVal, tdData, tdBixo);

        document.querySelector('.tabela_apostas').appendChild(tr)
    })
    //

    //CAMPOS DO USUARIO
    var campos = [
        $('#nome'),
        $('#telefone'),
        $('#valor')]

    //MOSTRA A IMAGEM DO BIXO QUANDO CLICA NELE
    $('.tabela-bixos img').each(function () {
        $(this).click(() => {
            $('.informacoes').fadeIn(500)
            x = $(this).attr('src')
            $("#img_selecionada").attr('src', x)
            numAposta = $(this).attr('name')
        })
    })

    //ENCERRA A TABELA DOS BIXOS
    $('.x').click(() => {
        $('.informacoes').fadeOut(500)
    })
    //ENCERRA A VIA DOS CLIENTES
    $('.x2').click(() => {
        $('.informacoesCliente').fadeOut(500)
    })

    //BOTAO ADD APOSTA
    $('#aposta').click(() => {

        if (verifica($('#nome')) && verifica($('#telefone')) && verifica($('#valor'))) {

            viaCliente()
            $('.informacoesCliente').fadeIn(800)
            escreveAposta()

        }

    })


    function escreveAposta() {
        $('.informacoes').fadeOut(500)
        var tr = document.createElement('tr');


        campos.forEach((campo) => {
            var td = document.createElement('td');
            td.textContent = campo.val();
            tr.append(td);
        })


        //DATA
        let day = new Date().getDate()
        let mounth = new Date().getMonth() + 1

        dataCompleta = day + '/' + mounth

        var tdData = document.createElement('td');
        var tdAposta = document.createElement('td');
        tdData.textContent = dataCompleta
        tdAposta.textContent = numAposta

        tr.append(tdData)
        tr.append(tdAposta)
        document.querySelector('.tabela_apostas').appendChild(tr)

        salvarLocal()

    }

    //VIA DO CLIENTE
    function viaCliente() {
        let nome = $('#nome').val()
        let telefone = $('#telefone').val()
        let valor = $('#valor').val()

        $('#nomeCliente').text(nome)
        $('#telCliente').text(telefone)
        $('#bixoCliente').attr('src', x)
        $('#dim').text('Valor da aposta R$' + valor)
    }

    //REMOVER APOSTA
    $('.tabela_apostas').dblclick((e) => {
        if (!e.target.parentElement.classList.contains('tr')) {
            e.target.parentElement.remove()

        }
    })


    function salvarLocal() {
        class localStore {
            constructor(nome, telefone, aposta, data, numBixo) {
                this.nome = nome
                this.telefone = telefone
                this.aposta = aposta
                this.data = data
                this.bixo = numBixo
            }
        }

        let dado = new localStore($('#nome').val(), $('#telefone').val(), $('#valor').val(), dataCompleta, numAposta)

        itens.push(dado)

        localStorage.setItem("item", JSON.stringify(itens))
    }

    $('#apagar').click(() => {
        if (window.confirm("Você realmente quer apagar a lista?")) {
            localStorage.removeItem('item')
            window.location.reload(true)
        }

    })

})





