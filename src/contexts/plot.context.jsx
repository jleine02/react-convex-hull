import {createContext, useReducer} from 'react';

import {createAction} from "../utils/reducer/reducer.utils";

import exampleData from "../example-data";

const getPoint = () => {
    const x = Math.floor(Math.random() * (101) + 0);
    const y = Math.floor(Math.random() * (101) + 0);
    return {
        "x": x,
        "y": y,
    };
};

const addPlotPoint = (plotPoints, pointToAdd) => {
    const pointExists = plotPoints.find(
        (plotPoint) =>
            plotPoint.x === pointToAdd.x && plotPoint.y === pointToAdd.y
    );
    console.log(pointExists);
    if (pointExists) {
        addPlotPoint(plotPoints, getPoint());
    };

    return [...plotPoints, {...pointToAdd}];
};

const generatePlotPoints = (plotPoints, numberOfPoints) => {
    console.log(plotPoints);
    plotPoints = [];
    console.log(plotPoints);
    for (let i=0; i < numberOfPoints; i++) {
        plotPoints.push(getPoint());
    };
    console.log(plotPoints);
    return [...plotPoints];
};


// const movePlotPoint = (plotPoints, pointToAdd) => {
//     return [...plotPoints, {...pointToAdd}];
// };

// const deletePlotPoint = (plotPoints, pointToRemove) => {
//     plotPoints.filter((plotPoint) => plotPoint.id != pointToRemove.id);
// };

const PLOT_ACTION_TYPES = {
    SET_PLOT_POINTS: 'SET_PLOT_POINTS',
}

const INITIAL_STATE = {
    plotPoints: exampleData,
    plotLines: [],
}

const plotReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case PLOT_ACTION_TYPES.SET_PLOT_POINTS:
            return {
                ...state,
                ...payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in plotReducer`);
    }
};

export const PlotContext = createContext({
    plotPoints: exampleData,
    plotLines: [],
    generatePoints: () => {},
    addPoint: () => {},
});

export const PlotProvider = ({children}) => {
    const [{plotPoints, plotLines}, dispatch] =
        useReducer(plotReducer, INITIAL_STATE);

    const updatePlotPointsReducer = (plotPoints) => {
        const payload = {
            plotPoints
        };

        dispatch(createAction(PLOT_ACTION_TYPES.SET_PLOT_POINTS, payload));
    };

    const generatePoints = (numberOfPoints) => {
        const newPlotPoints = generatePlotPoints(plotPoints, numberOfPoints);
        updatePlotPointsReducer(newPlotPoints);
    };

    const addPoint = (pointToAdd) => {
        const newPlotPoints = addPlotPoint(plotPoints, pointToAdd);
        updatePlotPointsReducer(newPlotPoints);
    }

    const value = {
        // isNewPlot,
        plotPoints,
        plotLines,
        // algorithmSelected,
        generatePoints,
        addPoint,
    };

    return <PlotContext.Provider
        value={value}>{children}</PlotContext.Provider>;
};

