//Estilizações CSS via Styled Components
import {
    Container,
    CardIcon,
    CardOptionsItem,
    CardButton,
} from '../StyledComponents';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, {Component} from "react";

export class Icons extends Component {

    render(){
        return (
            <Container>
    
                <CardOptionsItem>
                    <CardIcon>
                        <CardButton type={this.props.type} onClick={() => console.log("Cliquei aqui")}>
                            <FontAwesomeIcon icon={this.props.icon} color={this.props.color} />
                        </CardButton>
    
                    </CardIcon>
    
                </CardOptionsItem>
            </Container>
        )
    }
   
}