"use client";
// React, Next js Packages
import React from "react";
// MUI packages
import { Box, Tooltip, Typography, Zoom } from "@mui/material";
// MUI icons
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function CustomChip(props: any) {
  //** props --- components */
  const { item, id } = props;
  const data =
    "Indian Institute of Technology Delhi is one of the 23 IITs created to be Centres of Excellence for training, research and development in science, engineering and technology in India.";

  return (
    <Box key={id}>
      <Tooltip
        title={<Typography variant="body2">{data}</Typography>}
        placement="right"
        TransitionComponent={Zoom}
        arrow={true}
      >
        <Typography
          variant="caption"
          bgcolor={"secondary.light"}
          ml={1}
          px={1.5}
          py={0.4}
          borderRadius={1.2}
          fontWeight={500}
          display={"flex"}
          alignItems={"center"}
        >
          <ArrowUpwardIcon sx={{ fontSize: 14, mr: 0.5 }} />{" "}
          {item?.label ? item?.label : "Forbes 10 Company"}
        </Typography>
      </Tooltip>
    </Box>
  );
}

export default CustomChip;
