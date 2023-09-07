import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { CheckBox } from "../../../components/checkbox";
import { ListTodoButton } from "../../../components/buttons";
import { ColorTag } from "../../../components/color_Tag";

import Dialog from "@mui/material/Dialog";
import { DialogBody } from "../../../components/dialog/DialogBody";
import { DialogFooter } from "../../../components/dialog/DialogFooter";
import { DialogHeader } from "../../../components/dialog/DialogHeader";
import { Stack } from "@mui/material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  // alignItems: 'stretch',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

const DialogStyle = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const TodoItem = ({ content, color, status, changeStatus }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "15px", border: "1px solid #ddd" }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#ffffff",
          boxShadow: "none",
          color: (theme) => theme.palette.common.black,
        }}
      >
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <CheckBox completed={status} change={changeStatus} />
          </IconButton>
          <Stack flex={1} onClick={handleClickOpen}>
            <Typography
              variant="h5"
              noWrap
              component="div"
              fontWeight="bold"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              maxWidth={"300px"}
              sx={{ rowGap: "50px", color: "black" }}
            >
              {content}
            </Typography>
            <ColorTag color={color} />
          </Stack>
          <ListTodoButton content={content} />
        </StyledToolbar>
      </AppBar>

      <DialogStyle
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
      >
        <DialogHeader onClose={handleClose} dialogTitle="View Detail" />
        <DialogBody
          type="view"
          content={content}
          color={color}
          status={status}
        />
        <DialogFooter onClose={handleClose} />
      </DialogStyle>
    </Box>
  );
};

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  changeStatus: PropTypes.func.isRequired,
};
