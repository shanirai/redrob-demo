import React from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Stack,
  Typography,
  Tooltip,
  Zoom,
  Grid,
  Divider,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
function ExperienceCompare() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        marginLeft: "16px",
      }}
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
          Accenture
        </Typography>
        <Typography variant="body2" fontWeight={500} color={"text.secondary"}>
          HQ - Sweden , | IT Services and Consultancy
        </Typography>
        <Stack direction={"row"} spacing={1} mt={1.5}>
          <Tooltip
            title={
              <Typography variant="body2">
                implies positive feedback and reviews from both clients and
                employees compared to your company's standards.
              </Typography>
            }
            placement="right"
            TransitionComponent={Zoom}
            arrow={true}
          >
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
              <ArrowUpwardIcon sx={{ fontSize: 14, mr: 0.5 }} /> 20% Ranking
            </Typography>
          </Tooltip>

          <Tooltip
        title={<Typography variant="body2">Indicates a favorable comparison with the leading company in the same sector in your local region.</Typography>}
        placement="right"
        TransitionComponent={Zoom}
        arrow={true}
      >
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
            <ArrowUpwardIcon sx={{ fontSize: 14, mr: 0.5 }} />
            10% Rating
          </Typography>
          </Tooltip>
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
          TCS
        </Typography>
        <Typography variant="body2" fontWeight={500} color={"text.secondary"}>
          Mumbai , | IT Services and Consultancy
        </Typography>
        <Stack direction={"row"} spacing={1} mt={1.5}>
        <Tooltip
        title={<Typography variant="body2">Indicates a favorable comparison with the leading company in the same sector in your local region.</Typography>}
        placement="right"
        TransitionComponent={Zoom}
        arrow={true}
      >
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
            <ArrowUpwardIcon sx={{ fontSize: 14, mr: 0.5 }} />  20% Overall
          </Typography>
          </Tooltip>

          <Tooltip
        title={<Typography variant="body2">Indicates a positive alignment with the cultural aspects of the leading company in the same sector in your local region</Typography>}
        placement="right"
        TransitionComponent={Zoom}
        arrow={true}
      >
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
            <ArrowUpwardIcon sx={{ fontSize: 14, mr: 0.5 }} /> 20% Culture
          </Typography>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ExperienceCompare;
