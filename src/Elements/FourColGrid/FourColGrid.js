import React from "react";
import "./FourColGrid.css";

const FourColGrid = props => {
    const renderElements = () => {
        const gridElements = props.children.map((element, i) => {
            return (
                <div key={i}> {element} </div>
            );
        });
        return gridElements;
    };

    return (
        <div className="grid">
            {props.header && !props.loading ? <h1>{props.header}</h1> : null}
            <div className="grid-content">{renderElements()}</div>
        </div>
    );
};

export default FourColGrid;
