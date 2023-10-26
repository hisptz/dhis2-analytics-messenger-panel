import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ChangePasswordModal(props: any) {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      <DialogTitle sx={{ mb: -2 }}>Change User Password</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="dense"
          type="password"
          label="Old Password"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="dense"
          type="password"
          label="New Password"
          variant="outlined"
          sx={{ mb: 12 }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          className="text-black w-24"
          sx={{ textTransform: "none", borderRadius: "50px" }}
          onClick={onClose}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          className="rounded-full bg-primary-500 w-24"
          onClick={onClose}
          color="primary"
          sx={{ textTransform: "none", borderRadius: "50px" }}
          variant="contained"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
