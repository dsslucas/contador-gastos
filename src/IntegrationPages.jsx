import React, { Component } from "react";

//Estilizações CSS via Styled Components
import {
    Container, Row, Column, GlobalStyle, CardWrapper, CardOptions, CardOptionsNote, CardFieldset, CardButton
} from './StyledComponents';

import Titulo from './pages/Titulo';
import { Dashboard } from './pages/Dashboard'
import { Input } from './pages/Input'
import { Icons } from './components/Icons'


import { faBeer, faBurger, faBagShopping, faCab, faHeartPulse } from "@fortawesome/free-solid-svg-icons";

export class IntegrationPages extends Component {

    constructor(props) {
        super(props);

        //ESTADOS
        this.state = {
            salario: '',
            salarioTotal: 0,
            valorTotal: 0,
            valorInformado: '',
            valorComida: 0,
            valorBebida: 0,
            valorCompra: 0,
            valorViagem: 0,
            id: -1,
            idParaInput: false
        }
    }

    //Variáveis utilizadas para cálculo dentro da função.
    variaveisGlobais() {
        var valor = parseFloat(this.state.valorInformado)
        var comida = parseFloat(this.state.valorComida)
        var bebida = parseFloat(this.state.valorBebida)
        var compra = parseFloat(this.state.valorCompra)
        var viagem = parseFloat(this.state.valorViagem)
        var salario = parseFloat(this.state.salario)

        this.calculoValorPorCategoria(valor, comida, bebida, compra, viagem, salario)
    }

    //Callback de Valor, que vem do Input.jsx
    handleCallback = (novoValor, id) => {
        console.log("VALOR QUE RECEBI DO INPUT: ", id)
        //Salva o salário do usuário
        if (id == '-1') {
            this.setState({ salario: novoValor })
            this.setState({ salarioTotal: novoValor})
        }        

        //Registra os valores das compras
        else {
            this.setState({ valorInformado: novoValor })

        }
    }

    //Resposta do botão pressionado em Icons. Aqui é definido o ID
    respostaCliqueBotao = (e) => {
        this.setState({ id: e })
    }

    //Calcula os valores por categoria.
    calculoValorPorCategoria(valor, comida, bebida, compra, viagem, salario) {
        //console.log(`Valor do salário vindo na função: ${salario}`)
        //console.log(`ID presente no momento: ${this.state.id}`)
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
                //Aqui volta tudo ao padrão
                this.setState({ salario: '' })
                this.setState({ valorComida: 0 })
                this.setState({ valorBebida: 0 })
                this.setState({ valorCompra: 0 })
                this.setState({ valorViagem: 0 })
                this.setState({ valorInformado: '' })
                this.setState({ valorTotal: 0 })
                this.setState({ salarioTotal: 0 })
                this.setState({ id: -1 })
                break;
        }

        //Realiza a soma se o ID for diferente de 5
        if (this.state.id != '5') {
            console.log("Entrei aqui")
            this.setState({ valorTotal: valor + comida + bebida + compra + viagem })
            this.setState({ salarioTotal: salario })

            //Deixa o campo limpo para o Input
            this.setState({ valorInformado: '' })
        }
    }

    //Envia o formulário
    onTrigger = (event) => {
        event.preventDefault();
        console.log("Formulário enviado!")
        this.variaveisGlobais()
    }

    //Faz a checagem para o disabled do input quando é informado o salário
    condicaoParaEnvioInput(){
        console.log(`
        
            ID: ${this.state.id}
            SALARIO: ${this.state.salario}
            SALARIO TOTAL: ${this.state.salarioTotal}
        
        `)

        if(this.state.id == '0'){
            console.log("Cliquei no botão de Confirmação")
        }
        
        if((this.state.salarioTotal != '0') && this.state.id != '-1'){
            console.log("Entrei na condição! A partir daqui posso dar ReadOnly")
            return true
        }
        else{
            console.log("Não entrou na condição")
            return false
        }
    }

    render() {
        //console.log(`Valor do salário informado: ${this.state.salario}`)
        //console.log(`Salário total: ${this.state.salarioTotal}`)
        return (
            <Container>
                <GlobalStyle />

                <CardWrapper>
                    <Row>
                        <Titulo title="Cálculo de Gastos" content="Informe quais gastos você possui" />
                    </Row>

                    <Row>
                        <Column columnNumber="6" xs="12">
                            <Dashboard
                                title="Análise"
                                cash={this.state.salarioTotal}
                                valueTotal={this.state.valorTotal}
                                alimentacao={this.state.valorComida}
                                bebida={this.state.valorBebida}
                                compra={this.state.valorCompra}
                                viagem={this.state.valorViagem}
                            />
                        </Column>

                        <Column columnNumber="6" xs="12">
                            <form onSubmit={this.onTrigger}>
                                <CardFieldset>

                                    <Input
                                        title="Dados a informar"
                                        nomeInput="Digite a sua receita mensal"
                                        tipo="number"
                                        conteudo={this.state.salario}
                                        parentCallback={this.handleCallback}
                                        id={this.state.id}
                                        texto="Informe sua renda mensal"
                                        condicaoSalario={this.condicaoParaEnvioInput()}
                                    />

                                    <CardOptions>
                                        <Icons
                                            type="submit"
                                            id="0"
                                            content="Confirmar"
                                            resposta={this.respostaCliqueBotao}
                                            condicaoSalario={this.condicaoParaEnvioInput()}
                                        />
                                    </CardOptions>

                                    <Input
                                        nomeInput="Digite o preço pago"
                                        tipo="number"
                                        conteudo={this.state.valorInformado}
                                        parentCallback={this.handleCallback}
                                        id={this.state.id}
                                        texto="Informe quanto gastou na sua compra"
                                        condicaoSalario={false}
                                    />

                                    <CardOptionsNote>Selecione a categoria</CardOptionsNote>

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