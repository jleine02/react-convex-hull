import * as React from 'react';
// import ResponsiveXYFrame from "semiotic/lib/ResponsiveXYFrame"
import {ResponsiveXYFrame} from "semiotic";

import {PlotContext} from "../../contexts/plot.context";

import './canvas.styles.css';

import {useContext} from "react";

const Canvas = () => {
    const {plotPoints, hullPoints} = useContext(PlotContext);
    console.log("plotPoints: ", plotPoints);
    console.log("plotLines: ", hullPoints);
    const frameProps = {
        points: plotPoints,
        // size: [window.outerWidth, window.outerHeight],
        margin: 5,
        responsiveWidth: true,
        // responsiveHeight: true,
        xExtent: [0, 100],
        yExtent: [0, 100],
        xAccessor: "x",
        yAccessor: "y",
        pointStyle: d => {
            return {
                r: 5,
                fill: "blue"
            }
        },
        hoverAnnotation: true,
        tooltipContent: d => {
            return (
                <p>({d.x}, {d.y})</p>
            )
        },
        lines: {coordinates: hullPoints}
        // axes: [{orient: "left"}, {orient: "bottom"}]
    };

    return (
        <div className="canvas-container">
            <ResponsiveXYFrame {...frameProps} />
        </div>

    );
};

export default Canvas;