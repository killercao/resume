import React from "react";
import styled from "styled-components";

const Date = styled.h3`
    grid-area: date;
    white-space: nowrap;

    @media (min-width: 600px) {
        text-align: right;
    }
`;

export default function DateText(props) {
    return <Date style={props.style}>{props.children}</Date>;
}
