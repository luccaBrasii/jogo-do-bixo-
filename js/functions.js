$(() => {

    mudaNumero()


    function mudaNumero() {
        let dado1 = $('.dado1')
        let dado2 = $('.dado2')
        let dado3 = $('.dado3')


        num = 0
        cronometro = setInterval(() => {
            if (num <= 98) {
                num++
            } else {
                num = 0
            }
            dado1.text(num)
        }, 5)

        num2 = 99
        cronometro2 = setInterval(() => {
            if (num2 >= 1) {
                num2--
            } else {
                num2 = 99
            }
            dado2.text(num2)
        }, 5)

        num3 = 0
        cronometro3 = setInterval(() => {
            if (num3 <= 98) {
                num3++
            } else {
                num3 = 0
            }
            dado3.text(num3)
        }, 10)
    }


    var autenticador = 1

    $('#sortear').click(() => {
        sortear()

    })

    $('#comecarSorteio').click(() => {
        var cubo = document.querySelectorAll('.cube')

        cubo.forEach((e) => {
            e.classList.add('animation')
        })
        if (autenticador == 0) {
            limpaImg()
            mudaNumero()
            autenticador++
        } else {
            alert('Você precisa sortear antes de começar um novo sorteio!')
        }
    })

    function sortear() {
        if (autenticador == 1) {
            var cubo = document.querySelectorAll('.cube')

            let resposta = $('#num1')
            let divResposta = $("#numSorteado-1")
            cubo[0].classList.remove('animation')
            clearInterval(cronometro)
            resposta.text(num)
            mudaImagem(num, divResposta)

            setTimeout(() => {
                let resposta = $('#num2')
                let divResposta = $("#numSorteado-2")
                cubo[1].classList.remove('animation')
                clearInterval(cronometro2)
                resposta.text(num2)
                mudaImagem(num2, divResposta)
            }, 1000)

            setTimeout(() => {
                let resposta = $('#num3')
                let divResposta = $("#numSorteado-3")
                cubo[2].classList.remove('animation')
                clearInterval(cronometro3)
                resposta.text(num3)
                mudaImagem(num3, divResposta)
            }, 2000)


            /*cubo.forEach((e) => {

                e.classList.remove('animation')

            })*/

            autenticador = 0

        }
    }

    function mudaImagem(num, ondeescreve) {
        if (num >= 1 && num <= 4) {
            ondeescreve.append("<img src='../img/1.jpg'>")
        } else if (num >= 5 && num <= 8) {
            ondeescreve.append("<img src='../img/2.jpg'>")
        } else if (num >= 9 && num <= 12) {
            ondeescreve.append("<img src='../img/3.jpg'>")
        } else if (num >= 13 && num <= 16) {
            ondeescreve.append("<img src='../img/4.jpg'>")
        } else if (num >= 17 && num <= 20) {
            ondeescreve.append("<img src='../img/5.jpg'>")
        } else if (num >= 21 && num <= 24) {
            ondeescreve.append("<img src='../img/6.jpg'>")
        }
        else if (num >= 25 && num <= 28) {
            ondeescreve.append("<img src='../img/7.jpg'>")
        }
        else if (num >= 29 && num <= 32) {
            ondeescreve.append("<img src='../img/8.jpg'>")
        }
        else if (num >= 33 && num <= 36) {
            ondeescreve.append("<img src='../img/9.jpg'>")
        }
        else if (num >= 37 && num <= 40) {
            ondeescreve.append("<img src='../img/10.jpg'>")
        }
        else if (num >= 41 && num <= 44) {
            ondeescreve.append("<img src='../img/11.jpg'>")
        }
        else if (num >= 45 && num <= 48) {
            ondeescreve.append("<img src='../img/12.jpg'>")
        }
        else if (num >= 49 && num <= 52) {
            ondeescreve.append("<img src='../img/13.jpg'>")
        }
        else if (num >= 53 && num <= 56) {
            ondeescreve.append("<img src='../img/14.jpg'>")
        }
        else if (num >= 57 && num <= 60) {
            ondeescreve.append("<img src='../img/15.jpg'>")
        }
        else if (num >= 61 && num <= 64) {
            ondeescreve.append("<img src='../img/16.jpg'>")
        }
        else if (num >= 65 && num <= 68) {
            ondeescreve.append("<img src='../img/17.jpg'>")
        }
        else if (num >= 69 && num <= 72) {
            ondeescreve.append("<img src='../img/18.jpg'>")
        }
        else if (num >= 73 && num <= 76) {
            ondeescreve.append("<img src='../img/19.jpg'>")
        }
        else if (num >= 77 && num <= 80) {
            ondeescreve.append("<img src='../img/20.jpg'>")
        }
        else if (num >= 81 && num <= 84) {
            ondeescreve.append("<img src='../img/21.jpg'>")
        }
        else if (num >= 85 && num <= 88) {
            ondeescreve.append("<img src='../img/22.jpg'>")
        }
        else if (num >= 89 && num <= 92) {
            ondeescreve.append("<img src='../img/23.jpg'>")
        }
        else if (num >= 93 && num <= 96) {
            ondeescreve.append("<img src='../img/24.jpg'>")
        }
        else if (num >= 97 && num <= 99 || num == 0) {
            ondeescreve.append("<img src='../img/25.jpg'>")
        }
    }


    function limpaImg() {
        $("#numSorteado-1 img").remove()
        $("#numSorteado-2 img").remove()
        $("#numSorteado-3 img").remove()

        $('#num1').text('')
        $('#num2').text('')
        $('#num3').text('')
    }

})