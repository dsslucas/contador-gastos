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
        valor: 0
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

    onTrigger= (event) => {
        event.preventDefault();

        if(event.key === "Enter"){
            console.log("ENTREI NO ENTER")
        }

        console.log("Houve alteração", this.state.valor)
        this.props.parentCallback(this.state.valor)
        console.log(event)

    }

    render() {
        const { valor } = this.state
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
                                onKeyPress={(e) => {e.key === 'Enter' ? alert("É necessário informar a categoria.") : console.log("Não entrou no Enter")}}

                            />
                            {valor}

                            <CardOptionsNote>Categoria</CardOptionsNote>
                            <CardOptions>
                                <Icons icon={faBurger} color="red" type="submit" />
                                <Icons icon={faBeer} color="yellow" type="submit" />
                                <Icons icon={faBagShopping} color="orange" type="submit" />
                                <Icons icon={faCab} color="#7FB3D5" type="submit" />
                            </CardOptions>

                        </CardFieldset>
                    </form>


                </Row>

            </Container>

        )
    }

}