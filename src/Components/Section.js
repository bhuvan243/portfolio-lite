import React from "react";

const Section = (props) => (
    <div>
        <h2>{props.title}</h2>
        <div>{props.content}</div>
        <hr/>
    </div>
)

export default Section