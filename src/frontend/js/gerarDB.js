const faker = require('faker');
const fs = require('fs');
faker.locale = 'pt_BR';

let usuários = [];
let formatoJson;
function gerarDB(url, tamanho) {

    for (i = 0; i < tamanho; i++) {
        const id = i + 1;
        const nome = faker.name.findName();
        const email = faker.internet.email(nome.toLowerCase());
        const senha = faker.internet.password();
        const nascimento = faker.date.past(30, 2005);
        const img = faker.image.avatar()
        const pets = [];
        for (j = 0; j < gerarInt(1, 6); j++) {
            const id = j + 1;
            const imgPet = faker.image.animals();
            const nomePet = faker.name.firstName();
            const nascimentoPet = faker.date.past(10, 2005);
            const racaPet = faker.animal.cat();
            const pet = {
                id,
                nomePet,
                racaPet,
                nascimentoPet,
                imgPet,
            }
            pets.push(pet);
        }
        const user = {
            id,
            nome,
            email,
            senha,
            nascimento,
            img,
            pets,
        }
        usuários.push(user);
    }
    console.log()
    formatoJson = `{"users": ${JSON.stringify(usuários)} }`
    fs.writeFile(url, formatoJson, e => {
        if (e) return;
        console.log("ok");
    });
}


function gerarInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(gerarInt(1,6))

gerarDB("db.json", 2);





var data = {
    "adult": false,
    "budget": 80000000,
    "genres": [
      {
        "id": 16,
        "name": "Animação"
      },
      {
        "id": 10751,
        "name": "Família"
      }
    ]
  }

  console.log(typeof(data.genres[0].id))