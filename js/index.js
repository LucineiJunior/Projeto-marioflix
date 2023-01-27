/*
 obj 1 - quando o usuario clicar no botao de veja o trailer, devem os abrir a modal com o video do trailer


*/
const botaoTrailer = document.querySelector('.botao-trailer');
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const botaoFecharModal = document.querySelector('.fechar-modal');
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "")
})




