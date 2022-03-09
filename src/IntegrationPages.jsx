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

    constructor(props) {
        super(props);

        //ESTADOS
        this.state = {
            salario: 0,
            valorTotal: 0,
            valorInformado: 0,
            valorComida: 0,
            valorBebida: 0,
            valorCompra: 0,
            valorViagem: 0,
            id: 0
        }
    }

    variaveisGlobais(){
        var valor = parseFloat(this.state.valorInformado)
        var comida = parseFloat(this.state.valorComida)
        var bebida = parseFloat(this.state.valorBebida)
        var compra = parseFloat(this.state.valorCompra)
        var viagem = parseFloat(this.state.valorViagem)
        //var total = this.setState({valorTotal: comida + bebida})

        this.calculoValorPorCategoria(valor, comida, bebida, compra, viagem)

        //console.log(`DENTRO DA FUNÇÃO: VALOR TOTAL ${total}`)
        //this.somaTotal(comida, bebida, compra, viagem)
    }



    //Callback de Valor. Vai ser descontinuada
    handleCallback = (novoValor) => {
        //console.log("NOVO VALOR DENTRO DO CALLBACK: ", novoValor)
        this.setState({ valorInformado: novoValor })
        //console.log(`O QUE ESTÁ CHEGANDO NO CALLBACK: ${this.state.valorInformado}`)
    }

    //Resposta do botão pressionado em Icons. Aqui é definido o ID
    respostaCliqueBotao = (e) => {
        this.setState({ id: e })
    }

    calculoValorPorCategoria(valor, comida, bebida, compra, viagem) {
        console.log(`VALOR (NA FUNÇÃO DE CÁLCULO): ${this.state.valorInformado}`)

        switch (this.state.id) {
            case '1':
                console.log("Alimentação")
                this.setState({ valorComida: valor + comida })

                break
            case '2':
                console.log("Bebida")
                this.setState({ valorBebida: valor + bebida })
                break;
            case '3':
                console.log("Compras")
                this.setState({ valorCompra: valor + compra })
                break;
            case '4':
                console.log("Viagem")
                this.setState({ valorViagem: valor + viagem })
                break;
            default:
                console.log("Opção inválida!", this.state.id)
                break;
        }
        this.setState({ valorTotal: valor + comida + bebida + compra + viagem})
    }

    
    somaTotal(comida, bebida, compra, viagem) {
        this.setState({ valorTotal: comida + bebida + compra + viagem })
    }
    

    //Envia o formulário

    onTrigger = (event) => {
        event.preventDefault();
        console.log("Formulário enviado!")
        this.variaveisGlobais()
    }

    render() {
        const idGerado = this.state.id
        const valorAtual = this.state.valorInformado

        console.log("OPÇÃO SELECIONADA FORA DA FUNÇÃO: ", this.state.id)
        //console.log(`(NA PÁGINA PRINCIPAL, LONGE DO CALLBACK) Valor: ${valorAtual}`)
        console.log(`Valor do rango: ${this.state.valorComida}`)
        console.log(`Valor da birita: ${this.state.valorBebida}`)
        console.log(`Valor das compras: ${this.state.valorCompra}`)
        console.log(`Valor das viagens: ${this.state.valorViagem}`)
        console.log(`Valor TOTAL: ${this.state.valorTotal}`)

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
                                <Input title="Dados a informar" nomeInput="Digite o valor da compra" tipo="number" parentCallback={this.handleCallback} />
                                <CardFieldset>
                                    <CardOptionsNote>Categoria</CardOptionsNote>
                                    <CardOptions>
                                        <Icons icon={faBurger} color="red" type="submit" id="1" resposta={this.respostaCliqueBotao} />
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