import React from "react";
import { CardHeader, CardHeading, CardWrapper } from "../StyledComponents";

export default props => {
    return (
        <CardWrapper>
            <CardHeader><h1>{props.title}</h1></CardHeader>
            <CardHeading>{props.content}</CardHeading>
        </CardWrapper>

    )
}