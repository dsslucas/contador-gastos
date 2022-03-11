//Estilizações CSS via Styled Components
import {
    Container,
    Row,
    Column,
    GlobalStyle,
    CardHeading
} from '../StyledComponents';

import React, { Component } from "react";

import Card from '../components/Card';

export class Dashboard extends Component {

    //Paleta de cores
    coresParaGastoTotal() {
        //Até 70%: ok COR VERDE
        if (this.props.percentual < 70) {
            if (this.props.percentual >= 0 && this.props.percentual < 40) return '#57FF00'
            else if (this.props.percentual >= 40 && this.props.percentual < 60) return '#6CFF20'
            else if (this.props.percentual >= 60 && this.props.percentual < 70) return '#81FF40'
        }

        //Entre 70 a 90%: acende um alerta (COR AMARELA)
        else if (this.props.percentual >= 70 && this.props.percentual < 90) {
            if (this.props.percentual >= 70 && this.props.percentual < 75) return '#F8FF00'
            else if (this.props.percentual >= 75 && this.props.percentual < 80) return '#F9FF20'
            else if (this.props.percentual >= 80 && this.props.percentual < 85) return '#FAFF40'
            else if (this.props.percentual >= 85 && this.props.percentual < 90) return '#FBFF60'
        }

        //Entre 90% a 100%: perigo, dinheiro pode faltar (Vermelho)
        else if (this.props.percentual >= 90 && this.props.percentual <= 100) {
            if (this.props.percentual >= 90 && this.props.percentual < 92) return '#F96060'
            else if (this.props.percentual >= 92 && this.props.percentual < 94) return '#F84141'
            else if (this.props.percentual >= 94 && this.props.percentual < 96) return '#F62121'
            else if (this.props.percentual >= 96 && this.props.percentual < 98) return '#F50101'
            else if (this.props.percentual >= 98 && this.props.percentual <= 100) return '#F50303'
        }

        //Acima de 100%: parabéns seu nome está no SBT
        else if (this.props.percentual > 100) {
            return '#FF0000'
        }


    }

    render() {
        return (
            <Container>
                <GlobalStyle />
                <Row>
                    <CardHeading>{this.props.title}</CardHeading>
                </Row>

                <Row>
                    <Column columnNumber="12" xs="12" md="12" lg="12" animation='true'>
                        <Card title="Receitas" columns="12" color="#1E8449" value={this.props.cash} />
                    </Column>

                    <Column columnNumber="4" xs="6" md="4" lg="4" animation='true'>
                        <Card title="Contas" color="#E00EFF" value={this.props.valorConta} media={Math.round((this.props.valorConta / this.props.cash) * 100)} />
                    </Column>

                    <Column columnNumber="4" xs="6" md="4" lg="4" animation='true'>
                        <Card title="Comidas" color="#FC4732" value={this.props.alimentacao} media={Math.round((this.props.alimentacao / this.props.cash) * 100)} />
                    </Column>

                    <Column columnNumber="4" xs="6" md="4" lg="4" animation='true'>
                        <Card title="Bebidas" color="#FFCF0E" value={this.props.bebida} media={Math.round((this.props.bebida / this.props.cash) * 100)} />
                    </Column>

                    <Column columnNumber="4" xs="6" md="4" lg="4" animation='true'>
                        <Card title="Compras" color="#FF9F0E" value={this.props.compra} media={Math.round((this.props.compra / this.props.cash) * 100)} />
                    </Column>
                    <Column columnNumber="4" xs="6" md="4" lg="4" animation='true'>
                        <Card title="Viagens" color="#0EAFFF" value={this.props.viagem} media={Math.round((this.props.viagem / this.props.cash) * 100)} />
                    </Column>

                    <Column columnNumber="4" xs="6" md="4" lg="4" animation='true'>
                        <Card title="Outros" color="#29B985" value={this.props.outros} media={Math.round((this.props.outros / this.props.cash) * 100)} />
                    </Column>

                    <Column columnNumber="12" xs="12" md="12" lg="12" animation='true'>
                        <Card title="Gasto total" columns="12" color={this.coresParaGastoTotal()} value={this.props.valueTotal} media={this.props.percentual} />
                    </Column>
                </Row>
            </Container>
        )

    }
}