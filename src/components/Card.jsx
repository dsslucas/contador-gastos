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
                <CardText>R$ {props.value}</CardText>
            </CardBody>
        </CardWrapper>


    )
}