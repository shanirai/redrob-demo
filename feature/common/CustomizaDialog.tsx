"use client";
// React , Next Js packages
import * as React from "react";
// MUI packages
import { Box, Button, Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CompanyDetails from "../companyDetail/CompanyDetails";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomizeDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      {/* <Button variant="contained" onClick={handleClickOpen}>
        View Details
      </Button> */}
      <Dialog
        maxWidth="lg"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <CompanyDetails />
      </Dialog>
    </Box>
  );
}
