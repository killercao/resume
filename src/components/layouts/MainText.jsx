import React from "react";
import styled from "styled-components";

const HeaderText = styled.h3`
    white-space: nowrap;
`;

export default (props: any) => (
    <HeaderText className="heading" style={props.style}>
        {props.children}
    </HeaderText>
);
