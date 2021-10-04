# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Apresentaremos a seguir os detalhes técnicos que tratam dos componentes que fazem parte da solução e do ambiente de hospedagem da solução, criado pela equipe. 

  

### Diagrama de Componentes 

Os componentes que fazem parte da solução são apresentados na Figura que se segue. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/PetCare/blob/main/docs/img/Arquitetura.jpeg)

Figura 10 - Arquitetura da Solução 

 

A solução implementada conta com os seguintes módulos:  

 

 - Navegador - Interface básica do sistema
	 - Páginas Web - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
 - Hospedagem - local na Internet onde as páginas são mantidas e acessadas pelo navegador.
	 - Plataforma Heroku ou Plataforma Netlify
 - Local Storage - armazenamento mantido no Navegador, onde são implementados através de uma biblioteca (JSON Server) o banco de dados baseados em JSON. São eles:
	 - Dados do usuário – informações do usuário como nome, e-mail, idade, cidade, estado e gênero.
	 - Dados do pet – informações do pet como nome, idade, peso, raça e cor.
	 - Dados de vacina – informações sobre as vacinas de caráter obrigatório, nome da vacina, data de aplicação, se necessita de dose reforço ou não, se necessitar de dose reforço data do retorno.
	 - Dados de medicamentos – nome do medicamento, quantidade a ser ministrado, periodicidade a ser ministrado, e receita em formato pdf, jpeg, png etc.
	  

### Hospedagem 

Como ambiente de hospedagem do site do nosso projeto utilizaremos a plataforma do Heroku ou Netlify. O site poderá ser acessado a partir do domínio posteriormente gerado pela plataforma nas próximas etapas. 
 
A publicação do site no Heroku ou no Netlify é feita por meio de uma submissão do projeto (push) via git para o repositório remoto que se encontrará no github.

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
