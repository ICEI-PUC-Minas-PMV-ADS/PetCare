# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox ou Edge
- Conectividade de Internet para acesso às plataformas (APISs) 

 

Os testes funcionais a serem realizados no aplicativo são descritos a seguir. 


| **Caso de Teste**  |   Tela Principal  |
| ------------------- | ------------------- |
| **Requisitos Associados** |  A tela principal apresenta um formulário solicitando e-mail e senha do usuário para que ele possa logar no sistema. Os campos devem ser preenchidos com dados previamente cadastrados. Caso o usuário não possua o cadastro no sistema, um alert solicitará o cadastro.  |
|  **Objetivo do Teste**  | Verificar se login da página “Acesse sua conta” é efetuado e se após o login a página da conta aparecerá para o usuário.  |
|   | **Passos** 
||1) Acessar o Navegador.
||2) Informar o endereço do Site: https://icei-puc-minas-pmv-ads.github.io/PetCare/. 
||3) Visualizar a página principal.
||4) No campo  e-mail, inserir: brunobenetolo@hotmail.com. 
||5) No campo senha, inserir: 123456. 
||6) Clicar em login. 
||7) Visualizar a página de acesso.  |
|  **Critérios de Êxito**  |  Ao clicar em Login, será liberado acesso à conta do usuário. A página de acesso à conta e calendário deve ser exibida. As páginas devem estar responsivas. |


| **Caso de Teste**  |   Tela do usuário  |
| ------------------- | ------------------- |
| **Requisitos Associados** |  Apresenta a página de acesso, cujo menu lateral possui 3 ferramentas: *Meus Pets*, *Minha Conta* e *Calendário de Vacinas*. Já a página principal deve apresentar dois botões: *editar* e *cuidar*.  |
|  **Objetivo do Teste**  | - Verificar se a ferramenta “Minha Conta” leva para a página de salvar ou excluir dados pessoais. Verificar se a ferramenta “*Meus Pets*” leva para a página de ‘*editar* e *cuidar*”. Verificar se a ferramenta “*editar*” leva para página de salvar ou remover dados do Pet. Verificar se o botão “*cuidar*” leva para a página que consta o “*calendário de vacina*” e as abas de “*gráficos de pesos*” e “*incluir vacina/medicamento*”. |
|   | **Passos** 
||1) Acessar o Navegador.
||2) Informar o endereço do Site: https://icei-puc-minas-pmv-ads.github.io/PetCare/. 
||3) Efetuar o login (conforme tabela anterior) 
||4) Visualizar a  página com o nome do usuário, foto do Pet e barra lateral de ferramentas.
||5) Clicar em “*Minha Conta*” no menu lateral. 
||6)  Visualizar a página com os botões “*salvar*” e “*excluir conta*”. 
||7) Clicar no botão “*Cuidar*”. 
||8) Visualizar a página de calendário.
||9) Clicar na aba Gráfico de pesos
||10) Visualizar o gráfico representativo e campos de adicionar e remover
||11) Clicar na aba “*Incluir Vacina*”
||12) Visualizar os campos de registros com botões “*adicionar*” e “*cancelar*” 
|  **Critérios de Êxito**  | As páginas dos passos anteriores devem estar responsivas, com todas as imagens sendo carregadas corretamente.|
#
## Ferramentas de Testes
Para realizar os testes e verificar a responsividade das páginas, foram utilizados:
- Computadores
- Celulares Android e iOS
- Debugging Visual Studio Code
- Ferramenta de inspeção do Google Chrome


