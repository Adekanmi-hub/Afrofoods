import { Box, Tab, Tabs, useTheme, AppBar } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import SpicesList from "./Spices/SpicesList";
import DrinkList from "./Drink/DrinkList";
import PastaList from "./Pasta/PastaList";
import FlourList from "./Flour/FlourList";
import OthersList from "./Others/OthersList";

//This is the parent handler function that takes in the children component
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

//This is the tab types validation
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

//This is the main component where all the tabs are worked om
//and shown on our webpage
export const CategoryTabs = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#FF7801",
            },
          }}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Flours" {...a11yProps(0)} />
          <Tab label="Pasta" {...a11yProps(1)} />
          <Tab label="Spices" {...a11yProps(2)} />
          <Tab label="Drinks" {...a11yProps(3)} />
          <Tab label="Others" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <FlourList />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <PastaList />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <SpicesList />
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <DrinkList />
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        <OthersList />
      </TabPanel>
    </Box>
  );
};
export default CategoryTabs;
