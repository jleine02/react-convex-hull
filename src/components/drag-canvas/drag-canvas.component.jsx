import * as React from 'react';
import {useContext} from "react";
import {
    VictoryCursorContainer,
    VictoryGroup,
    VictoryScatter
} from "victory";

import {PlotContext} from "../../contexts/plot.context";

const DragCanvas = () => {
    const {plotPoints} = useContext(PlotContext);

    return (
        <div className='canvas-container'>
            <VictoryGroup
                color="blue"
                padding={20}
                events={[{
                    childName: 'myScatter',
                    target: "",
                    eventHandlers: {
                        onClick: () => {

                        }
                    }
                }]}
            >
                <VictoryScatter
                    name="myScatter"
                    domain={{x: [0, 100], y: [0, 100]}}
                    data={plotPoints}
                    containerComponent={
                        <VictoryCursorContainer
                            cursorLabel={({datum}) => `${Math.floor(datum.x)}, ${Math.floor(datum.y)}`}
                        />
                    }
                />
            </VictoryGroup>
        </div>
    );
};

export default DragCanvas;