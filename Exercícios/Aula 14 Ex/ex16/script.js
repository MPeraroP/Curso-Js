function contar(){

    
    var ini = document.getElementById('txti') 
    var fim = document.getElementById('txtf')
    var pass = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        res.innerHTML =`IMPOSSIVEL CONTAR`
        window.alert(`[ERRO] Faltam dados!`)
    } else{
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f =  Number(fim.value)
        let p = Number(pass.value)
        if(p <= 0)
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        if(i < f ){
            //contagem crescente
        for(let c = i;  c <= f; c += p){
            res.innerHTML += `${c} \u{1F449} `
        }
        
        } else{
            //contagem regreciva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
        }
        }res.innerHTML  += `\u{1F3C1}`
    }
}