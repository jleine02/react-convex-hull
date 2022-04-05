import {Slider} from "@mui/material";
import {useState} from "react";

const SliderItem = () => {
    const [value, setValue] = useState(50);
    const changeValue = (event, value) => {
        console.log(value);
        setValue(value);
    };
    return (
        <div>
            <Slider
                className="number-of-points-slider"
                name='points-slider'
                // defaultValue={50}
                value={value}
                onChange={changeValue}
                aria-label="Default"
                valueLabelDisplay="auto"
            />
        </div>
    );
};

export default SliderItem;