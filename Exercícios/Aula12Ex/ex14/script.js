

function carregar(){
    var textoo = document.getElementById('texto')
    var img = document.getElementById('foto')
    var agora = new Date()
    var hora = agora.getHours()
    textoo.innerHTML = (`Agora são ${hora} Horas`)


    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#d9a847'
    } else if( hora >= 12 && hora <= 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#aebecb'
    } else { 
        img.src = `imagens/noite.png`
        document.body.style.background = '#42395a'
    }
}
