
/* =====================================================
   MINI BANNER OFICIAL — COM MÃOS DE SEDA
   FAÇO PARTE DO CLUBE DE BLOGS
   Criado por: Com Mãos de Seda
   ===================================================== */

(function () {
  'use strict';

  // Evita duplicação deste banner
  if (document.querySelector('[data-cmsl-banner-clube-blogs="1"]')) {
    return;
  }

  // Cria o CSS
  const estilo = document.createElement('style');

  estilo.textContent = `
    #cmsl-banner-clube-blogs {
      width: 100%;
      max-width: 250px;
      margin: 12px auto;
      text-align: center;
      box-sizing: border-box;
    }

    #cmsl-banner-clube-blogs img {
      display: block;
      width: 100%;
      height: auto;
      border: 1px solid #dfc18d;
      border-radius: 5px;
      box-shadow: 0 3px 8px rgba(100,69,31,.12);
      transition: transform .25s ease, box-shadow .25s ease;
    }

    #cmsl-banner-clube-blogs a:hover img {
      transform: translateY(-2px);
      box-shadow: 0 5px 12px rgba(100,69,31,.2);
    }
  `;

  document.head.appendChild(estilo);

  // Cria o banner
  const banner = document.createElement('div');

  banner.id = 'cmsl-banner-clube-blogs';
  banner.setAttribute('data-cmsl-banner-clube-blogs', '1');

  // Cria o link
  const link = document.createElement('a');

  link.href = 'https://www.commaosdesedaoficial.com/2026/10/revelando-influencer-blogs-sites-redes.html';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  link.setAttribute(
    'aria-label',
    'Clube de Blogueiras Com Mãos de Seda'
  );

  // Cria a imagem
  const imagem = document.createElement('img');

  imagem.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLtzK4E1SwcVpFc8txs6wheR_NhKDw41gbGa523wP_oAMkjvCVJxCJp_MeOgl9RqZSkDGjWPhs3AX0-egdccTqLkLXH7OHtrWZRMgVL0qYuc_N5MRxcrTKJYGC4KCJwMN7V-aTVJbE39yXE_q3GJlcPnPYAaAwkUBfxLjF3kLzSM9mSCMc0Kb2HvaqLnHt/s720/Fa%C3%A7o%20Parte%20do%20Clube%20de%20Blogs.png';

  imagem.alt = 'Faço Parte do Clube de Blogs — Com Mãos de Seda';
  imagem.loading = 'lazy';

  // Monta o banner
  link.appendChild(imagem);
  banner.appendChild(link);

  // Insere no local onde o script foi instalado
  const scriptAtual = document.currentScript;

  if (scriptAtual && scriptAtual.parentNode) {
    scriptAtual.parentNode.insertBefore(banner, scriptAtual);
  } else {
    document.body.appendChild(banner);
  }

})();
