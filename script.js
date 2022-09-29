
let itens = document.getElementById("container")



let adicionaItem = (event)=>{
    // event.preventDefault()
    let criarItem = document.createElement("article")
    let conteudoCriarItem = document.createTextNode("")
    criarItem.appendChild(conteudoCriarItem)
    itens.insertAdjacentElement("beforeend", criarItem)
    criarItem.setAttribute("class", "item")
    // criarItem.classList.add("item")


}


// let removeItem = ()
// // let removeItem ("botao").onclick = function() {
// //     document.getElementsByTagName("article").remove();
// // }
    


// let removeItem = (event)=>{

//     let deletaItem = document.getElementById("article")
//     deletaItem.remove("article")

//     // event.preventDefault()
//     // let criarItem = document.createElement("article")
//     // let conteudoCriarItem = document.createTextNode("")
//     // criarItem.appendChild(conteudoCriarItem)
//     // itens.insertAdjacentElement("beforeend", criarItem)
//     // criarItem.classList.remove("item")


// }