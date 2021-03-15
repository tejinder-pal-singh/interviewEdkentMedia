import { Grid, makeStyles, Typography, Paper } from '@material-ui/core'

// styles
const styles = makeStyles({
  card: {
    backgroundColor: "white",
    overflow: "hidden",
    position: "relative",
    padding: "5px"
  },
  bg: {
    backgroundColor: "#4aabff",
    opacity: 0.07,
    width: "190px",
    transform: "translate(-37%,-23%)",
    position: 'absolute',
    height: "170px",
    borderRadius: "50%"
  }
})

const Card = (props) => {
  const classes = styles()

  return (
    <Paper elevation={1} className={classes.card}>
      <Grid style={{
        border: "1px #e5e5e5 solid",
        height: "90px",
      }} container direction="row" alignItems="center" alignContent="center" justify="space-around">
        <Grid item >
          {props.chart ? null : <div className={classes.bg}></div>}
          {/* rendering children ie. doughnut chart or image */}
          {props.children}
        </Grid>
        <Grid item><Typography variant="h6">
          {/* stats */}
          {props.stats}
        </Typography>
          <Typography variant="caption" gutterBottom>
            {/* titles ie. attributes */}
            {props.title}
          </Typography>
        </Grid>
      </Grid ></Paper>
  )
}
export default Card