import * as React from "react";
import {Outlet} from 'react-router-dom';

import Canvas from "../../components/canvas/canvas.component";
import D3Scatter from "../../components/d3Scatter/d3Scatter.component";
import ChartJSCanvas
    from "../../components/chartjs-canvas/chartjs-canvas.component";

const Home = () => {
    return (
        <div>
            <div>
                <h2>NAIVE</h2>
                <ChartJSCanvas/>
            </div>
            <div>
                <h2>GRAHAMSCAN</h2>
                <ChartJSCanvas/>
            </div>
            <div>
                <h2>OUTPUT AWARE</h2>
                <ChartJSCanvas/>
            </div>
            <Outlet/>
        </div>
    );
};

export default Home;