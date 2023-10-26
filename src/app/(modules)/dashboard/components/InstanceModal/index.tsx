import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  MenuItem,
  DialogActions,
  Button
} from '@mui/material';
import QRCodeModal from '../QRCodeModal';
import { RHFTextInput } from '@/components/RHFTextInput';
import  {FormProvider, useForm} from 'react-hook-form';
import {z} from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

interface DHIS2AnalyticsModalProps {
  open: boolean;
  onClose: () => void;
}

const instanceSchema = z.object({
  name: z.string({required_error: "Username is required"}),
  dhis2Instance: z.string({required_error: "DHIS2 Instance is required"}).url(),
  dhis2AccessToken:z.string({required_error: "AccessToken is required"}),
  messagingPlatform: z.string({required_error: "Messaging platform is required"}),
  whatsAppnumber: z.string().min(13, "Number should not have less than 10 characters").regex(/\d/, "Password should have at least one number")
})

export type InstanceData = z.infer<typeof instanceSchema>;

const DHIS2AnalyticsModal: React.FC<DHIS2AnalyticsModalProps> = ({ open, onClose}) => {
  const [openQr, setOpenQr] = useState(false);
  const [qrValue, setQrValue] = useState(""); 
  const handleOpen = async (data: InstanceData)  => {
    setQrValue(data.dhis2Instance);
     setOpenQr(true); 
    
     console.log("here is", data); 
    };
  const handleClose = () => {setOpenQr(false); };
  const form = useForm<InstanceData>({
    resolver: zodResolver(instanceSchema)
   });      


  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-instance"
      maxWidth="xs"
    >
      <DialogTitle id="form-dialog-instance">DHIS2 Analytics Instance</DialogTitle>
      <FormProvider {...form} >
        <form onSubmit={form.handleSubmit(handleOpen)}>
      <DialogContent>
      
        <RHFTextInput
          autoFocus
          name="name"
          margin="dense"
          label="Name"
          type="text"
          placeholder="HMIS Tanzania"
        />
        <RHFTextInput
          name="dhis2Instance"
          margin="dense"
          label="DHIS2 Instance"
          type="url"
          placeholder="https://dhis2.org.tz"
        />
        <RHFTextInput
          name="dhis2AccessToken"
          margin="dense"
          label="DHIS2 Access Token"
          type="text"
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
        />
        <RHFTextInput
          name="messagingPlatform"
          select
          margin="dense"
          label="Messaging platform"
        >
          <MenuItem value="WhatsApp">WhatsApp</MenuItem>
          <MenuItem value="Telegram">Telegram</MenuItem>
         
        </RHFTextInput>
        <RHFTextInput
          name="whatsAppnumber"
          margin="dense"
          label="WhatsApp number"
          type="text"
          helperText="Start the number with country code, eg: +255"
          placeholder="+2556830000000"
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
          color="primary"
          sx={{ textTransform: "none", borderRadius: "50px" }}
          variant="contained"
         type="submit"
        >
          Save
        </Button>
      </DialogActions>
      
      </form>
      </FormProvider>
      <QRCodeModal open={openQr} onClose={handleClose} qrValue={qrValue} />

    </Dialog>
  );
};

export default DHIS2AnalyticsModal;
