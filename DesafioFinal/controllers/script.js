const listarFilmes = function(){
    let xhttp = new XMLHttpRequest()
    let filmes = document.getElementById('filmes')
    let urls = []

    for(let i=597; i<609; i++){
      urls.push(`https://api.themoviedb.org/3/movie/${i}?api_key=a578af0ead323229bf928f7723ca1633&language=en-US`)
    };
  
    let responses = []
    
    urls.forEach((url) => {
        xhttp.open('get', url, false)
        xhttp.send()
        responses.push(JSON.parse(xhttp.responseText))
    })
    
    responses.forEach((filme) => {
        let div = document.createElement('div')
        div.className = 'col'

        let div2 = document.createElement('div')
        div2.className = 'card h-100'

        let img = document.createElement('img')
        img.src = `https://image.tmdb.org/t/p/w500/${filme.poster_path}`
        img.className = 'card-img-top'

        let div3 = document.createElement('div')
        div3.className = 'card-body'

        let title = document.createElement('h5')
        title.className = 'card-title'
        title.innerHTML = `${filme.title}`

        let info = document.createElement('p')
        info.className = 'card-text'
        info.innerHTML = `${filme.overview}`
    
        div.appendChild(div2)
        div2.appendChild(img)
        div2.appendChild(div3)
        div3.appendChild(title)
        div3.appendChild(info)

        filmes.appendChild(div)
    })
}
