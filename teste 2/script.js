const btn = document.querySelector('.button-desistir')

const btn1 = document.querySelector('.button-desistir')

//fazendo evento de clique
btn.addEventListener('click', abrirModal)
btn1.addEventListener('click', abrirModal)


function abrirJanela(){
    const modal = document.querySelector('.janela')
    const modalAtual = modal.style.display

    if(modalAtual == 'block'){
        modal.style.display = 'none'
    }else{
        modal.style.display = 'block'
    }
}




function abrirJanela(){
    let janela = document.querySelector('.button-desistir')

    janela.computedStyleMap.display = "block"
}

function fechaJanela(){
    let janela = document.querySelector ('.button-desistir')

    janela.computedStyleMap.display = 'none'
}

