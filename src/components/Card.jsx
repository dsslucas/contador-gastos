//Estilizações CSS via Styled Components
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardText,

} from '../StyledComponents';

import React from "react";

export default props => {

    //Exibe o percentual sobre algumas condições.
    function exibeDados() {

        var string = (props.value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

        //Se for undefined, média 0 ou o título for 'Receita'
        if (Number.isNaN(props.media) || props.media == 0 || props.title == 'Receita') {
            return `${string}`
        }
        else {

            return `${string} (${props.media}%)`
        }
    }

    return (
        <CardWrapper color={props.color}>
            <CardHeader>
                <CardHeading>{props.title}</CardHeading>
            </CardHeader>

            <CardBody color={props.color}>
                <CardText>{exibeDados()}</CardText>
            </CardBody>
        </CardWrapper>


    )
}