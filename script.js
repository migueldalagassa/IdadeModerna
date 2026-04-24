const dadosTrabalho = [
    {
        id: 1, continente: "América", responsavel: "Maria", monumento: "Machu Picchu",
        info: "Erguida pelos Incas no século XV (Histórico), é um exemplo de engenharia teocrática. Servia como refúgio político para o imperador e centro para rituais sagrados (Político/Cultural). O mais impressionante é que não usavam cimento; as pedras eram cortadas com precisão para se encaixarem.",
        detalhes: "A economia era baseada na agricultura em degraus (Econômico). A cidade tinha casas com telhados de palha e áreas de plantação. A estrutura foi projetada para resistir a terremotos devido ao tipo de montagem das pedras (Ambiental). A sociedade era rigidamente organizada para sustentar a elite no topo da montanha (Social/Geográfico).",
        fonte: "https://whc.unesco.org/en/list/274",
        img1: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
        img2: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
        termoBusca: "Machu Picchu Inca masonry details",
        tags: ["Inca", "Engenharia", "Sísmico"]
    },
    {
        id: 2, continente: "América", responsavel: "João", monumento: "Catedral do México",
        info: "Símbolo da colonização espanhola iniciado em 1573. Foi construída sobre as ruínas do Templo Mayor asteca, usando as próprias pedras dos templos destruídos para reafirmar a soberania europeia (Político/Histórico/Cultural).",
        detalhes: "Financiada pela extração de prata nas colônias (Econômico). O prédio levou 250 anos para ser concluído, envolvendo diversas gerações de artesãos (Social). O maior desafio ambiental é o afundamento da estrutura, pois foi erguida sobre o solo mole de um antigo lago aterrado (Ambiental/Geográfico).",
        fonte: "https://www.britannica.com/topic/Mexico-City-Metropolitan-Cathedral",
        img1: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/2XUZ3JPV25FT3DHVB4I3VJAWKE.jpg",
        img2: "https://cdn.britannica.com/44/145944-050-BE46FA53/Metropolitan-Cathedral-Mexico-City.jpg",
        termoBusca: "Metropolitan Cathedral Mexico City history",
        tags: ["Colonial", "Barroco", "Geologia"]
    },
    {
        id: 3, continente: "Europa", responsavel: "Miguel", monumento: "Palácio de Versalhes",
        info: "O ápice do Absolutismo Monárquico no século XVII (Histórico). Luís XIV transformou um chalé de caça neste palácio para centralizar o governo e vigiar a nobreza, evitando rebeliões internas (Político).",
        detalhes: "A Galeria dos Espelhos simbolizava o luxo e a riqueza da época (Social). A economia da França foi drenada por impostos para sustentar este padrão (Econômico). Seus jardins geométricos mostram a tentativa humana de 'domesticar' a natureza (Ambiental). Situado fora de Paris para garantir a segurança física do rei (Geográfico).",
        fonte: "https://en.chateauversailles.fr/discover/history",
        img1: "https://upload.wikimedia.org/wikipedia/commons/0/04/Chateau_de_Versailles_1668_Pierre_Patel.jpg",
        img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Vue_a%C3%A9rienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_073.jpg/960px-Vue_a%C3%A9rienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_073.jpg",
        termoBusca: "Hall of Mirrors Palace of Versailles",
        tags: ["Absolutismo", "Luxo", "Controle"]
    },
    {
        id: 4, continente: "África", responsavel: "Lawervison", monumento: "Mesquita de Djinguereber",
        info: "Parte da Universidade de Sankore em Timbuktu. Durante a Idade Moderna, foi um dos maiores centros intelectuais do mundo, com manuscritos avançados (Cultural/Social/Histórico).",
        detalhes: "Construída com terra batida (barro) e madeira, adaptando-se ao clima do Sahel (Ambiental). A riqueza do Império Mali vinha do controle das rotas de ouro e sal pelo deserto (Econômico/Político). Timbuktu era um ponto geográfico estratégico de comércio (Geográfico).",
        fonte: "https://www.worldmonuments.org/projects/djinguereber-mosque",
        img1: "https://media.istockphoto.com/id/1255417772/vector/a-camel-caravan-in-front-of-timbuktu.jpg?s=612x612&w=0&k=20&c=n2RAlIgjKTyS-PYHBFB_t_1KVE4V1Ff8P5qxPqH4ixs=",
        img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMlGFdG4EFdNaJVnD8vdL-m0qkj1sJPEahQ&s",
        termoBusca: "Djinguereber Mosque Timbuktu",
        tags: ["Intelectual", "Sahel", "Comércio"]
    },
    {
        id: 5, continente: "Ásia", responsavel: "Eduarda", monumento: "Taj Mahal",
        info: "Mausoléu construído entre 1632 e 1653 (Histórico). Representa o poder e a riqueza do Império Mughal na Índia, além de ser uma prova de amor eterna (Político/Cultural).",
        detalhes: "Feito de mármore branco com pedras preciosas vindas de várias partes da Ásia (Geográfico/Econômico). A construção mobilizou mais de 20 mil trabalhadores (Social). Atualmente, a poluição atmosférica das indústrias próximas está corroendo e amarelando o mármore (Ambiental).",
        fonte: "https://www.history.com/topics/india/taj-mahal",
        img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPN0uF9jbIbTCpuqUWGVWQyc6_DZir5fzUA&s",
        img2: "https://images.unsplash.com/photo-1564507592333-c60657eea523?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D",
        termoBusca: "Taj Mahal marble details",
        tags: ["Simetria", "Mughal", "Erosão"]
    },
    {
        id: 6, continente: "Ásia", responsavel: "Iago", monumento: "Cidade Proibida",
        info: "O centro do universo chinês durante as dinastias Ming e Qing. Com quase mil prédios, isolava o imperador das massas populares (Político/Social/Histórico).",
        detalhes: "O uso do amarelo nos telhados era exclusividade imperial (Cultural). A manutenção era caríssima, financiada por tributos de toda a China (Econômico). Localizada estrategicamente no eixo norte-sul de Pequim por razões místicas e de defesa (Geográfico). A madeira laqueada requer cuidados constantes contra umidade (Ambiental).",
        fonte: "https://www.khanacademy.org/humanities/ap-art-history/south-east-se-asia/china-art/a/forbidden-city",
        img1: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Entrance_to_the_Forbidden_City_1900.jpg",
        img2: "https://smarthistory.org/wp-content/uploads/2022/01/Meridian_Gate_Forbidden_City_2015_December_morning-scaled.jpeg",
        termoBusca: "Forbidden City Beijing architecture",
        tags: ["Imperial", "Pequim", "Dinastia"]
    },
    {
        id: 7, continente: "Oceania", responsavel: "Kauã", monumento: "Moais de Rapa Nui",
        info: "Estátuas gigantes esculpidas entre os séculos XV e XVI (Histórico). Representavam os ancestrais e protegiam as vilas através de sua conexão espiritual (Cultural/Social).",
        detalhes: "A economia da ilha era baseada no isolamento geográfico total (Geográfico/Econômico). A briga política entre clãs levou ao derrubamento de muitos Moais (Político). O desmatamento severo da ilha para transportar as estátuas causou um colapso no ecossistema local (Ambiental).",
        fonte: "https://www.nationalgeographic.com/history/article/easter-island",
        img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtuIQJCKuaQ4k_0QY5LU5YoYO4D_qtWwXR3A&s",
        img2: "https://upload.wikimedia.org/wikipedia/commons/4/41/Ahu-Tongariki-from-south-west-2013.jpg",
        termoBusca: "Easter Island Moai Ahu Tongariki",
        tags: ["Isolamento", "Vulcânico", "Colapso"]
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
        <p>Este projeto apresenta uma análise interdisciplinar sobre a cultura e o poder na Idade Moderna, cobrindo todos os eixos exigidos.</p>
        <div class="table-container" style="overflow-x:auto; margin-top:20px;">
            <table style="width:100%; border-collapse: collapse; font-size:0.8rem; text-align:left;">
                <thead>
                    <tr style="border-bottom: 1px solid var(--gold); color:var(--gold);">
                        <th style="padding:10px;">Monumento</th>
                        <th style="padding:10px;">Responsável</th>
                        <th style="padding:10px;">Análise Completa</th>
                    </tr>
                </thead>
                <tbody>
                    ${dadosTrabalho.map(i => `
                        <tr style="border-bottom: 1px solid #333;">
                            <td style="padding:10px;">${i.monumento}</td>
                            <td style="padding:10px;">${i.responsavel}</td>
                            <td style="padding:10px;">Histórico, Político, Social, Econômico, Ambiental, Geográfico, Cultural.</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
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
        <div style="margin-bottom:20px;">
            ${m.tags.map(t => `<span style="background:var(--gold); color:#000; padding:3px 12px; border-radius:15px; font-size:0.7rem; font-weight:bold; margin-right:8px; text-transform:uppercase;">${t}</span>`).join('')}
        </div>
        <div class="info-grid">
            <div class="photo-box">
                <img src="${m.img1}" style="border: 1px solid var(--gold);">
                <img src="${m.img2}" style="border: 1px solid var(--gold);">
                <p style="font-size:0.7rem; color:#888;">Busca sugerida: ${m.termoBusca}</p>
            </div>
            <div>
                <h3 style="color:var(--gold); font-family:Cinzel; border-bottom:1px solid #444;">Poder, Política e História</h3>
                <p>${m.info}</p>
                <br>
                <h3 style="color:var(--gold); font-family:Cinzel; border-bottom:1px solid #444;">Sociedade, Economia e Ambiente</h3>
                <p>${m.detalhes}</p>
                <br>
                <p><strong>Pesquisador Responsável:</strong> ${m.responsavel}</p>
                <p><strong>Referência:</strong> <a href="${m.fonte}" target="_blank" style="color:var(--gold); text-decoration:none;">${m.fonte}</a></p>
            </div>
        </div>
    `;
    document.getElementById('view-overlay').style.display = 'block';
}

function fechar() { document.getElementById('view-overlay').style.display = 'none'; }

inicializar();
