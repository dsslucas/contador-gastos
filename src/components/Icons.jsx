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


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import React from "react";


export default props => {

    return (
        <Container>

            <CardOptionsItem>
                <CardIcon>
                    <FontAwesomeIcon icon={props.icon} color={props.color}/>
                </CardIcon>

            </CardOptionsItem>
        </Container>
    )
}