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

import Icons from '../components/Icons';

import { faBeer, faBurger } from "@fortawesome/free-solid-svg-icons";
import { faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faCab } from '@fortawesome/free-solid-svg-icons';

export default props => {
    return (

        <Container>
            <GlobalStyle />
            <Row>
                <h2>{props.title}</h2>
                <span>{props.content}</span>
            </Row>

            <Row>
                <CardFieldset>
                    <CardInput placeholder="Digite o valor" type="number" required />
                </CardFieldset>

                <CardFieldset>
                    <CardOptionsNote>Categoria</CardOptionsNote>
                    <CardOptions>
                        <Icons icon={faBurger} color="red"/>
                        <Icons icon={faBeer} color="yellow"/>
                        <Icons icon={faBagShopping} color="orange"/>
                        <Icons icon={faCab} color="#7FB3D5"/>
                    </CardOptions>
                </CardFieldset>
            </Row>

        </Container>

    )
}