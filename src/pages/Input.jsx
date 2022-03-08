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
        valorJaInformado: 0,
        valorAtual: '',
        opcaoBotao: 0
    }

    //Registra no estado o valor informado
    change = (e) => {
        //e.preventDefault();
        console.log("")
        console.log("Entrei na função CHANGE em Icons.jsx")
        console.log("Valor:", this.state.valorAtual)
        this.setState({ valorAtual: e.target.value })

        console.log("SAÍ DO CHANGE")
        //console.log(e)

        //Retorna para a Integration
        this.props.parentCallback(this.state.valorAtual)

    }

    //Envia o formulário
    onTrigger = (event) => {
        event.preventDefault();

        console.log("Houve alteração", this.state.valorAtual)

        //Retorna para a Integration
        this.props.parentCallback(this.state.valorAtual)
        //console.log(event)
        //this.props.id(event)
        //console.log(event)
    }


    componentDidUpdate() {
        console.log("Tive uma atualização aqui")
        console.log(`(NO USE EFFECT) Valor: ${this.state.valorAtual}`)
    }


    /*
    useEffect(() => {
        console.log("Entrei no UseEffect")
        this.props.parentCallback(this.state.valorAtual)
    }, [this.state.valorAtual]);
*/

    render() {
        const { valorAtual } = this.state
        console.log("(FORA DA FUNÇÃO) VALOR INFORMADO:", this.state.valorAtual)


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
                            onChange={this.change}
                            required
                            onKeyPress={(e) => { e.key === 'Enter' ? e.preventDefault() : console.log("Não entrei no enter") }}
                        />
                        {valorAtual}

                    </CardFieldset>
                </Row>
            </Container>

        )
    }

}