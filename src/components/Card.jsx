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
    CardLink
} from '../StyledComponents';

import React from "react";


export default props => {

    return (
        <CardWrapper columns={props.columns ? props.columns : '150px'}>
            <CardHeader>
                <CardHeading>{props.title}</CardHeading>
            </CardHeader>

            <CardBody>
                <CardText>Valor</CardText>
            </CardBody>
        </CardWrapper>
    )
}