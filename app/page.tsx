"use client";
// React , Next Js packages
import React, { useState } from "react";
// MUI packages
import { Box, Container } from "@mui/material";
import Heading from "@/feature/Heading";
import CandidateCard from "@/feature/CandidateCard";
import CandidateListCard from "@/feature/CandidateListCard";
import CandidateList from "@/feature/secondOption/CandidateList";
import CandidateDetails from "@/feature/candidateDetail/CandidateDetails";
import RightSidePanel from "@/feature/panel/RightSidePanel";

function Home() {
  const [active, setActive] = useState(false);

  return (
    <Box>
      <Heading />
      {/* candidate card  section  */}
      <Container maxWidth="lg">
        <RightSidePanel>
          <CandidateListCard />
          <CandidateListCard />
        </RightSidePanel>
      </Container>
    </Box>
  );
}

export default Home;
