"use client";
import * as React from "react";
// MUI packages
import { Box, Typography, Tabs, Tab } from "@mui/material";
import ExperianceCard from "../ExperianceCard";
import EducationalDetails from "../EducationalDetails";
import ListOfSkills from "../Skills";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Experiance" {...a11yProps(0)} />
          <Tab label="Education" {...a11yProps(1)} />
          <Tab label="Skills" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ExperianceCard />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <EducationalDetails />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ListOfSkills />
      </CustomTabPanel>
    </Box>
  );
}
