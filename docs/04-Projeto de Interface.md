# Projeto de Interface 

Dentre as preocupações com o desenvolvimento da interface do sistema, foi estabelecido o enfoque em questões como agilidade, acessibilidade e usabilidade. Desta forma, o projeto tem uma identidade visual padronizada em todas as telas que foram projetadas para funcionamento fluído em desktops e dispositivos móveis. Foi pensado também para que seja possível implementar o conceito de SPA(Single Page Application), trazendo maior comodidade no uso e aproximação com sistemas desktops.  

## Fluxo do Usuário 

O diagrama apresentado na figura abaixo mostra o fluxo de interação do usuário pelas telas do sistema. Cada uma das telas deste fluxo é detalhada na seção de Wireframes que se segue. Para visualizar o wireframe interativo, acesse o <a href="https://www.figma.com/proto/uk6NlzfYOx8shXQK9PPYbQ/PetCare-Projeto?node-id=179%3A466&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=179%3A466"></a>ambiente interativo do projeto no Figma.</a> 

 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/PetCare/blob/develop/docs/img/Diagrma%20de%20Fluxo.jpg)

Fluxo de telas do usuário 

## Wireframes 

Conforme fluxo de telas do projeto, apresentado no item anterior, as telas do sistema são apresentadas em detalhes nos itens que se seguem. As telas do sistema apresentam uma estrutura comum que é apresentada na figura abaixo. Após o acesso ao sistema através da tela de login é apresentada a tela principal, estrutura que foi dividida em 2 blocos principais, descritos a seguir. São eles: 
<ul>
<li>Conteúdo - apresenta o conteúdo da tela em questão; </li>
<li>Menu lateral - apresenta os elementos de navegação primária, geralmente associados aos elementos do bloco de conteúdo e navegação secundária. </li>
 </ul>

 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/PetCare/blob/develop/docs/img/Layout.png)

Estrutura padrão do site 

### Tela de Login 

A tela de login é a primeira página acessada pelo usuário, nela é apresentado os campos de formulários e-mail e senha, os quais devem ser preenchidos com dados previamente cadastrados. Caso o usuário não possua o cadastro no sistema, é possível através de um link especifico acessar a página de cadastro. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/PetCare/blob/develop/docs/img/Tela%20de%20Login.png) 

Tela Login – Formulário de acesso 

### Tela de Cadastro 

Caso o usuário clique no botão para se cadastrar, o mesmo é direcionado a página de cadastro, onde é possível preencher com os dados pessoais um formulário que visa atender ao requisito funcional RF-01, após clicar no botão cadastrar o usuário é redirecionado para a tela login.  

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/PetCare/blob/develop/docs/img/Tela%20de%20cadastro.png)

Tela Cadastro Usuário - Formulário cadastro de usuário. 

### Tela - Principal 

Após ser logado no sistema, é apresentada a tela principal ao usuário, ela é dividida em dois grandes blocos, o bloco conteúdo, onde são mostradas as informações individuais a cada funcionalidade do sistema e na lateral temos o menu de navegação. A ideia da tela principal é apresentar um botão para cadastrar novos pets(limitado a 6, conforme requisito funcional RF-06) e cards com informações básicas dos pets, caso algum pet esteja com algum medicamento ou vacina próximos de vencer ou vencido é exibido uma notificação em seu card. Além disso, existe nos cards botões que levam as telas de Cuidar Pet ou Editar Pet.  

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/PetCare/blob/develop/docs/img/Tela%20Principal.png)

Tela Principal - Cards dos pets cadastrados.

### Tela minha conta 

Navegando através do menu lateral é possível o usuário acessar a página minha conta, nela é mostrado o formulário com as informações cadastrais, sendo há a possibilidade de alterar os dados e salvá-los, também é permitido alterar a foto de perfil e excluir a conta do sistema, atendendo ao requisito funcional RF-03. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/PetCare/blob/develop/docs/img/Tela%20Minha%20Conta.png)

Tela Minha Conta - Formulário de usuário cadastrado.

### Tela calendário de vacinação geral 

Acessada através do menu lateral é mostrado um calendário navegável no qual são marcados os dias que algum pet possui uma dose de vacina ou remédio para aplicação, clicando sobre a data destacada, é mostrado na lateral direita da tela informações básicas do pet e medicamento além de um botão que leva a tela de cuidar pet. 3

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/PetCare/blob/develop/docs/img/Tela%20Calend%C3%A1rio%20Vacinas%20Geral.png)

Tela Calendário Geral de Vacinas - Vacinas de todos os pets. 

### Tela editar pet 

Ao clicar no botão editar pet no card da tela principal, o usuário é direcionado a tela editar pet, onde é apresentado um formulário preenchido com os dados cadastrais do pet,  sendo permitido alterar os dados, trocar foto e excluir o pet.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/PetCare/blob/develop/docs/img/Tela%20Editar%20Pet.png)

Tela Editar Pet - Formulário de pet cadastrado.

### Tela cuidar pet 

Ao acessar a tela cuidar pet, é apresentado um layout de abas, dividido em 3 grupos: 
#### Calendário de vacinas individual 

Mostra as datas de aplicação/reaplicação de medicamentos e vacinas do pet selecionado.  

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/PetCare/blob/develop/docs/img/Tela%20Calend%C3%A1rio%20Vacinas%20Individual.png)

Tela Calendário Individual - Calendário do pet selecionado.

#### Gráfico de pesos 

Nessa aba é apresentado à esquerda um gráfico que mostra o histórico de pesos e a direita um formulário onde é possível cadastrar, editar ou excluir uma pesagem para o pet. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/PetCare/blob/develop/docs/img/Tela%20Cuidar%20Pet.png)

Tela Gráfico de Pesos - Controle individual do peso do pet.

#### Incluir vacina/ remédio 

A aba incluir vacina/ remédio mostra uma tabela com todas as vacinas e remédios referente ao pet selecionado, também existe um formulário de busca e um formulário de cadastro que permite alterar, cadastrar, excluir e buscar as vacina/remédios que o pet deve tomar ou tomou. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/PetCare/blob/develop/docs/img/Medicamentos.png)

Tela Incluir Vacina/Remédio - Controle de medicamentos aplicados no pet.