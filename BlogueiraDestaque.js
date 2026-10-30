
(function () {
  'use strict';

  // Identificador exclusivo deste banner
  if (document.querySelector('[data-cmsl-banner-blogueira-destaque="1"]')) {
    return;
  }

  // Cria o estilo
  var estilo = document.createElement('style');

  estilo.textContent = `
    #cmsl-banner-blogueira-destaque {
      width: 100%;
      max-width: 250px;
      margin: 12px auto;
      text-align: center;
      box-sizing: border-box;
    }

    #cmsl-banner-blogueira-destaque img {
      display: block;
      width: 100%;
      height: auto;
      border: 1px solid #dfc18d;
      border-radius: 5px;
      box-shadow: 0 3px 8px rgba(100,69,31,.12);
      transition: transform .25s ease, box-shadow .25s ease;
    }

    #cmsl-banner-blogueira-destaque a:hover img {
      transform: translateY(-2px);
      box-shadow: 0 5px 12px rgba(100,69,31,.2);
    }
  `;

  document.head.appendChild(estilo);

  // Cria o banner
  var banner = document.createElement('div');

  banner.id = 'cmsl-banner-blogueira-destaque';

  banner.setAttribute(
    'data-cmsl-banner-blogueira-destaque',
    '1'
  );

  // Cria o link
  var link = document.createElement('a');

  link.href = 'https://www.commaosdesedaoficial.com/2026/10/revelando-influencer-blogs-sites-redes.html';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  link.setAttribute(
    'aria-label',
    'Clube de Blogueiras Com Mãos de Seda'
  );

  // Cria a imagem
  var imagem = document.createElement('img');

  imagem.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpfR3cbfX4YmqB2EOCFOFx7SzW5I4W75Sw6np2BYYqS3xQshIWjQckzc425pfEOtgoJsni5rsUlflR1-mlNlxuh1VAsYWTA1B02jlI4zywLjTRtbFWoGZezYqUiAzmL4FzFmKwRsRedwH6FR60nUV9EpoQu07FBUbAgjatN7eMhi2MyFN8Dnr4AUibMcEn/s720/Sou%20a%20Blogueira%20Destaque%20no%20Clube.png';

  imagem.alt = 'Sou a Blogueira Destaque no Clube';
  imagem.loading = 'lazy';

  // Monta o banner
  link.appendChild(imagem);
  banner.appendChild(link);

  // Insere no local onde o script foi instalado
  var scriptAtual = document.currentScript;

  if (scriptAtual && scriptAtual.parentNode) {
    scriptAtual.parentNode.insertBefore(banner, scriptAtual);
  } else {
    (document.body || document.documentElement).appendChild(banner);
  }

})();
