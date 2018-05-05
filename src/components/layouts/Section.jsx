import React from "react";

export default (props: any) => (
    <div>
        <h2>{props.title}</h2>
        <div>{props.children}</div>
    </div>
);
