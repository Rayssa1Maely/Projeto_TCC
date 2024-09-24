
function adicionar(index){
    var div = document.createElement("div")
    var textarea = document.createElement("textarea")
    var div_botoes = document.createElement("div")
    var button = document.createElement("button")
    var cor1 = document.createElement("button")
    var cor2 = document.createElement("button")
    var cor3 = document.createElement("button")
    var cor4 = document.createElement("button")

    div.appendChild(textarea)
    div.appendChild(div_botoes)
    div_botoes.appendChild(button)
    div_botoes.appendChild(cor1)
    div_botoes.appendChild(cor2)
    div_botoes.appendChild(cor3)
    div_botoes.appendChild(cor4)

    div.setAttribute("style","background-color: #ff4074; box-shadow: 0 3px 7px #721e1e;padding: 15px;margin: 8px")
    button.setAttribute("onclick","remover(this)")
    button.setAttribute("id","remover")
    cor1.setAttribute("onclick","trocar(this, 1)")
    cor2.setAttribute("onclick","trocar(this, 2)")
    cor3.setAttribute("onclick","trocar(this, 3)")
    cor4.setAttribute("onclick","trocar(this, 4)")
    div_botoes.setAttribute("id","botoes")
    textarea.placeholder = "Digite sua tarefa aqui..."
    //cor dos botoes
    cor1.setAttribute("style","background-color: #fabb01;padding: 10px;")
    cor2.setAttribute("style","background-color:  #0499ff;padding: 10px;")
    cor3.setAttribute("style","background-color: #92f830;padding: 10px;")
    cor4.setAttribute("style","background-color: #ff4074;padding: 10px;")
    button.textContent = "REMOVER"

    if(index == 0){
    var particao = document.getElementById("d1") 
    particao.appendChild(div)
    }//fim if/else

    if(index == 1){
        var particao = document.getElementById("d2") 
        particao.appendChild(div)
    }//fim if/else

    if(index == 2){
        var particao = document.getElementById("d3") 
        particao.appendChild(div)    
    }//fim if/else

}//fim função criar	
function remover(botao){
    var pai_botao = botao.parentElement;
    var avo_botao = pai_botao.parentElement;
    var tataravo_botao = avo_botao.parentElement
    tataravo_botao.removeChild(avo_botao);
}	

//trocar cor
function trocar(botao, posicao){
    var pai_botao = botao.parentElement;
    var avo_botao = pai_botao.parentElement;
    if(posicao == 1){
        avo_botao.setAttribute("style","background-color: #fabb01; box-shadow: 0 3px 7px orange;padding: 15px;margin: 8px;color: black")
    }
    if(posicao == 2){
        avo_botao.setAttribute("style","background-color: #0499ff; box-shadow: 0 3px 7px blue;padding: 15px;margin: 8px")
    }
    if(posicao == 3){
        avo_botao.setAttribute("style","background-color: #92f830; box-shadow: 0 3px 7px green;padding: 15px;margin: 8px;color: black")
    }
    if(posicao == 4){
        avo_botao.setAttribute("style","background-color: #ff4074; box-shadow: 0 3px 7px green;padding: 15px;margin: 8px")
    }
}
