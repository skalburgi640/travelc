import React from 'react';
import { Grid, Button, Paper, ClickAwayListener, Icon, makeStyles } from '@material-ui/core';
import Weeks from './Weeks';
import Days from './Days';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '22vw',
        height: '100%',
        backgroundColor: "#fff",
        float: "left"
    },
    days: {
        float: "left",
        marginLeft: 41
    },
    tagBorder: {
        border: '1px solid blue'
    },
    paperCont: {
        height: '32vh'
    }
}));

const CustomDatePicker = () => {
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
                                <Grid className={classes.tagBorder} container spacing={0}>
                                    <Grid item xs={4}>
                                        <Paper className={classes.paperCont}>
                                            <Weeks />
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Paper className={classes.paperCont}>
                                            <Days />
                                        </Paper>
                                    </Grid>
                                </Grid>

                            ) : null}
                        </div>
                    </div>
                </ClickAwayListener>
            </Grid>
        </div >
    );
}

export default CustomDatePicker;