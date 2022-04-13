import {createContext, useReducer} from 'react';

import {createAction} from "../utils/reducer/reducer.utils";

import exampleData from "../example-data";


const getPoint = (isForNewPlot) => {
    let marginOffset;
    if (isForNewPlot) {
        marginOffset = 10;
    } else {
        marginOffset = 0;
    }

    let max = 101 - marginOffset;
    let min = 0 + marginOffset;

    const x = Math.floor(Math.random() * (max - min) + marginOffset);
    const y = Math.floor(Math.random() * (max - min) + marginOffset);

    return {
        "x": x,
        "y": y,
    };
};

const addPlotPoint = (plotPoints, isForNewPlot) => {
    while (true) {
        const pointToAdd = getPoint(isForNewPlot);
        const pointAtXYExists = plotPoints.find(
        (plotPoint) => plotPoint.x === pointToAdd.x
            && plotPoint.y === pointToAdd.y);

        if (!pointAtXYExists) {
            return [...plotPoints, {...pointToAdd}];
        } else {
            console.log("EXISTING POINT AT THOSE COORDS ALREADY EXISTS")
        }
    }
};

const resetHullPoints = (hullPoints) => {
    hullPoints = [];
    return [...hullPoints];
}

const addNewHullPoints = (hullPoints, newHullPoints) => {
    hullPoints = [];
    return [...hullPoints, ...newHullPoints];
}

const generatePlotPoints = (plotPoints, numberOfPoints) => {
    plotPoints = [];
    for (let i=0; i < numberOfPoints; i++) {
        plotPoints = addPlotPoint(plotPoints, true);
    };
    plotPoints.sort((point1, point2) => (point1.x > point2.x) ? 1 : -1);
    return [...plotPoints];
};


const PLOT_ACTION_TYPES = {
    SET_PLOT_POINTS: 'SET_PLOT_POINTS',
    SET_HULL_POINTS: 'SET_HULL_POINTS',
}

const INITIAL_STATE = {
    plotPoints: exampleData,
    hullPoints: [],
}

const plotReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case PLOT_ACTION_TYPES.SET_PLOT_POINTS:
            return {
                ...state,
                ...payload,
            };
        case PLOT_ACTION_TYPES.SET_HULL_POINTS:
            return {
                ...state,
                ...payload,
            }
        default:
            throw new Error(`Unhandled type ${type} in plotReducer`);
    }
};

export const PlotContext = createContext({
    plotPoints: exampleData,
    hullPoints: [],
    generatePoints: () => {},
    addPoint: () => {},
    addHullPoints: () => {},
    resetHullPoints: () => {},
});

export const PlotProvider = ({children}) => {
    const [{plotPoints, hullPoints}, dispatch] =
        useReducer(plotReducer, INITIAL_STATE);

    const updatePlotPointsReducer = (plotPoints) => {
        const payload = {
            plotPoints
        };

        dispatch(createAction(PLOT_ACTION_TYPES.SET_PLOT_POINTS, payload));
    };

    const updateHullPointsReducer = (hullPoints) => {
        const payload = {
            hullPoints
        };

        dispatch(createAction(PLOT_ACTION_TYPES.SET_HULL_POINTS, payload));
    };

    const generatePoints = (numberOfPoints) => {
        const newHullPoints = resetHullPoints(hullPoints);
        const newPlotPoints = generatePlotPoints(plotPoints, numberOfPoints);
        updatePlotPointsReducer(newPlotPoints);
        updateHullPointsReducer(newHullPoints);
    };

    const addPoint = () => {
        const newPlotPoints = addPlotPoint(plotPoints, false);
        updatePlotPointsReducer(newPlotPoints);
    }

    const addHullPoints = (freshHullPoints) => {
        const newHullPoints = addNewHullPoints(hullPoints, freshHullPoints);
        updateHullPointsReducer(newHullPoints);
    }

    const value = {
        plotPoints,
        hullPoints,
        generatePoints,
        addPoint,
        addHullPoints,
        resetHullPoints,
    };

    return <PlotContext.Provider
        value={value}>{children}</PlotContext.Provider>;
};

