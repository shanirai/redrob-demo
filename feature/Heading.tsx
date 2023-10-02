"use Client";
// React , Next Js Packages
import React from "react";
// MUI packages
import { Box, Container, Typography } from "@mui/material";

function Heading() {
  return (
    <Box bgcolor={"primary.main"} py={2}>
      <Container maxWidth="lg">
        <Typography variant="h4" color={"grey.100"}>
          Candidate List/Experience
        </Typography>
      </Container>
    </Box>
  );
}

export default Heading;
