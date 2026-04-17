const dadosTrabalho = [
    {
        id: 1, continente: "América", responsavel: "Maria", monumento: "Machu Picchu",
        info: "Erguida pelos Incas no século XV, Machu Picchu é um exemplo absurdo de engenharia. Ela foi feita em uma montanha super alta e servia como um refúgio para o imperador e para rituais religiosos. O mais louco é que eles não usavam cimento; as pedras eram cortadas tão certinhas que se encaixavam sozinhas.",
        detalhes: "Naquela época, a cidade era cheia de casas com telhados de palha e áreas de plantação em degraus. Hoje, restam apenas as paredes de pedra, mas a estrutura ainda está lá, resistindo a terremotos por causa do jeito que foi montada.",
        fonte: "https://whc.unesco.org/en/list/274",
        img1: "https://images.unsplash.com/photo-1526392060635-9d6019884377", // Vista Geral
        img2: "https://images.unsplash.com/photo-1587595431973-160d0d94add1", // Detalhe das pedras
        termoBusca: "Machu Picchu Inca masonry details"
    },
    {
        id: 2, continente: "América", responsavel: "João", monumento: "Catedral do México",
        info: "Essa catedral é um dos maiores símbolos da colonização na América. Ela começou a ser erguida em 1573, bem em cima das ruínas do Templo Mayor, que era o centro sagrado dos astecas. O plano dos espanhóis era claro: usar as pedras dos templos antigos que eles destruíram para construir a igreja, deixando bem óbvio quem tinha o poder agora.",
        detalhes: "O que muita gente não sabe é que ela demorou quase 250 anos para ficar totalmente pronta. Por causa dessa demora toda, ela acabou virando uma mistura de estilos: começou com o Renascimento, passou pelo Barroco pesado e terminou no Neoclássico. Hoje, o grande desafio é que ela está afundando alguns centímetros por ano, já que foi construída sobre o solo mole de um antigo lago.",
        fonte: "https://www.britannica.com/topic/Mexico-City-Metropolitan-Cathedral",
        img1: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/2XUZ3JPV25FT3DHVB4I3VJAWKE.jpg",
        img2: "https://cdn.britannica.com/44/145944-050-BE46FA53/Metropolitan-Cathedral-Mexico-City.jpg", // Interior barroco
        termoBusca: "Metropolitan Cathedral Mexico City history interior"
    },
    {
        id: 3, continente: "Europa", responsavel: "Miguel", monumento: "Palácio de Versalhes",
        info: "Versalhes é o maior símbolo do poder dos reis na Europa. O rei Luís XIV gastou uma fortuna para transformar um chalé de caça nesse palácio gigante. O objetivo era manter toda a nobreza lá dentro, sob os olhos dele, para ninguém tentar dar um golpe.",
        detalhes: "O palácio tem a famosa Galeria dos Espelhos, que era um luxo total no século XVII. Os jardins também são enormes e mostram como o rei queria dominar até a natureza. Hoje é um museu e o mobiliário que sobrou mostra como a vida era cara e exagerada lá.",
        fonte: "https://en.chateauversailles.fr/discover/history",
        img1: "https://upload.wikimedia.org/wikipedia/commons/0/04/Chateau_de_Versailles_1668_Pierre_Patel.jpg",
        img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Vue_a%C3%A9rienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_073.jpg/960px-Vue_a%C3%A9rienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_073.jpg",
        termoBusca: "Hall of Mirrors Palace of Versailles 17th century"
    },
    {
        id: 4, continente: "África", responsavel: "Lawervison", monumento: "Mesquita de Djinguereber",
        info: "Essa mesquita em Timbuktu era tipo uma das universidades mais importantes do mundo na Idade Moderna. Muita gente acha que na África não tinha estudo, mas lá eles tinham milhares de manuscritos sobre medicina e astronomia.",
        detalhes: "O prédio é feito todinho de terra batida (barro) e madeira. Todo ano, o povo da cidade se junta para passar uma camada nova de barro para a chuva não derrubar. É uma tradição que vem desde o ano 1300 e pouco.",
        fonte: "https://www.worldmonuments.org/projects/djinguereber-mosque",
        img1: "https://media.istockphoto.com/id/1255417772/vector/a-camel-caravan-in-front-of-timbuktu.jpg?s=612x612&w=0&k=20&c=n2RAlIgjKTyS-PYHBFB_t_1KVE4V1Ff8P5qxPqH4ixs=",
        img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMlGFdG4EFdNaJVnD8vdL-m0qkj1sJPEahQ&s",
        termoBusca: "Djinguereber Mosque Timbuktu details"
    },
    {
        id: 5, continente: "Ásia", responsavel: "Eduarda", monumento: "Taj Mahal",
        info: "O Taj Mahal foi construído entre 1632 e 1653 na Índia. O imperador Shah Jahan mandou fazer para ser o túmulo da esposa favorita dele. É considerado um dos prédios mais bonitos do mundo pela simetria perfeita.",
        detalhes: "Ele é todo de mármore branco e tem pedras preciosas encravadas nas paredes. Antigamente os jardins eram ainda mais cheios de árvores frutíferas. Hoje o mármore está ficando amarelado por causa da poluição das fábricas perto de lá.",
        fonte: "https://www.history.com/topics/india/taj-mahal",
        img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPN0uF9jbIbTCpuqUWGVWQyc6_DZir5fzUA&s",
        img2: "https://images.unsplash.com/photo-1564507592333-c60657eea523?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D",
        termoBusca: "Taj Mahal marble inlay work details"
    },
    {
        id: 6, continente: "Ásia", responsavel: "Iago", monumento: "Cidade Proibida",
        info: "A Cidade Proibida foi o palácio dos imperadores da China durante as dinastias Ming e Qing. Ela tem esse nome porque ninguém podia entrar ou sair sem o imperador deixar. É um complexo gigante com quase mil prédios.",
        detalhes: "A arquitetura é toda em madeira laqueada e telhados amarelos (que era a cor do imperador). Tudo lá tem um significado, desde o número de estátuas no telhado até a cor das paredes. Hoje é um museu que mostra como os imperadores viviam isolados do povo.",
        fonte: "https://www.khanacademy.org/humanities/ap-art-history/south-east-se-asia/china-art/a/forbidden-city",
        img1: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Entrance_to_the_Forbidden_City_1900.jpg",
        img2: "https://smarthistory.org/wp-content/uploads/2022/01/Meridian_Gate_Forbidden_City_2015_December_morning-scaled.jpeg",
        termoBusca: "Forbidden City Beijing Ming Dynasty architecture"
    },
    {
        id: 7, continente: "Oceania", responsavel: "Kauã", monumento: "Moais de Rapa Nui",
        info: "Os Moais são as famosas estátuas da Ilha de Páscoa. Elas foram feitas por volta do século XV e XVI para representar os antepassados. O povo da ilha usava pedras vulcânicas para esculpir esses gigantes que chegam a pesar toneladas.",
        detalhes: "Na Idade Moderna, os clãs da ilha começaram a brigar por recursos e acabaram derrubando muitas estátuas. No século XX, pesquisadores ajudaram a levantar elas de novo. Algumas tinham até olhos feitos de coral e chapéus de pedra vermelha.",
        fonte: "https://www.nationalgeographic.com/history/article/easter-island",
        img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuIQJCKuaQ4k_0QY5LU5YoYO4D_qtWwXR3A&s",
        img2: "https://upload.wikimedia.org/wikipedia/commons/4/41/Ahu-Tongariki-from-south-west-2013.jpg",
        termoBusca: "Easter Island Moai Ahu Tongariki"
    }
];

function inicializar() {
    const grid = document.getElementById('grid-trabalho');
    grid.innerHTML = dadosTrabalho.map(item => `
        <div class="item-card" onclick="abrir(${item.id})">
            <img src="${item.img1}" alt="${item.monumento}">
            <div class="card-content">
                <p><small>${item.continente}</small></p>
                <h3>${item.monumento}</h3>
                <p>Responsável: ${item.responsavel}</p>
            </div>
        </div>
    `).join('');

    document.getElementById('relatorio-texto').innerHTML = `
        <p>Este projeto apresenta uma análise de monumentos icônicos da Idade Moderna nos 5 continentes. O grupo dividiu a pesquisa para focar nas mudanças de cada região entre os séculos XV e XVIII.</p>
        <p><strong>Divisão de Trabalho:</strong></p>
        <ul>${dadosTrabalho.map(i => `<li>${i.responsavel} pesquisou sobre ${i.monumento}.</li>`).join('')}</ul>
    `;

    document.getElementById('lista-fontes').innerHTML = dadosTrabalho.map(item => `
        <li><strong>${item.monumento}:</strong> <a href="${item.fonte}" target="_blank">${item.fonte}</a></li>
    `).join('');
}

function abrir(id) {
    const m = dadosTrabalho.find(i => i.id === id);
    const render = document.getElementById('render-content');
    render.innerHTML = `
        <h2 class="cinzel" style="color:var(--gold); font-size:2.5rem;">${m.monumento}</h2>
        <p class="playfair">Pesquisa por: ${m.responsavel}</p>
        <div class="info-grid">
            <div class="photo-box">
                <img src="${m.img1}">
                <img src="${m.img2}">
                <p style="font-size:0.7rem; color:#888;">Busca sugerida: ${m.termoBusca}</p>
            </div>
            <div>
                <h3>Sobre o Monumento</h3>
                <p>${m.info}</p>
                <br>
                <h3>Como era e como está</h3>
                <p>${m.detalhes}</p>
                <br>
                <p><strong>Fonte oficial:</strong> <a href="${m.fonte}" target="_blank" style="color:var(--gold);">${m.fonte}</a></p>
            </div>
        </div>
    `;
    document.getElementById('view-overlay').style.display = 'block';
}

function fechar() { document.getElementById('view-overlay').style.display = 'none'; }

inicializar();