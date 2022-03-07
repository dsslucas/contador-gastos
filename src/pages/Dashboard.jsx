//Estilizações CSS via Styled Components
import {
    Container,
    Row,
    Column,
    GlobalStyle
} from '../StyledComponents';

import React, { Component } from "react";

import Card from '../components/Card';
import { useState } from 'react';

export class Dashboard extends Component {


    render() {
        return (
            <Container>
                <GlobalStyle />
                <Row>
                    <h2>{this.props.title}</h2>
                </Row>

                <Row>
                    <Column columnNumber="12" xs="12">
                        <Card title="Gasto total" columns="12" color="#1E8449" value={this.props.valueTotal}/>
                    </Column>

                    <Column columnNumber="6" xs="6">
                        <Card title="Comidas" color="#C0392B" value="" />
                    </Column>
                    <Column columnNumber="6" xs="6">
                        <Card title="Bebidas" color="#F1C40F" value="" />
                    </Column>
                    <Column columnNumber="6" xs="6">
                        <Card title="Compras" color="#F39C12" value="" />
                    </Column>
                    <Column columnNumber="6" xs="6">
                        <Card title="Viagens" color="#2980B9" value="" />
                    </Column>
                </Row>
            </Container>
        )

    }
}