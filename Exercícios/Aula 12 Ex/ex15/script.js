function idadeagora() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var anonas = document.getElementById('ano')
    var texto = document.getElementById('texto')
    if(anonas.value == 0  || anonas.value > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - anonas.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <=10) {
                //criança
                img.setAttribute('src', 'imagens/meninocriança.png')
            } else if (idade <18){
                //adolecente
                img.setAttribute('src', 'imagens/meninoadolecente.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'imagens/homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/homemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if(idade >= 0 && idade <=10) {
                //criança
                img.setAttribute('src', 'imagens/meninacriança.png')
            } else if (idade <18){
                //adolecente
                img.setAttribute('src', 'imagens/meninadolecente.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'imagens/mulheradulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/mulheridosa.png')
            }
        }
            texto.innerHTML = (`Detectamos um ${genero} com  ${idade} anos de idade` )
            texto.appendChild(img)   
    }








}
