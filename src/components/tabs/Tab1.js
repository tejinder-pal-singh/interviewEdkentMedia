import Card from "../widgets/Card"
import LineBar from "../elements/LineBar"
import DoughNut from "../elements/DoughNut"
import { Button, Grid, Typography } from '@material-ui/core'
import shield from '../../static/shield.png';
import paper from '../../static/paper.png';
import searchPaper from '../../static/search-paper.png';

// footer for that tab 
const Footer = () => (
  <>
    <Typography variant="caption">@ Copyright - Dummy Design 2020 All Rights Reserved</Typography>
  </>
)

const Tab1 = () => {
  return (
    <>
      <Grid container alignContent="center" spacing={2} direction="row-reverse" alignItems="flex-end" justify="space-between">
        {/* upgrade button */}
        <Grid item sm={2}>
          <Button variant="contained" color="primary" style={{ borderRadius: "50px", padding: "7px 29px", }}>
            Upgrade
        </Button>
        </Grid>

        {/* cards section  */}
        <Grid item container alignContent="center" spacing={2} alignItems="center" justify="space-between">
          <Grid item md={3}> <Card stats={"245/500"} chart={true} title="Attribute 1">
            <DoughNut dataSet={"245/500"} />
          </Card>
          </Grid>
          <Grid item md={3}> <Card stats={120} title="Attribute 2">
            <img src={shield} alt="Shield" height={80} style={{ opacity: 0.5 }} />
          </Card></Grid>
          <Grid item md={3}> <Card stats={125} title="Attribute 3">
            <img src={paper} alt="Paper" height={70} style={{ opacity: 0.8 }} />
          </Card></Grid>
          <Grid item md={3}> <Card stats={0} title="Attribute 4">
            <img src={searchPaper} alt="SearchPaper" height={80} style={{ opacity: 0.8 }} />
          </Card></Grid>
        </Grid>
      </Grid>
      {/* linebar chart */}
      <LineBar />
      {/* footer */}
      <Footer />
    </>
  )
}

export default Tab1