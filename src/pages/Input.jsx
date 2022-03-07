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
import {Icons} from '../components/Icons';

import { faBeer, faBurger } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faCab } from '@fortawesome/free-solid-svg-icons';

export class Input extends Component {

    state = {
        valor: 0,
        opcaoBotao: 0
    }

    //Registra no estado o valor informado
    change = (e) => {
        e.preventDefault();
        //console.log("Entrei no e.target...")
        //console.log("Valor:", this.state.valor)
        this.setState({ valor: e.target.value })
        //console.log(`APÓS A ALTERAÇÃO> ${this.state.valor}`)
        //console.log(e)
    }

    //Envia o formulário
    onTrigger = (event) => {
        event.preventDefault();

        //console.log("Houve alteração", this.state.valor)
        this.props.parentCallback(this.state.valor)
        //console.log(event)
    }

    //Resposta do botão pressionado em Icons
    respostaCliqueBotao = (e) => {
        console.log("Entrei aqui")
        console.log(e)
        this.setState({opcaoBotao: e})
        console.log(`BOTÃO SELECIONADO (POR ID): ${this.state.opcaoBotao}`)
    }



    render() {
        const { valor } = this.state

        console.log("OPÇÃO (FORA DA FUNÇÃO):", this.state.opcaoBotao)
        return (

            <Container>
                <GlobalStyle />
                <Row>
                    <h2>{this.props.title}</h2>
                </Row>

                <Row>
                    <form onSubmit={this.onTrigger}>
                        <CardFieldset>
                            <CardInput
                                placeholder="Digite o valor da compra"
                                type="number"
                                name="valor"
                                onChange= {this.change}
                                required
                                onKeyPress={(e) => {e.key === 'Enter' ? e.preventDefault() : console.log("Não entrou no Enter")}}

                            />
                            {valor}

                            <CardOptionsNote>Categoria</CardOptionsNote>
                            <CardOptions>
                                <Icons icon={faBurger} color="red" type="submit" id="1" resposta = {this.respostaCliqueBotao}
                                />
                                <Icons icon={faBeer} color="yellow" type="submit" id="2" resposta = {this.respostaCliqueBotao}/>
                                <Icons icon={faBagShopping} color="orange" type="submit" id="3" resposta = {this.respostaCliqueBotao}/>
                                <Icons icon={faCab} color="#7FB3D5" type="submit" id="4" resposta = {this.respostaCliqueBotao}/>
                            </CardOptions>

                        </CardFieldset>
                    </form>
                </Row>

            </Container>

        )
    }

}