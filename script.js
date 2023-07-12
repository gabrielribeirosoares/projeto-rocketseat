function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")


    if (html.classList.contains('light'))
    {
        img.setAttribute('src', 'assets/meu-avatar-light.png')
        img.setAttribute('alt', 'Imagem de Gabriel Ribeiro, com barba, óculos escuro, e camiseta de cor verde limão')
    }
    else {
        img.setAttribute('alt', 'assets/meu-avatar.png')
        img.setAttribute('alt', 'Imagem de Gabriel Ribeiro, com barba, óculos de grau, e camiseta de cor verde limão')

    }
    /*
    if (html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    } */


    //pegar a tag img
    //se estiver lightmode, add imagem light
    //se estiver sem light, manter img
    //substituir a imagem


}