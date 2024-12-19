import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import _ from 'lodash';
import { useNavigate } from 'react-router';
import CommonSelectField from 'pages/common-components/common-select';
import Grid from '@mui/material/Grid';
import CommonInputField from 'pages/common-components/common-input';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function BlockInBound(props:any) {
    interface FormField {
        label: any;
        id: any;
        name: any;
        type?: any;
        placeholder?: any;
        value: any;
        error?: boolean;
        helperText?: any;
        mandatory?: boolean;
        options: { id: any; label: any }[];
        isMulti?: boolean;
      }
    
      interface FormData {
        [key: string]: FormField;
      }
   

      const formFields: FormData = {
        staffMobile: {
          label: 'Staff Mobile',
          id: 'staffMobile',
          name: 'staffMobile',
          type: 'text',
          value: '',
          error: false,
          helperText: '',
          mandatory: false,
          options : []
        },
        
        reason: {
          label: 'Reason',
          id: 'reason',
          name: 'reason',
          type:'select',
          options: [
            { id: 1, label: 'Waste' },
            { id: 2, label: 'Married Settled' },
            { id: 3, label: 'Not Interested' },
            { id: 4, label: 'Bad Service' },
            { id: 4, label: 'Wrong Number' },
          ],
          value: '',
          error: false,
          helperText: '',
          mandatory: false,
          isMulti: false,
        }
    }

    const [formData, setFormData] = React.useState<FormData>(formFields);
    const history = useNavigate();
    type FormDataKeys = keyof typeof formData;
    const handleChange = (name: FormDataKeys, value: any) => {
      const newFormData = _.cloneDeep(formData);
      newFormData[name].value = value;
      newFormData[name].error = false;
      newFormData[name].helperText = '';
      setFormData(newFormData);
    };
  
    const handleSelectChange = (name: FormDataKeys, value: any) => {
      const newFormData = _.cloneDeep(formData);
      
        newFormData[name].value = value;
        newFormData[name].error = false;
        newFormData[name].helperText = '';
        setFormData(newFormData);
      
      
    };

  
  const handleClose = () => {
    props.handleClose(false)
  };

  return (
    <React.Fragment>
     
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Block Customer
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers style={{width:'600px'}}>
        <Grid container spacing={3} >
            <Grid item xs={6} >
                <CommonSelectField inputProps={formData.reason} onSelectChange={handleSelectChange} />
            </Grid>
            <Grid item xs={6}>
            <CommonInputField inputProps={formData.staffMobile} onChange={handleChange} />
          </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button >
            Block
          </Button>
          <Button onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}