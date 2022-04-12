import React, {useContext, useState} from "react";
import {useSpring, animated} from "react-spring";
import {scaleLinear} from "d3-scale";
import {extent} from "d3-array";
import AxisLeft from "../d3AxisLeft/d3AxisLeft.component";
import AxisBottom from "../d3AxisBottom/d3AxisBottom.component";
import {PlotContext} from "../../contexts/plot.context";


const D3Scatter = () => {
    const {plotPoints, hullPoints} = useContext(PlotContext);
    // const [data, setData] = useState(RandomData());
    const [open, toggle] = useState(false);
    const props = useSpring({
        from: {r: 0, fill: "blue"},
        to: {r: open ? 10 : 5, fill: open ? "purple" : "lightblue"}
    });

    const w = window.innerWidth,
        h = window.innerHeight,
        margin = {
            top: 30,
            bottom: 30,
            left: 30,
            right: 30
        };

    const width = w - margin.right - margin.left,
        height = h - margin.top - margin.bottom;
    console.log(w, "vs ", width, h, "vs ", height);
    const xScale = scaleLinear()
        .domain([0, 100])
        .range([margin.left, w - margin.right]);

    const yScale = scaleLinear()
        // .domain([0, 100])
        // .range([0, 100]);
        .domain([0, 100])
        .range([margin.bottom, h - margin.top]);

    function handleClick(event) {
        // setData(RandomData()
        if (open) {
            toggle(false);
        } else {
            toggle(true);
        }
    }

    const circles = plotPoints.map((d, i) => (
        <animated.circle
            key={i}
            r={props.r}
            cx={xScale(d.x)}
            cy={yScale(d.y)}
            style={{fill: props.fill}}
        />
    ));

    return (
        <div className='canvas-container'>
            <svg width={w*.9} height={h*.3}>
                <g transform={`translate(${20},${20})`}>
                    <AxisLeft yScale={yScale} width={height}/>
                    <AxisBottom xScale={xScale} height={width}/>
                    {circles}
                </g>
            </svg>
        </div>
    );
}

export default D3Scatter;