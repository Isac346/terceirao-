/* =====================================================================
   1) SEUS DADOS – edite apenas esta parte
   Fotos: coloque os arquivos em assets/img/memorias/ e ajuste o "src".
   ===================================================================== */

const MEMORIAS = [
  {
    etapa: "Jardim de Infância / Pré-escola",
    periodo: "[ANO] a [ANO]",
    escola: "[NOME DA ESCOLA]",
    texto: `[Conte como foi essa fase: primeiros dias, professora, amigos.]`,
    causos: ["[Causo marcante]", "[Curiosidade]"],
    desafio: "[Desafio superado nessa fase]",
    fotos: [{ src: "assets/img/memorias/pre-escola-1.jpg", legenda: "[Legenda da foto]" }]
  },
  {
    etapa: "Ensino Fundamental I (1º ao 5º ano)",
    periodo: "[ANO] a [ANO]",
    escola: "[NOME DA ESCOLA]",
    texto: `[Conte como foi essa fase.]`,
    causos: ["[Causo marcante]", "[Curiosidade]"],
    desafio: "[Desafio superado nessa fase]",
    fotos: [{ src: "assets/img/memorias/fund1-1.jpg", legenda: "[Legenda da foto]" }]
  },
  {
    etapa: "Ensino Fundamental II (6º ao 9º ano)",
    periodo: "[ANO] a [ANO]",
    escola: "[NOME DA ESCOLA]",
    texto: `[Conte como foi essa fase.]`,
    causos: ["[Causo marcante]", "[Curiosidade]"],
    desafio: "[Desafio superado nessa fase]",
    fotos: [{ src: "assets/img/memorias/fund2-1.jpg", legenda: "[Legenda da foto]" }]
  },
  {
    etapa: "1º ano do Ensino Médio",
    periodo: "[ANO]",
    escola: "[NOME DA ESCOLA]",
    texto: `[Conte como foi o 1º ano.]`,
    causos: ["[Causo marcante]", "[Curiosidade]"],
    desafio: "[Desafio superado nesse ano]",
    fotos: [{ src: "assets/img/memorias/em1-1.jpg", legenda: "[Legenda da foto]" }]
  },
  {
    etapa: "2º ano do Ensino Médio",
    periodo: "[ANO]",
    escola: "[NOME DA ESCOLA]",
    texto: `[Conte como foi o 2º ano.]`,
    causos: ["[Causo marcante]", "[Curiosidade]"],
    desafio: "[Desafio superado nesse ano]",
    fotos: [{ src: "assets/img/memorias/em2-1.jpg", legenda: "[Legenda da foto]" }]
  },
  {
    etapa: "3º ano do Ensino Médio",
    periodo: "[ANO]",
    escola: "[NOME DA ESCOLA]",
    texto: `[Conte como foi o 3º ano e o que sente ao se formar.]`,
    causos: ["[Causo marcante]", "[Momento inesquecível]"],
    desafio: "[Desafio superado nesse ano]",
    fotos: [{ src: "assets/img/memorias/em3-1.jpg", legenda: "[Legenda da foto]" }]
  }
];

/* 17 redações. Separe os parágrafos com uma linha em branco. */
const REDACOES = [
  { titulo: "[Título da redação 1]",  serie: "[Série]", tema: "[Tema]", texto: `[Cole aqui o texto da redação 1.]` },
  { titulo: "[Título da redação 2]",  serie: "[Série]", tema: "[Tema]", texto: `[Cole aqui o texto da redação 2.]` },
  { titulo: "[Título da redação 3]",  serie: "[Série]", tema: "[Tema]", texto: `[Cole aqui o texto da redação 3.]` },
  { titulo: "[Título da redação 4]",  serie: "[Série]", tema: "[Tema]", texto: `[Cole aqui o texto da redação 4.]` },
  { titulo: "[Título da redação 5]",  serie: "[Série]", tema: "[Tema]", texto: `[Cole aqui o texto da redação 5.]` },
  { titulo: "[Título da redação 6]",  serie: "[Série]", tema: "[Tema]", texto: `[Cole aqui o texto da redação 6.]` },
  { titulo: "[Título da redação 7]",  serie: "[Série]", tema: "[Tema]", texto: `[Cole aqui o texto da redação 7.]` },
  { titulo: "[Título da redação 8]",  serie: "[Série]", tema: "[Tema]", texto: `[Cole aqui o texto da redação 8.]` },
  { titulo: "[Título da redação 9]",  serie: "[Série]", tema: "[Tema]", texto: `[Cole aqui o texto da redação 9.]` },
  { titulo: "[Título da redação 10]", serie: "[Série]", tema: "[Tema]", texto: `[Cole aqui o texto da redação 10.]` },
  { titulo: "[Título da redação 11]", serie: "[Série]", tema: "[Tema]", texto: `[Cole aqui o texto da redação 11.]` },
  { titulo: "[Título da redação 12]", serie: "[Série]", tema: "[Tema]", texto: `[Cole aqui o texto da redação 12.]` },
  { titulo: "[Título da redação 13]", serie: "[Série]", tema: "[Tema]", texto: `[Cole aqui o texto da redação 13.]` },
  { titulo: "[Título da redação 14]", serie: "[Série]", tema: "[Tema]", texto: `[Cole aqui o texto da redação 14.]` },
  { titulo: "[Título da redação 15]", serie: "[Série]", tema: "[Tema]", texto: `[Cole aqui o texto da redação 15.]` },
  { titulo: "[Título da redação 16]", serie: "[Série]", tema: "[Tema]", texto: `[Cole aqui o texto da redação 16.]` },
  { titulo: "[Título da redação 17]", serie: "[Série]", tema: "[Tema]", texto: `[Cole aqui o texto da redação 17.]` }
];

/* =====================================================================
   2) COMPORTAMENTO – não precisa mexer daqui para baixo
   ===================================================================== */

const criar = (tag, classe, texto) => {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (texto) e.textContent = texto;
  return e;
};

const paragrafos = (texto) =>
  texto.trim().split(/\n\s*\n/).map((t) => criar("p", "", t.trim()));

/* ---- Memórias ---- */
function montarMemorias() {
  const alvo = document.getElementById("linha-tempo");
  MEMORIAS.forEach((m) => {
    const art = criar("article", "etapa");
    art.append(criar("h3", "", m.etapa), criar("p", "quando", `${m.periodo} – ${m.escola}`));
    art.append(...paragrafos(m.texto));

    if (m.causos?.length) {
      art.append(criar("h4", "", "Causos e curiosidades"));
      const ul = criar("ul");
      m.causos.forEach((c) => ul.append(criar("li", "", c)));
      art.append(ul);
    }
    if (m.desafio) {
      art.append(criar("h4", "", "Desafio superado"), criar("p", "", m.desafio));
    }
    if (m.fotos?.length) {
      const galeria = criar("div", "fotos");
      m.fotos.forEach((f) => {
        const fig = criar("figure");
        const img = document.createElement("img");
        img.src = f.src;
        img.alt = f.legenda;
        img.loading = "lazy";
        img.onerror = () => {
          fig.classList.add("sem-foto");
          fig.append(criar("span", "", `Adicione a foto em ${f.src}`));
        };
        fig.append(img, criar("figcaption", "", f.legenda));
        galeria.append(fig);
      });
      art.append(galeria);
    }
    alvo.append(art);
  });
}

/* ---- Redações (cards + janela de leitura) ---- */
const leitor = document.getElementById("leitor");
let atual = 0;

function montarRedacoes() {
  const grade = document.getElementById("grade-redacoes");
  REDACOES.forEach((r, i) => {
    const b = criar("button", "cartao");
    b.type = "button";
    b.append(criar("span", "num", `Redação ${String(i + 1).padStart(2, "0")}`),
             criar("strong", "", r.titulo),
             criar("small", "", r.tema));
    b.addEventListener("click", () => abrir(i));
    grade.append(b);
  });
}

function abrir(i) {
  atual = i;
  const r = REDACOES[i];
  document.getElementById("leitor-titulo").textContent = r.titulo;
  document.getElementById("leitor-meta").textContent = `${r.serie} – Tema: ${r.tema}`;
  const corpo = document.getElementById("leitor-texto");
  corpo.replaceChildren(...paragrafos(r.texto));
  corpo.scrollTop = 0;
  document.getElementById("posicao").textContent = `${i + 1} de ${REDACOES.length}`;
  document.getElementById("anterior").disabled = i === 0;
  document.getElementById("proxima").disabled = i === REDACOES.length - 1;
  if (!leitor.open) leitor.showModal();
}

document.getElementById("fechar").addEventListener("click", () => leitor.close());
document.getElementById("anterior").addEventListener("click", () => atual > 0 && abrir(atual - 1));
document.getElementById("proxima").addEventListener("click", () => atual < REDACOES.length - 1 && abrir(atual + 1));
leitor.addEventListener("click", (e) => { if (e.target === leitor) leitor.close(); });
document.addEventListener("keydown", (e) => {
  if (!leitor.open) return;
  if (e.key === "ArrowLeft" && atual > 0) abrir(atual - 1);
  if (e.key === "ArrowRight" && atual < REDACOES.length - 1) abrir(atual + 1);
});

montarMemorias();
montarRedacoes();
