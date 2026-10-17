
/* =====================================================
   SIMULAB — SIDEBAR COMPLETA
   HTML + CSS + JavaScript em um único arquivo
   ===================================================== */

(() => {
  "use strict";

  // Evita criar a sidebar duas vezes
  if (window.__simulabSidebarLoaded) return;
  window.__simulabSidebarLoaded = true;

  /* =========================
     1. ESTILOS CSS
     ========================= */

  const css = `
    :root {
      --orange: #ff690b;
      --orange-dark: #e95700;
      --ink: #14233d;
      --muted: #778196;
      --wash: #f7f9fc;
      --sidebar-width: 230px;
      --sidebar-border: #edf0f5;
    }

    .simulab-sidebar,
    .simulab-sidebar * {
      box-sizing: border-box;
    }

    .simulab-sidebar {
      position: fixed;
      inset: 0 auto 0 0;
      width: var(--sidebar-width);
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 24px 16px 18px;
      background: #fff;
      border-right: 1px solid var(--sidebar-border);
      overflow-y: auto;
      z-index: 9999;
      font-family: "Nunito Sans", Arial, sans-serif;
    }

    .simulab-sidebar .sidebar-brand {
      padding: 0 8px;
      margin-bottom: 36px;
    }

    .simulab-sidebar .brand-link {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: var(--ink);
      text-decoration: none;
      font-size: 23px;
      font-weight: 900;
      letter-spacing: -0.8px;
    }

    .simulab-sidebar .brand-icon {
      display: grid;
      place-items: center;
      width: 38px;
      height: 38px;
      border-radius: 12px;
      color: #fff;
      background: linear-gradient(135deg, #ff8a36, var(--orange-dark));
      box-shadow: 0 5px 12px #ff690b35;
    }

    .simulab-sidebar .side-label {
      display: block;
      margin: 0 10px 11px;
      color: #9aa3b3;
      font-size: 10px;
      font-weight: 900;
      letter-spacing: 1.4px;
      text-transform: uppercase;
    }

    .simulab-sidebar .side-nav {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 28px;
    }

    .simulab-sidebar .side-link {
      display: flex;
      align-items: center;
      gap: 12px;
      min-height: 44px;
      padding: 11px 12px;
      border: 1px solid transparent;
      border-radius: 10px;
      color: #5c6880;
      font-size: 13px;
      font-weight: 750;
      text-decoration: none;
      transition: background .2s, color .2s,
                  border-color .2s, transform .2s;
    }

    .simulab-sidebar .side-link:hover {
      color: var(--orange-dark);
      background: #fff5ed;
      transform: translateX(2px);
    }

    .simulab-sidebar .side-link.active,
    .simulab-sidebar .side-link.subject-active {
      color: var(--orange-dark);
      background: #fff0e5;
      border-color: #ffdfc6;
    }

    .simulab-sidebar .side-icon {
      display: grid;
      place-items: center;
      width: 23px;
      min-width: 23px;
      font-size: 18px;
    }

    .simulab-sidebar .subject-dot {
      display: inline-block;
      width: 9px;
      height: 9px;
      flex: 0 0 9px;
      border-radius: 50%;
    }

    .simulab-sidebar .math-dot {
      background: #5688ff;
    }

    .simulab-sidebar .chemistry-dot {
      background: #36bd86;
    }

    .simulab-sidebar .physics-dot {
      background: #f5b942;
    }

    .simulab-sidebar .biology-dot {
      background: #49b96b;
    }

    .simulab-sidebar .programming-dot {
      background: #9b70e8;
    }

    .simulab-sidebar .sidebar-footer {
      display: flex;
      align-items: center;
      gap: 9px;
      margin-top: auto;
      padding: 15px 10px 4px;
      border-top: 1px solid var(--sidebar-border);
      color: var(--muted);
      font-size: 11px;
      font-weight: 700;
    }

    .simulab-sidebar .footer-indicator {
      width: 7px;
      height: 7px;
      flex: 0 0 7px;
      border-radius: 50%;
      background: #36bd86;
      box-shadow: 0 0 0 4px #36bd861a;
    }

    /* Espaço para o conteúdo da página */
    body.has-simulab-sidebar {
      margin-left: var(--sidebar-width);
    }

    /* Responsividade */
    @media (max-width: 700px) {
      :root {
        --sidebar-width: 76px;
      }

      .simulab-sidebar {
        padding: 20px 9px;
      }

      .simulab-sidebar .sidebar-brand {
        padding: 0;
        margin-bottom: 28px;
        text-align: center;
      }

      .simulab-sidebar .brand-link {
        justify-content: center;
      }

      .simulab-sidebar .brand-link > span:last-child,
      .simulab-sidebar .side-label,
      .simulab-sidebar .side-link > span:not(.side-icon):not(.subject-dot),
      .simulab-sidebar .sidebar-footer {
        display: none;
      }

      .simulab-sidebar .side-link {
        justify-content: center;
        padding: 12px 5px;
      }

      .simulab-sidebar .side-icon {
        font-size: 20px;
      }

      .simulab-sidebar .subject-dot {
        width: 11px;
        height: 11px;
      }

      body.has-simulab-sidebar {
        margin-left: var(--sidebar-width);
      }
    }
  `;

  const style = document.createElement("style");
  style.id = "simulab-sidebar-styles";
  style.textContent = css;
  document.head.appendChild(style);

  /* =========================
     2. HTML DA SIDEBAR
     ========================= */

  function criarSidebar() {
    const sidebar = document.createElement("aside");

    sidebar.className = "simulab-sidebar";
    sidebar.setAttribute("aria-label", "Navegação principal");

    sidebar.innerHTML = `
      <div class="sidebar-brand">
        <a href="index.html" class="brand-link">
          <span class="brand-icon">S</span>
          <span>SimuLab</span>
        </a>
      </div>

      <span class="side-label">Navegação</span>

      <nav class="side-nav">
        <a href="index.html"
           class="side-link"
           data-page="index.html">
          <span class="side-icon">⌂</span>
          <span>Início</span>
        </a>

        <a href="games.html"
           class="side-link"
           data-page="games.html">
          <span class="side-icon">🎮</span>
          <span>Jogos</span>
        </a>

        <a href="simulacoes.html"
           class="side-link"
           data-page="simulacoes.html">
          <span class="side-icon">⚗</span>
          <span>Simuladores</span>
        </a>

        <a href="sobre.html"
           class="side-link"
           data-page="sobre.html">
          <span class="side-icon">ⓘ</span>
          <span>Sobre Nós</span>
        </a>
      </nav>

      <span class="side-label">Matérias</span>

      <nav class="side-nav">
        <a href="simulacoes.html?materia=matematica"
           class="side-link subject-link"
           data-subject="matematica">
          <span class="subject-dot math-dot"></span>
          <span>Matemática</span>
        </a>

        <a href="simulacoes.html?materia=quimica"
           class="side-link subject-link"
           data-subject="quimica">
          <span class="subject-dot chemistry-dot"></span>
          <span>Química</span>
        </a>

        <a href="simulacoes.html?materia=fisica"
           class="side-link subject-link"
           data-subject="fisica">
          <span class="subject-dot physics-dot"></span>
          <span>Física</span>
        </a>

        <a href="games.html?materia=biologia"
           class="side-link subject-link"
           data-subject="biologia">
          <span class="subject-dot biology-dot"></span>
          <span>Biologia</span>
        </a>

        <a href="games.html?materia=programacao"
           class="side-link subject-link"
           data-subject="programacao">
          <span class="subject-dot programming-dot"></span>
          <span>Programação</span>
        </a>
      </nav>

      <div class="sidebar-footer">
        <span class="footer-indicator"></span>
        <span>Aprender explorando</span>
      </div>
    `;

    document.body.prepend(sidebar);
    document.body.classList.add("has-simulab-sidebar");

    return sidebar;
  }

  /* =========================
     3. NAVEGAÇÃO ATIVA
     ========================= */

  function destacarLink(sidebar) {
    const links = sidebar.querySelectorAll(".side-link");
    const paginaAtual =
      window.location.pathname.split("/").pop() || "index.html";

    const parametros = new URLSearchParams(window.location.search);
    const materiaAtual = parametros.get("materia");

    links.forEach((link) => {
      link.classList.remove("active", "subject-active");
      link.removeAttribute("aria-current");

      const paginaLink = link.dataset.page;
      const materiaLink = link.dataset.subject;

      if (materiaAtual && materiaLink === materiaAtual) {
        link.classList.add("subject-active");
        link.setAttribute("aria-current", "page");
        return;
      }

      if (
        !materiaAtual &&
        paginaLink === paginaAtual
      ) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  /* =========================
     4. INICIALIZAÇÃO
     ========================= */

  function iniciar() {
    // Não adiciona outra sidebar se já existir uma
    const sidebarExistente =
      document.querySelector(".simulab-sidebar");

    const sidebar = sidebarExistente || criarSidebar();

    document.body.classList.add("has-simulab-sidebar");
    destacarLink(sidebar);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
