"use client";

// React , Next Js packages
import React from "react";
// MUi packages
import { Box, Typography, Chip } from "@mui/material";
// MUI Icons
// Third party packages
// Custom components

function SkillSet() {
  // Skills Data
  const skillsData = [
    "Java",
    "PHP",
    "AWS",
    "Node JS",
    "Python",
    "Javascript",
    "React JS",
    "Angular JS",
    "Mircosoft",
    "Azure",
    "Kafka",
    "C++",
    "SQL",
  ];

  //** handle clickable chip */
  const handleClick = () => {
    console.log("chip clickable");
  };

  return (
    <Box>
      <Box
        my={2}
        border={"1px solid "}
        borderColor={"secondary.light"}
        borderRadius={2}
        px={2.5}
        py={2.5}
      >
        <Typography variant="h5"> Skills </Typography>
        <Box>
          {skillsData.map((item, index) => (
            <Chip
              label={item}
              size="small"
              sx={{
                mr: 1,
                mb: 1,
                "&:hover": { bgcolor: "primary.main" },
              }}
              key={index}
              onClick={handleClick}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default SkillSet;
