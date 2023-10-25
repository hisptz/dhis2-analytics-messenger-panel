import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  DialogActions,
  Button
} from '@mui/material';

interface DHIS2AnalyticsModalProps {
  open: boolean;
  onClose: () => void;
}

const DHIS2AnalyticsModal: React.FC<DHIS2AnalyticsModalProps> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">DHIS2 Analytics Instance</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          placeholder="HMIS Tanzania"
        />
        <TextField
          margin="dense"
          id="instance"
          label="DHIS2 Instance"
          type="url"
          fullWidth
          placeholder="https://dhis2.org.tz"
        />
        <TextField
          margin="dense"
          id="accessToken"
          label="DHIS2 Access Token"
          type="text"
          fullWidth
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
        />
        <TextField
          select
          label="Messaging platform"
          value="WhatsApp" 
          fullWidth
        >
          <MenuItem value="WhatsApp">WhatsApp</MenuItem>
          <MenuItem value="Telegram">Telegram</MenuItem>
         
        </TextField>
        <TextField
          margin="dense"
          id="whatsAppNumber"
          label="WhatsApp number"
          type="text"
          fullWidth
          helperText="Start the number with country code, eg: +255"
          placeholder="+2556830000000"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onClose} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DHIS2AnalyticsModal;
