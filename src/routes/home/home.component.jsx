import * as React from "react";
import {Outlet} from 'react-router-dom';

import Canvas from "../../components/canvas/canvas.component";
import RechartCanvas
    from "../../components/rechart-canvas/rechart-canvas.component";

const Home = () => {
    return (
        <div>
            <div>
                <h2>NAIVE</h2>
                <RechartCanvas/>
            </div>
            <div>
                <h2>GRAHAMSCAN</h2>
                <RechartCanvas/>
            </div>
            <div>
                <h2>OUTPUT AWARE</h2>
                <RechartCanvas/>
            </div>
            <Outlet/>
        </div>
    );
};

export default Home;