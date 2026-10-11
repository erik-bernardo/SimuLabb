const SEARCH_INDEX = [

   // ---------- SIMULADORES: MATEMÁTICA ----------
{ term: "Sim. Cálculo de Matriz", path: "Simulador > Matemática > Simulador", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/matriz.html" },
{ term: "Sim. Análise de Funções", path: "Simulador > Matemática > Análise", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/funcoes.html" },
{ term: "Sim. Juros", path: "Simulador > Matemática > Financeira", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/juros.html" },
{ term: "Sim. Custo e Venda", path: "Simulador > Matemática > Financeira", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/custo_venda.html" },
{ term: "Sim. Porcentagem", path: "Simulador > Matemática > Fundamentos", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/porcentagem.html" },
{ term: "Sim. Probabilidade", path: "Simulador > Matemática > Estatística", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/probabilidade.html" },
{ term: "Sim. Análise Combinatória", path: "Simulador > Matemática > Análise", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/combinatoria.html" },
{ term: "Sim. Sequências Numéricas", path: "Simulador > Matemática > Álgebra", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/sequencias_numericas.html" },
{ term: "Sim. Conjuntos Numéricos", path: "Simulador > Matemática > Fundamentos", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/conjuntos_numericos.html" },
{ term: "Sim. Geometria Plana", path: "Simulador > Matemática > Geometria", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/geometria_plana.html" },
{ term: "Sim. Arcos e Ângulos", path: "Simulador > Matemática > Trigonometria", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/arcos_angulos.html" },
{ term: "Sim. Sistema Linear", path: "Simulador > Matemática > Sistemas", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/sistem-linear.html" },

// ---------- SIMULADORES: FÍSICA ----------
{ term: "Sim. Queda Livre", path: "Simulador > Física > Cinemática", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/queda_livre.html" },
{ term: "Sim. MRU/MRUV", path: "Simulador > Física > Cinemática", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/mru.html" },
{ term: "Sim. Gravitação Universal", path: "Simulador > Física > Mecânica", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/gravitacao_universal.html" },
{ term: "Sim. Conservação de Energia", path: "Simulador > Física > Mecânica", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/energia.html" },
{ term: "Sim. Hidrostática", path: "Simulador > Física > Mecânica", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/hidrostatica.html" },
{ term: "Sim. Ondas", path: "Simulador > Física > Ondulatória", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/ondas.html" },
{ term: "Sim. Calorimetria", path: "Simulador > Física > Termologia", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/calorimetria.html" },
{ term: "Sim. Dilatação Térmica", path: "Simulador > Física > Termologia", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/dilatacao_termica.html" },
{ term: "Sim. Escalas Termométricas", path: "Simulador > Física > Termologia", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/escalas_termometricas.html" },

// ---------- SIMULADORES: QUÍMICA ----------
{ term: "Sim. Tabela Periódica", path: "Simulador > Química > Geral", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/tabela_periodica.html" },
{ term: "Sim. Ligações Químicas", path: "Simulador > Química > Geral", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/ligacoes.html" },
{ term: "Sim. Reações Químicas", path: "Simulador > Química > Geral", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/reacoes.html" },
{ term: "Sim. Ácidos e Bases", path: "Simulador > Química > Inorgânica", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/acidos_bases.html" },
{ term: "Sim. NOX (Nº Oxidação)", path: "Simulador > Química > RedOx", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/nox.html" },
{ term: "Sim. Estequiometria", path: "Simulador > Química > Cálculos", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/estequiometria.html" },
{ term: "Sim. Soluções", path: "Simulador > Química > Físico-Química", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/solucoes.html" },
{ term: "Sim.Eletroquimica", path: "Simulador > Química > Físico-Química", url: "https://erik-bernardo.github.io/SimuLabb/simulacoes/eletroquimica.html" },

   
  // ---------- SIMULADOR: PROGRAMAÇÃO ----------
  { term: "Simulador IDE Virtual", path: "Simulador > Programação > Testador", url: "codeTester.html" },

  // ---------- JOGOS ----------
  { term: "Game Flappy Blocks", path: "Jogos > Física", url: "games/flappy-blocks/index.html" },
  { term: "Game Labirinto", path: "Jogos > Matemática", url: "games/labirinto.html" },
  { term: "Game Akinator", path: "Jogos > Geral", url: "games/make-your-akinator.html" },
  { term: "Voa-Palavra: Sinônimos Perfeitos", path: "Jogos > Português", url: "https://erik-bernardo.github.io/SimuLabb/games/flappy-words/index.html" },
  { term: "Cobras Escadas", path: "Jogos > Português", url: "https://erik-bernardo.github.io/SimuLabb/games/escada/index.html" },
  { term: "Porques Blast", path: "Jogos > Português", url: "https://erik-bernardo.github.io/SimuLabb/games/porque-blast/index.html" },
  { term: "Acentos Runner", path: "Jogos > Português", url: "https://erik-bernardo.github.io/SimuLabb/games/acentos/index.html" },
  { term: "Português Social", path: "Jogos > Português", url: "https://erik-bernardo.github.io/SimuLabb/games/portugues-social/index.html" },
  { term: "Frase Oração e Periodo", path: "Jogos > Português", url: "https://erik-bernardo.github.io/SimuLabb/games/frases.html" },
  { term: "The seer", path: "Jogos > Inglês", url: "https://erik-bernardo.github.io/SimuLabb/games/seer/index.html" },
  { term: "Who is the owner?", path: "Jogos > Inglês", url: "https://erik-bernardo.github.io/SimuLabb/games/owner/index.html" },
  { term: "", path: "Jogos > ", url: "" },

   
];


// 2. ESTRUTURA HTML DO CABEÇALHO 
const headerHTML = `
    <header class="top-bar">
        <div class="logo-area">
            <a href="https://erik-bernardo.github.io/SimuLabb/index.html" class="logo-link">
                <img src="https://erik-bernardo.github.io/SimuLabb/dados/simulab_banner.png" alt="SimuLab Logo" class="logo-image">
            </a>
        </div>
        
        <div class="search-wrapper">
            <div class="search-container">
                <input type="text" class="search-input" id="globalSearchInput" placeholder="Buscar por 'queda livre', 'matriz', 'juros' ou 'game'...">
                <button class="search-button">
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <ul class="search-suggestions" id="searchSuggestions"></ul>
        </div>

        <nav class="nav-links">
            <a href="https://erik-bernardo.github.io/SimuLabb/sobre.html" class="nav-link">Sobre o Projeto</a>
            <a href="https://erik-bernardo.github.io/SimuLabb/games.html" class="nav-link">Games</a>
            <a href="https://erik-bernardo.github.io/SimuLabb/simulacoes.html" class="nav-link main-action">ACESSAR CONTEÚDO</a>
        </nav>
    </header>
`;

// 3. ESTILOS CSS SOMENTE DO CABEÇALHO E PESQUISA
const headerStyles = `
    /* ----------------------------------- */
    /* BARRA SUPERIOR DE NAVEGAÇÃO (TOP-BAR) */
    /* ----------------------------------- */
    .top-bar {
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-between; 
        align-items: stretch;
        border-bottom: 1px solid #ddd;
        padding: 0 40px; 
        min-height: 70px;
    }
    
    .logo-area {
        display: flex;
        align-items: center;
    }

    .logo-link {
        text-decoration: none;
        color: #D2691E;
        font-size: 18px;
        font-weight: bold;
        display: flex;
        align-items: center;
        padding: 15px 0;
    }

    .logo-image {
        max-height: 70px; 
        width: auto;
        object-fit: fill;
    }
    
    /* ----------------------------------- */
    /* ESTILOS DA BARRA DE PESQUISA E SUGESTÕES */
    /* ----------------------------------- */
    .search-wrapper {
        position: relative; 
        display: flex;
        align-items: center;
        flex-grow: 1;
        max-width: 400px;
        margin: 0 20px;
    }
    
    .search-container {
        display: flex;
        width: 100%;
    }

    .search-input {
        flex-grow: 1;
        padding: 10px 15px;
        border: 1px solid #ccc;
        border-right: none;
        border-radius: 5px 0 0 5px;
        font-size: 14px;
        outline: none;
        transition: border-color 0.3s, box-shadow 0.3s;
    }

    .search-input:focus {
        border-color: #D2691E;
        box-shadow: 0 0 5px rgba(210, 105, 30, 0.5);
    }

    .search-button {
        padding: 10px 15px;
        background-color: #D2691E;
        color: white;
        border: 1px solid #D2691E;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .search-button:hover {
        background-color: #c05c18;
        border-color: #c05c18;
    }
    
    /* Lista de Sugestões */
    .search-suggestions {
        position: absolute;
        top: 100%; 
        left: 0;
        right: 0;
        background-color: white;
        border: 1px solid #D2691E;
        border-top: none;
        border-radius: 0 0 5px 5px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        max-height: 200px;
        overflow-y: auto;
        z-index: 1000; 
        list-style: none;
        padding: 0;
        margin: 0;
        display: none; 
    }
    
    .search-suggestions li {
        padding: 10px 15px;
        cursor: pointer;
        text-align: left;
        border-bottom: 1px solid #eee;
    }
    
    .search-suggestions li:last-child {
        border-bottom: none;
    }

    .search-suggestions li:hover {
        background-color: #ffebcc; 
        font-weight: bold;
    }
    
    .suggestion-path {
        font-size: 0.8em;
        color: #777;
        display: block;
    }
    
    /* Links de Navegação */
    .nav-links { display: flex; align-items: center; }
    .nav-link { text-decoration: none; color: #555; font-size: 14px; font-weight: bold; padding: 0 15px; transition: color 0.3s, background-color 0.3s; display: flex; align-items: center; text-transform: uppercase; height: 100%; }
    .nav-link:hover { color: #D2691E; background-color: #f0f0f0; }
    .nav-link.main-action { background-color: #D2691E; color: white; padding: 0 20px; margin-left: 20px; }
    .nav-link.main-action:hover { background-color: #c05c18; color: white; }


    /* RESPONSIVIDADE BÁSICA (SOMENTE CABEÇALHO) */
    @media (max-width: 768px) {
        .top-bar { padding: 0 20px; flex-wrap: wrap; }
        .search-wrapper { order: 3; width: 100%; margin: 10px 0 0 0; }
        .search-input { border-radius: 5px; border-right: 1px solid #ccc; }
        .search-button { border-radius: 5px; margin-left: 10px; }
        .search-container { display: block; }
        .search-suggestions { border-radius: 5px; width: 100%; margin-top: 50px; }
        .nav-link { padding: 0 10px; }
    }
`;


document.addEventListener('DOMContentLoaded', () => {

    // --- PARTE 1: INJEÇÃO DE HTML E CSS DO CABEÇALHO ---

    // 1. INJETA OS ESTILOS CSS ESPECÍFICOS DO CABEÇALHO NO <head>
    const styleSheet = document.createElement("style");
    styleSheet.innerText = headerStyles;
    document.head.appendChild(styleSheet);
    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);


    
    const searchInput = document.getElementById('globalSearchInput');
    const suggestionsList = document.getElementById('searchSuggestions');
    // Seletor mais específico para o botão de pesquisa
    const searchButton = document.querySelector('.top-bar button.search-button'); 
    
    if (!searchInput || !searchButton || !suggestionsList) {
        console.error("ERRO GRAVE: O cabeçalho foi injetado, mas elementos críticos de busca não foram encontrados.");
        console.error("Verifique a ortografia dos IDs e classes no headerHTML.");
        return; 
    }
    
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        suggestionsList.style.display = 'none'; 

        if (searchTerm.length > 1) {
            const match = SEARCH_INDEX.find(item => 
                item.term.toLowerCase().includes(searchTerm) || 
                item.url.toLowerCase().includes(searchTerm)
            );
            
            if (match) {
                window.location.href = match.url;
            } else {
                alert(`Pesquisa: "${searchTerm}" não encontrou um arquivo correspondente. Redirecionando para a página de Matérias.`);
                window.location.href = 'https://erik-bernardo.github.io/SimuLabb/simulacoes.html'; 
            }
        } else {
            alert('Por favor, digite pelo menos 2 caracteres para iniciar a busca.');
        }
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        suggestionsList.innerHTML = ''; 

        if (query.length > 1) { 
            const filtered = SEARCH_INDEX.filter(item => 
                item.term.toLowerCase().includes(query) || 
                item.path.toLowerCase().includes(query) ||
                item.url.toLowerCase().includes(query)
            ).slice(0, 5); 

            if (filtered.length > 0) {
                filtered.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <strong>${item.term}</strong>
                        <span class="suggestion-path">${item.path} (Arquivo: ${item.url})</span>
                    `;
                    li.addEventListener('click', () => {
                        window.location.href = item.url;
                        searchInput.value = item.term;
                        suggestionsList.style.display = 'none';
                    });
                    suggestionsList.appendChild(li);
                });
                suggestionsList.style.display = 'block';
            } else {
                suggestionsList.style.display = 'none';
            }
        } else {
            suggestionsList.style.display = 'none';
        }
    });

    // 6. ATRIBUIÇÃO DOS EVENTOS
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // 7. Ocultar sugestões quando o usuário clica fora
    document.addEventListener('click', (e) => {
        const searchWrapper = document.querySelector('.search-wrapper');
        if (searchWrapper && !searchWrapper.contains(e.target)) {
            suggestionsList.style.display = 'none';
        }
    });
    });
