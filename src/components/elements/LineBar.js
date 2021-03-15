import { useState } from 'react';
import { makeStyles, Button, Grid, Paper, Typography } from '@material-ui/core'
import { Line } from 'react-chartjs-2'
import DateRangeIcon from '@material-ui/icons/DateRange';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';
import 'bootstrap-daterangepicker/daterangepicker.css';
// styles
const styles = makeStyles({
  root: {
    backgroundColor: "white",
    marginTop: "20px"
  }
})
const LineBar = () => {
  const classes = styles()
  // randomly generated colors just for fun :p
  function RandomColorGenerator() {
    return Math.floor(Math.random() * Math.floor(256));
  }
  // dataset for linechart
  const dataSet = {
    labels: ["JAN20", "FEB20", "MAR20", "APR20", "MAY20", "JUNE20", "JULY20", "AUG20"],
    datasets: [
      {
        label: "Attribute1",
        data: [233, 144, 123, 44, 33, 123, 144, 244],
        borderColor: [`rgba(${ RandomColorGenerator() },${ RandomColorGenerator() },${ RandomColorGenerator() }, 0.7)`],
        backgroundColor: [`rgba(${ RandomColorGenerator() }, ${ RandomColorGenerator() }, ${ RandomColorGenerator() }, 0)`],
        pointBackgroundColor: [`rgba(${ RandomColorGenerator() }, ${ RandomColorGenerator() }, ${ RandomColorGenerator() }, 0.8)`],
        pointBorderColor: [`rgba(${ RandomColorGenerator() }, ${ RandomColorGenerator() }, ${ RandomColorGenerator() }, 0.8)`],
      },
      {
        label: "Attribute2",
        data: [144, 123, 144, 33, 123, -1, 144, 22],
        borderColor: [`rgba(${ RandomColorGenerator() },${ RandomColorGenerator() },${ RandomColorGenerator() }, 0.7)`],
        backgroundColor: [`rgba(${ RandomColorGenerator() }, ${ RandomColorGenerator() }, ${ RandomColorGenerator() }, 0)`],
        pointBackgroundColor: [`rgba(${ RandomColorGenerator() }, ${ RandomColorGenerator() }, ${ RandomColorGenerator() }, 0.8)`],
        pointBorderColor: [`rgba(${ RandomColorGenerator() }, ${ RandomColorGenerator() }, ${ RandomColorGenerator() }, 0.8)`],
      }
    ]
  }
  // state for date record
  const [date, setDate] = useState({ startDate: "Saturday, 02 13,2021", endDate: "Sunday, 03 14,2021" })
  // event handler for date change
  function handleCallback(start, end) {
    setDate({ startDate: start.format('dddd, MM DD,YYYY'), endDate: end.format('dddd, MM DD,YYYY') })
  }
  return (
    <Paper elevation={1}>
      <Grid container className={classes.root} justify="flex-end" alignContent="flex-end">
        {/* headings and subheading section for line chart */}
        <Grid item sm style={{ padding: "20px" }}>
          <Typography variant="subtitle2" color="textSecondary">
            Analytics
          </Typography>
          <Typography variant="h6" display="inline" color="textSecondary">
            245/500
          </Typography>
          <Typography variant="caption" display="inline" style={{ borderRight: "1px lightgrey solid", padding: "0 5px" }}>
            Attribute 1
            </Typography>
          <Typography variant="h6" color="textSecondary" display="inline" style={{ padding: "0 5px" }}>
            120
          </Typography>
          <Typography variant="caption" display="inline" style={{ borderRight: "1px lightgrey solid", padding: "0 5px" }}>
            Attribute 2
            </Typography>
          <Typography variant="h6" color="textSecondary" display="inline" style={{ padding: "0 5px" }}>
            125
          </Typography>
          <Typography variant="caption" display="inline" style={{ borderRight: "1px lightgrey solid", padding: "0 5px" }}>
            Attribute 3
            </Typography>
          <Typography variant="h6" color="textSecondary" display="inline" style={{ padding: "0 5px" }}>
            0
          </Typography>
          <Typography variant="caption" display="inline">
            Attribute 4
            </Typography>
        </Grid>
        <Grid item sm={4}>
          {/* date picker as shown in screenshot(ie. attachment with email assesment) */}
          <DateRangePicker
            onCallback={handleCallback}
            initialSettings={{
              ranges: {
                Today: [moment().toDate(), moment().toDate()],
                Yesterday: [
                  moment().subtract(1, 'days').toDate(),
                  moment().subtract(1, 'days').toDate(),
                ],
                'Last 7 Days': [
                  moment().subtract(6, 'days').toDate(),
                  moment().toDate(),
                ],
                'Last 30 Days': [
                  moment().subtract(29, 'days').toDate(),
                  moment().toDate(),
                ],
                'This Month': [
                  moment().startOf('month').toDate(),
                  moment().endOf('month').toDate(),
                ],
                'Last Month': [
                  moment().subtract(1, 'month').startOf('month').toDate(),
                  moment().subtract(1, 'month').endOf('month').toDate(),
                ],
              },
            }}>
            <Button variant="outlined">
              {`${ date.startDate } - ${ date.endDate }`}
              <DateRangeIcon />
            </Button>
          </DateRangePicker>
        </Grid>
        {/* line bar chart */}
        <Grid item md={12}>
          <Line data={dataSet} height={90} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default LineBar