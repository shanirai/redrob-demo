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
function ExperienceCompare(props: any) {
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
          AI Recommended Top In Sector
        </Typography>
      </Stack>
      {CompanyJson?.comparison?.company.slice(0, 1).map((item, index) => {
        return (
          <Stack
            onClick={() => props.onClick(item)}
            key={index + 1}
            direction={"column"}
            mb={0.5}
            sx={{ cursor: "pointer" }}
          >
            <Typography
              variant="subtitle2"
              fontWeight={600}
              fontSize={14}
              display={"flex"}
              flexWrap={"nowrap"}
              sx={{ wordBreak: "break-word", cursor: "pointer" }}
            >
              {item.name}
            </Typography>
            <Typography
              variant="body2"
              fontWeight={500}
              color={"text.secondary"}
            >
              <a href={item.website_link} style={{ textDecoration: "none" }}>
                {" "}
                {item.website_link}
              </a>
            </Typography>
            <Typography
              variant="body2"
              fontWeight={500}
              color={"text.secondary"}
            >
              {item.company_type}
            </Typography>
            <Stack direction={"row"} spacing={1} mt={1.5}>
              <Tooltip
                title={
                  <Typography variant="body2">
                    {`it is apparent that this candidate's company meets a high
                    standard and is comparable to the leading companies in the
                    field`}
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
                  <ArrowUpwardIcon sx={{ fontSize: 10, mr: 0.5 }} />{" "}
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

export default ExperienceCompare;
