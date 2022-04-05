import {Outlet} from 'react-router-dom';
import Canvas from "../../components/canvas/canvas.component";
import * as React from "react";

const Home = () => {
    return (
        <div>
            <br/>
            <Canvas/>
            <Outlet/>
        </div>
    )
        ;
};

export default Home;