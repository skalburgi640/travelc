import React from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonControl from '../../../common/ButtonControl';
import { MONTHS } from '../../../../util/constants';
import './style.css';

const Months = ({ onDateChange }) => {
    const month = MONTHS;
    const handleClick = (data) => {
        onDateChange(data.id, "month")
    }
    return (
        <Grid justify="start" spacing={3} >
            {month.map((item) => (
                <ButtonControl onClickHandle={handleClick} cName="btn-week" data={item} caption={item.month} size="small" />
            ))}
        </Grid>
    )
}

export default Months;