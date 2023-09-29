"use Client";
// React , Next Js Packages
import React from "react";
// MUI packages
import { Box, Typography } from "@mui/material";

function Heading() {
  return (
    <Box>
      <Typography
        variant="h5"
        color={"text.primary"}
        bgcolor={"text.secondary"}
        py={2}
        textAlign={"center"}
      >
        Candidate List{" "}
      </Typography>
    </Box>
  );
}

export default Heading;
