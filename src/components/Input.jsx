import React from "react";

export default props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <span>{props.content}</span>
        </div>
    )
}