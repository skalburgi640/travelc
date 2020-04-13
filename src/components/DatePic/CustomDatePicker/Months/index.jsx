import React from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonControl from '../../../common/ButtonControl';
import { MONTHS } from '../../../../util/constants';
import './style.css';

const Months = () => {
    const month = MONTHS;
    const handleClick = (caption) => {
        alert(caption)
    }
    return (
        <Grid justify="start" spacing={3} >
            {month.map((item) => (
                <ButtonControl onClickHandle={handleClick} cName="btn-week" caption={item} size="small" />
            ))}
        </Grid>
    )
}

export default Months;