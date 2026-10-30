
/**
 * MINI BANNER OFICIAL — CLUBE DE BLOGUEIRAS
 * Criado por: Com Mãos de Seda
 */

(function () {
  "use strict";

  // Evita instalação duplicada
  if (document.getElementById("cmsl-banner-blogueiras")) return;

  var scriptAtual = document.currentScript;

  // Endereços oficiais
  var imagem =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipL2E2Cw5FY-LqR8ZLtIGRwLgpAYjzNwwZgw_xz4tStOezZb9QLf2ddH6qbLIuLNnHBAGBkQQbtAQcfr7-FjVx_DBGkhwSa5Jpp3_K5DVEFV6TPUBsWsDMKOfeWlx7nnItWiMhRI-tsbQvxoV2AjTJEDkztszJKnbGThVFfN3xF2RnBLdCoVkwbqc6tI6y/s720/Empreendedora%20em%20Destaque%20no%20Clube.png";

  var destino =
    "https://www.commaosdesedaoficial.com/2026/10/revelando-influencer-blogs-sites-redes.html";

  // Cria o CSS
  var estilo = document.createElement("style");
  estilo.id = "cmsl-estilo-banner-blogueiras";

  estilo.textContent = `
    #cmsl-banner-blogueiras {
      width: 100%;
      max-width: 250px;
      margin: 12px auto;
      text-align: center;
      box-sizing: border-box;
    }

    #cmsl-banner-blogueiras img {
      display: block;
      width: 100%;
      height: auto;
      border: 1px solid #dfc18d;
      border-radius: 5px;
      box-shadow: 0 3px 8px rgba(100,69,31,.12);
      transition: transform .25s ease, box-shadow .25s ease;
    }

    #cmsl-banner-blogueiras a:hover img {
      transform: translateY(-2px);
      box-shadow: 0 5px 12px rgba(100,69,31,.2);
    }
  `;

  document.head.appendChild(estilo);

  // Cria o banner
  var banner = document.createElement("div");
  banner.id = "cmsl-banner-blogueiras";
  banner.setAttribute("data-cmsl-banner-blogueiras", "1");

  var link = document.createElement("a");
  link.href = destino;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute(
    "aria-label",
    "Clube de Blogueiras Com Mãos de Seda"
  );

  var img = document.createElement("img");
  img.src = imagem;
  img.alt = "Clube de Blogueiras Com Mãos de Seda";

  link.appendChild(img);
  banner.appendChild(link);

  // Insere o banner no local do código de instalação
  if (
    scriptAtual &&
    scriptAtual.parentNode &&
    scriptAtual.parentNode !== document.head
  ) {
    scriptAtual.parentNode.insertBefore(banner, scriptAtual);
  } else {
    document.body.appendChild(banner);
  }

  // Carrega o verificador oficial
  if (!document.querySelector(
    'script[data-cmsl-verificador="blogueiras"]'
  )) {
    var verificador = document.createElement("script");

    verificador.src =
      "https://cdn.jsdelivr.net/gh/midianahn-cmyk/itens-commaosdesedaBlog@main/BlogueirasCadastro.js";

    verificador.setAttribute(
      "data-cmsl-verificador",
      "blogueiras"
    );

    document.body.appendChild(verificador);
  }

})();
