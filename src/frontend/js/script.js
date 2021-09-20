// window.onload = navegarAjax('frontend/pages/cadastro.html', '.formulario');

// function navegarAjax(url, seletor){
//     if(!url || !seletor) return //se não passar link ou seletor retorna para sair da função.
//     const elemento = document.querySelector(seletor);
//     fetch(url)
//         .then(resposta => resposta.text())
//         .then(html => {
//             elemento.innerHTML = html;  
//             document.querySelectorAll('[spa-link]').forEach(element => {
//                 element.onclick = e =>{
//                     const url = element.attributes['spa-link'].value;
//                     const seletorDestino = element.attributes['spa-destino'].value;
//                     e.preventDefault();
//                     navegarAjax(url, seletorDestino);
//                 }
                
//             })          
//         }); 
// }
/*Bloco responsável pelas requisições http*/
const express = require("express");
const app = express();
const port = 3000;
app.use('/arquivos', express.static(__dirname+'../assets'));

app.listen(port, ()=> console.log("Servidor rodando!" + __dirname+'../assets'));




/*--------------------------------------- */







/*Bloco responsável por abrir e fechar o menu em dispositivos mobile */
// const btMenu = document.getElementById("bt-menu");
// const menu = document.getElementById("menu-lateral")
// function controlarMenu(){
//     if(btMenu.classList.contains("closed")){
//         btMenu.classList.remove("closed");
//         menu.classList.add("open");
        
//         btMenu.innerHTML = `<i class="fas fa-times"></i>`
//     }
//     else{
//         btMenu.classList.add("closed");
//         menu.classList.remove("open");
//         btMenu.innerHTML = `<i class="fas fa-bars"></i>`
//     }
// }
// btMenu.addEventListener('click',()=>controlarMenu());
/*--------------------------------------------------------------------*/