"use client";
// React , Next Js packages
import React from "react";
// MUI packages
import { Box, Container } from "@mui/material";
import Heading from "@/feature/Heading";
import CandidateCard from "@/feature/CandidateCard";
import CandidateListCard from "@/feature/CandidateListCard";
import CandidateList from "@/feature/secondOption/CandidateList";
import CandidateDetails from "@/feature/candidateDetail/CandidateDetails";

function Home() {
  return (
    <Box>
      <Heading />
      {/* candidate card  section  */}
      <Container maxWidth="lg">

        {/* <CandidateListCard />
        <CandidateListCard /> */}
        <CandidateList />
        <CandidateList />


        {/* <CandidateListCard /> */}
        <CandidateList />
        <CandidateList />

        {/* footer section  */}
        {/* <CandidateDetails /> */}
      </Container>
    </Box>
  );
}

export default Home;
