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
import { faMarsStrokeH } from '@fortawesome/free-solid-svg-icons';

export class Dashboard extends Component {

    //Estados
    state = {

    }

    coresParaGastoTotal(){
        //Condições

        //Até 70%: ok
        //Entre 70 a 90%: acende um alerta
        //Além de 90%: perigo
        //Acima de 100%: parabéns seu nome está no SBT
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
                        <Card title="Contas" color="#B0C02B" value={this.props.valorConta} media={Math.round((this.props.valorConta / this.props.cash) * 100)} />
                    </Column>

                    <Column columnNumber="4" xs="6" animation='true'>
                        <Card title="Comidas" color="#C0392B" value={this.props.alimentacao} media={Math.round((this.props.alimentacao / this.props.cash) * 100)}/>
                    </Column>

                    <Column columnNumber="4" xs="6" animation='true'>
                        <Card title="Bebidas" color="#F1C40F" value={this.props.bebida} media={Math.round((this.props.bebida / this.props.cash) * 100)}/>
                    </Column>

                    <Column columnNumber="4" xs="6" animation='true'>
                        <Card title="Compras" color="#F39C12" value={this.props.compra} media={Math.round((this.props.compra / this.props.cash) * 100)}/>
                    </Column>
                    <Column columnNumber="4" xs="6" animation='true'>
                        <Card title="Viagens" color="#2980B9" value={this.props.viagem} media={Math.round((this.props.viagem / this.props.cash) * 100)}/>
                    </Column>

                    <Column columnNumber="4" xs="6" animation='true'>
                        <Card title="Outros" color="#29B985" value={this.props.outros} media={Math.round((this.props.outros / this.props.cash) * 100)}/>
                    </Column>

                    <Column columnNumber="12" xs="12" animation='true'>
                        <Card title="Gasto total" columns="12" color="#1E8449" value={this.props.valueTotal} media={this.props.percentual}/>
                    </Column>
                </Row>
            </Container>
        )

    }
}