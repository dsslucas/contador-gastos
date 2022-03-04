//Estilizações CSS via Styled Components
import {
    Container,
    Row,
    Column,
    CardFieldset,
    CardInput,
    CardButton,
    CardOptions,
    CardOptionsNote,
    CardLabel,
    CardOptionsItem,
    CardIcon,
    GlobalStyle
} from '../StyledComponents';

import React from "react";

import Card from '../components/Card';

import Icon from '../components/Icon';

export default props => {
    return (

        <Container>
            <GlobalStyle />
            <Row>
                <h1>{props.title}</h1>
                <span>{props.content}</span>
            </Row>

            <Row>
                <CardFieldset>
                    <CardInput placeholder="Valor" type="number" required />
                </CardFieldset>

                <CardFieldset>
                    <CardOptionsNote>Or sign up with</CardOptionsNote>

                    <CardOptions>
                        <CardOptionsItem>
                            <CardIcon className="fa fa-google" big />
                        </CardOptionsItem>

                        <CardOptionsItem>
                            <CardIcon className="fa fa-twitter" big />
                        </CardOptionsItem>

                        <CardOptionsItem>
                            <CardIcon className="fa fa-facebook" big />
                        </CardOptionsItem>
                    </CardOptions>
                </CardFieldset>

                <CardFieldset>
                    <CardButton type="button">Enviar</CardButton>
                </CardFieldset>
            </Row>
        </Container>

    )
}