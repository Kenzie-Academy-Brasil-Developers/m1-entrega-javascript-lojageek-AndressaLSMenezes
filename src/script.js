let boneco = [
    {
        img  :"/assets/img/actions/animewoman.jpg",
        name :'Anime Woman',
        valor:'2000'
    },
    {
        img  :"/assets/img/actions/dragonballpersonagem.jpg",
        name :'Personagem de Dragon Ball',
        valor: '2000'
    },
    {
        img  :"/assets/img/actions/starwarspersonagem.jpg",
        name :'Mini Yoda',
        valor: '2000'
    },
    {
        img  :"/assets/img/actions/animewoman.jpg",
        name :'Anime Woman',
        valor:'2000'
    },
    {
        img  :"/assets/img/actions/dragonballpersonagem.jpg",
        name :'Personagem de Dragon Ball',
        valor: '2000'
    },
    {
        img  :"/assets/img/actions/starwarspersonagem.jpg",
        name :'Mini Yoda',
        valor: '2000'
    }
]

let imagem = [
    {
        img  :"/assets/img/painting/clock.jpg",
        name :'Relogio',
        valor: '1000'
    },
    {
        img  :"/assets/img/painting/gamepad.jpg",
        name :'Desenho',
        valor: '2000'
    },
    {
        img  :"/assets/img/painting/personagem.jpg",
        name :'Homem de Lata',
        valor: '2000'
    },
    {
        img  :"/assets/img/painting/clock.jpg",
        name :'Relogio',
        valor: '1000'
    },
    {
        img  :"/assets/img/painting/gamepad.jpg",
        name :'Desenho',
        valor: '2000'
    },
    {
        img  :"/assets/img/painting/personagem.jpg",
        name :'Homem de Lata',
        valor: '2000'
    }
]

// let listFigure = [];
// let listPainting = [];

function createActionItem(objeto){
    const ul = document.querySelector('.products_itens_action')
    for(let i = 0; i < objeto.length; i++) {
        const li   = document.createElement('li')
            // criamos o elemento de lista
        const img = document.createElement('img')
        const spanName = document.createElement('span')
        const pValor = document.createElement('p')
        const figure =  document.createElement('figure')
        img.src = objeto[i].img 
        // img inves de span
        figure.appendChild(img)
        li.appendChild(figure)

        spanName.innerText = objeto[i].name
        li.appendChild(spanName)

        pValor.innerText = objeto[i].valor
        li.appendChild(pValor)

        ul.appendChild(li)
    }
    return ul
};
createActionItem(boneco)

function createPaintingItem(objeto){
    const ul = document.querySelector(".products_itens_painting")

    for(let i = 0; i < objeto.length; i++) {
        const li   = document.createElement('li')
        // criamos o elemento de lista
        const img       = document.createElement('img')
        const spanName  = document.createElement('span')
        const spanValor = document.createElement('span')

        img.src = objeto[i].img 
        // img inves de span
        li.appendChild(img)

        spanName.innerText = objeto[i].name
        li.appendChild(spanName)

        spanValor.innerText = objeto[i].valor
        li.appendChild(spanValor)

        ul.appendChild(li)
    }
    return ul
}    

createPaintingItem(imagem)




