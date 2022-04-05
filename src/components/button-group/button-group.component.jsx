import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const BasicButtonGroup = () => {
    return (
        <div>
            <ButtonGroup variant="contained"
                         aria-label="outlined primary button group">
                <Button>Brute Force</Button>
                <Button>GrahamScan</Button>
                <Button>Output Aware</Button>
            </ButtonGroup>
        </div>
    )
        ;
}

export default BasicButtonGroup;