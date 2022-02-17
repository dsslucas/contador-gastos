//Estilizações CSS via Styled Components
import { Container, Row, Column, GlobalStyle } from './StyledComponents';

import Titulo from './pages/Titulo';
import Dashboard from './pages/Dashboard'
import Input from './pages/Input'

function App() {

  return (
    <Container>
      <GlobalStyle />
      <Row>
        <Titulo title="Análise de gastos" content="Informe quais gastos você possui" />
      </Row>

      <Row>
        <Column columnNumber="6" color="green">
          <Dashboard title="Dashboard" content="Análise" />
        </Column>
        <Column columnNumber="6" color="yellow">
          <Input title="Entrada de dados" content="Informe os dados" />
        </Column>
      </Row>

    </Container>


  );
}

export default App;
