document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("welcomeModal");
    const closeBtn = document.getElementById("closeModalBtn");

    // verifica se a pessoa já visitou o site antes
    const jaVisitou = localStorage.getItem("visitouSite");

    // Se não visitou, mostrar o modal
    if (!jaVisitou) {
        modal.style.display = "flex";
    }

    // quando a pessoa clicar no botão de fechar:
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none"; // esconde o modal
        
        // grava no navegador que ela já visitou o site
        localStorage.setItem("visitouSite", "sim");
    });
});