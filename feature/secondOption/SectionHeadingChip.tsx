"use client";
// React, Next js Packages
import React from "react";
// MUI packages
import { Box, Tooltip, Typography, Zoom } from "@mui/material";
// MUI icons
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function SectionHeadingChip(props: any) {
  //** props --- components */
  const { item, id, title, icon, tooltip_desc } = props;
  const data =
    "Indian Institute of Technology Delhi is one of the 23 IITs created to be Centres of Excellence for training, research and development in science, engineering and technology in India.";

  return (
    <Box key={id}>
      <Tooltip
        title={<Typography variant="body2">{tooltip_desc}</Typography>}
        placement="right"
        TransitionComponent={Zoom}
        arrow={true}
      >
        {/* <Typography
          variant="caption"
          bgcolor={`${item.education ? item.color : "secondary.light"}`}
          // bgcolor={`${item?.color ? item.color}"secondary.light"}
          ml={1}
          px={1.5}
          py={0.4}
          fontSize={"10px"}
          borderRadius={1.2}
          fontWeight={500}
          display={"flex"}
          alignItems={"center"}
        >
          {item?.icon ? (
            item.icon
          ) : (
            <ArrowUpwardIcon sx={{ fontSize: 14, mr: 0.5 }} />
          )}{" "}
          {item?.label ? item?.label : "Forbes 10 Company"}
        </Typography> */}

        <Typography
          variant="caption"
          bgcolor={"secondary.light"}
          // bgcolor={`${item?.color ? item.color}"secondary.light"}
          ml={1}
          px={1.5}
          py={0.4}
          fontSize={"10px"}
          borderRadius={1.2}
          fontWeight={500}
          display={"flex"}
          alignItems={"center"}
        >
          {title}
        </Typography>
      </Tooltip>
    </Box>
  );
}

export default SectionHeadingChip;
