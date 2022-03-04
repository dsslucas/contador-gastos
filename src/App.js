//Estilizações CSS via Styled Components
import { Container, Row, Column, GlobalStyle, CardWrapper } from './StyledComponents';

import Titulo from './pages/Titulo';
import Dashboard from './pages/Dashboard'
import Input from './pages/Input'

function App() {

  return (
    <Container>
      <GlobalStyle />


      <CardWrapper>
        <Row>
          <Titulo title="Cálculo de Gastos" content="Informe quais gastos você possui" />
        </Row>

        <Row>
          <Column columnNumber="6" xs="12">
            <Dashboard title="Análise"/>
          </Column>

          <Column columnNumber="6" xs="12">
            <Input title="Dados a informar"/>
          </Column>
        </Row>

      </CardWrapper>


    </Container>


  );
}

export default App;
