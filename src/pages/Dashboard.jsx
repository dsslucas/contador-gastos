//Estilizações CSS via Styled Components
import {
    Container,
    Row,
    Column,
    GlobalStyle
} from '../StyledComponents';

import React from "react";

import Card from '../components/Card';

export default props => {
    return (
        <Container>
            <GlobalStyle />
            <Row>
                <h1>{props.title}</h1>
                <span>{props.content}</span>
            </Row>

            <Row>
                <Column columnNumber="12">
                    <Card title="Gasto total" columns="12"/>
                </Column>
                <Column columnNumber="3">
                <Card title="Alimentação"/>
                </Column>
                <Column columnNumber="3">
                    <Card title="Bebidas"/>
                </Column>
                <Column columnNumber="3">
                    <Card title="Compras"/>
                </Column>
                <Column columnNumber="3">
                    <Card title="Viagens"/>
                </Column>

            </Row>
        </Container>


    )
}