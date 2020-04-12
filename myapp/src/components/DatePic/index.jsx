import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid, Icon, Button } from '@material-ui/core';
import YearPicker from "react-year-picker";
import './style.css';
import CustomDatePicker from './CustomDatePicker';

class DatePic extends Component {
	render() {
		return (
			<Container maxWidth="md" className="typrography-div">
				<Grid container direction="row"
					justify="space-evenly"
					alignItems="center" spacing={3}
					style={{ height: '50%' }}
				>
					<Grid>
						Select Yearly
						</Grid>
					<Grid>
						Repeat
							<YearPicker />
					</Grid>
					<Grid item spacing={2}>
						<Grid container justify="space-between" spacing={3}>
							<Grid>every</Grid>
							<Grid>
								<input type="number" />
							</Grid>
							<Grid>
								Year
								</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid justify="end" xs={12} alignItems="center">
					<CustomDatePicker />
				</Grid>
			</Container >
		);
	}
}

export default DatePic;