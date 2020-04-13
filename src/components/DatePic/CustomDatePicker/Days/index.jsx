import React, { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ButtonControl from '../../../common/ButtonControl';
import './style.css';
import NumberOfWeek from '../NumberOfWeek';
import moment from 'moment';

const useStyles = makeStyles(() => ({
    dayWeek: {
        display: 'flex',
        padding: '12px'
    }
}));
const Days = ({ selectedDate, onDateChange }) => {
    const [isDaySelect, userChoice] = useState(true);
    const month = selectedDate && Number(selectedDate.month);
    const numberOfDays = moment(`${selectedDate.year}-${month}`, "YYYY-MM").daysInMonth()
    const handleSelect = () => {
        userChoice(!isDaySelect);
    }
    const handleDayClick = (day) => {
        onDateChange(day, "day");
    }
    let days = [];
    for (let i = 1; i <= numberOfDays; i++) {
        const btn = <ButtonControl data={i} onClickHandle={handleDayClick} cName="btn-days" caption={i} size="small" />
        days = [...days, btn];
    }
    const classes = useStyles();
    return (
        <Grid direction="column" alignItems="flex-end" justify="flex-end" spacing={8} >
            <Grid className={classes.dayWeek} justify="flex-end" alignItems="flex-end">
                <ButtonControl onClickHandle={handleSelect} color="primary" caption="Days" size="small" />
                <ButtonControl onClickHandle={handleSelect} variant="outlined" color="secondary" caption="Week" size="small" />
            </Grid>
            <Grid>
                {isDaySelect ?
                    days
                    :
                    <NumberOfWeek />
                }
            </Grid>
        </Grid>
    )
}
export default Days;