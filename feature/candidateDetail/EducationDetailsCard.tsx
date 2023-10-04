"use client";
// React , Next Js packages
import React, { useState } from "react";
import { useRouter } from "next/navigation";
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
  Tooltip,
  Zoom,
  Dialog,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
// MUI icons
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CircleIcon from "@mui/icons-material/Circle";
import GradeIcon from "@mui/icons-material/Grade";
// Custom components
import CustomChip from "../common/CustomChip";
import EducationCompare from "./EducationCompare";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// json data
import CandidateData from "../../data/candi.json";
import AIRecommended from "../../data/static.json";
import EducationDetails from "../educationDetail/EducationDetails";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EducationDetailsCard(props: any) {
  //** props -- components */
  const { active, filterData } = props;

  const singleCandData = CandidateData[0];
  const [isShowMore, setIsShowMore] = useState(false);
  const [open, setOpen] = useState(false);
  const [comparisonFrom, setComparisonFrom] = useState();

  const comparisonTo = AIRecommended.comparison.institute[0];

  const handleClickOpen = (data: any) => {
    setComparisonFrom(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // dummy data for tooltip

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
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h5">Education</Typography>
        </Stack>
        {filterData[0]?.education?.map((filterEduData: any, index: any) => (
          <Box key={index}>
            <Grid container sx={{ display: "flex", flexWrap: "nowrap" }}>
              {/* //left column */}
              <Grid item xs={8}>
                <Box my={1}>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="h6" color={"text.primary"}>
                      {filterEduData.degree} {`(${filterEduData.stream})`}
                    </Typography>
                    <Typography variant="subtitle2" color={"text.secondary"}>
                      {filterEduData.from} - {filterEduData.to}
                    </Typography>
                  </Stack>
                  <Box display={"flex"} alignItems={"center"}>
                    <Typography
                      onClick={() => handleClickOpen(filterEduData)}
                      variant="subtitle2"
                      fontWeight={500}
                      sx={{ cursor: "pointer" }}
                    >
                      {filterEduData.institute_name}
                    </Typography>
                    {/* custom chip */}

                    {/* {eduData.map((item, index) => (
                      <CustomChip item={item} key={index} />
                    ))} */}

                    <Stack direction={"row"} spacing={1} ml={1}>
                      <Tooltip
                        title={
                          <Typography variant="body2">
                            learning from accredited institutions in India can
                            play a crucial role in shaping a candidate's
                            character, behavior, and outlook in the workplace.
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
                          fontSize={10}
                          fontWeight={500}
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <GradeIcon sx={{ fontSize: 10, mr: 0.5 }} />
                          {filterEduData.t_accreditation_tag}
                        </Typography>
                      </Tooltip>

                      <Tooltip
                        title={
                          <Typography variant="body2">
                            Learning from top-ranking institutions in India can
                            cultivate traits like diligence, global awareness,
                            competitiveness, ethical values, and a drive for
                            excellence
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
                          fontSize={10}
                          fontWeight={500}
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <ArrowUpwardIcon sx={{ fontSize: 10, mr: 0.5 }} />
                          {filterEduData.ranking_p}% Ranking
                        </Typography>
                      </Tooltip>
                    </Stack>
                  </Box>

                  <Box mt={2}>
                    <Typography variant="subtitle1">About</Typography>

                    {/* //show more and less feature */}
                    <Typography
                      variant="body2"
                      display={"flex"}
                      alignItems={"baseline"}
                    >
                      <span>
                        {isShowMore
                          ? filterEduData.description
                          : filterEduData.description.slice(0, 136)}
                        <Typography
                          component={"span"}
                          variant="subtitle2"
                          fontWeight={600}
                          sx={{
                            marginLeft: "3px",
                            cursor: "pointer",
                          }}
                          onClick={() => setIsShowMore(!isShowMore)}
                        >
                          {isShowMore ? "...Show Less" : "...Show More"}
                        </Typography>
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              {/* //vertical line to differentiate left and right column */}
              <Divider
                orientation="vertical"
                sx={{ bgcolor: "text.secondary", marginLeft: "12px" }}
                flexItem
              />
              {/* //Right column */}
              <Grid item xs={4}>
                <EducationCompare
                  onClick={() => handleClickOpen(filterEduData)}
                />
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
        sx={{ padding: 0 }}
      >
        {comparisonFrom && comparisonTo && (
          <EducationDetails
            leftInstituteData={comparisonFrom}
            rightInstituteData={comparisonTo}
          />
        )}
      </Dialog>
    </Box>
  );
}

export default EducationDetailsCard;
