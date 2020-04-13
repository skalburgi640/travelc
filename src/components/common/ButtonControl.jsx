import React from 'react';
import { Button } from '@material-ui/core';

const ButtonControl = ({ caption, onClickHandle, size, color, cName, variant, data }) => {
    return (
        <Button
            key={caption}
            className={cName}
            variant={variant || "contained"}
            size={size}
            color={color}
            onClick={() => onClickHandle(data)}
        >
            {caption}
        </Button>
    )
}

export default ButtonControl;