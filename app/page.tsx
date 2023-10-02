"use client";
// React , Next Js packages
import React from "react";
// MUI packages
import { Box, Container } from "@mui/material";
import Heading from "@/feature/Heading";
import CandidateCard from "@/feature/CandidateCard";
import CandidateListCard from "@/feature/CandidateListCard";

function Home() {
  return (
    <Box>
      <Heading />
      {/* candidate card  section  */}
      <Container maxWidth="lg">
        <CandidateListCard />

        {/* footer section  */}
      </Container>
    </Box>
  );
}

export default Home;
