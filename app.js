function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");


let campoPesquisa = document.getElementById("campo-pesquisa").value

// se campoPesquisa for uma string sem nada
if (!campoPesquisa) {
  section.innerHTML = "Nenhum personagem foi encontrado :("
  return
}
 
campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

// para cada dado dentro da lista de dados
for (let dado of dados) {
  titulo = dado.titulo.toLowerCase()
  descricao = dado.descricao.toLowerCase()
  tags = dado.tags.toLowerCase()
  
  // se titulo includes campoPesquisa, ent faça...
  if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    // cria um novo elemento
    resultados += `
    <div class="item-resultado" 
    <div class ="titulo-imagem-container" style="text-align: left;">
    <h2 class="titulo-personagem" style="color: ${dado.corTitulo};"> 
      ${dado.titulo}
    <img src="imagens/${dado.imagem}" alt="" class="imagem-personagem"
    style="width: ${dado.larguraImagem}; height: ${dado.alturaImagem};">
    </h2>
    <p class="descricao-meta-7" style="color: ${dado.corTexto};"> 
      ${dado.descricao}
    </p>
    <a href=${dado.link} target="_blank">Mais informações</a>
    </div>
`;
  }
  
}

if (!resultados) {
  resultados = "<p>Nada foi encontrado. digite um personagem ou algo relacionado a ele</p>"
}

section.innerHTML = resultados;
}





