import React from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Stack,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
function EducationCompare() {
  return (
    <Box
      sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column",marginLeft:"16px"}}
    >
      {/* <Stack direction="row" spacing={1} mb={1} mt={2} >
        <Chip label="Top Recruiter Choice" color="primary" sx={{backgroundColor:"#69A3CC"}}/>
      </Stack> */}
      <Stack direction={"column"} mb={0.5}>
        <Typography
          variant="subtitle2"
          fontWeight={600}
          fontSize={14}
          display={"flex"}
          flexWrap={"nowrap"}
          sx={{ wordBreak: "break-word" }}
        >
          Indian Institute of Technology
        </Typography>
        <Typography variant="body2" fontWeight={500} color={"text.secondary"}>
          Indore , | Autonomous
        </Typography>
        <Stack direction={"row"} spacing={1} mt={1.5}>
          <Typography
            variant="caption"
            bgcolor={"secondary.light"}
            ml={1}
            px={1.5}
            py={0.5}
            borderRadius={1.5}
            fontWeight={600}
            display={"flex"}
            alignItems={"center"}
          >
            <ArrowUpwardIcon sx={{ fontSize: 14, mr: 0.5 }} /> Course Ranking
          </Typography>
          <Typography
            variant="caption"
            bgcolor={"secondary.light"}
            ml={1}
            px={1.5}
            py={0.5}
            borderRadius={1.5}
            fontWeight={600}
            display={"flex"}
            alignItems={"center"}
          >
            <ArrowUpwardIcon sx={{ fontSize: 14, mr: 0.5 }} /> Rating
          </Typography>
        </Stack>
      </Stack>

      {/* <Stack direction="row" spacing={1} mt={2.5} mb={1}>
        <Chip label="Top 10% in Sector" color="primary"  sx={{backgroundColor:"lightgreen"}} />
      </Stack> */}
      <Stack direction={"column"} mb={0.5} mt={2}>
        <Typography
          variant="subtitle2"
          fontWeight={600}
          fontSize={14}
          display={"flex"}
          flexWrap={"nowrap"}
          sx={{ wordBreak: "break-word" }}
        >
          Medicaps University
        </Typography>
        <Typography variant="body2" fontWeight={500} color={"text.secondary"}>
          Kolkata , | Private
        </Typography>
        <Stack direction={"row"} spacing={1} mt={1.5}>
          <Typography
            variant="caption"
            bgcolor={"secondary.light"}
            ml={1}
            px={1.5}
            py={0.5}
            borderRadius={1.5}
            fontWeight={600}
            display={"flex"}
            alignItems={"center"}
          >
            <ArrowUpwardIcon sx={{ fontSize: 14, mr: 0.5 }} /> NIRF Ranking to 10
          </Typography>
          <Typography
            variant="caption"
            bgcolor={"secondary.light"}
            ml={1}
            px={1.5}
            py={0.5}
            borderRadius={1.5}
            fontWeight={600}
            display={"flex"}
            alignItems={"center"}
          >
            <ArrowUpwardIcon sx={{ fontSize: 14, mr: 0.5 }} /> Course Ranking
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default EducationCompare;
