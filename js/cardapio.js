/* =========================================================
   CONFIGURAÇÃO DO CARDÁPIO
   Edite SOMENTE este bloco no topo. O resto do arquivo monta a página.
   ========================================================= */

const CONFIG = {
  // Nome que aparece no cabeçalho
  nomeEstabelecimento: "Bar do Farias",

  // Frase curta abaixo do nome
  slogan: "Cardápio digital • peça pelo WhatsApp",

  // Logo: coloque o arquivo em /imagens/logo.png
  // Se o arquivo não existir, aparece as iniciais automaticamente
  logo: "imagens/BAR DO FARIAS NOVO.png",

  // Número do WhatsApp com DDI + DDD + número, só dígitos
  // Exemplo: 55 (Brasil) + 11 (DDD) + 999999999
  whatsapp: "5511999999999",

  // Primeira linha da mensagem que vai para o WhatsApp
  mensagemWhatsApp: "Olá! Gostaria de fazer um pedido no *Farias Bar*.",

  // Categorias e produtos
  // Porções: use inteira e meia. Se não tiver meia, coloque meia: null
  // Outras categorias (por enquanto): nome, descricao e preco
  // Fotos: imagens/categorias/porcoes.jpg, executivos.jpg, promocionais.jpg, pao-frances.jpg, pao-bola.jpg
  categorias: [
    {
      id: "porcoes",
      nome: "Porções",
      imagem: "imagens/categorias/porcoes.jpg",
      produtos: [
        { nome: "Filé Mignon Grelhado", descricao: "Com catupiry", inteira: 129, meia: 79 },
        { nome: "Filé Mignon", descricao: "Parmegiana aperitivo", inteira: 103, meia: 69 },
        { nome: "Picanha Acebolada", descricao: "", inteira: 120, meia: 79 },
        { nome: "À Moda da Casa", descricao: "Mandioca, polenta e calabresa", inteira: 96, meia: 67 },
        { nome: "Mista", descricao: "Provolone, salame e azeitonas verdes", inteira: 96, meia: 67 },
        { nome: "Carne Seca", descricao: "", inteira: 91, meia: 67 },
        { nome: "Tilápia", descricao: "", inteira: 91, meia: 68 },
        { nome: "Calabresa Acebolada", descricao: "", inteira: 79, meia: 60 },
        { nome: "Filé de Frango Grelhado e Acebolado", descricao: "", inteira: 79, meia: 60 },
        { nome: "Isca de Peixe", descricao: "", inteira: 90, meia: 60 },
        { nome: "Batata Frita", descricao: "", inteira: 63, meia: 42 },
        { nome: "Batata Frita, Cheddar e Bacon", descricao: "", inteira: 75, meia: 48 },
        { nome: "Salame Italiano", descricao: "", inteira: 72, meia: 56 },
        { nome: "Isca de Frango à Milanesa", descricao: "", inteira: 85, meia: 60 },
        { nome: "Frango à Passarinho", descricao: "Alho e óleo — somente inteira", inteira: 74, meia: null },
        { nome: "Isca de Frango à Milanesa", descricao: "Com catupiry", inteira: 90, meia: 66 },
        { nome: "Torresmo", descricao: "", inteira: 78, meia: 49.5 },
        { nome: "Polenta Frita", descricao: "", inteira: 69, meia: 42 },
        { nome: "Mandioca Frita", descricao: "", inteira: 69, meia: 42 },
        { nome: "Azeitonas Verdes", descricao: "", inteira: 50, meia: 37 },
        { nome: "Contra Filé Grelhado e Acebolado", descricao: "", inteira: 98, meia: 65 },
        { nome: "Provolone à Milanesa", descricao: "", inteira: 98, meia: 65 },
        { nome: "Filé Suíno", descricao: "", inteira: 97, meia: 65 }
      ]
    },
    {
      id: "executivos",
      nome: "Pratos executivos",
      imagem: "imagens/categorias/executivos.jpg",
      produtos: [
        { nome: "Filé Mignon Grelhado com Brócolis", descricao: "", preco: 78 },
        { nome: "Contra Filé Grelhado", descricao: "Arroz, farofa e purê", preco: 71 },
        { nome: "Filé ao Molho Chateaubriand", descricao: "", preco: 78 },
        { nome: "Filé à Parmegiana", descricao: "", preco: 78 },
        { nome: "Contra Filé Grelhado", descricao: "Arroz, viradinho, couve e ovo", preco: 71 },
        { nome: "Picanha", descricao: "", preco: 78 },
        { nome: "Filé com Catupiry", descricao: "", preco: 78 },
        { nome: "Filé à Cavalo", descricao: "", preco: 78 },
        { nome: "Picanha e Salada", descricao: "", preco: 78 },
        { nome: "Salmão", descricao: "", preco: 78 },
        { nome: "Medalhão de Filé", descricao: "", preco: 78 },
        { nome: "Prato de Carne Seca", descricao: "", preco: 71 }
      ]
    },
    {
      id: "promocionais",
      nome: "Pratos promocionais",
      imagem: "imagens/categorias/promocionais.jpg",
      aviso: "Troca de guarnição: adicional de R$ 5,00 (adicione no pedido se quiser trocar).",
      produtos: [
        { nome: "Bife à Parmegiana", descricao: "", preco: 47 },
        { nome: "Bife Grelhado Acebolado", descricao: "", preco: 47 },
        { nome: "Filé de Pescada à Milanesa", descricao: "", preco: 47 },
        { nome: "Filé de Frango à Milanesa", descricao: "", preco: 47 },
        { nome: "Filé de Frango Grelhado", descricao: "", preco: 47 },
        { nome: "Bife à Milanesa", descricao: "", preco: 47 },
        { nome: "Bife Grelhado", descricao: "", preco: 47 },
        { nome: "Bisteca Suína", descricao: "", preco: 47 },
        { nome: "Bife Grelhado", descricao: "Arroz, macarrão à bolonhesa e fritas", preco: 47 },
        { nome: "Frango à Milanesa", descricao: "", preco: 47 },
        { nome: "Filé de Frango à Parmegiana", descricao: "", preco: 47 },
        { nome: "Lombo Grelhado", descricao: "", preco: 47 },
        { nome: "Troca de guarnição", descricao: "Adicional de R$ 5,00", preco: 5 }
      ]
    },
    {
      id: "pao-frances",
      nome: "Lanches no pão francês",
      imagem: "imagens/categorias/pao-frances.jpg",
      produtos: [
        { nome: "Filé 3 Queijos", descricao: "", preco: 36 },
        { nome: "Bauru de Filé", descricao: "", preco: 36 },
        { nome: "Filé de Frango", descricao: "", preco: 36 },
        { nome: "Especial de Filé", descricao: "", preco: 44 },
        { nome: "Especial de Frango", descricao: "", preco: 44 },
        { nome: "Especial de Calabresa", descricao: "", preco: 44 },
        { nome: "Filé Simples", descricao: "", preco: 33 },
        { nome: "Churrasquinho", descricao: "", preco: 33 },
        { nome: "Frango Simples", descricao: "", preco: 33 },
        { nome: "Calabresa Simples", descricao: "", preco: 37 },
        { nome: "Bauru", descricao: "", preco: 27 },
        { nome: "Misto-Quente", descricao: "", preco: 27 },
        { nome: "Lombo Simples", descricao: "", preco: 33 },
        { nome: "Lombo Especial", descricao: "", preco: 42 }
      ]
    },
    {
      id: "pao-bola",
      nome: "Lanches no pão bola",
      imagem: "imagens/categorias/pao-bola.jpg",
      produtos: [
        { nome: "X-Tudo", descricao: "", preco: 44 },
        { nome: "Americano de Presunto", descricao: "", preco: 42.5 },
        { nome: "X-Salada", descricao: "", preco: 39 },
        { nome: "X-Bacon", descricao: "", preco: 41 },
        { nome: "Calaburguer", descricao: "", preco: 41 },
        { nome: "X-Egg Salada", descricao: "", preco: 36 },
        { nome: "X-Egg", descricao: "", preco: 34 },
        { nome: "X-Burguer", descricao: "", preco: 29 }
      ]
    }
  ]
};

/* =========================================================
   DAQUI PARA BAIXO: monta a página e o carrinho.
   Só mexa se quiser mudar o layout ou o texto da mensagem.
   ========================================================= */

// Itens escolhidos: chave "categoria|indice|tamanho" → { nome, preco, qtd, categoria, tamanho }
var carrinho = {};

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function temTamanhos(produto) {
  return typeof produto.inteira === "number";
}

function buscarProduto(catId, indice) {
  var cat = CONFIG.categorias.filter(function (c) { return c.id === catId; })[0];
  return { cat: cat, produto: cat.produtos[indice] };
}

function precoDoProduto(produto, tamanho) {
  if (tamanho === "inteira") return produto.inteira;
  if (tamanho === "meia") return produto.meia;
  return produto.preco;
}

function rotuloTamanho(tamanho) {
  if (tamanho === "inteira") return "Inteira";
  if (tamanho === "meia") return "Meia";
  return "";
}

function chaveItem(catId, indice, tamanho) {
  return catId + "|" + indice + "|" + (tamanho || "unico");
}

function qtdNoCarrinho(catId, indice, tamanho) {
  var item = carrinho[chaveItem(catId, indice, tamanho)];
  return item ? item.qtd : 0;
}

function itensDoCarrinho() {
  return Object.keys(carrinho)
    .map(function (k) { return carrinho[k]; })
    .filter(function (i) { return i.qtd > 0; });
}

function totalCarrinho() {
  return itensDoCarrinho().reduce(function (soma, i) {
    return soma + i.preco * i.qtd;
  }, 0);
}

function qtdTotal() {
  return itensDoCarrinho().reduce(function (soma, i) {
    return soma + i.qtd;
  }, 0);
}

function alterarQtd(catId, indice, delta, tamanho) {
  tamanho = tamanho || "unico";
  var dados = buscarProduto(catId, indice);
  var preco = precoDoProduto(dados.produto, tamanho);
  if (preco == null) return;
  var chave = chaveItem(catId, indice, tamanho);
  if (!carrinho[chave]) {
    carrinho[chave] = {
      catId: catId,
      indice: indice,
      tamanho: tamanho,
      nome: dados.produto.nome,
      descricao: dados.produto.descricao || "",
      preco: preco,
      qtd: 0,
      categoria: dados.cat.nome
    };
  }
  carrinho[chave].qtd = Math.max(0, carrinho[chave].qtd + delta);
  if (carrinho[chave].qtd === 0) {
    delete carrinho[chave];
  }
  atualizarCarrinho();
}

/* Monta o texto que vai para o WhatsApp (*negrito* funciona lá) */
function montarMensagemPedido() {
  var itens = itensDoCarrinho();
  var linhas = [];
  linhas.push(CONFIG.mensagemWhatsApp);
  linhas.push("");
  linhas.push("📋 *Meu pedido*");
  linhas.push("━━━━━━━━━━━━");

  var categoriaAtual = "";
  itens.forEach(function (i) {
    if (i.categoria !== categoriaAtual) {
      categoriaAtual = i.categoria;
      linhas.push("");
      linhas.push("*" + categoriaAtual + "*");
    }
    var tam = rotuloTamanho(i.tamanho);
    var extras = [];
    if (tam) extras.push(tam);
    if (i.descricao) extras.push(i.descricao);
    var nomeItem = extras.length ? i.nome + " (" + extras.join(" • ") + ")" : i.nome;
    linhas.push("• " + i.qtd + "x " + nomeItem + " — " + formatarPreco(i.preco * i.qtd));
  });

  linhas.push("━━━━━━━━━━━━");
  linhas.push("💰 *Total: " + formatarPreco(totalCarrinho()) + "*");

  var obs = document.getElementById("obs-pedido").value.trim();
  if (obs) {
    linhas.push("");
    linhas.push("📝 *Observação:*");
    linhas.push(obs);
  }

  linhas.push("");
  linhas.push("Aguardo a confirmação 🙌");
  return linhas.join("\n");
}

function abrirWhatsAppPedido() {
  if (itensDoCarrinho().length === 0) {
    alert("Adicione pelo menos um item ao carrinho.");
    return;
  }
  var url = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(montarMensagemPedido());
  window.open(url, "_blank", "noopener");
}

function htmlImagemCategoria(src, nome) {
  var dica = "Coloque o arquivo aqui:\n" + src;
  return (
    '<div class="card-categoria-foto">' +
      '<img src="' + src + '" alt="' + nome + '" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\'">' +
      '<div class="placeholder-img" style="display:none">' + dica.replace(/\n/g, "<br>") + "</div>" +
    "</div>"
  );
}

function htmlLinhaTamanho(catId, indice, tamanho, rotulo, preco) {
  var qtd = qtdNoCarrinho(catId, indice, tamanho);
  var attrs = ' data-cat="' + catId + '" data-i="' + indice + '" data-tam="' + tamanho + '"';
  return (
    '<div class="linha-tam">' +
      '<div class="linha-tam-info">' +
        "<strong>" + rotulo + "</strong>" +
        '<span class="preco">' + formatarPreco(preco) + "</span>" +
      "</div>" +
      '<button type="button" class="btn btn-add"' + attrs + ' data-acao="mais"' +
        (qtd > 0 ? ' style="display:none"' : "") +
      ">Adicionar</button>" +
      '<div class="qtd-box' + (qtd > 0 ? " visivel" : "") + '">' +
        '<button type="button" data-acao="menos"' + attrs + ">−</button>" +
        '<span class="qtd-num">' + qtd + "</span>" +
        '<button type="button" data-acao="mais"' + attrs + ">+</button>" +
      "</div>" +
    "</div>"
  );
}

function htmlControles(cat, produto, indice) {
  if (temTamanhos(produto)) {
    var html = '<div class="grade-tamanhos">';
    if (produto.meia != null) {
      html += htmlLinhaTamanho(cat.id, indice, "meia", "Meia", produto.meia);
    }
    html += htmlLinhaTamanho(cat.id, indice, "inteira", "Inteira", produto.inteira);
    html += "</div>";
    return html;
  }

  var qtd = qtdNoCarrinho(cat.id, indice, "unico");
  var attrs = ' data-cat="' + cat.id + '" data-i="' + indice + '" data-tam="unico"';
  return (
    '<button type="button" class="btn btn-add"' + attrs + ' data-acao="mais"' +
      (qtd > 0 ? ' style="display:none"' : "") +
    ">Adicionar</button>" +
    '<div class="qtd-box' + (qtd > 0 ? " visivel" : "") + '">' +
      '<button type="button" data-acao="menos"' + attrs + ">−</button>" +
      '<span class="qtd-num">' + qtd + "</span>" +
      '<button type="button" data-acao="mais"' + attrs + ">+</button>" +
    "</div>"
  );
}

function atualizarControlesNaLista() {
  document.querySelectorAll("[data-acao='mais'].btn-add").forEach(function (add) {
    var catId = add.getAttribute("data-cat");
    var indice = add.getAttribute("data-i");
    var tamanho = add.getAttribute("data-tam");
    var qtd = qtdNoCarrinho(catId, indice, tamanho);
    var box = add.nextElementSibling;
    var num = box.querySelector(".qtd-num");
    if (qtd > 0) {
      add.style.display = "none";
      box.classList.add("visivel");
      num.textContent = qtd;
    } else {
      add.style.display = "";
      box.classList.remove("visivel");
      num.textContent = "0";
    }
  });
}

function atualizarCarrinho() {
  atualizarControlesNaLista();

  var itens = itensDoCarrinho();
  var barra = document.getElementById("barra-carrinho");
  var painelItens = document.getElementById("painel-itens");
  var total = totalCarrinho();
  var qtd = qtdTotal();

  document.getElementById("painel-total").textContent = formatarPreco(total);

  if (itens.length === 0) {
    barra.hidden = true;
    painelItens.innerHTML = '<p class="carrinho-vazio">Nenhum item ainda. Toque em Adicionar nos produtos.</p>';
    fecharPainelCarrinho();
    return;
  }

  barra.hidden = false;
  document.getElementById("barra-resumo").textContent =
    qtd + (qtd === 1 ? " item" : " itens") + " • " + formatarPreco(total);

  painelItens.innerHTML = itens.map(function (i) {
    return (
      '<div class="item-carrinho">' +
        "<div>" +
          "<strong>" + i.nome + "</strong>" +
          "<p>" + i.categoria + (rotuloTamanho(i.tamanho) ? " • " + rotuloTamanho(i.tamanho) : "") + (i.descricao ? " • " + i.descricao : "") + " • " + formatarPreco(i.preco) + "</p>" +
        "</div>" +
        '<div class="qtd-box visivel">' +
          '<button type="button" data-acao="menos" data-cat="' + i.catId + '" data-i="' + i.indice + '" data-tam="' + i.tamanho + '">−</button>' +
          '<span class="qtd-num">' + i.qtd + "</span>" +
          '<button type="button" data-acao="mais" data-cat="' + i.catId + '" data-i="' + i.indice + '" data-tam="' + i.tamanho + '">+</button>' +
        "</div>" +
      "</div>"
    );
  }).join("");
}

function abrirPainelCarrinho() {
  document.getElementById("fundo-carrinho").hidden = false;
  document.getElementById("painel-carrinho").hidden = false;
}

function fecharPainelCarrinho() {
  document.getElementById("fundo-carrinho").hidden = true;
  document.getElementById("painel-carrinho").hidden = true;
}

function montarPagina() {
  document.title = CONFIG.nomeEstabelecimento + " • Cardápio";
  document.getElementById("nome-bar").textContent = CONFIG.nomeEstabelecimento;
  document.getElementById("slogan-bar").textContent = CONFIG.slogan;
  document.getElementById("iniciais-logo").textContent = CONFIG.nomeEstabelecimento
    .split(" ")
    .map(function (p) { return p[0]; })
    .join("")
    .slice(0, 2)
    .toUpperCase();

  var logo = document.getElementById("logo");
  logo.src = CONFIG.logo;
  logo.alt = CONFIG.nomeEstabelecimento;
  logo.onerror = function () {
    logo.style.display = "none";
    document.getElementById("logo-fallback").classList.add("visivel");
  };

  var nav = document.getElementById("nav-categorias");
  var grade = document.getElementById("grade-categorias");
  var secoes = document.getElementById("secoes");

  CONFIG.categorias.forEach(function (cat, indice) {
    var chip = document.createElement("button");
    chip.className = "chip" + (indice === 0 ? " ativo" : "");
    chip.type = "button";
    chip.textContent = cat.nome;
    chip.addEventListener("click", function () {
      document.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("ativo"); });
      chip.classList.add("ativo");
      document.getElementById(cat.id).scrollIntoView({ behavior: "smooth" });
    });
    nav.appendChild(chip);

    var card = document.createElement("a");
    card.className = "card-categoria";
    card.href = "#" + cat.id;
    card.innerHTML = htmlImagemCategoria(cat.imagem, cat.nome) + "<h2>" + cat.nome + "</h2>";
    grade.appendChild(card);

    var produtosHtml = cat.produtos
      .map(function (p, i) {
        var extra = p.descricao ? "<p>" + p.descricao + "</p>" : "";
        var precoSimples = temTamanhos(p) ? "" : '<span class="preco">' + formatarPreco(p.preco) + "</span>";
        return (
          '<article class="produto" data-cat="' + cat.id + '" data-i="' + i + '">' +
            '<div class="produto-topo">' +
              "<h3>" + p.nome + "</h3>" +
              precoSimples +
            "</div>" +
            extra +
            htmlControles(cat, p, i) +
          "</article>"
        );
      })
      .join("");

    var secao = document.createElement("section");
    secao.className = "secao-categoria";
    secao.id = cat.id;
    secao.innerHTML =
      '<div class="banner-categoria">' +
        htmlImagemCategoria(cat.imagem, cat.nome) +
      "</div>" +
      '<div class="titulo-secao"><h2>' + cat.nome + "</h2></div>" +
      (cat.aviso ? '<p class="aviso-categoria">' + cat.aviso + "</p>" : "") +
      '<div class="lista-produtos">' + produtosHtml + "</div>";
    secoes.appendChild(secao);
  });

  document.body.addEventListener("click", function (ev) {
    var alvo = ev.target.closest("[data-acao]");
    if (!alvo) return;
    var acao = alvo.getAttribute("data-acao");
    var catId = alvo.getAttribute("data-cat");
    var indice = Number(alvo.getAttribute("data-i"));
    var tamanho = alvo.getAttribute("data-tam") || "unico";
    alterarQtd(catId, indice, acao === "mais" ? 1 : -1, tamanho);
  });

  document.getElementById("barra-carrinho").addEventListener("click", abrirPainelCarrinho);
  document.getElementById("fechar-carrinho").addEventListener("click", fecharPainelCarrinho);
  document.getElementById("fundo-carrinho").addEventListener("click", fecharPainelCarrinho);
  document.getElementById("enviar-whatsapp").addEventListener("click", abrirWhatsAppPedido);
  document.getElementById("limpar-carrinho").addEventListener("click", function () {
    carrinho = {};
    document.getElementById("obs-pedido").value = "";
    atualizarCarrinho();
  });
}

document.addEventListener("DOMContentLoaded", montarPagina);
