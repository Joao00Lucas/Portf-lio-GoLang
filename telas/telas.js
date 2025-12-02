const timeline = document.getElementById("timeline");

const aulas = [
  { data: "22/08/2025", titulo: "Dia 01 - Introdução", desc: "Entendendo o básico da linguagem.", link: "introducao.html" },
  { data: "29/08/2025", titulo: "Dia 02 - Exercícios", desc: "Uma lista de exercícios para ser feita.", link: "exercicios.html" },
  { data: "31/08/2025", titulo: "Dia 03 - Prática", desc: "Começando a ver os exercícios.", link: "resolucao.html" },
  { data: "05/09/2025", titulo: "Dia 04 - Características", desc: "Estudar as principais características da linguagem.", link: "caracteristicas.html" },
  { data: "12/09/2025", titulo: "Dia 05 - Faltei na Aula", desc: "Não participei e continuei fazendo exercícios.", link: "12-09.html" },
  { data: "19/09/2025", titulo: "Dia 06 - Semana da Administração", desc: "Não tivemos aula, fiz outro trabalho.", link: "administracao.html" },
  { data: "26/09/2025", titulo: "Dia 07 - Aula Normal", desc: "Mais uma explicação nas aulas.", link: "normal.html" },
  { data: "03/10/2025", titulo: "Dia 08 - Alex não estava aqui", desc: "Não tivemos aula e fiz exercícios.", link: "finalizando.html" },
  { data: "10/10/2025", titulo: "Dia 09 - Alex viajou", desc: "Fiz os exercícios e finalizei a lista.", link: "concluidos.html" },
  { data: "17/10/2025", titulo: "Dia 10 - Imagem PPM", desc: "Professor pediu uma imagem ppm.", link: "imagemppm.html" },
  { data: "24/10/2025", titulo: "Dia 11 - Pesquisa", desc: "Diferenças entre panic e defer.", link: "pesquisa.html" },
  { data: "31/10/2025", titulo: "Dia 12 - Recesso", desc: "Precisei fazer outros trabalhos.", link: "trabalhos.html" },
  { data: "07/11/2025", titulo: "Dia 13 - Verificação", desc: "O professor verificou andamento.", link: "trabalhos.html" },
  { data: "14/11/2025", titulo: "Dia 14 - Formatura TADS", desc: "Não tivemos aula.", link: "formatura.html" },
  { data: "21/11/2025", titulo: "Dia 15 - Consciência Negra", desc: "Finalizar o portfólio.", link: "portfolio.html" }
];

aulas.forEach(aula => {
  const card = document.createElement("div");
  card.className =
    "bg-white text-sky-600 rounded-xl shadow-lg p-5 min-w-[220px] sm:min-w-[240px] md:min-w-[260px] max-w-[260px] flex flex-col";

  card.innerHTML = `
    <h2 class="font-bold text-lg">${aula.data}</h2>
    <h3 class="font-semibold">${aula.titulo}</h3>
    <p class="text-sm mt-2 mb-4 text-sky-700">${aula.desc}</p>
    <a href="${aula.link}" 
       class="mt-auto bg-sky-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-sky-600 transition text-center">
      Ver conteúdo
    </a>
  `;
  timeline.appendChild(card);
});

const finalizarWrapper = document.createElement("div");
const finalizar = document.createElement("a");
finalizar.href = "finalizar.html";
finalizarWrapper.className = "flex items-center justify-center min-w-[220px]";
finalizar.className =
  "bg-green-500 text-white font-bold px-6 rounded-xl shadow min-w-[200px] text-center hover:bg-green-600 transition h-10 flex items-center justify-center whitespace-nowrap";
finalizar.innerText = "Finalizar";

finalizarWrapper.appendChild(finalizar);
timeline.appendChild(finalizarWrapper);
