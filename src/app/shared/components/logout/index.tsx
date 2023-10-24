import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';
interface LogoutModalProps {
    open: boolean;
    onClose: () => void;
  }
export function LogoutModal({ open, onClose }: LogoutModalProps)  {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{padding:6,paddingX:12}}>Are you sure you want to logout?</DialogTitle>
      <DialogActions sx={{paddingX:3, paddingBottom:3 }}>
        <Button 
          onClick={onClose} 
          variant="outlined" 
          sx={{ borderRadius: '50px' }}>
          Cancel
        </Button>
        <Button 
          onClick={onClose} 
          variant="contained" 
          color="error" 
          sx={{ borderRadius: '50px' }}>
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  );
}
