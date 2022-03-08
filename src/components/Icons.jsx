//Estilizações CSS via Styled Components
import {
    Container,
    CardIcon,
    CardOptionsItem,
    CardButton,
} from '../StyledComponents';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { Component } from "react";

export class Icons extends Component {

    botaoSelecionado(e){
        //console.log("AMOR EU SOU SEU DEPENDENTE")
        //console.log(e)
        //console.log("OCORRÊNCIA")
        //console.log(`RESPOSTA EM ICONS.JSX: ${this.props.id}`)
        this.props.resposta(this.props.id)
        //e.preventDefault()
    }

    render() {
        return (


            <CardIcon>
                <CardButton
                    type={this.props.type}
                    onClick={e => this.botaoSelecionado(e)}
                    id={this.props.id}
                    required
                >
                    <FontAwesomeIcon icon={this.props.icon} color={this.props.color} />
                </CardButton>
            </CardIcon>

        )
    }

}