//Estilizações CSS via Styled Components
import {
    Container,
    CardIcon,
    CardOptionsItem,
    CardButton,
} from '../StyledComponents';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

export default props => {

    return (
        <Container>

            <CardOptionsItem>
                <CardIcon>
                    <CardButton type="submit">
                        <FontAwesomeIcon icon={props.icon} color={props.color} />
                    </CardButton>

                </CardIcon>

            </CardOptionsItem>
        </Container>
    )
}