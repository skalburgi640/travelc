import React from 'react';
import { Grid, Button, Paper, ClickAwayListener, Icon, makeStyles } from '@material-ui/core';
import Months from './Months';
import Days from './Days';
import ButtonControl from '../../common/ButtonControl';

const useStyles = makeStyles(() => ({
    tagBorder: {
        border: '1px solid #0000ff3b'
    },
    paperCont: {
        height: '32vh'
    },
    addBtn: {
        padding: '13px'
    }
}));

const CustomDatePicker = ({ selectedDate, onDateChange }) => {
    const { year, month, day, week } = selectedDate;
    const [open, setOpen] = React.useState(false);
    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };
    const classes = useStyles();
    return (
        <div>
            <Grid container justify="center">
                <ClickAwayListener onClickAway={handleTooltipClose}>
                    <div>
                        <Grid>
                            Repeat On
                        </Grid>
                        <div >
                            <Button
                                variant="contained"
                                color="default"
                                endIcon={<Icon className="fa fa-plus" />}
                                onClick={handleTooltipOpen}
                            />
                            {open ? (
                                <Grid container className={classes.tagBorder} alignItems="flex-end" direction="column">
                                    <Grid container spacing={0}>
                                        <Grid item xs={4}>
                                            <Paper className={classes.paperCont}>
                                                <Months month={month} onDateChange={onDateChange} />
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Paper className={classes.paperCont}>
                                                <Days onDateChange={onDateChange} selectedDate={selectedDate} day={day} />
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                    <Grid className={classes.addBtn} justify="flex-end" alignItems="flex-end">
                                        <ButtonControl color="primary" caption="Add" size="small" />
                                    </Grid>
                                </Grid>

                            ) : null}
                        </div>
                    </div>
                </ClickAwayListener>
            </Grid>
        </div>
    );
}

export default CustomDatePicker;