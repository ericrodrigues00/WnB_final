function clickPrompt1(){
    var respostaUser = prompt("Qual sua resposta?")
    console.log (respostaUser)

    if(respostaUser === "1"){
        
        window.location.href = "grifnoriaCena1.html";

    } else if(respostaUser === "2"){
        window.location.href = "sonserinaCena1.html"
    }else if(respostaUser === "3"){
        window.location.href = "cornivalCena1.html"
    }
}
function iniciaJogo(){
    window.location.href = "home.html";

}