document.getElementById("entrarBtn").addEventListener("click", () => {
  const tela = document.getElementById("tela");

  tela.classList.add("opacity-0");

  setTimeout(() => {
    window.location.href = "../telas/aulas.html";
  }, 500);
});
