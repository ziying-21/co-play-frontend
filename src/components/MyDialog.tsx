import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { Dispatch, SetStateAction } from 'react';
import { Button, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface MyDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onOK: (event: React.MouseEvent<HTMLButtonElement>) => void;
  okText: string;
  children?: React.ReactNode;
  title: string;
}

const MyDialog = (props: MyDialogProps) => {
  return (
    <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={props.open}
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {props.title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
          onClick={() => {props.setOpen(false);}}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {props.children}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.onOK}>
            {props.okText}
          </Button>
        </DialogActions>
      </BootstrapDialog>
  )
}

export default MyDialog;