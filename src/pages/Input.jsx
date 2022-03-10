//Estilizações CSS via Styled Components
import {
    Container,
    Row,
    CardFieldset,
    CardInput,
    CardOptions,
    CardOptionsNote,
    GlobalStyle,
    CardHeading,
    CardHeader
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

    render() {
        const { valorAtual } = this.state

        return (

            <Container>
                <GlobalStyle />
                <Row>
                    <CardHeading>{this.props.title}</CardHeading>
                </Row>

                <CardOptionsNote>{this.props.texto}</CardOptionsNote>
                <CardInput
                    placeholder={this.props.nomeInput}
                    type={this.props.tipo}
                    name="valor"
                    value={this.props.conteudo}
                    onChange={this.handleInputChange}
                    onSubmit={this.onTrigger}
                    required={this.props.id != '7' ? true : false}
                    onKeyPress={(e) => { e.key === 'Enter' ? e.preventDefault() : console.log("Não pressionei Enter.")}}
                    readOnly={this.props.condicaoSalario == true ? true : false}
                />


            </Container>

        )
    }

}