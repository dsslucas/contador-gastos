# Cálculo de Gastos Pessoais

Em um tempo não muito distante, eu controlava rigorosamente todos os meus gastos em uma planilha. Por hobby e por ser cauteloso, sempre gostei de gerenciar minha receita e categorizar os valores; e foi através disto que criei este projeto de forma 100% autoral.

## Layout
![Pagina inicial](/src/img/printscreen.png)
[Link para o site](https://contador-gastos.herokuapp.com/)

## Como funciona?
Das funcionalidades, temos:
- O usuário informa as suas receitas (entre salário, renda extra ou qualquer ganho financeiro);
- Após clicar no botão "Confirmar", o usuário informa o valor que desembolsou em seis categorias;
- Estas categorias, mostradas no dashboard, estão com as cores correspondentes dos botões. Ao clicar, o valor é somado;
- Caso o usuário queira recomeçar os cálculos, basta clicar em "Resetar".

### Alguns pontos a destacar:

Estabeleci um percentual entre Gastos Totais e a Receita. Vale ressaltar que **não existe uma regra padrão vigente para estipular os percentuais de aceitação, de alerta e de perigo, mas sim recomendações**. Portanto, baseado em experiência pessoal, estabeleci uma regra nos quais:
* Até 70%: Estado de aceitação, o usuário está fazendo um correto gerenciamento de seus gastos;
* Entre 70% a 90%: Estado de atenção, no qual o usuário precisa ficar atento com suas finanças para que suas receitas não se esgotem;
* Entre 90% a 100%: Estado de alerta, neste caso, o usuário é informado que os seus gastos estão próximos de suas receitas;
* Acima de 100%: As receitas se esgotaram e o usuário está sujeito a se endividar.

Dentro da Análise:
* O dashboard de **Gasto total** altera as cores de acordo com o percentual. Até 70%, exibe cor verde; amarelo entre 70% a 90%; vermelho para percentual acima de 90%. Todos estes tem paleta de cores gradativas;
* É exibido um breve relatório ao usuário, de acordo com os percentuais informados acima.

## O que usei?
- HTML5 e CSS3
- JavaScript ES6
- Framework React.js (versão 17.0.2)
- Font Awesome (versão 6.0.0)
- Styled Components

## Instruções
* Nesta página do GitHub, clique em "Code" e **copie o link disponibilizado para clone**.
    ![Git](/src/img/git-clone.png)
* Acessando um terminal (como CMD, Cmder ou o terminal integrado do Visual Studio IDE), digite ```git clone [link do repositório copiado]```
* Após a clonagem e ainda no terminal, digite ```npm i```. Este comando irá baixar todas as dependências disponíveis em ```package.json```.
* Depois de tudo instalado, digite ```npm start``` para iniciar o projeto.

## Observações
- Os dados informados **NÃO VÃO PARA UM SERVIDOR BACKEND!**. Todos os dados informados são calculados via JavaScript e se mantém apenas no browser;
- É possível utilizar dados oriundos de um banco de dados/servidor;
- Esteja livre para melhorar e aperfeiçoar o código.

## Créditos:
- [Estilização no Styled Components](https://codesandbox.io/s/nwjmr73vl?file=/src/index.js:72-244)
- [Breakpoints em CSS, do Tárcio Zemel](https://desenvolvimentoparaweb.com/css/css-breakpoints-maneira-correta/)
- [Passagem de parâmetros em React.js](https://www.geeksforgeeks.org/how-to-pass-data-from-child-component-to-its-parent-in-reactjs/)
