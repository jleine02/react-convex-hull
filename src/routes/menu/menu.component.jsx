import {Fragment, useContext, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {PlotContext} from "../../contexts/plot.context";

import {
    Button,
    Slider,
} from "@mui/material";
import {Box} from "@material-ui/core";


const DEFAULT_FORM_FIELDS = {
    numberOfPoints: 13,
};

const Menu = () => {
    const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS);
    const {numberOfPoints} = formFields;
    const {
        hullPoints,
        plotPoints,
        addPoint,
        generatePoints,
        addHullPoints,
    } = useContext(PlotContext);
    let newHullPoints;

    const generateNewPoints = () => generatePoints(numberOfPoints);
    const addNewPoint = () => addPoint();
    const addNewHullPoints = () => addHullPoints(newHullPoints);

    const handleSliderChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleNewPoint = (event) => {
        const {name, value} = event.target;
        const newValue = parseInt(value) + 1;
        setFormFields({...formFields, [name]: newValue});
        addNewPoint();
    }

    const handleConvexHullSubmit = async (event) => {
        try {
            const response = await fetch("http://localhost:8000/api/submit-data", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(plotPoints),
            });
            newHullPoints = await response.json();
            addNewHullPoints(newHullPoints);
        } catch(error) {
            // alert('Error communicating with api');
            console.error(error);
        }
    }

    return (
        <Fragment>
            <div className="menu-container">
                <h1>SELECT NUMBER OF POINTS FOR NEW PLOT</h1>
                <Slider
                    name={"numberOfPoints"}
                    defaultValue={13}
                    value={numberOfPoints}
                    onChange={handleSliderChange}
                    aria-label="Default"
                    valueLabelDisplay="on"
                    min={3}
                    max={500}
                />
                <Box display="flex" justifyContent="space-between">
                    <Button variant={"contained"}
                            onClick={generateNewPoints}>
                        GENERATE NEW SET OF POINTS
                    </Button>
                    <Button
                        variant={"contained"}
                        onClick={handleNewPoint}
                        name={"numberOfPoints"}
                        value={numberOfPoints}>
                        ADD RANDOM POINT
                    </Button>
                </Box>
                <br/>
                <Button
                    variant={"contained"}
                    onClick={handleConvexHullSubmit}>
                    GENERATE NEW CONVEX HULL
                </Button>
            </div>
            <Outlet/>
        </Fragment>
    )
        ;
};

export default Menu;