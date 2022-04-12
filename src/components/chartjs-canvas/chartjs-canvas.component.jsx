import * as React from 'react';
import {useContext} from "react";

import {PlotContext} from "../../contexts/plot.context";

import {
    CartesianGrid, ResponsiveContainer,
    Line,
    LineChart,
    Scatter,
    ScatterChart,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

const ChartJSCanvas = () => {
    const {plotPoints, hullPoints} = useContext(PlotContext);
    return (
        <div className="canvas-container">
            <ResponsiveContainer width="100%" height={500}>
            <ScatterChart
                // width={window.outerWidth * .95}
                // height={window.outerHeight * .6}
                margin={{
                    top: 30,
                    right: 30,
                    bottom: 30,
                    left: 30,
                }}>
                <CartesianGrid horizontal={false} vertical={false}/>
                <XAxis type="number" dataKey="x" hide={true}/>
                <YAxis type="number" dataKey="y" hide={true}/>
                <Tooltip/>
                <Scatter name="points" data={plotPoints} fill="blue"/>
                <Scatter data={hullPoints} line={{stroke: 'red', strokeWidth: 2}} isAnimationActive={true} />
            </ScatterChart>

            </ResponsiveContainer>
        </div>
    )
};

export default ChartJSCanvas;