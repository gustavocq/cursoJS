function mudancaTempo() {
    const msg = document.getElementById("msg")
    const img = document.getElementById("imagens") 
    const msgFinal = document.getElementById("msgFinal")   
    let data = new Date()
    let min=data.getMinutes()
    let hora = data.getHours()
    
   msg.innerHTML=`Agora são ${hora} horas,`

   if (hora>5 && hora<12) {
    msgFinal.innerHTML=`tenha um Bom dia!`
    imagem.src= src="_imagens/manha.png"
    document.body.style.backgroundColor="#b6b6b2"
   }
   else if (hora>=12 && hora<19) {
    msgFinal.innerHTML=`tenha uma Boa Tarde!`
    imagem.src= src="_imagens/tarde.png"
    document.body.style.backgroundColor="#fbaf18"
   }
   else {
    msgFinal.innerHTML=`tenha uma Boa Noite!`
    imagem.src= src="_imagens/noite.png"
    document.body.style.backgroundColor="#41333d"
   }
}