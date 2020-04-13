import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { Grid, TextField } from '@material-ui/core';
import YearPicker from "react-year-picker";
import './style.css';
import CustomDatePicker from './CustomDatePicker';
import moment from 'moment';

class DatePic extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDate: {
				year: moment().year(),
				month: moment().month()
			}
		}
	}
	handleAdd = ({ year, month, day, week }) => {
		this.setState({
			selectedDate: {
				year,
				month,
				day,
				week
			}
		});
	}
	handleDateChange = (data, value) => {
		debugger
		const { selectedDate } = this.state;
		if (value === "month") {
			selectedDate.month = data;
		} else if (value === "day") {
			selectedDate.day = data;
		} else if (value === "week") {
			selectedDate.week = data;
		} else {
			selectedDate.year = data;
		}
		this.setState({ selectedDate });
	}
	render() {
		const { selectedDate } = this.state;
		return (
			<Container maxWidth="md" className="typrography-div">
				<Grid container direction="column"
					justify="space-evenly"
					alignItems="center" spacing={3}
					style={{ height: '50%' }}
				>
					<Grid>
						<strong> Select Yearly</strong>
					</Grid>
					<Grid container alignItems="flex-end" justify="space-evenly" spacing={5}>
						<Grid className="years">
							Repeat
							<YearPicker onChange={this.handleDateChange} />
						</Grid>
						<Grid>
							<TextField
								id="outlined-number"
								label="Every Year"
								type="number"
								InputLabelProps={{
									shrink: true,
								}}
								variant="outlined"
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid justify="end" xs={12} alignItems="center">
					<CustomDatePicker onDateChange={this.handleDateChange} onAdd={this.handleAdd} selectedDate={selectedDate} />
				</Grid>
			</Container >
		);
	}
}

export default DatePic;