/*Bloco responsável por abrir e fechar o menu lateral em dispositivos mobile */
//A ideia  por tras desse botão é: ao clicar no elemento, dispara o evento de click,
//o evento chama a função controlarMenu(), que adiciona ou remove a classe open e closed, alterando assim,
//a imagem do botão e o estado do menu.
const btMenu = document.getElementById("bt-menu");
const menu = document.getElementById("menu-lateral");

function controlarMenu() {
    if (btMenu.classList.contains("closed")) {
        btMenu.classList.remove("closed");
        menu.classList.add("open");

        btMenu.innerHTML = `<i class="fas fa-times"></i>`
    } else {
        btMenu.classList.add("closed");
        menu.classList.remove("open");
        btMenu.innerHTML = `<i class="fas fa-bars"></i>`
    }
}
if (btMenu) btMenu.addEventListener('click', () => controlarMenu());
/*--------------------------------------------------------------------*/

/*Funçao responsável pelo login no sistema. */
const btLogar = document.getElementById("bt-login");

function fazerLogin() {
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    if (email.value === userJson.user.email) {
        if (senha.value === userJson.user.senha) {
            window.open("src/frontend/pages/main.html", "_self")
        } else {
            alert("senha errada");
        }
    } else {
        alert("usuario nao existe");
    }
}

if (btLogar) btLogar.addEventListener('click', () => fazerLogin());


/*Modelagem do arquivo json que servirá como banco de dados */
//futuramente esse bloco será removido daqui pois será recebido via servidor.
const userJson = {
        "user": {
            "id": 1,
            "nome": "Bruno Junqueira Benetolo",
            "email": "brunobenetolo@hotmail.com",
            "senha": "123456",
            "nascimento": "1997-04-24",
            "img": "https://cdn.fakercloud.com/avatars/yecidsm_128.jpg",
            "pets": [{
                    "id": 1,
                    "nomePet": "Frida",
                    "especiePet": "Felino",
                    "racaPet": "Sem raça definida",
                    "sexo": "Femea",
                    "nascimentoPet": "2019-10-26",
                    "imgPet": "http://placeimg.com/640/480/animals",
                    "medicamentos": [{
                        "id": 1,
                        "descricao": "Antibiótico para infecções bacteriana.",
                        "medicamento": "Maxicam",
                        "dosagem": "250mg - 2 vezes ao dia por 7 dias.",
                        "aplicacao": "2021-12-24",
                        "reaplicacao": "Sem reaplicação."
                    }],
                    "pesos": [{
                            "id": 1,
                            "descricao": "Pesagem no veterinário",
                            "observacao": "Dentro do peso ideal.",
                            "valor": "3.4kg",
                            "data": "2021-10-24"
                        },
                        {
                            "id": 2,
                            "descricao": "Pesagem em casa",
                            "observacao": "Ganho de peso normal.",
                            "valor": "3,3kg",
                            "data": "2021-01-20"
                        },
                        {
                            "id": 3,
                            "descricao": "Pesagem PetShop",
                            "observacao": "Perda de peso devido a resfriado.",
                            "valor": "3kg",
                            "data": "2020-10-06"
                        }
                    ]
                },
                {
                    "id": 2,
                    "nomePet": "Chico",
                    "especiePet": "Felino",
                    "racaPet": "Angorá",
                    "sexo": "Macho",
                    "nascimentoPet": "2020-08-05",
                    "imgPet": "http://placeimg.com/640/480/animals",
                    "medicamentos": [{
                        "id": 1,
                        "descricao": "Antibiótico pós castração.",
                        "medicamento": "Maxicam",
                        "dosagem": "250mg - 2 vezes ao dia por 7 dias.",
                        "aplicacao": "2021-11-24",
                        "reaplicacao": "Sem reaplicação."
                    }],
                    "pesos": [{
                            "id": 1,
                            "descricao": "Pesagem no veterinário",
                            "observacao": "Dentro do peso ideal.",
                            "valor": "3.4kgkg",
                            "data": "2020-12-24"
                        },
                        {
                            "id": 2,
                            "descricao": "Pesagem em casa",
                            "observacao": "Ganho de peso normal.",
                            "valor": "3,3kg",
                            "data": "2021-01-20"
                        },
                        {
                            "id": 3,
                            "descricao": "Pesagem PetShop",
                            "observacao": "Perda de peso devido a resfriado.",
                            "valor": "3kg",
                            "data": "2020-10-06"
                        }
                    ]
                }
            ]
        }
    }
    /*--------------------------------------------------------------------*/

/*Função responsavel por carregar o menu lateral com os dados do usuario logado*/
/*A ideia aqui é que quando o login seja realizado, o servidor vai retornar um arquivo JSON como o modelado acima, 
a partir dele iremos carregar as informações na pagina. No caso desse bloco de função, irá realizar o carregamento
da imagem e nome de usuario no menu lateral.*/
function carregarMenuLateral() {
    const avatar = document.querySelectorAll("#avatar");
    const nomeUsuario = document.querySelectorAll("#nome-usuario");
    avatar.forEach(avatar => avatar.setAttribute("src", userJson.user.img));
    nomeUsuario.forEach(nomeUsuario => nomeUsuario.innerHTML += userJson.user.nome);
}
carregarMenuLateral();
/*--------------------------------------------------------------------*/

/*Função responsavel por carregar os cards dos pets de acordo com o JSON recebido do servidor*/
/*Seguindo o mesmo principio da funçao carregarMenuLateral(), teremos a funçao abaixo responsável por
realizar o carregamento dos cards dos pets de acordo com os dados recebidos no arquivo JSON*/
function carregarCards() {
    //constante responsavel por pegar a quantidade de pets, ela le o tamanho do vetor pets no "objeto" user do JSON
    const qtdPets = userJson.user.pets.length;
    //constante que seleciona o elemento html que iremos adicionar os cards.
    const painel = document.getElementById("painel");
    //laço de repetiçao para adicionar os cards
    for (i = 0; i < qtdPets; i++) {
        //aqui devemos trabalhar com o += pois se usarmos o = a cada laço será substituido o card anterior, usando 
        //o += ele irá adicionar.
        painel.innerHTML +=

            //dentro de dois acentos circunflexos `` criamos o que chamamos de template string, nele adicionamos a estrutura
            //HTML que queremos que seja adicionado. A vantagem é que conseguimos concatenar variaveis JS no meio da string.
            //Abaixo usamos o ${} para adicionar as variaveis, a imagem e nome do pet que estão no arquivo JSON.
            `
         <article class="card-pet" >
            <div class="wrp-img">
                <img src="${userJson.user.pets[i].imgPet}" alt="">
            </div>
            <div class="infos-pet">
                <h3>${userJson.user.pets[i].nomePet}</h3>
                <h4>${userJson.user.pets[i].especiePet}</h4>
            </div>
            <div class="acoes" >
                <a class="bt-cuidar" id="${userJson.user.pets[i].id}" href="cuidar.html"><input class="button" type="button" value="Cuidar"></a>
                <a href="cadastroPet.html"><input class="button" type="button" value="Editar"></a>
            </div>
        </article>
        `
    }
    if (qtdPets <= 5) {
        painel.innerHTML +=
            `<article class="card-add">
                <div class="wrp">
                    <a href="cadastroPet.html">
                        <div class="circle">
                            <i class="fas fa-plus"></i>
                        </div>
                    </a>
                </div>
            </article>`
    }

}

if (window.location.href.split('/').slice(-1) == "main.html") {
    carregarCards();
    const btCuidar = document.querySelectorAll(".bt-cuidar");
    btCuidar.forEach(bt => {
        bt.addEventListener('click', () => {
            localStorage.setItem('petAtual', bt.id)
        });
    });
}


/*--------------------------------------------------------------------*/

/*Evento disparado quando o conteudo é carregado, responsável por gerar o calendário*/

function carregarCalendario(tipo) {
    let tipoToolbar;
    if (window.innerWidth < 425) {
        tipoToolbar = {
            start: 'title',
            center: '',
            end: 'prev,next'
        }
    }
    if (tipo === "individual") {

    }
    if (tipo === "geral") {

    }
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        themeSystem: 'Superhero',
        locale: 'pt-br',
        initialView: 'dayGridMonth',
        height: "100%",
        headerToolbar: tipoToolbar,
        titleFormat: { year: 'numeric', month: 'short' },
        events: getVacinasIndividual(parseInt(localStorage.getItem('petAtual')) - 1),
        buttonText: {
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
            day: 'Dia',
            list: 'Lista'
        },
        dateClick: (data) => {
            console.log(data.dayEl)
        },
    });
    calendar.render();

};
const getVacinasIndividual = (indexPet) => {
        const pet = userJson.user.pets[indexPet];
        let vacinasIndividual = [];
        for (i = 0; i < pet.medicamentos.length; i++) {
            const title = pet.medicamentos[i].medicamento;
            const start = pet.medicamentos[i].aplicacao;
            const evento = {
                title,
                start
            }
            vacinasIndividual.push(evento);
        }
        return vacinasIndividual;
    }
    /*Evento disparado quando o conteudo é carregado, responsável por gerar o gráfico*/

function carregarGrafico() {
    let petGrafico = userJson.user.pets[localStorage.getItem('petAtual') - 1];
    let aspRt = document.querySelector(".wrp-grafico").style.width / document.querySelector(".wrp-grafico").style.height;
    var ctx = document.getElementById('grafico').getContext('2d');
    var chart =
        new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',
            // The data for our dataset
            data: {
                labels: ["Janeiro", "Fevereiro", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: `Evolução dos pesos de ${petGrafico.nomePet}`,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [7, 10, 5, 2, 20, 30, 45],
                }]
            },

            // Configuration options go here
            options: {
                locale: 'pt-br',
                aspectRatio: aspRt,
                responsive: true,
            }
        });
}


/*--------------------------------------------------------------------*/

/*Tratamento da responsividade das abas na pagina Cuidar*/

// const tabs = Array.from(document.querySelectorAll(".tabs"));
// const btRetorno = document.querySelectorAll(".bt-retorno");
// let ultimaAba = 0;
// btRetorno.forEach(bt => {
//     bt.addEventListener('click', () => {
//         tabs.forEach(tab => {
//             tab.addEventListener('click', () => {
//                 ultimaAba = tabs.indexOf(tab);
//             });
//             if (window.innerWidth <= 600 && tab.checked) {
//                 tab.checked = false;
//             }
//             if (window.innerWidth > 600 && !tab.checked) {
//                 tab[1].checked = true;
//             }
//         });
//     });
// });

// window.addEventListener('resize', () => {
//     tabs.forEach(tab => {
//         if (window.innerWidth <= 600 && tab.checked) {
//             tab.checked = false;
//         }
//         if (window.innerWidth > 600 && !tab.checked) {
//             tabs[ultimaAba].checked = true;
//         }
//     });
//     carregarGrafico();
// });
/*--------------------------------------------------------------------*/

/*Carregamento da tela Cuidar*/
if (window.location.href.split('/').slice(-1) == "cuidar.html") {
    const tabs = Array.from(document.querySelectorAll(".tabs"));
    const btRetorno = document.querySelectorAll(".bt-retorno");
    let ultimaAba = 1;

    btRetorno.forEach(bt => {
        bt.addEventListener('click', () => {
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    ultimaAba = tabs.indexOf(tab);
                });
                if (window.innerWidth <= 600 && tab.checked) {
                    tab.checked = false;
                }
                if (window.innerWidth > 600 && !tab.checked) {
                    tab[1].checked = true;
                }
            });
        });
    });
    window.addEventListener('resize', () => {
        tabs.forEach(tab => {
            if (window.innerWidth <= 600 && tab.checked) {
                tab.checked = false;
            }
            if (window.innerWidth > 600 && !tab.checked) {
                tabs[ultimaAba].checked = true;
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        carregarGrafico();
        carregarCalendario("individual");
    });

}
if (window.location.href.split('/').slice(-1) == "calendarioGeral.html") {
    document.addEventListener('DOMContentLoaded', function() {
        carregarCalendario("geral");
    });

}

/*--------------------------------------------------------------------*/