"use client";
// React , Next Js packages
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
//  Mui packages
import {
  Avatar,
  Box,
  Button,
  Chip,
  Stack,
  Typography,
  Grid,
  Divider,
  Modal,
} from "@mui/material";
// MUI icons
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CustomChip from "./common/CustomChip";
import CompanyDetails from "./companyDetail/CompanyDetails";

function ExperianceCard(props: any) {
  //** props -- components */
  const { active } = props;
  const [open, setOpen] = useState(true);

  // exp data
  const expData = [
    {
      label: "Forbes 10 Company",
      icon: "",
      color: "",
    },
    {
      label: "Ranking",
      icon: "",
      color: "",
    },
    {
      label: "Rating",
      icon: "",
      color: "",
    },
  ];

  return (
    <Box position={"relative"}>
      <Box
        mt={0.5}
        mx={1.5}
        border={"1px solid "}
        borderColor={"secondary.light"}
        borderRadius={1}
        px={1}
        py={1}
      >
        <Grid container columnGap={1}>
          <Grid item xs={1}>
            <Typography variant="h6" width={""}>
              Experience
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Box ml={1.5}>
              <Box display={"flex"} alignItems={"center"}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{
                    cursor: "pointer",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  Spotify Inc.
                </Typography>
                {/* custom chip */}

                {expData.map((item, index) => (
                  <CustomChip item={item} key={index} />
                ))}
              </Box>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant="subtitle2" color={"text.primary"}>
                  Product Designer
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  February 2021 - Current
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CompanyDetails />
      </Modal> */}
    </Box>
  );
}

export default ExperianceCard;
