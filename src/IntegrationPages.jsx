import React, { Component } from "react";

//Estilizações CSS via Styled Components
import { Container, Row, Column, GlobalStyle, CardWrapper } from './StyledComponents';

import Titulo from './pages/Titulo';
import { Dashboard } from './pages/Dashboard'
import { Input } from './pages/Input'
import { Icons } from './components/Icons'

export class IntegrationPages extends Component {

    //ESTADOS
    state = {
        dinheiroTotal: 0,
    }

    handleCallback = (novoValor) => {
        this.setState({ dinheiroTotal: novoValor })
    }


    render() {
        const {name} = this.state
        return (
            <Container>
                <GlobalStyle />

                <CardWrapper>
                    <Row>
                        <Titulo title="Cálculo de Gastos" content="Informe quais gastos você possui" />
                    </Row>

                    <Row>
                        <Column columnNumber="6" xs="12">
                            <Dashboard title="Análise" parentCallback = {this.handleCallback} value={this.state.dinheiroTotal}/>
                        </Column>

                        <Column columnNumber="6" xs="12">
                            <Input title="Dados a informar" parentCallback = {this.handleCallback}/>
                        </Column>
                    </Row>

                </CardWrapper>


            </Container>
        )
    }
}