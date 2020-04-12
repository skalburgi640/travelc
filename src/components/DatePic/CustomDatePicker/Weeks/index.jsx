import React from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonControl from '../../../common/ButtonControl';
import { WEEKS_NAME } from '../../../../util/constants';
import './style.css';

const Weeks = () => {
    const weekList = WEEKS_NAME;
    const handleClick = (caption) => {
        alert(caption)
    }
    return (
        <Grid justify="start" spacing={3} >
            {weekList.map((item) => (
                <ButtonControl onClickHandle={handleClick} cName="btn-week" caption={item} size="small" />
            ))}
        </Grid>
    )
}

export default Weeks;