import React from 'react';
import { Button } from '@material-ui/core';

const ButtonControl = ({ caption, onClickHandle, size, color, cName, variant }) => {
    return (
        <Button
            key={caption}
            className={cName}
            variant={variant || "contained"}
            size={size}
            color={color}
            onClick={() => onClickHandle(caption)}
        >
            {caption}
        </Button>
    )
}

export default ButtonControl;