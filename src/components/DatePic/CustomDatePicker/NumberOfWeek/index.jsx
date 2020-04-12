import React from 'react';
import ButtonControl from '../../../common/ButtonControl';
import { WEEK_DAYS } from '../../../../util/constants';
import { Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
    weeksnum: {
        height: "15vh"
    }
}))

const NumberOfWeek = () => {
    const classes = useStyle();
    const weekDays = WEEK_DAYS;
    let numberOfWeeks = [];
    for (let i = 1; i <= 4; i++) {
        const btn = <ButtonControl size="medium" caption={`${i}st week`} />
        numberOfWeeks = [...numberOfWeeks, btn];
    }
    const preparedData = weekDays.map(ele => {
        return (
            <ButtonControl caption={ele} size="medium" />
        )
    })
    return (
        <Grid container  className={classes.weeksnum} justify="space-between" direction="column" spacing={1} >
            <Grid container alignItems="center" justify="space-between">
                {numberOfWeeks}
            </Grid>
            <Grid container alignItems="center" justify="space-between">
                {preparedData}
            </Grid>
        </Grid>
    )
}
export default NumberOfWeek;