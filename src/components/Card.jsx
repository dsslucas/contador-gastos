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
    function exibeDados(){
        
        //Se for undefined, média 0 ou o título for 'Salário'
        if(Number.isNaN(props.media) || props.media == 0 || props.title == 'Receitas'){
            return ''
        }
        else{
            return `(${props.media}%)`
        }
        
    }

    return (
        <CardWrapper color={props.color}>
            <CardHeader>
                <CardHeading>{props.title}</CardHeading>
            </CardHeader>

            <CardBody color={props.color}>
                <CardText>R$ {props.value} {exibeDados()}</CardText>
                <CardText></CardText>
            </CardBody>
        </CardWrapper>


    )
}