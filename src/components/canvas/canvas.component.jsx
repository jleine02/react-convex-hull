import * as React from 'react';
// import ResponsiveXYFrame from "semiotic/lib/ResponsiveXYFrame"
import {ResponsiveXYFrame} from "semiotic";

import {PlotContext} from "../../contexts/plot.context";

import './canvas.styles.css';

import {useContext} from "react";


const Canvas = () => {
    const {plotPoints} = useContext(PlotContext);
    console.log(plotPoints);
    const frameProps = {
        points: plotPoints,
        // size: [window.innerWidth, window.innerHeight],
        margin: 20,
        responsiveWidth: true,
        responsiveHeight: true,
        xExtent: [0, 100],
        yExtent: [0, 100],
        xAccessor: "x",
        yAccessor: "y",
        pointStyle: d => {
            return {
                r: 5,
                fill: "blue"
            }
        }
    };

    return (
        <div className="canvas-container">
            <ResponsiveXYFrame {...frameProps} />
        </div>

    );
};

export default Canvas;