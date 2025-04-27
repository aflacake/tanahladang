document.addEventListener("DOMContentLoaded", function () {
document.body.style.height = '100vh';
document.body.style.padding = '0';
document.body.style.margin = '0';
document.body.style.overflowX = "hidden";


const kontenTeks = document.querySelector(".kontenTeks");
kontenTeks.style.display = "flex";
kontenTeks.style.flexDirection = "column";
kontenTeks.style.padding = '20px';
kontenTeks.style.justifyContent = "center";
kontenTeks.style.alignItems = "center";
kontenTeks.style.fontSize = '16px';


document.getElementById("mulaiBtn").addEventListener("click", function() {
    window.location.href = "https://aflacake.github.io/tanahladang/";
})
const mulaiBtn = document.getElementById("mulaiBtn");
mulaiBtn.style.position = "absolute";
mulaiBtn.style.justifyContent = "center";
mulaiBtn.style.alignItems = "center";
mulaiBtn.style.margin = '5px';
mulaiBtn.style.marginBottom = '40px';
mulaiBtn.style.fontSize = '36px';
mulaiBtn.style.backgroundColor = "#0B932D";
mulaiBtn.style.border = "none";
mulaiBtn.style.borderRadius = '5px';
mulaiBtn.style.top = '70%';
mulaiBtn.style.left = '50%';
mulaiBtn.style.transform = 'translate(-50%, -70%)';


const gambarKonten = document.querySelector(".gambarKonten");
gambarKonten.style.display = "flex";
gambarKonten.style.flexDirection = "row";
gambarKonten.style.position = "absolute";
gambarKonten.style.top = '65%';
gambarKonten.style.left = '50%';
gambarKonten.style.transform = 'translate(-50%, 50%)';
gambarKonten.style.backgroundColor = "#0B932D";
gambarKonten.style.borderRadius = '100% 100% 0 0';
});
