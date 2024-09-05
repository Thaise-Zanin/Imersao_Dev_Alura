function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
console.log(section);

let resultados = ""
// para cada dado dentro da lista de dados
for (let dado of dados) {
    resultados += `
    <div class="item-resultado" 
    <div class ="titulo-imagem-container" style="text-align: left;">
    <h2 class="titulo-personagem" style="color: ${dado.corTitulo};"> <!-- Cor do título -->
      ${dado.titulo}
      <img src="imagens/${dado.imagem}" alt="" class="imagem-personagem"
      style="width: ${dado.larguraImagem}; height: ${dado.alturaImagem};">
    </h2>
    <p class="descricao-meta-7" style="color: ${dado.corTexto};"> <!-- Cor do texto -->
      ${dado.descricao}
    </p>
    <a href=${dado.link} target="_blank">Mais informações</a>
    </div>
`
}

section.innerHTML = resultados
}





