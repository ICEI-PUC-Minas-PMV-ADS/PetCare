# Registro de Testes de Software

O presente relatório demonstra as evidências dos testes de software realizados no sistema pela equipe e é baseado no plano de testes definido no [item 8 deste projeto](https://github.com/ICEI-PUC-Minas-PMV-ADS/PetCare/blob/Entrega-final/docs/08-Plano%20de%20Testes%20de%20Software.md).
#
## 1. Tela inicial para login
Ao inserir o endereço do site https://icei-puc-minas-pmv-ads.github.io/PetCare/ verificamos que a página de login é mostrada perfeitamente e nela podemos inserir os dados: 
- E-mail: brunobenetolo@hotmail.com  
- Senha:  123456
![image](https://user-images.githubusercontent.com/78277341/143723706-5a2847a9-ef62-4d78-b7b0-49fc9e31dd52.png)

Quando os dados não são inseridos adequadamente, um alert é mostrado com a seguinte mensagem: *Senha errada*. 

Ao abrirmos a página em um dispositivo celular, podemos verificar que a mesma encontra-se responsiva: 
![image](https://user-images.githubusercontent.com/78277341/143726779-2b3f0c73-2c4f-493a-abd6-c545efcdd325.png)


### :point_right: Observações importantes em Tela Inicial: 
Neste ponto, a equipe verificou que algumas melhorias podem ser aplicadas: 
- A mensagem do alert pode também constar: "*Por favor, verifique seus dados e os insira corretamente*".
- O campo de senha deve voltar a ficar limpo após a monstragem do alert de erro, evitando que o usuário erre novamente.
- Adequar fontes de textos mais harmônicas e padronizar seus tamanhos.  
#

## 2. Tela do usuário
Seguindo o plano de testes, após realizar o login, verficamos que o usuário é encaminhado à página que mostra as ferramentas de que terá acesso para gerenciar a cartela de vacinas de seu pet. Essa página, que chamamos de *Tela do usuário* apresenta também a página de acesso cujo menu lateral possui 3 ferramentas: *Meus Pets*, *Minha Conta* e *Calendário de Vacinas*. 
Verificamos que a página mostra também dois botões: *editar* e *cuidar*. Vejamos: 

![image](https://user-images.githubusercontent.com/78277341/143724079-b76a5474-8b87-4554-b760-caa2bda0cf4c.png)
#

A equipe verificou também a responsividade da página, aplicando-lhe diferentes dimensões e exibindo-a em dispositivos diversos. Verificamos que as imagens se adequam perfeitamente e um menu embutido (*sandwich*) é mostrado quando a página é carregada em dimensões abaixo de 400px: 

![image](https://user-images.githubusercontent.com/78277341/143724257-dd98f06d-684a-4470-aafc-09ff782e5c01.png)
#

## 3. Testando ferramenta "Meu Pet"
Nesta ferramenta, verificamos o funcionamento dos botões "*Cuidar*" e "*Editar*".

![image](https://user-images.githubusercontent.com/78277341/143725029-268b5c0c-2e29-473e-a901-7552000c262a.png)
#

Ao clicarmos no botão "Cuidar", verificamos que o usuário é encaminhado para a agenda do seu pet (Calendário de Vacinas).

![image](https://user-images.githubusercontent.com/78277341/143724524-c2d09ec2-7836-4e2b-a218-849187d7dea4.png)
#

Foi constatado que a página está responsiva e o calendário abre perfeitamente em um modelo Moto G4: 

![image](https://user-images.githubusercontent.com/78277341/143724922-d1f43270-efb6-4978-b131-413d280c8fef.png)

#

### :point_right: Observações importantes sobre o calendário:
Neste ponto, a equipe verificou que algumas melhorias podem ser aplicadas:
- Ainda não é possível guardar as informações inseridas na agenda. 
- Inserir botões de "voltar ao início" e "sair" pode facilitar a navegação. 

#

Na mesma página, tem-se ainda duas abas com as seguintes ferramentas: "*Gráfico de pesos*" e "*Incluir Vacina / medicamento*".

### 3.1 Testando *Gráfico de pesos* e *Incluir Vacina / medicamento*.

Em "*Gradico de pesos*" verificamos que a imagem representativa de um gráfico é aberta e ao seu lado, um campo para inserir as informações de peso é mostrado. Este campo possui dois botões, sendo um de remover e outro de adicionar. Logo, verificamos uma tabela com o resumo dos dados inseridos.

![image](https://user-images.githubusercontent.com/78277341/143724710-5fd5677b-bb4b-45bb-9e0e-9ed63375dbc3.png)
#

Constatou-se também que a página encontra-se devidamente responsiva. Vejamos: 

![image](https://user-images.githubusercontent.com/78277341/143724764-85514702-21b3-427c-867b-c7f1e637a7e3.png)
#
### :point_right: Observações importantes em Gráfico de Pesos:
Neste ponto, a equipe verificou que algumas melhorias podem ser aplicadas:
- Os botões ainda não executam as funcionalidades e o gráfico ainda não pode representar as informações inseridas. 
- Adequar fontes de textos mais harmônicas e padronizar seus tamanhos. 
#
## 4. Testando ferramenta "Minha Conta"
Nesta página, verificou-se que é mostrado, além de um formulário, os botões de "salvar" e "excluir conta". Também foram aplicadas diferentes dimensões para o teste de responsividade, conforme demonstrado a seguir: 

![image](https://user-images.githubusercontent.com/78277341/143725264-d38abf84-cbed-4c44-a221-ce01a592be44.png)
![image](https://user-images.githubusercontent.com/78277341/143725380-ad3f7108-bb30-4f68-a236-caf4074af2a6.png)
![image](https://user-images.githubusercontent.com/78277341/143725416-4e9ebf47-491a-4d07-870e-2d0dad5c2e15.png)

#
### :point_right: Observações importantes sobre Minha Conta:
Neste ponto, a equipe verificou que algumas melhorias podem ser aplicadas:
- Algumas imagens não carregam em alguns dispositivos. 
- Inserir botões de "voltar ao início" e "sair" pode facilitar a navegação. 
- Alguns ajustes referentes à harmonização dos botões, das fontes e sombreamento também são necessárias.
- Ainda não é possível salvar ou excluir os dados da conta. 
- Uma página apenas para cadastro pode melhorar a experiência do usuário no site. 
#


