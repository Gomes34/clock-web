const botao = document.getElementById("first_div");
botao.addEventListener("click", smartwatch);
let IMAGEM_RELOGIO;
function smartwatch() {
        const div_relogio = document.getElementById("relogio");
        if (!document.getElementById("imagem_relogio")) {
            IMAGEM_RELOGIO = document.createElement("img");
            div_relogio.appendChild(IMAGEM_RELOGIO);
        }
        IMAGEM_RELOGIO.src = "smartwatch.png";
        IMAGEM_RELOGIO.id = "imagem_relogio";
        IMAGEM_RELOGIO.alt = "Relogio";
        IMAGEM_RELOGIO.onload = function() {
            if (IMAGEM_RELOGIO.naturalWidth > 0) {
            var horario = document.getElementById("horas");
            var data = new Date();
            var hora = data.getHours().toString().padStart(2, "0");
            var minuto = data.getMinutes().toString().padStart(2, "0");
            horario.innerHTML = hora + ":" + minuto;
            } else {
                console.log("ERRO[1]");
            }
        }
}


function retirar_relogio() {
        const relogio_apagar = document.getElementById("relogio");
        const hora_apagar = document.getElementById("horas")
        relogio_apagar.removeChild(IMAGEM_RELOGIO);
        IMAGEM_RELOGIO = null;
        hora_apagar.innerHTML = "";
        
} 

function marca_dgua() {
        var info = document.getElementById("info_marcadagua");
        if(!document.getElementById("button_retrair")) {
            const BUTTON = document.createElement("button");
            BUTTON.innerHTML = "Retrair";
            BUTTON.id = "button_retrair"
            document.body.appendChild(BUTTON);
            info.innerHTML = "Gomes é um programador iniciante, que a momentos só estuda essa arte e testa programas de sua cabeça."
            BUTTON.addEventListener("click", function() {
                BUTTON.remove();
                var info = document.getElementById("info_marcadagua");
                info.innerHTML = ""
            });  
        }
}
