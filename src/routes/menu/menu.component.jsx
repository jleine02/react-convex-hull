import {Fragment, useContext, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {PlotContext} from "../../contexts/plot.context";

import BasicButtonGroup
    from "../../components/button-group/button-group.component";
import {Button, Slider} from "@mui/material";

const DEFAULT_FORM_FIELDS = {
    algorithm: 'NAIVE',
    numberOfPoints: 10,
};

const Menu = () => {
    const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS);
    const {algorithm, numberOfPoints} = formFields;
    const {generatePoints} = useContext(PlotContext);

    const generateNewPoints = () => generatePoints(numberOfPoints);

    const handleSliderChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <Fragment>
            <div className="menu-container">
                <h1>SELECT AN ALGORITHM</h1>
                <BasicButtonGroup
                    name="algorithm"
                    defaultValue={'NAIVE'}
                />
                <h1>SELECT NUMBER OF POINTS</h1>
                <Slider
                    name={"numberOfPoints"}
                    defaultValue={10}
                    value={numberOfPoints}
                    onChange={handleSliderChange}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                />
                <Button variant={"contained"} onClick={generateNewPoints}>
                    GENERATE NEW PLOT
                </Button>
            </div>
            <Outlet/>
        </Fragment>
    )
        ;
};

export default Menu;