
/* =====================================================
   MINI BANNER OFICIAL — COM MÃOS DE SEDA
   EMBLEMA COLORIDO DO CLUBE EM DESTAQUE
   Criado por: Com Mãos de Seda
   ===================================================== */

(function () {
  'use strict';

  // Evita duplicação deste banner
  if (document.querySelector('[data-cmsl-banner-emblema="1"]')) {
    return;
  }

  // Cria o CSS
  const estilo = document.createElement('style');

  estilo.textContent = `
    #cmsl-banner-emblema {
      width: 100%;
      max-width: 250px;
      margin: 12px auto;
      text-align: center;
      box-sizing: border-box;
    }

    #cmsl-banner-emblema img {
      display: block;
      width: 100%;
      height: auto;
      border: 1px solid #dfc18d;
      border-radius: 5px;
      box-shadow: 0 3px 8px rgba(100,69,31,.12);
      transition: transform .25s ease, box-shadow .25s ease;
    }

    #cmsl-banner-emblema a:hover img {
      transform: translateY(-2px);
      box-shadow: 0 5px 12px rgba(100,69,31,.2);
    }
  `;

  document.head.appendChild(estilo);

  // Cria o banner
  const banner = document.createElement('div');

  banner.id = 'cmsl-banner-emblema';
  banner.setAttribute('data-cmsl-banner-emblema', '1');

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

  imagem.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_1GzZoouTfathDh1b6bTU6CUV-D8eFTDO3XRHkNPXAIJioKJqMm3-eWiLrCUEIR0vcUhc9wLynt1CZ1nQDtgWZ3FHth1r9-hSxMJKppZM2kcoBATua4DrNIFy0nuT5nlPVyPcScRHaWxw8nhp6WXqVtuRqUnZN5d8MVeh65j92b6VjzFA_UgTdQZT0cer/s720/Emblema%20Colorido%20do%20Clube%20em%20Destaque.png';

  imagem.alt = 'Emblema Colorido do Clube em Destaque — Com Mãos de Seda';
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
