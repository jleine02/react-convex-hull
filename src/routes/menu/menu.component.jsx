import {Fragment, useContext, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {PlotContext} from "../../contexts/plot.context";

import {
    Button,
    Slider,
} from "@mui/material";
import {Box} from "@material-ui/core";


const DEFAULT_FORM_FIELDS = {
    numberOfPoints: 10,
};

const Menu = () => {
    const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS);
    const {numberOfPoints} = formFields;
    const {addPoint, generatePoints, showConvexHull} = useContext(PlotContext);

    const generateNewPoints = () => generatePoints(numberOfPoints);
    const addNewPoint = () => addPoint();
    const displayHull = () => showConvexHull();

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

    return (
        <Fragment>
            <div className="menu-container">
                <h1>SELECT NUMBER OF POINTS FOR NEW PLOT</h1>
                <Slider
                    name={"numberOfPoints"}
                    defaultValue={10}
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
                    onClick={displayHull}>
                    GENERATE NEW CONVEX HULL
                </Button>
            </div>
            <Outlet/>
        </Fragment>
    )
        ;
};

export default Menu;