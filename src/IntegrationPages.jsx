import React, { Component } from "react";

//Estilizações CSS via Styled Components
import {
    Container, Row, Column, GlobalStyle, CardWrapper, CardOptions, CardOptionsNote, CardFieldset, CardButton, CardText
} from './StyledComponents';

import Titulo from './pages/Titulo';
import { Dashboard } from './pages/Dashboard'
import { Input } from './pages/Input'
import { Icons } from './components/Icons'

import { faBeer, faBurger, faBagShopping, faCab, faCashRegister, faOtter, faGaugeSimpleMed, faTree, faEnvelope, faTrainSubway, faBaseball } from "@fortawesome/free-solid-svg-icons";

export class IntegrationPages extends Component {

    constructor(props) {
        super(props);

        //ESTADOS
        this.state = {
            salario: '',
            salarioTotal: 0,
            valorTotal: 0,
            valorInformado: '',
            valorConta: 0,
            valorComida: 0,
            valorBebida: 0,
            valorCompra: 0,
            valorViagem: 0,
            valorOutros: 0,
            id: -1,
            media: 0
        }
    }

    //Variáveis utilizadas para cálculo dentro da função.
    variaveisGlobais() {
        var valor = parseFloat(this.state.valorInformado)
        var conta = parseFloat(this.state.valorConta)
        var comida = parseFloat(this.state.valorComida)
        var bebida = parseFloat(this.state.valorBebida)
        var compra = parseFloat(this.state.valorCompra)
        var viagem = parseFloat(this.state.valorViagem)
        var outros = parseFloat(this.state.valorOutros)


        var salario = parseFloat(this.state.salario)
        var total = parseFloat(this.state.valorTotal)

        //Realiza o cálculo de acordo com o botão selecionado
        console.log("Entrei na função de Cálculo por categoria")
        this.calculoValorPorCategoria(valor, comida, bebida, compra, viagem, salario, conta, outros, total)

        //console.log("Entrei no cálculo percentual")
        //this.calculoPercentual()

        

    }

    //Callback de Valor, que vem do Input.jsx
    handleCallback = (novoValor, id) => {
        //console.log("VALOR QUE RECEBI DO INPUT: ", id)

        //Salva o salário do usuário
        if (id == '-1') {
            this.setState({ salario: novoValor })
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

    //Renderiza de acordo com as atualizações
    componentDidUpdate() {
        //console.log("Houve alteração no componente")
        //this.calculoPercentual()
    }

    //Calcula os valores por categoria.
    calculoValorPorCategoria(valor, comida, bebida, compra, viagem, salario, conta, outros) {
        //console.log(`Valor do salário vindo na função: ${salario}`)
        //console.log(`ID presente no momento: ${this.state.id}`)

        switch (this.state.id) {
            case '1':
                this.setState({ valorConta: valor + conta })
                break
            case '2':
                this.setState({ valorComida: valor + comida })
                break
            case '3':
                this.setState({ valorBebida: valor + bebida })
                break;
            case '4':
                this.setState({ valorCompra: valor + compra })
                break;
            case '5':
                console.log("Cliquei em Viagem")
                this.setState({ valorViagem: valor + viagem })
                break;
            case '6':
                this.setState({ valorOutros: valor + outros })
                break;
            case '7':
                //Aqui volta tudo ao padrão
                this.setState({ salario: '' })
                this.setState({ valorConta: 0 })
                this.setState({ valorComida: 0 })
                this.setState({ valorBebida: 0 })
                this.setState({ valorCompra: 0 })
                this.setState({ valorViagem: 0 })
                this.setState({ valorOutros: 0 })
                this.setState({ valorInformado: '' })
                this.setState({ valorTotal: 0 })
                this.setState({ salarioTotal: 0 })
                this.setState({ id: -1 })
                this.setState({ media: 0 })
                break;
        }



        //Realiza a soma se o ID for diferente de 5
        if (this.state.id != '7') {
            //console.log("Entrei aqui")

            //Calcula o percentual, importante para o texto no final
            var totalGastos = valor + conta + comida + bebida + compra + viagem + outros
            var mediaGastoSalario = Math.round((totalGastos / salario) * 100)
            this.setState({ media: mediaGastoSalario})

            /*
            console.log(`
                NA FUNÇÃO:
                Total de gastos: ${totalGastos}
                Salário: ${salario}
                Média: ${mediaGastoSalario}

                ESTADO DA MEDIA: ${this.state.media}
            
            `)
            */

            //Soma tudo
            this.setState({ valorTotal: valor + conta + comida + bebida + compra + viagem + outros })
            this.setState({ salarioTotal: salario })


            //this.calculoPercentual()

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
    condicaoParaEnvioInput() {
        /*console.log(`
            ENVIO INPUT
        
            ID: ${this.state.id}
            SALARIO: ${this.state.salario}
            SALARIO TOTAL: ${this.state.salarioTotal}
        
        `)*/

        if (this.state.id == '0') {
            console.log("Cliquei no botão de Confirmação")

            //this.calculoPercentual()
        }

        if ((this.state.salarioTotal != '0') && this.state.id != '-1') {
            //console.log("Entrei na condição! A partir daqui posso dar ReadOnly")
            return true
        }
        else {
            //console.log("Não entrou na condição")
            return false
        }
    }


    //Renderização condicional dos botões
    condicaoParaRenderizacaoBotoes() {

        //Válido apenas quando ID == -1. Se for diferente, esse botão não é renderizado.
        if (this.state.id == '-1') {
            //console.log("Entrei na renderização do botão de confirmação")
            return (
                <CardOptions>
                    <Icons
                        type="submit"
                        id="0"
                        content="Confirmar"
                        resposta={this.respostaCliqueBotao}
                        condicaoSalario={this.condicaoParaEnvioInput()}
                    />
                </CardOptions>
            )
        }

        //Situação oposta.
        else {
            return (
                <CardFieldset>
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
                        <Icons icon={faEnvelope} color="#B0C02B" type="submit" id="1" resposta={this.respostaCliqueBotao} />
                        <Icons icon={faBurger} color="red" type="submit" id="2" resposta={this.respostaCliqueBotao} />
                        <Icons icon={faBeer} color="yellow" type="submit" id="3" resposta={this.respostaCliqueBotao} />
                        <Icons icon={faBagShopping} color="orange" type="submit" id="4" resposta={this.respostaCliqueBotao} />
                        <Icons icon={faTrainSubway} color="#7FB3D5" type="submit" id="5" resposta={this.respostaCliqueBotao} />
                        <Icons icon={faBaseball} color="#29B985" type="submit" id="6" resposta={this.respostaCliqueBotao} />
                    </CardOptions>

                    <CardText>Você gastou {this.state.media}% de sua renda</CardText>

                    <CardOptions>
                        <Icons type="submit" id="7" content="Resetar" resposta={this.respostaCliqueBotao} />
                    </CardOptions>

                </CardFieldset>

            )
        }
    }

    render() {
        //console.log(`Valor do salário informado: ${this.state.salario}`)
        //console.log(`Salário total: ${this.state.salarioTotal}`)

        console.log(`
            MÉDIA:

            Gastos: ${this.state.valorTotal}
            Salário: ${this.state.salarioTotal}
            Média: ${this.state.media}%
        `)
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
                                valorConta={this.state.valorConta}
                                valueTotal={this.state.valorTotal}
                                alimentacao={this.state.valorComida}
                                bebida={this.state.valorBebida}
                                compra={this.state.valorCompra}
                                viagem={this.state.valorViagem}
                                outros={this.state.valorOutros}
                                percentual={this.state.media}
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

                                    {this.condicaoParaRenderizacaoBotoes()}



                                </CardFieldset>
                            </form>

                        </Column>
                    </Row>
                </CardWrapper>
            </Container>
        )
    }
}