import React from "react";
import "./LoadMoreBtn.css";

const LoadMoreBtn = props => {
    return (
        <div className="loadbtn">
            <div className="loadmorebtn" onClick={props.onClick}>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default LoadMoreBtn;
