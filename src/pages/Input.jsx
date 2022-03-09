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

        return (

            <Container>
                <GlobalStyle />
                <Row>
                    <h2>{this.props.title}</h2>
                </Row>

                <Row>
                    <CardFieldset>
                        <CardOptionsNote>Informe o valor gasto e selecione uma categoria</CardOptionsNote>

                        <CardInput
                            placeholder={this.props.nomeInput}
                            type={this.props.tipo}
                            name="valor"
                            value={this.props.conteudo}
                            onChange={this.handleInputChange}
                            onSubmit={this.onTrigger}
                            required={this.props.id === '5' ? false : true}

                            onKeyPress={(e) => { e.key === 'Enter' ? e.preventDefault() : console.log("Não entrei no enter") }}
                        />
                        {valorAtual}

                    </CardFieldset>
                </Row>
            </Container>

        )
    }

}