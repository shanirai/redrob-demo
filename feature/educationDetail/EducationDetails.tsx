"use client";
import React from "react";
// MUi Packages
import {
  Avatar,
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
  Tooltip,
  Zoom,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import GradeIcon from "@mui/icons-material/Grade";
// Third party packages
// Custom components
import OtherInfo from "./OtherInfo";
import CustomChip from "../common/CustomChip";

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

const perks = [
  "Health Insurance",
  "Social Security",
  "Acheivement Award",
  "Paid Vacation",
];

const getIcon = (val: any) => {
  if (val == "up") {
    return <ArrowCircleUpIcon color="success" />;
  }
  return <ArrowCircleDownIcon color="error" />;
};

const Institute = (props: any) => {
  const {
    institute_name,
    description,
    website,
    established,
    reputation,
    ranking,
    t_accreditation_tag,
    ranking_p,
    t_overall_per,
    // size,
    // industry_sector,
    // location,
    // specialties,
    // overall,
  } = props?.data;

  const [showMore, setShowMore] = React.useState(false);

  // useEffect(()=>{
  //   if(description.length > 110){

  //   }
  // },[description])

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        alignItems={"center"}
        mb={2}
      >
        <Box display={"flex"} flexDirection={"column"} textAlign={"left"}>
          <Typography
            variant="h4"
            color={"primary.main"}
            textAlign={"center"}
            mb={1}
          >
            {props.left && "Candidate's Institute"}
            {props.right && "AI Recommended Top Institute In The Region"}
          </Typography>

          <Typography variant="h4" fontWeight={600}>
            {institute_name}
          </Typography>
          <Link
            href={website}
            target="_blank"
            rel="noreferrer"
            px={0}
            mx={0}
            fontSize={12}
          >
            {website}
          </Link>
        </Box>
      </Box>

      {/* <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
        {expData.map((item, index) => (
          <CustomChip item={item} key={index} ml={0} />
        ))}
      </Stack> */}

      {/* <Comparison /> */}

      <Box pt={0.5} mt={2}>
        <Typography variant="body2">
          {!showMore ? description.slice(0, 100) : description}
          <span
            onClick={() => {
              setShowMore(!showMore);
            }}
            style={{ fontWeight: 600 }}
          >
            {!showMore ? "...Show more" : "  ...Show less"}
          </span>
        </Typography>
      </Box>

      <Box
        pt={2}
        sx={{
          alignItems: "flex-start",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <OtherInfo
          label="Size"
          value={established}
          // icon={size == "500+" ? getIcon("up") : getIcon("down")}
        />
        <OtherInfo label="Reputation" value={reputation} icon={getIcon("up")} />
        <OtherInfo
          label="Ranking"
          value={ranking}
          icon={ranking >= 80 ? getIcon("up") : getIcon("down")}
        />
        {/* <OtherInfo label="Location" value={location} /> */}
        {/* <OtherInfo
          label="Technology"
          value={"Android, Web, Finance"}
          icon={getIcon("up")}
        /> */}
        {/* <OtherInfo label="Global Presence" value={"UK, USA, Germany,India"} /> */}
        {/* <OtherInfo label="Specialties" value={specialties} /> */}
      </Box>

      {/* blue/overall chip */}
      {props.left && props.isAIRec == "yes" && (
        <Stack direction={"row"} spacing={1} mt={2} ml={0}>
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
              <ArrowUpwardIcon sx={{ fontSize: 10, mr: 0.5 }} /> {t_overall_per}
              % Overall
            </Typography>
          </Tooltip>
        </Stack>
      )}
      {/* green chip */}
      {props.left && props.isAIRec == "no" && (
        <Stack direction={"row"} spacing={1} mt={2} ml={0}>
          <Tooltip
            title={
              <Typography variant="body2">
                {`learning from accredited institutions in India can play a crucial
              role in shaping a candidate's character, behavior, and outlook in
              the workplace.`}
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
              {t_accreditation_tag}
            </Typography>
          </Tooltip>

          <Tooltip
            title={
              <Typography variant="body2">
                {` Learning from top-ranking institutions in India can cultivate
              traits like diligence, global awareness, competitiveness, ethical
              values, and a drive for excellence`}
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
              {ranking_p}% Ranking
            </Typography>
          </Tooltip>
        </Stack>
      )}

      {/* <Typography variant="h5" fontWeight={600} mt={2} mb={1}>
        Perks & Benefits
      </Typography>
      <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
        {perks.map((item, index) => {
          return <Chip label={item} key={index} />;
        })}
      </Stack> */}
    </>
  );
};

function EducationDetails(props: any) {
  const { leftInstituteData, rightInstituteData, isAIRec } = props;

  return (
    <Container maxWidth="lg">
      <Box bgcolor={"#fff"} borderRadius={"8px"} my={3.5} py={2.5}>
        <Grid rowSpacing={1} direction={"row"} display={"flex"}>
          <Grid item xs={6} px={2} flexWrap={"wrap"} width={"50%"}>
            {leftInstituteData && (
              <Institute data={leftInstituteData} left isAIRec={isAIRec} />
            )}
          </Grid>
          <Divider
            orientation="vertical"
            sx={{ bgcolor: "primary.main", mt: 2 }}
            flexItem
          />
          <Grid item xs={6} px={2} width={"50%"}>
            {rightInstituteData && (
              <Institute data={rightInstituteData} right isAIRec={isAIRec} />
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default EducationDetails;
