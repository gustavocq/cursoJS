function verificar() {

    const data = new Date()
    let anoAtual = data.getFullYear()
    const anoUsu = document.getElementById("anoNasc")
    const res = document.getElementById("res")

    if (anoUsu.value.length ==0 || anoUsu.value>anoAtual) {
        window.alert("Erro!! Verifique os dados e tente novamente.")
    }

    else {
        let idade =anoAtual-Number(anoUsu.value)
        const sexo=document.getElementsByName("sexo")
        let genero =""
        let img = document.createElement("img")
        img.setAttribute("id","foto")

        if (sexo[0].checked) {
            genero="homem"
            if (idade>0 && idade<=12){
                img.setAttribute("src", "_imagens/criancaM.png")
                res.innerHTML=`Detectamos um ${genero} criança de ${idade} anos.`
            }
            else if (idade>12 && idade<=17) {
                img.setAttribute("id", "adoles")
                img.setAttribute("src", "_imagens/adolescenteM.png")
                res.innerHTML=`<p id="adoles">Detectamos um ${genero} adolescente de ${idade} anos.</p>`
            }
            else if (idade>17 && idade<=27) {
                img.setAttribute("src", "_imagens/jovemM.png")
                res.innerHTML=`Detectamos um ${genero} jovem de ${idade} anos.`
            }
            else if (idade>27 && idade<=56){
                img.setAttribute("src", "_imagens/adultoM.png")
                res.innerHTML=`Detectamos um ${genero} adulto de ${idade} anos.`
            }
            else if (idade>56) {
                img.setAttribute("src", "_imagens/idosoM.png")
                res.innerHTML=`Detectamos um ${genero} idoso de ${idade} anos.`
            }
        }
        else{
            genero="mulher"
            if (idade>0 && idade<=12){
                img.setAttribute("src", "_imagens/criancaF.png")
                res.innerHTML=`Detectamos uma ${genero} criança de ${idade} anos.`
            }
            else if (idade>12 && idade<=17) {
                img.setAttribute("id", "adoles")
                img.setAttribute("src", "_imagens/adolescenteF.png")
                res.innerHTML=`<p id="adoles">Detectamos uma ${genero} adolescente de ${idade} anos.</p>`
            }
            else if (idade>17 && idade<=27) {
                img.setAttribute("src", "_imagens/jovemF.png")
                res.innerHTML=`Detectamos uma ${genero} jovem de ${idade} anos.`
            }
            else if (idade>27 && idade<=56){
                img.setAttribute("src", "_imagens/adultoF.png")
                res.innerHTML=`Detectamos uma ${genero} adulta de ${idade} anos.`
            }
            else if (idade>56) {
                img.setAttribute("src", "_imagens/idosoF.png")
                res.innerHTML=`Detectamos uma ${genero} idosa de ${idade} anos.`
            }
        }
        res.appendChild(img)
    }


}