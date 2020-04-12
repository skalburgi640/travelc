import React, { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ButtonControl from '../../../common/ButtonControl';
import './style.css';
import NumberOfWeek from '../NumberOfWeek';

const useStyles = makeStyles(() => ({
    gridList: {
        width: '40vw',
    },
    dayWeek: {
        display: 'flex'
    }
}));
const Days = () => {
    const [isDaySelect, userChoice] = useState(true);
    const handleSelect = () => {
        userChoice(!isDaySelect);
    }
    let days = [];
    for (let i = 1; i <= 31; i++) {
        const btn = <ButtonControl cName="btn-days" caption={i} size="small" />
        days = [...days, btn];
    }
    const classes = useStyles();
    return (
        <Grid direction="column" alignItems="flex-end" justify="flex-end" spacing={8} >
            <Grid className={classes.dayWeek} justify="flex-end" alignItems="flex-end">
                <ButtonControl onClickHandle={handleSelect} color="primary" caption="Days" size="small" />
                <ButtonControl onClickHandle={handleSelect} variant="outlined" color="secondary" caption="Weeks" size="small" />
            </Grid>
            <Grid>
                {isDaySelect ?
                    days
                    :
                    <NumberOfWeek />
                }
            </Grid>
            <Grid className={classes.dayWeek} justify="flex-end" alignItems="flex-end">
                <ButtonControl color="primary" caption="Add" size="small" />
            </Grid>
        </Grid>
    )
}
export default Days;