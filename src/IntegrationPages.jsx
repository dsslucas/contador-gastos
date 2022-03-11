import React, { Component } from "react";

//Estilizações CSS via Styled Components
import {
    Container, Row, Column, GlobalStyle, CardWrapper, CardOptions, CardOptionsNote, CardFieldset, CardText
} from './StyledComponents';

import Titulo from './pages/Titulo';
import { Dashboard } from './pages/Dashboard'
import { Input } from './pages/Input'
import { Icons } from './components/Icons'

import { faBeer, faBurger, faBagShopping, faEnvelope, faTrainSubway, faBaseball } from "@fortawesome/free-solid-svg-icons";

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
        this.calculoValorPorCategoria(valor, comida, bebida, compra, viagem, salario, conta, outros, total)
    }

    //Callback de Valor, que vem do Input.jsx
    handleCallback = (novoValor, id) => {
        //Salva o salário do usuário
        if (id == '-1') {
            this.setState({ salario: novoValor })
            this.setState({ salarioTotal: novoValor })
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
    calculoValorPorCategoria(valor, comida, bebida, compra, viagem, salario, conta, outros) {
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
        if (this.state.id != '7'){
            //Calcula o percentual, importante para o texto no final
            var totalGastos = valor + conta + comida + bebida + compra + viagem + outros
            var mediaGastoSalario = Math.round((totalGastos / salario) * 100)
            this.setState({ media: mediaGastoSalario })

            //Soma tudo
            this.setState({ valorTotal: valor + conta + comida + bebida + compra + viagem + outros })
            this.setState({ salarioTotal: salario })

            //Deixa o campo limpo para o Input
            this.setState({ valorInformado: '' })
        }
    }

    //Envia o formulário
    onTrigger = (event) => {
        event.preventDefault();
        this.variaveisGlobais()
    }

    //Faz a checagem para o disabled do input quando é informado o salário
    condicaoParaEnvioInput() {
        //Condição que permite dar o Read Only no input da renda
        if ((this.state.salarioTotal != '0') && this.state.id != '-1') {
            return true
        }
        else {
            return false
        }
    }

    //Retorno sobre a situação financeira
    mensagemSobreAnalise() {

        const mensagemAdicional = 'Vale ressaltar que isto é uma recomendação estipulada por economistas. As opiniões podem variar entre especialistas em finanças.'

        if (this.state.media < 70 && this.state.media != 0) {
            return (
                <CardFieldset>
                    <CardOptionsNote>Conclusão</CardOptionsNote>
                    <CardText>Parabéns! Você gasta {this.state.media}% de sua receita. Continue economizando!</CardText>
                    <CardText>{mensagemAdicional}</CardText>
                </CardFieldset>

            )
        }
        else if (this.state.media >= 70 && this.state.media < 90) {
            return (
                <CardFieldset>
                    <CardOptionsNote>Conclusão</CardOptionsNote>
                    <CardText>Esteja atento com sua saúde financeira! Você está gastando {this.state.media}% de sua receita. Busque cortar gastos supérfluos para o equilíbrio do seu orçamento.</CardText>
                    <CardText>{mensagemAdicional}</CardText>
                </CardFieldset>
            )

        }
        else if (this.state.media >= 90 && this.state.media <= 100) {
            return (
                <CardFieldset>
                    <CardOptionsNote>Conclusão</CardOptionsNote>
                    <CardText>Perigo! Seus gastos estão em {this.state.media}% em relação a sua receita. É recomendado cortar gastos supérfluos e "apertar as mangas" para que seu dinheiro não se esgote.</CardText>
                    <CardText>{mensagemAdicional}</CardText>
                </CardFieldset>
            )

        }
        else if (this.state.media > 100) {
            return (
                <CardFieldset>
                    <CardOptionsNote>Conclusão</CardOptionsNote>
                    <CardText>Seu dinheiro acabou! Sugerimos que seus gastos, que estão em {this.state.media}%, possam ser reduzidos através do corte de gastos supérfluos. Esteja atento com as dívidas!</CardText>
                    <CardText>{mensagemAdicional}</CardText>
                </CardFieldset>
            )
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

                    <CardOptionsNote>Selecione uma categoria</CardOptionsNote>

                    <CardOptions>
                        <Icons icon={faEnvelope} color="#C800E6" type="submit" id="1" resposta={this.respostaCliqueBotao} />
                        <Icons icon={faBurger} color="red" type="submit" id="2" resposta={this.respostaCliqueBotao} />
                        <Icons icon={faBeer} color="yellow" type="submit" id="3" resposta={this.respostaCliqueBotao} />
                        <Icons icon={faBagShopping} color="orange" type="submit" id="4" resposta={this.respostaCliqueBotao} />
                        <Icons icon={faTrainSubway} color="#7FB3D5" type="submit" id="5" resposta={this.respostaCliqueBotao} />
                        <Icons icon={faBaseball} color="#29B985" type="submit" id="6" resposta={this.respostaCliqueBotao} />
                    </CardOptions>

                    {this.mensagemSobreAnalise()}

                    <CardOptions>
                        <Icons type="submit" id="7" content="Resetar" resposta={this.respostaCliqueBotao} />
                    </CardOptions>

                </CardFieldset>
            )
        }
    }

    render() {
        return (
            <Container>
                <GlobalStyle />

                <CardWrapper>
                    <Row>
                        <Titulo title="Cálculo de Gastos" content="Criado com o intuito de reforçar a conscientização da saúde financeira. Os dados não são salvos em servidores." />
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