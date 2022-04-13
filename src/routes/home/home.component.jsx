import * as React from "react";
import {Outlet} from 'react-router-dom';

import Canvas from "../../components/canvas/canvas.component";
import RechartCanvas
    from "../../components/rechart-canvas/rechart-canvas.component";
import DenseTable from "../../components/mui-table/mui-table.component";

const Home = () => {
    return (
        <div>
            <div>
                <h2>POINTS:</h2>
                <RechartCanvas/>
            </div>
            <div>
                <br/>
                <DenseTable />
            </div>
            <Outlet/>
        </div>
    );
};

export default Home;