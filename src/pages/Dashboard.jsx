//Estilizações CSS via Styled Components
import {
    Container,
    Row,
    Column,
    GlobalStyle
} from '../StyledComponents';

import React from "react";

import Card from '../components/Card';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default props => {
    return (
        <Container>
            <GlobalStyle />
            <Row>
                <h2>{props.title}</h2>
                <span>{props.content}</span>
            </Row>

            <Row>
                <Column columnNumber="12" xs="12">
                    <Card title="Gasto total" columns="12" color="#1E8449"/>
                </Column>

                <Column columnNumber="6" xs="6">
                    <Card title="Comidas" color="#C0392B"/>
                </Column>
                <Column columnNumber="6" xs="6">
                    <Card title="Bebidas" color="#F1C40F"/>
                </Column>
                <Column columnNumber="6" xs="6">
                    <Card title="Compras" color="#F39C12"/>
                </Column>
                <Column columnNumber="6" xs="6">
                    <Card title="Viagens" color="#2980B9"/>
                </Column>
            </Row>
        </Container>
    )
}