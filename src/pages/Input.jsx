//Estilizações CSS via Styled Components
import {
    Container,
    Row,
    CardFieldset,
    CardInput,
    CardOptions,
    CardOptionsNote,
    GlobalStyle
} from '../StyledComponents';

import React, { Component } from "react";
import { Icons } from '../components/Icons';
import { useEffect } from 'react';

//FAZER A SOMA DOS VALORES

export class Input extends Component {

    state = {
        valorAnterior: '',
        valorAtual: ''
    }

    handleInputChange = (e) => {
        this.setState({ valorAtual: e.target.value })
        this.props.parentCallback(e.target.value, this.props.id)
    }

    renderizacaoCondicional() {
        if (this.props.id == '0') {
            return (
                <CardInput
                    placeholder={this.props.nomeInput}
                    type={this.props.tipo}
                    name="valor"
                    value={this.props.conteudo}
                    onChange={this.handleInputChange}
                    onSubmit={this.onTrigger}
                    required={this.props.id != '5' ? true : false}
                    disabled


                    onKeyPress={(e) => { e.key === 'Enter' ? e.preventDefault() : console.log("Não entrei no enter") }}
                />
            )
        }
        else {
            return (
                <CardInput
                    placeholder={this.props.nomeInput}
                    type={this.props.tipo}
                    name="valor"
                    value={this.props.conteudo}
                    onChange={this.handleInputChange}
                    onSubmit={this.onTrigger}
                    required={this.props.id != '5' ? true : false}


                    onKeyPress={(e) => { e.key === 'Enter' ? e.preventDefault() : console.log("Não entrei no enter") }}
                />)
        }
    }

    render() {
        const { valorAtual } = this.state

        return (

            <Container>
                <GlobalStyle />
                <Row>
                    <h2>{this.props.title}</h2>
                    <span>ID {this.props.id}</span>
                    <span>VALOR NO INPUT {valorAtual}</span>


                </Row>

                <CardOptionsNote>{this.props.texto}</CardOptionsNote>
                <CardInput
                    placeholder={this.props.nomeInput}
                    type={this.props.tipo}
                    name="valor"
                    value={this.props.conteudo}
                    onChange={this.handleInputChange}
                    onSubmit={this.onTrigger}
                    required={this.props.id != '5' ? true : false}
                    onKeyPress={(e) => { e.key === 'Enter' ? e.preventDefault() : console.log("Não entrei no enter") }}
                />


            </Container>

        )
    }

}