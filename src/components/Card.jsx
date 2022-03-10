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

    return (
        <CardWrapper color={props.color}>
            <CardHeader>
                <CardHeading>{props.title}</CardHeading>
            </CardHeader>

            <CardBody color={props.color}>
                <CardText>R$ {props.value} {props.title == 'Salário' ? '' : '(50%)'}</CardText>
                <CardText></CardText>
            </CardBody>
        </CardWrapper>


    )
}