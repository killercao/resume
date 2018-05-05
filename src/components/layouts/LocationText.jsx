import React from "react";
import styled from "styled-components";

const Location = styled.h3`
  display: none;
  grid-area: location;

  @media (min-width: 600px) {
    display: block;
    text-align: right;
  }
`;
export default function LocationText(props) {
    return <Location style={props.style}>{props.children}</Location>;
}
