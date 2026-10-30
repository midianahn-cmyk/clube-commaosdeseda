
/* =====================================================
   MINI BANNER — ARTESÃ EM DESTAQUE
   Criado por: Com Mãos de Seda
   ===================================================== */

(function () {
  'use strict';

  // Identificador exclusivo deste banner
  if (document.querySelector('[data-cmsl-banner-artesa-destaque="1"]')) {
    return;
  }

  // Cria o CSS isolado
  const estilo = document.createElement('style');

  estilo.textContent = `
    #cmsl-banner-artesa-destaque {
      width: 100%;
      max-width: 250px;
      margin: 12px auto;
      text-align: center;
      box-sizing: border-box;
    }

    #cmsl-banner-artesa-destaque img {
      display: block;
      width: 100%;
      height: auto;
      border: 1px solid #dfc18d;
      border-radius: 5px;
      box-shadow: 0 3px 8px rgba(100,69,31,.12);
      transition: transform .25s ease, box-shadow .25s ease;
    }

    #cmsl-banner-artesa-destaque a:hover img {
      transform: translateY(-2px);
      box-shadow: 0 5px 12px rgba(100,69,31,.2);
    }
  `;

  document.head.appendChild(estilo);

  // Cria o banner
  const banner = document.createElement('div');

  banner.id = 'cmsl-banner-artesa-destaque';
  banner.setAttribute('data-cmsl-banner-artesa-destaque', '1');

  // Cria o link
  const link = document.createElement('a');

  link.href = 'https://www.commaosdesedaoficial.com/2026/10/revelando-influencer-blogs-sites-redes.html';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  link.setAttribute(
    'aria-label',
    'Artesã em Destaque — Clube Com Mãos de Seda'
  );

  // Cria a imagem
  const imagem = document.createElement('img');

  imagem.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhz08PDMi7rEquTLe0_KJIHK5CKxjx6EQcAAiynUFECGyTyz3Q5372-ybQtSyxYmPyTuwOGcZvpciaXAj9FU1c6VOqNQitG5T0RL9CfSaIU8bPmHr2J3igkhnA6CrVe20Z9zwGqVMWtZZFIxEv_Mm5iGBtMgS7Dd4pW8Noh0iKK92Y8NpicWh-fhRbheEeN/s720/Sou%20uma%20Artes%C3%A3%20em%20Destaque.png';

  imagem.alt = 'Sou uma Artesã em Destaque — Com Mãos de Seda';
  imagem.loading = 'lazy';

  // Monta o banner
  link.appendChild(imagem);
  banner.appendChild(link);

  // Insere no local do script
  const scriptAtual = document.currentScript;

  if (scriptAtual && scriptAtual.parentNode) {
    scriptAtual.parentNode.insertBefore(banner, scriptAtual);
  } else if (document.body) {
    document.body.appendChild(banner);
  }

})();
