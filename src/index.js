import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import App from './App';
import {PlotProvider} from "./contexts/plot.context";

import './index.css';

const rootElement = document.getElementById('root');

render(
    <React.StrictMode>
        <BrowserRouter>
            <PlotProvider>
                <App/>
            </PlotProvider>
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);
