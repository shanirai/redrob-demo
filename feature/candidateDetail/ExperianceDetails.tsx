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
  Dialog,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
// MUI icons
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CircleIcon from "@mui/icons-material/Circle";
// Custom components
import CustomChip from "../common/CustomChip";
import ExperienceCompare from "./ExperienceCompare";
import CandidateData from "../../data/candi.json";
import CompanyDetails from "../companyDetail/CompanyDetails";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ExperianceDetails(props: any) {
  //** props -- components */

  const singleCandData = CandidateData[0];
  const { active, filterData } = props;
  const [isShowMore, setIsShowMore] = useState(false);
  const [isShowMore2, setIsShowMore2] = useState(false);
  const [open, setOpen] = useState(false);
  const [comparisonFrom, setComparisonFrom] = useState(
    singleCandData.experiance[0]
  );

  const comparisonTo = singleCandData.experiance[1];

  const handleClickOpen = (data: any) => {
    setComparisonFrom(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // exp data
  const expData = [
    {
      label: "10% Culture",
      icon: "",
      color: "",
      description:
        "Signifies a positive alignment with the cultural aspects of your company.",
    },
    {
      label: "20% Overall",
      icon: "",
      color: "",
      description:
        "Indicates a favorable comparison with your company in general",
    },
    {
      label: "10% Reviews",
      icon: "",
      color: "",
      description: "client and employee review  compared  with your company",
    },
    {
      label: "5% Overall",
      icon: "",
      education: true,
      color: "#87CEEB",
      description:
        "overall comparison  with company leader in same sector in local region",
    },
  ];

  const data = [
    {
      index: 1,
      points:
        "In a world full of ordinary, we create mobile applications for people with an extraordinary vision. It is easy to lose one's true self in this monotonous world, but since you are here looking for a team, we believe that you too are willing to go the extra mile..",
    },
    {
      index: 2,
      points: "Experience with integration of third party media packages.",
    },
    {
      index: 3,
      points:
        " As a frontend Developer, integrated API’s so that user can perform smooth functionality of CRUD operations through UI.",
    },
    {
      index: 4,
      points:
        " As a frontend Developer, integrated API’s so that user can perform smooth functionality of CRUD operations through UI",
    },
  ];

  const sliceData = data.slice(0, 2);
  let lastlen = data.length;

  return (
    <Box position={"relative"}>
      <Box
        my={2}
        border={"1px solid "}
        borderColor={"secondary.light"}
        borderRadius={2}
        px={2.5}
        py={2.5}
      >
        <Stack direction={"row"} justifyContent={"space-between"} width={"66%"}>
          <Typography variant="h5">Experience</Typography>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            color={"text.secondary"}
          >
            4 years Experience
          </Typography>
        </Stack>
        {filterData[0]?.experiance?.map((filterExpData: any, index: any) => (
          <Box key={index}>
            <Grid container sx={{ display: "flex", flexWrap: "nowrap" }}>
              <Grid item xs={8}>
                <Box my={1}>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="h6" color={"text.primary"}>
                      {filterExpData?.job_title}
                    </Typography>
                    <Typography variant="subtitle2" color={"text.secondary"}>
                      {filterExpData?.from} - {filterExpData?.to}
                    </Typography>
                  </Stack>
                  <Box display={"flex"} alignItems={"center"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      sx={{ cursor: "pointer" }}
                    >
                      {filterExpData?.name}
                    </Typography>
                    {/* custom chip */}

                    {expData.map((item, index) => (
                      <CustomChip item={item} key={index} />
                    ))}
                  </Box>

                  <Stack direction={"row"}>
                    <Typography variant="body2" color={"text.secondary"} ml={1}>
                      {filterExpData?.location}
                    </Typography>
                  </Stack>
                  <Box mt={2}>
                    {isShowMore ? (
                      <Typography
                        key={index}
                        variant="body2"
                        display={"flex"}
                        alignItems={"baseline"}
                        pb={1}
                      >
                        <CircleIcon
                          sx={{
                            color: "secondary.light",
                            fontSize: 12,
                            mr: 1,
                          }}
                        />
                        <span>
                          {filterExpData?.description}
                          <Typography
                            component={"span"}
                            variant="subtitle2"
                            onClick={() => setIsShowMore(!isShowMore)}
                            sx={{
                              color: "red",
                              marginLeft: "3px",
                              cursor: "pointer",
                            }}
                          >
                            {isShowMore ? "...less" : "...more"}
                          </Typography>
                        </span>
                      </Typography>
                    ) : (
                      <Typography
                        key={index}
                        variant="body2"
                        display={"flex"}
                        alignItems={"baseline"}
                        pb={1}
                      >
                        <CircleIcon
                          sx={{
                            color: "secondary.light",
                            fontSize: 12,
                            mr: 1,
                          }}
                        />
                        <span>
                          {filterExpData?.description.slice(0, 136)}
                          <Typography
                            component={"span"}
                            variant="subtitle2"
                            onClick={() => setIsShowMore(!isShowMore)}
                            sx={{
                              color: "red",
                              marginLeft: "3px",
                              cursor: "pointer",
                            }}
                          >
                            {isShowMore ? "...less" : "...more"}
                          </Typography>
                        </span>
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Grid>
              <Divider
                orientation="vertical"
                sx={{ bgcolor: "secondary.main", ml: 1.5 }}
                flexItem
              />
              <Grid item xs={4}>
                <ExperienceCompare />
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />
          </Box>
        ))}
      </Box>

      <Dialog
        maxWidth="md"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{padding:0}}
      >
        {comparisonFrom && comparisonTo && (
          <CompanyDetails
            leftCompanyData={comparisonFrom}
            rightCompanyData={comparisonTo}
          />
        )}
      </Dialog>
    </Box>
  );
}

export default ExperianceDetails;
