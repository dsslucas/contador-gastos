import styled, { createGlobalStyle } from 'styled-components'

import Titulo from './components/Titulo';
import Dashboard from './components/Dashboard'
import Input from './components/Input'

const GlobalStyle = createGlobalStyle`
  body {
    background: dodgerblue;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden
  }
  div{
    background: white;
    border-radius: 8px;
    text-align: center;
  }
`

//COntainer
const Container = styled.div`
  max-width: 1360px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  box-sizing: border-box;

  &:before, &:after{
    content: "";
    display: table;
  }

  &:after{
    clean: both;
  }
`

//Linhas
const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;


  &:before, &:after{
    content: "";
    display: table;
  }

  &:after{
    clean: both;
  }
`

//Colunas
const Column = styled.div`
  float: left;
  padding: .25rem;
  min-height: 1px;
  box-sizing: border-box;
  width: 100%;

  @media only screen and (min-width: 768px){
    width: ${props => (props.columnNumber ? props.columnNumber / 12 * 100 : "8.33")}%;
  };
`

function App() {

  return (
    <Container>
      <GlobalStyle />
      <Row>
        <Titulo title="Análise de gastos" content="Informe quais gastos você possui" />
      </Row>



      <Row>
        <Column columnNumber="6">
          <Dashboard title="Dashboard" content="Análise" />
        </Column>
        <Column columnNumber="6">
          <Input title="Entrada de dados" content="Informe os dados" />
        </Column>
      </Row>


    </Container>

  );
}

export default App;
