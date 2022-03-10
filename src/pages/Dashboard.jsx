//Estilizações CSS via Styled Components
import {
    Container,
    Row,
    Column,
    GlobalStyle,
    CardHeader,
    CardHeading
} from '../StyledComponents';

import React, { Component } from "react";

import Card from '../components/Card';
import { useState } from 'react';

export class Dashboard extends Component {

    //Estados
    state = {
        valorComida: this.props.valorComida,
        valorBebida: 0,
        valorCompra: 0,
        valorViagem: 0
    }

    analiseGastos(){
        
    }

    render() {
        return (
            <Container>
                <GlobalStyle />
                <Row>
                    <CardHeading>{this.props.title}</CardHeading>
                </Row>

                <Row>
                    <Column columnNumber="12" xs="12" animation='true'>
                        <Card title="Salário" columns="12" color="#1E8449" value={this.props.cash} />
                    </Column>

                    <Column columnNumber="4" xs="6" animation='true'>
                        <Card title="Contas" color="#B0C02B" value={this.props.valorConta} />
                    </Column>

                    <Column columnNumber="4" xs="6" animation='true'>
                        <Card title="Comidas" color="#C0392B" value={this.props.alimentacao} />
                    </Column>
                    <Column columnNumber="4" xs="6" animation='true'>
                        <Card title="Bebidas" color="#F1C40F" value={this.props.bebida} />
                    </Column>
                    <Column columnNumber="4" xs="6" animation='true'>
                        <Card title="Compras" color="#F39C12" value={this.props.compra} />
                    </Column>
                    <Column columnNumber="4" xs="6" animation='true'>
                        <Card title="Viagens" color="#2980B9" value={this.props.viagem} />
                    </Column>

                    <Column columnNumber="4" xs="6" animation='true'>
                        <Card title="Outros" color="#29B985" value={this.props.outros} />
                    </Column>

                    <Column columnNumber="12" xs="12" animation='true'>
                        <Card title="Gasto total" columns="12" color="#1E8449" value={this.props.valueTotal} />
                    </Column>
                </Row>
            </Container>
        )

    }
}