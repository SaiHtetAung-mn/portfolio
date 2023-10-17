import React from "react";

export default ({ children, className="", style={} }) => {
    return (
        <div className={`${className} container`} style={style}>
            { children }
        </div>
    )
}