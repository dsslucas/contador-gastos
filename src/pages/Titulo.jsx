import React from "react";
import { CardHeader, CardHeading, CardWrapper, CardLink } from "../StyledComponents";

export default props => {
    return (
        <CardWrapper>
            <CardHeader>
                <CardHeading>{props.title}</CardHeading>
                <CardHeading>{props.content}</CardHeading>
                <CardLink href="https://dsslucas.github.io" target={"_blank"}>Desenvolvido por Lucas Souza</CardLink>
            </CardHeader>



        </CardWrapper>

    )
}