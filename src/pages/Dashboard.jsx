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

    //Estados
    state = {
        valorComida: this.props.valorComida,
        valorBebida: 0,
        valorCompra: 0,
        valorViagem: 0
    }

    //Soma dos valores por categoria, vindos do Input.jsx
    somaValoresPorCategoria(id, valor){
        console.log(`ID ${id}, VALOR ${valor}`)
    }

    render() {
        return (
            <Container>
                <GlobalStyle />
                <Row>
                    <h2>{this.props.title}</h2>
                </Row>

                <Row>
                    <Column columnNumber="12" xs="12" animation = 'true'>
                    <Card title="Gasto total" columns="12" color="#1E8449" value={this.props.valueTotal}/>
                    </Column>

                    <Column columnNumber="6" xs="6" animation = 'true'>
                        <Card title="Comidas" color="#C0392B" value={this.props.alimentacao} />
                    </Column>
                    <Column columnNumber="6" xs="6" animation = 'true'>
                        <Card title="Bebidas" color="#F1C40F" value={this.props.bebida} />
                    </Column>
                    <Column columnNumber="6" xs="6" animation = 'true'>
                        <Card title="Compras" color="#F39C12" value={this.props.compra} />
                    </Column>
                    <Column columnNumber="6" xs="6" animation = 'true'>
                        <Card title="Viagens" color="#2980B9" value={this.props.viagem} />
                    </Column>
                </Row>
            </Container>
        )

    }
}