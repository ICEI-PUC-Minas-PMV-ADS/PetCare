# Template Padrão da Aplicação

O padrão de layout a ser utilizado pelo site tem correspondência ao projeto de interface elaborado anteriormente. Foram realizados ajustes na tela de login, coforme demonstrado na Figura 15. 

![Screenshot](Layout.png)

![Screenshot](Tela de Login.png)

O template criado está disponível no site [CSS Website Layout (W3Schools)](https://happy-liskov-7f20ba.netlify.app/). 

Está composto pelos seguintes layouts:  

- Login, onde os usuários cadastrados são direcionados para a tela principal. 

- Cadastro de nova conta, onde usuários não cadastrados serão direcionados.   

A responsividade segue o padrão do Bootstrap. 

## Tela Principal 

Tela que abrangerá dois grandes blocos: 

- Menu de navegação à esquerda, onde o usuário poderá cadastrar os seus pets e ter acesso às informações do seu cadastro. Poserá também ter acesso ao calendário consolidado de vacinação e medicamento; 

- Conteúdo à direita, onde serão disponibilizados os cards de cada pet cadastrados com as informações individuais em cada funcionalidade do sistema. 
 
 ![Screenshot](Figura 17.jfif)

 ![Screenshot](Figura 18.png)

 ## Cadastro de nova senha 

A tela abaixo direcionará o usuário para o cadastro quando este clicar no botão "cadastrar". O usuário então será  redirecionado para a tela de cadastro a seguir:

![Screenshot](Tela de cadastro.png)


# Funcionalidades do Sistema (Telas) 

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. O respectivo endereço (URL) e outras orientações de acesso são são apresentadas na sequência. 


## Visualização de Notícias (RF-01 e RF-02) 

A tela principal do sistema apresenta apresenta notícias de destaque nos principais canais. as notícias são armazenadas no LocalStorage com estruturas dados baseada em JSON. Um exemplo da tela é apresentada na Figura X.  


![Screenshot](Figura 17.jfif)


## Requisitos atendidos 

- RF-01 -  
- RF-02 -  

 

## Artefatos da funcionalidade 

- index.html 
- script_noticias.js 
- style.css 
- icone_noticia.jpg 

## Estrutura de Dados 

![Screenshot](exemplo.jfif) 


## Instruções de acesso 

Abra um navegador de Internet e informe a seguinte URL: https://happy-liskov-7f20ba.netlify.app/ 

A tela de login é a primeira funcionalidade exibida pelo aplicativo. 


## Login e Cadastro (RF-05) 

A tela "Login" permitirá o acesso de usuários cadastrados no sistema da PetCare. Caso o usuário não tenha registro no banco de dados, ele será redirecionado para a tela "Cadastrar" onde o usuário poderá informar dados como nome, email, animal e endereço. 


![Screenshot](Figura 17.jfif)

![Screenshot](Tela de cadastro.png)


## Artefatos da funcionalidade 

- pesquisa.html 
- script_pesquisa.js 
- style.css 
- icone_lupa.jpg 

 

## Instruções de acesso 

- Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub; 
- Descompacte o arquivo em uma pasta específica; 
- Abra o Visual Studio Code e execute o Live Server; 
- Abra um navegador de Internet e informe a seguinte URL: 
http://localhost:5500/index.html 

 


 


