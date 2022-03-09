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
        this.props.resposta(this.props.id)
    }

    showCondition(){
        if (this.props.icon && this.props.color){
            return <FontAwesomeIcon icon={this.props.icon} color={this.props.color} />
        }
        else{
            return this.props.content
        }
    }

    render() {


        return (


            <CardIcon>
                <CardButton
                    type={this.props.type}
                    onClick={e => this.botaoSelecionado(e)}
                    id={this.props.id}
                >
                    {this.showCondition()}
                </CardButton>
            </CardIcon>

        )
    }

}