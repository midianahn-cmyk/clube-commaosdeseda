
/* =====================================================
   MINI BANNER OFICIAL — COM MÃOS DE SEDA
   CLUBE DE BLOGS COLORIDO
   Criado por: Com Mãos de Seda
   ===================================================== */

(function () {
  'use strict';

  // Evita duplicação deste banner
  if (document.querySelector('[data-cmsl-banner-clube-colorido="1"]')) {
    return;
  }

  // Cria o CSS
  const estilo = document.createElement('style');

  estilo.textContent = `
    #cmsl-banner-clube-colorido {
      width: 100%;
      max-width: 250px;
      margin: 12px auto;
      text-align: center;
      box-sizing: border-box;
    }

    #cmsl-banner-clube-colorido img {
      display: block;
      width: 100%;
      height: auto;
      border: 1px solid #dfc18d;
      border-radius: 5px;
      box-shadow: 0 3px 8px rgba(100,69,31,.12);
      transition: transform .25s ease, box-shadow .25s ease;
    }

    #cmsl-banner-clube-colorido a:hover img {
      transform: translateY(-2px);
      box-shadow: 0 5px 12px rgba(100,69,31,.2);
    }
  `;

  document.head.appendChild(estilo);

  // Cria o banner
  const banner = document.createElement('div');

  banner.id = 'cmsl-banner-clube-colorido';
  banner.setAttribute('data-cmsl-banner-clube-colorido', '1');

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

  imagem.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEispHAhVoCg6zJcI5-nBT8GIHkdB0gmR4DdveqIkEqK7nuwqE__S-GkPMQm3IfmRgk1QFkMKpa2yJ7iILQ6TMkAySogveqwRAD405vTerpX8Mr5IRW3RfE-1u8wYBugKDUdlhHVuQDK-akjYgGWi57k5MqXsX6iWkFyKWULon0verBYmtK2b3FJllds0DK8/s200/Banner%20Clube%20de%20Blogs%20Colorido.png';

  imagem.alt = 'Banner Colorido do Clube de Blogs — Com Mãos de Seda';
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
