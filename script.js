var button = window.document.getElementById('contar')
button.addEventListener('click',contar)


function contar(){
    var inicio = window.document.getElementById('txt1').value
    var fim = window.document.getElementById('txt2').value
    var passo = window.document.getElementById('txt3').value
    var div_res = window.document.getElementById('res')
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0){
        div_res.innerText = 'Preencha os dados corretamente!'

    }

    else if (passo == 0){
        alert('error 0')
    }
    
    else{
        var x = document.createElement('p') // VIA JS
        x.setAttribute('id', 'x') //VIA JS
        div_res.appendChild(x)
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
        while (inicio <= fim){
            x.append(`${inicio} 👉`)
            inicio += passo
        }
        x.append('👏')    

        
    }
}