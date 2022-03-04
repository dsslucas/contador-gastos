//Estilizações CSS via Styled Components
import {
    Container,
    Row,
    Column,
    GlobalStyle,
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardText,
    CardIcon,
    CardFieldset,
    CardInput,
    CardOptionsItem,
    CardOptions,
    CardOptionsNote,
    CardButton,
    CardLink,
    CartBackground
} from '../StyledComponents';

import React from "react";


export default props => {

    return (
        <CardWrapper
            columns={props.columns ? props.columns : '250px'}
            color={props.color}
        >
            <CardHeader>
                <CardHeading>{props.title}</CardHeading>
            </CardHeader>

            <CardBody color={props.color}>
                <CardText>R$ [BLABLA]</CardText>
            </CardBody>
        </CardWrapper>


    )
}