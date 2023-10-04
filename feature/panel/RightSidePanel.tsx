"use client";
// React , Next Js packages
import React from "react";
// MUI packages
import { Box, SwipeableDrawer, Button } from "@mui/material";
import CandidateDetails from "../candidateDetail/CandidateDetails";
// MUI Icons
import CloseIcon from "@mui/icons-material/Close";
// Custom components

type Anchor = "right";

export default function RightSidePanel(props: any) {
  //** props -- components */
  const { children, cardId } = props;

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
      console.log("lookjig  for index");
    };

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Box
            onClick={toggleDrawer(anchor, true)}
            sx={{
              color: "primary.main",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            View All
          </Box>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            sx={{ top: 40 }}
          >
            <CloseIcon
              sx={{
                color: "secondary.main",
                width: 30,
                height: 30,
                position: "absolute",
                right: 20,
                top: 0,
              }}
              onClick={toggleDrawer(anchor, false)}
            />
            <CandidateDetails cardId={cardId} />
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
