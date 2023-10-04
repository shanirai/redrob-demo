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
import CompanyJson from "../../data/static.json";
function EducationCompare(props: any) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        marginLeft: "16px",
      }}
    >
      <Stack direction={"row"} mb={1}>
        <Typography variant="h5" sx={{ color: "#45b3e0" }}>
          AI Recommended Top in Institute
        </Typography>
      </Stack>
      {CompanyJson?.comparison?.institute.slice(0, 1).map((item, index) => {
        return (
          <Stack key={index + 1} direction={"column"} mb={0.5}>
            <Typography
              onClick={props.onClick}
              variant="subtitle2"
              fontWeight={600}
              fontSize={14}
              display={"flex"}
              flexWrap={"nowrap"}
              sx={{ wordBreak: "break-word", cursor: "pointer" }}
            >
              {item.institute_name}
            </Typography>
            <Typography
              variant="body2"
              fontWeight={500}
              color={"text.secondary"}
            >
              <a href={item.website} style={{ textDecoration: "none" }}>
                {item.website}
              </a>
            </Typography>
            <Typography
              variant="body2"
              fontWeight={500}
              color={"text.secondary"}
            >
              {item.type}
            </Typography>
            <Stack direction={"row"} spacing={1} mt={1.5}>
              <Tooltip
                title={
                  <Typography variant="body2">
                    After assessing the candidate's educational institution in
                    comparison to a leading educational institute, using
                    relevant data, it's evident that this candidate's institute
                    meets a high standard and is comparable to the top
                    institution
                  </Typography>
                }
                placement="right"
                TransitionComponent={Zoom}
                arrow={true}
              >
                <Typography
                  variant="caption"
                  bgcolor={"#87CEEB"}
                  ml={1}
                  px={1.5}
                  py={0.5}
                  borderRadius={1.5}
                  fontSize={10}
                  fontWeight={500}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <ArrowUpwardIcon sx={{ fontSize: 10, mr: 0.5 }} />
                  {item.t_overall_per}% Overall
                </Typography>
              </Tooltip>
            </Stack>
          </Stack>
        );
      })}
    </Box>
  );
}

export default EducationCompare;
