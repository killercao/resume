import React from "react";

export default (props: any) => (
    <h3 className="subheading" style={props.style}>
        {props.children}
    </h3>
);
