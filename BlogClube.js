
/* =====================================================
   MINI BANNER OFICIAL — COM MÃOS DE SEDA
   SOU UMA BLOGUEIRA DO CLUBE
   Criado por: Com Mãos de Seda
   ===================================================== */

(function () {
  'use strict';

  // Evita inserir este banner mais de uma vez
  if (document.querySelector('[data-cmsl-banner-blogueira="1"]')) {
    return;
  }

  // Cria o CSS
  const estilo = document.createElement('style');

  estilo.textContent = `
    #cmsl-banner-blogueira {
      width: 100%;
      max-width: 250px;
      margin: 12px auto;
      text-align: center;
      box-sizing: border-box;
    }

    #cmsl-banner-blogueira img {
      display: block;
      width: 100%;
      height: auto;
      border: 1px solid #dfc18d;
      border-radius: 5px;
      box-shadow: 0 3px 8px rgba(100,69,31,.12);
      transition: transform .25s ease, box-shadow .25s ease;
    }

    #cmsl-banner-blogueira a:hover img {
      transform: translateY(-2px);
      box-shadow: 0 5px 12px rgba(100,69,31,.2);
    }
  `;

  document.head.appendChild(estilo);

  // Cria o banner
  const banner = document.createElement('div');

  banner.id = 'cmsl-banner-blogueira';
  banner.setAttribute('data-cmsl-banner-blogueira', '1');

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

  imagem.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqgyPLMzJS4ZhBbMMyeGgAibaJeAVPM8VirATP0p4ht7Ag_opjszZ0zhv4or9FTj3lOYFARMXQFdE8ym9kvDOuJG9iI9hpTQ5RfM3o_rwgFqNuq43JmnuHkP0HxXLcYw3dQrAF77mkzLYL_nELHfToDQXsi2x3zAT9sSOh9bGqSLPAda1vTDH_RJzEJqqG/s720/Sou%20uma%20Blogueira%20do%20Clube.png';

  imagem.alt = 'Sou uma Blogueira do Clube — Com Mãos de Seda';
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
