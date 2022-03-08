import React, { Component } from "react";

//Estilizações CSS via Styled Components
import {
    Container, Row, Column, GlobalStyle, CardWrapper, CardOptions, CardOptionsNote, CardFieldset
} from './StyledComponents';

import Titulo from './pages/Titulo';
import { Dashboard } from './pages/Dashboard'
import { Input } from './pages/Input'
import { Icons } from './components/Icons'

import { faBeer, faBurger, faBagShopping, faCab } from "@fortawesome/free-solid-svg-icons";

export class IntegrationPages extends Component {

    //ESTADOS
    state = {
        salario: 0,
        valorInformado: 0,
        valorComida: 0,
        valorBebida: 0,
        valorCompra: 0,
        valorViagem: 0,
        id: 0
    }

    //Callback de Valor. Vai ser descontinuada
    handleCallback = (novoValor) => {
        console.log("Entrei no Callback")
        this.setState({ valorInformado: novoValor })
        console.log(`O QUE ESTÁ CHEGANDO NO CALLBACK: ${this.state.valorInformado}`)
    }

    //Resposta do botão pressionado em Icons. Aqui é definido o ID
    respostaCliqueBotao = (e) => {
        //console.log("Entrei aqui")
        //console.log(`ID que chega na função: ${e}`)
        this.setState({ id: e })
        //console.log(`DENTRO DA FUNÇÃO: BOTÃO SELECIONADO (POR ID): ${this.state.id}`)
        //this.somaValores(e)
        //this.calculoValorPorCategoria()

        //Finaliza o formulário
        if(this.state.id != e || this.state.id === e){
            console.log("Aqui deve finalizar o formulário")
            console.log(`VALOR ALTERADO: ${this.state.valorInformado}`)

        }

    }

    calculoValorPorCategoria(option, valor) {
        console.log(`VALOR (NA FUNÇÃO DE CÁLCULO): ${valor}`)
        switch (option) {
            case '1':
                console.log("Alimentação")
                break
            case '2':
                console.log("Bebida")
                break;
            case '3':
                console.log("Compras")
                break;
            case '4':
                console.log("Viagem")
                break;
        }
    }

    //Envia o formulário
    
    onTrigger = (event) => {
        event.preventDefault();

        console.log("Houve alteração", this.state.valorInformado)

        //Retorna para a Integration
        //this.props.parentCallback(this.state.valorAtual)
        //console.log(event)
        //this.props.id(event)
        //console.log(event)
    }

    render() {
        const idGerado = this.state.id
        const valorAtual = this.state.valorInformado

        console.log("(NA PRINCIPAL) VALOR: ", this.state.valorInformado)

        //this.calculoValorPorCategoria(idGerado, valorAtual)
        return (
            <Container>
                <GlobalStyle />

                <CardWrapper>
                    <Row>
                        <Titulo title="Cálculo de Gastos" content="Informe quais gastos você possui" />
                    </Row>

                    <Row>
                        <Column columnNumber="6" xs="12">
                            <Dashboard title="Análise" valueTotal={this.state.dinheiroTotal} />
                        </Column>

                        <Column columnNumber="6" xs="12">
                            <form onSubmit={this.onTrigger}>
                                <Input title="Dados a informar" nomeInput="Digite o valor da compra" tipo="number" parentCallback={this.handleCallback} />
                                <CardFieldset>
                                    <CardOptionsNote>Categoria</CardOptionsNote>
                                    <CardOptions>
                                        <Icons icon={faBurger} color="red" type="submit" id="1" resposta={this.respostaCliqueBotao}
                                        />
                                        <Icons icon={faBeer} color="yellow" type="submit" id="2" resposta={this.respostaCliqueBotao} />
                                        <Icons icon={faBagShopping} color="orange" type="submit" id="3" resposta={this.respostaCliqueBotao} />
                                        <Icons icon={faCab} color="#7FB3D5" type="submit" id="4" resposta={this.respostaCliqueBotao} />
                                    </CardOptions>

                                </CardFieldset>

                            </form>

                        </Column>
                    </Row>

                </CardWrapper>


            </Container>
        )
    }
}