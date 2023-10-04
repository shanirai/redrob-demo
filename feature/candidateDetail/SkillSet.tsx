"use client";

// React , Next Js packages
import React from "react";
// MUi packages
import { Box, Typography, Chip } from "@mui/material";
// MUI Icons
// Third party packages
// Custom components

function SkillSet(props: any) {
  //** props -- components */
  const { filterData } = props;

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
          {filterData[0]?.skills?.map((item: any, index: any) => (
            <Chip
              label={item}
              size="small"
              sx={{
                mr: 1,
                mb: 1,
                textTransform: "capitalize",
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
