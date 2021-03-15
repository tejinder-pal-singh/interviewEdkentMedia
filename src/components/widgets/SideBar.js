import React from 'react';
import {
  makeStyles,
  Button,
  Tabs,
  Tab,
  Typography,
  Box,
} from '@material-ui/core';
import AirplayIcon from '@material-ui/icons/Airplay';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import TableChartIcon from '@material-ui/icons/TableChart';
import WebIcon from '@material-ui/icons/Web';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import SettingsIcon from '@material-ui/icons/Settings';
import StarsIcon from '@material-ui/icons/Stars';
import Tab1 from '../tabs/Tab1';


// styles
const useStyles = makeStyles((theme) => ({
  // for root
  root: {
    display: 'flex',
    height: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  // for tab list container (ie. navbar) 
  tabs: {
    borderRight: `1px solid ${ theme.palette.divider }`,
    flexDirection: "column",
    minWidth: "200px",
  },
  // active tab content ie. panel
  tabPanel: {
    backgroundColor: "#F5F6F8",
    flex: 1,
    minHeight: "704px"
  },
  // for tab list items (ie. menuoptions1 etc)
  tab: {
    fontSize: "11px",
    padding: "0px",
    // for  hover effect
    '&:hover': {
      backgroundColor: "#2595f7",
      color: 'white',
      opacity: 1,
      cursor: "pointer",
    },
    // for active tab
    "&.Mui-selected": {
      backgroundColor: "rgba(37,149,247,0.1)",
      color: "black"
    }
  },
  // for icon assigned to specific list item 
  icon: {
    position: "absolute",
    top: "23px",
    left: "20px"
  },
  // for settings button
  settingsBtn: {
    backgroundColor: "rgba(37,149,247,0.1)",
    fontSize: "11px",
    borderRight: "rgba(37,149,247) solid 3px",
    padding: "18px 53px",
    width: "100%",
    borderRadius: "0px"
  },
  // for last option ie.7 in the bottom left corner
  opt7: {
    display: "block",
    padding: "20px 45px",
    width: "100%",
    fontSize: "11px",
    borderRadius: "0px"
  },
}));

// for rendering the content of active tab(ie. tab panel)
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${ index }`}
      aria-labelledby={`vertical-tab-${ index }`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// to change the properties requied to change the tab as per active tab changed
function a11yProps(index) {
  return {
    id: `vertical-tab-${ index }`,
    'aria-controls': `vertical-tabpanel-${ index }`,
  };
}


const SideBar = () => {

  const classes = useStyles();

  // state to hold record for currently activated tab
  const [value, setValue] = React.useState(0);

  // event handler for click event
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (<>
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        indicatorColor="primary"
        value={value}
        centered
        variant="fullWidth"
        onChange={handleChange}
        aria-label="Menu options"
        className={classes.tabs}
      >
        <Tab icon={<AirplayIcon className={classes.icon} />} className={classes.tab} label="Menu Option 1" {...a11yProps(0)} />
        <Tab icon={<WorkOutlineIcon className={classes.icon} />} className={classes.tab} label={`Menu Option 2 `} {...a11yProps(1)} />
        <Tab icon={<BrokenImageIcon className={classes.icon} />} className={classes.tab} label="Menu Option 3" {...a11yProps(2)} />
        <Tab icon={<TableChartIcon className={classes.icon} />} className={classes.tab} label="Menu Option 4" {...a11yProps(3)} />
        <Tab icon={<WebIcon className={classes.icon} />} className={classes.tab} label="Menu Option 5" {...a11yProps(4)} />
        <Tab icon={<OpenInBrowserIcon className={classes.icon} />} className={classes.tab} label="Menu Option 6" {...a11yProps(5)} />

        <div style={{ width: "100%", bottom: "0px", position: "absolute" }} >
          <Button startIcon={<StarsIcon className={classes.icon} />} variant="contained" color="primary" className={classes.opt7}>Menu Option 7</Button>
          <Button startIcon={<SettingsIcon />} className={classes.settingsBtn}>Settings</Button>
        </div>
      </Tabs>

      <TabPanel className={classes.tabPanel} value={value} index={0}>
        {/* component that holds all of the elements to be render on the  first options(ie. line chart, cards, analytics, attributes data etc.) */}
        <Tab1 />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={1}>
        Thank you for your time...!!
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={5}>
        Item Six
      </TabPanel>
    </div>

  </>
  );
}

export default SideBar