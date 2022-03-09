import React, { Component } from "react";

//Estilizações CSS via Styled Components
import {
    Container, Row, Column, GlobalStyle, CardWrapper, CardOptions, CardOptionsNote, CardFieldset, CardButton
} from './StyledComponents';

import Titulo from './pages/Titulo';
import { Dashboard } from './pages/Dashboard'
import { Input } from './pages/Input'
import { Icons } from './components/Icons'


import { faBeer, faBurger, faBagShopping, faCab } from "@fortawesome/free-solid-svg-icons";

export class IntegrationPages extends Component {

    constructor(props) {
        super(props);

        //ESTADOS
        this.state = {
            salario: 0,
            valorTotal: 0,
            valorInformado: '',
            valorComida: 0,
            valorBebida: 0,
            valorCompra: 0,
            valorViagem: 0,
            id: 0
        }
    }

    //Variáveis utilizadas para cálculo dentro da função.
    variaveisGlobais() {
        var valor = parseFloat(this.state.valorInformado)
        var comida = parseFloat(this.state.valorComida)
        var bebida = parseFloat(this.state.valorBebida)
        var compra = parseFloat(this.state.valorCompra)
        var viagem = parseFloat(this.state.valorViagem)

        this.calculoValorPorCategoria(valor, comida, bebida, compra, viagem)
    }

    //Callback de Valor
    handleCallback = (novoValor) => {
        this.setState({ valorInformado: novoValor })
    }

    //Resposta do botão pressionado em Icons. Aqui é definido o ID
    respostaCliqueBotao = (e) => {
        this.setState({ id: e })
    }

    //Calcula os valores por categoria.
    calculoValorPorCategoria(valor, comida, bebida, compra, viagem) {
        switch (this.state.id) {
            case '1':
                this.setState({ valorComida: valor + comida })
                break
            case '2':
                this.setState({ valorBebida: valor + bebida })
                break;
            case '3':

                this.setState({ valorCompra: valor + compra })
                break;
            case '4':
                this.setState({ valorViagem: valor + viagem })
                break;
            case '5':
                //Aqui zera TUDO
                this.setState({ valorComida: 0 })
                this.setState({ valorBebida: 0 })
                this.setState({ valorCompra: 0 })
                this.setState({ valorViagem: 0 })
                this.setState({ valorInformado: 0 })
                this.setState({ valorTotal: 0 })
                break;
        }

        //Realiza a soma se o ID for diferente de 5
        if (this.state.id != '5') {
            console.log("Entrei aqui")
            this.setState({ valorTotal: valor + comida + bebida + compra + viagem })

            //Deixa o campo limpo para o Input
            this.setState({valorInformado: ''})
        }
    }

    //Envia o formulário
    onTrigger = (event) => {
        event.preventDefault();
        console.log("Formulário enviado!")
        this.variaveisGlobais()
    }

    render() {
        return (
            <Container>
                <GlobalStyle />

                <CardWrapper>
                    <Row>
                        <Titulo title="Cálculo de Gastos" content="Informe quais gastos você possui" />
                    </Row>

                    <Row>
                        <Column columnNumber="6" xs="12">
                            <Dashboard title="Análise" valueTotal={this.state.valorTotal} alimentacao={this.state.valorComida} bebida={this.state.valorBebida} compra={this.state.valorCompra} viagem={this.state.valorViagem} />
                        </Column>

                        <Column columnNumber="6" xs="12">
                            <form onSubmit={this.onTrigger}>
                                <Input title="Dados a informar" nomeInput="Digite o valor da compra" tipo="number" conteudo={this.state.valorInformado} parentCallback={this.handleCallback} id={this.state.id} />
                                <CardFieldset>
                                    <CardOptionsNote>Categoria</CardOptionsNote>
                                    <CardOptions>
                                        <Icons icon={faBurger} color="red" type="submit" id="1" resposta={this.respostaCliqueBotao} />
                                        <Icons icon={faBeer} color="yellow" type="submit" id="2" resposta={this.respostaCliqueBotao} />
                                        <Icons icon={faBagShopping} color="orange" type="submit" id="3" resposta={this.respostaCliqueBotao} />
                                        <Icons icon={faCab} color="#7FB3D5" type="submit" id="4" resposta={this.respostaCliqueBotao} />
                                    </CardOptions>
                                    <CardOptions>
                                        <Icons type="submit" id="5" content="Resetar" resposta={this.respostaCliqueBotao} />
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