let dados = [
    {
        titulo: "Hello Kitty",
        descricao: "Hello Kitty é uma garotinha chamada Kitty White, que tem a aparência de uma gatinha branca com um laço vermelho. Conhecida por sua personalidade gentil e amável, ela adora fazer novos amigos. Hello Kitty vive em Londres com sua família e amigos, e gosta de passar seu tempo desenhando, tocando piano e fazendo bolos.",
        link: "https://www.sanrio.com.br",
        imagem: "hello-kitty.png",
        corTexto: "#b50531f9",
        corTitulo: "#b50531f9",
        larguraImagem: "40px",
        alturaImagem: "48px",
        tags: "gatinha"
    },
    {
        titulo: "Mimmy",
        descricao: "Mimmy White é a irmã gêmea da Hello Kitty. Assim como Kitty, Mimmy também é uma garotinha representada como uma gatinha branca. Mimmy é mais tímida e reservada do que sua irmã, e é conhecida por ser doce, sonhadora e muito leal. Ela adora costurar e sonha em se tornar uma grande estilista.",
        link: "https://www.sanrio.com.br",
        imagem: "mimmy.png",
        corTexto: "#dbd81d",
        corTitulo: "#dbd81d",
        larguraImagem: "65px",
        alturaImagem: "50px",
        tags: "irmã da hello kitty"
    },
    {
        titulo: "My Melody",
        descricao: "My Melody é uma coelhinha doce e gentil, conhecida por seu característico capuz rosa que cobre suas orelhas. My Melody vive com sua família na floresta de Maryland e é representada como uma figura amável e atenciosa, sempre demonstrando grande carinho por seus amigos e familiares.",
        link: "https://www.sanrio.com.br",
        imagem: "my-melody.png",
        corTexto: "#f73b90",
        corTitulo: "#f73b90",
        larguraImagem: "60px",
        alturaImagem: "50px",
        tags: "coelhinha rosa"
    },
    {
        titulo: "Kuromi",
        descricao: "Kuromi é uma coelhinha gótica e rebelde, ela usa um capuz preto com uma caveira rosa, que dá a ela um visual de pequena diabinha. Ela é apresentada como a rival de My Melody, mas ao contrário de sua aparência de garota durona, Kuromi tem um lado divertido e brincalhão. Kuromi gosta de coisas punk, adora rock, e apesar de sua personalidade rebelde, também é conhecida por ser cativante e simpática.",
        link: "https://www.sanrio.com.br",
        imagem: "kuromi.png",
        corTexto: "#2c2b2f",
        corTitulo: "#2c2b2f",
        larguraImagem: "45px",
        alturaImagem: "50px",
        tags: "coelha gótica malvada"
    }, 
    {
        titulo: "Badtz Maru",
        descricao: "Badtz Maru é um pinguim com uma personalidade desafiadora e ousada, facilmente reconhecido pelo seu olhar carrancudo e estilo rebelde. ele é um pinguim travesso e aventureiro que adora surfar, andar de skate e praticar esportes radicais. Apesar de seu jeito durão, é conhecido por suas aventuras cômicas, energia contagiante e senso de humor único.",
        link: "https://www.sanrio.com.br",
        imagem: "badtz-maru.png",
        corTexto: "#000000",
        corTitulo: "#000000",
        larguraImagem: "40px",
        alturaImagem: "50px",
        tags: "pinguim"
    },
    {
        titulo: "Cinnamoroll",
        descricao: "Cinnamoroll é um filhotinho de cachorro branco e fofo com longas orelhas que usa para voar. Ele vive em uma nuvem macia e adora comer doces e passar tempo com seus amigos. Com uma personalidade gentil e alegre, ele é conhecido por sua bondade e disposição para ajudar. Cinnamoroll trabalha na cafeteria Cinnamon Café, onde se dedica a fazer novos amigos e ajudar com os pedidos.",
        link: "https://www.sanrio.com.br",
        imagem: "cinnamoroll.png",
        corTexto: "#42b3f0",
        corTitulo: "#42b3f0",
        larguraImagem: "80px",
        alturaImagem: "45px",
        tags: "voador voar branco canela "
    },
    {
        titulo: "My Sweet Piano",
        descricao: "My Sweet Piano é uma ovelhinha rosa e é melhor amiga de My Melody. Conhecida por sua natureza gentil, tímida e delicada, ela adora atividades calmas e criativas como desenhar, decorar e fazer lindos arranjos florais. Sua personalidade doce e amável a torna adorada por todos.",
        link: "https://www.sanrio.com.br",
        imagem: "my-sweet-piano.png",
        corTexto: "f7a1b7",
        corTitulo: "#f7a1b7",
        larguraImagem: "50px",
        alturaImagem: "60px",
        tags: "ovelha rosa ovelhinha"
    },
    {
        titulo: "Pochacco",
        descricao: "Pochacco é um adorável cachorrinho branco, conhecido por sua personalidade alegre e enérgica. Ele adora esportes, especialmente futebol e é frequentemente visto com um visual descontraído, usando shorts e tênis. Pochacco é curioso, otimista e sempre pronto para aventuras, o que o torna popular entre seus amigos.",
        link: "https://www.sanrio.com.br",
        imagem: "pochacco.png",
        corTexto: "#ff0059",
        corTitulo: "#ff0059",
        larguraImagem: "50px",
        alturaImagem: "50px",
        tags: "cachorro fofo cachorrinho"
    }, 
    {
        titulo: "Chococat",
        descricao: "Chococat é um gatinho preto, conhecido por seus bigodes de antenas ultra-sensíveis que o mantém sempre atualizado sobre o que acontece ao seu redor. Ele é curioso, inteligente e adora explorar novas ideias e tecnologias. Embora seja um pouco distraído às vezes, sua personalidade amigável e esperta o torna querido por seus amigos.",
        link: "https://www.sanrio.com.br",
        imagem: "chococat.png",
        corTexto: "#3b2d23",
        corTitulo: "#3b2d23",
        larguraImagem: "50px",
        alturaImagem: "50px",
        tags: "gatinho gato"
    }, 
    {
        titulo: "Pompompurin",
        descricao: "Pompompurin é um adorável cachorrinho, conhecido por seu carisma e amor por cochilos. Ele é um Golden Retriever amarelo com um chapéu marrom, e seu maior passatempo é relaxar e passar tempo com seus amigos. Pompompurin adora comer pudim, passear pelo parque e colecionar sapatos perdidos. Amigável, extrovertido e sempre de bom humor, ele conquista todos com seu jeito alegre e acolhedor.",
        link: "https://www.sanrio.com.br",
        imagem: "pompompurin.png",
        corTexto: "#e6e222",
        corTitulo: "#e6e222",
        larguraImagem: "50px",
        alturaImagem: "50px",
        tags: "cachorrinho caramelo"
    }, 
    {
        titulo: "Keroppi",
        descricao: "Keroppi é um sapinho verde, conhecido por sua personalidade alegre e aventureiro. Ele adora explorar, brincar e fazer novas descobertas, também é energético, extrovertido e gosta de atividades ao ar livre, como nadar e cantar. Seu espírito otimista e curioso o torna muito popular, e ele sempre está pronto para liderar seus amigos em novas aventuras.",
        link: "https://www.sanrio.com.br",
        imagem: "keroppi.png",
        corTexto: "#85c800",
        corTitulo: "#85c800",
        larguraImagem: "50px",
        alturaImagem: "50px",
        tags: "sapo verde"
    },
];

