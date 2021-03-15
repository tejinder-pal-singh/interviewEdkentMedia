import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  Grid,
  Avatar
} from "@material-ui/core"
import pic from "../../static/prof.jpg"

const useStyles = makeStyles({
  profPic: {
    margin: "0px 10px",
  }
})

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar color="inherit" position="static">
      <Toolbar>
        <Grid container direction="row" alignItems="center">
          {/* Logo Section */}
          <Grid item sm>
            <Typography variant="h6" color="primary" style={{ padding: "0 20px" }}>
              LOGO HERE
            </Typography>
            <Divider flexItem orientation="vertical" />
          </Grid>
          <Grid item sm>
          </Grid>
          {/* Profilr Section */}
          <Grid container item sm={2} justify="flex-end">
            <Grid item style={{ borderLeft: "1px lightgrey solid" }}>
              {/* profile pic */}
              <Avatar alt="Anthony" className={classes.profPic} src={pic} />
            </Grid>
            {/* name and reference */}
            <Grid item>
              <Typography variant="subtitle2" align="justify">
                Anthony Johnson
            </Typography>
              <Typography variant="caption" align="justify">
                Dummy Design.com
            </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header