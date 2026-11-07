const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbziC3ed3LwMrmtmz4f1SpVkZPvIVUxgU6en1YsqKdW0t4UupOoXx89yk0nLer2YXKZy/exec";

const form = document.getElementById("formulario");
const aviso = document.getElementById("aviso");

form.addEventListener("submit", function(evento){
    evento.preventDefault(); 
   
    aviso.style.color = "#9ca3af"; // Cinza sutil
    aviso.textContent = "Processando solicitação...";

    fetch(URL_PLANILHA, {
        method: "POST",
        mode: "no-cors",
        body: new FormData(form)
    })
    .then(function(){
        aviso.style.color = "#4ade80"; // Verde suave para leitura em fundo escuro
        aviso.textContent = "Dados enviados com sucesso. Entraremos em contato.";
        form.reset();
    })
    .catch(function(){
        aviso.style.color = "#f87171"; // Vermelho suave
        aviso.textContent = "Ocorreu um erro de conexão. Tente novamente mais tarde.";
    });
});