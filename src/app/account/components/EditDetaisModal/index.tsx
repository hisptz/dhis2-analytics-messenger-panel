import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function EditDetailsModal(props: any) {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      <DialogTitle sx={{ mb: -2 }}>Edit User Details</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          color="primary"
          margin="dense"
          label="User name"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="dense"
          label="Email"
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
