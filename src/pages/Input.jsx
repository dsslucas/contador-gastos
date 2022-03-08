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
        valorAtual: '',
        opcaoBotao: 0
    }

    handleInputChange = (e) => {
        this.setState({ valorAtual: e.target.value })
        this.props.parentCallback(e.target.value)
    }

    render() {
        const { valorAtual } = this.state
        //console.log("(FORA DA FUNÇÃO) VALOR INFORMADO:", this.state.valorAtual)

        return (

            <Container>
                <GlobalStyle />
                <Row>
                    <h2>{this.props.title}</h2>
                </Row>

                <Row>
                    <CardFieldset>
                        <CardInput
                            placeholder={this.props.nomeInput}
                            type={this.props.tipo}
                            name="valor"
                            value={this.state.valorAtual}
                            onChange={this.handleInputChange}
                            required
                            onSubmit={this.onTrigger}

                            onKeyPress={(e) => { e.key === 'Enter' ? e.preventDefault() : console.log("Não entrei no enter") }}
                        />
                        {valorAtual}

                    </CardFieldset>
                </Row>
            </Container>

        )
    }

}