import React from 'react';
import QRCode from 'qrcode.react';
import { Dialog, DialogContent, DialogActions, Button, Typography } from '@mui/material';

interface QRCodeModalProps {
  open: boolean;
  onClose: () => void;
  qrValue: string;
}

export default function QRCodeModal({ open, onClose, qrValue }:QRCodeModalProps) {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="qr-code-dialog-title" style={{padding:'100px'}}>
      <DialogContent  style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px'
        }}>
        <Typography variant="h6" gutterBottom>
          Scan the below QR in WhatsApp
        </Typography>
        <QRCode value={qrValue} size={200} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit" variant='outlined' sx={{textTransform:'none',borderRadius:'50px',color:'GrayText'}}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

