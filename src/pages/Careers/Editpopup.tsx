import React, { useState } from 'react';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import { Button, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import _ from 'lodash';
import MainCard from 'components/MainCard';
import Create from 'pages/apps/invoice/create';

interface AddpaymentProps {
    open: boolean;
    onClose: () => void;
}
const EditCareerPopup: React.FC<AddpaymentProps> = ({ open, onClose }) => {
    interface FormField {
        label: string;
        id: string;
        name: string;
        type?: string;
        placeholder?: string;
        value: any;
        error?: boolean;
        helperText?: string;
        mandatory?: boolean;
        options: { id: number; label: string }[];
        isMulti?: boolean;
    }

    interface FormData {
        [key: string]: FormField;
    }

    // Define form fields
    const formFields: FormData = {
        number: {
            label: 'Enater Office Mobile Number',
            id: 'number',
            name: 'number',
            type: 'number',
            value: '',
            error: false,
            helperText: '',
            mandatory: true,
            options: [],
        },
        ifccode: {
            label: 'Enter IFSC Code',
            id: 'ifccode',
            name: 'ifccode',
            type: 'text',
            value: '',
            error: false,
            helperText: '',
            mandatory: true,
            options: [],
        },
        baranch: {
            label: 'A/C Branch',
            id: 'baranch',
            name: 'baranch',
            type: 'text',
            value: '',
            error: false,
            helperText: '',
            mandatory: true,
            options: [],
        },
        bankname: {
            label: 'Bank Name',
            id: 'bankname',
            name: 'bankname',
            type: 'text',
            options: [],
            value: '',
            error: false,
            helperText: '',
            mandatory: true,
            isMulti: false,
        },
        mailid: {
            label: 'Office Mail ID',
            id: 'mailid',
            name: 'mailid',
            type: 'email',
            options: [ ],
            value: '' ,
            error: false,
            helperText: '',
            mandatory: true,
            isMulti: false,
        },
        accountnumber: {
            label: 'Account Number',
            id: 'accountnumber',
            name: 'accountnumber',
            type: 'text',
            options: [ ],
            value:  '' ,
            error: false,
            helperText: '',
            mandatory: true,
            isMulti: false,
        },
    };

    const [formData, setFormData] = useState<FormData>(formFields);
    const [openPopup, setOpenPopup] = useState(true); // Controls Dialog open/close state

    type FormDataKeys = keyof typeof formData;

    const validate = (): boolean => {
        let newFormData = _.cloneDeep(formData);
        let isValid = true;

        for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
                const field = formData[key];

                if (field.mandatory && (!field.value || (field.type === 'select' && !field.value.label))) {
                    newFormData[key].error = true;
                    newFormData[key].helperText = `${field.label} is required`;
                    isValid = false;
                } else {
                    newFormData[key].helperText = '';
                }
            }
        }

        setFormData(newFormData);
        return isValid;
    };

    const handleChange = (name: FormDataKeys, value: any) => {
        const newFormData = _.cloneDeep(formData);
        newFormData[name].value = value;
        newFormData[name].error = false;
        newFormData[name].helperText = '';
        setFormData(newFormData);
    };

  

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // if (validate()) {
        //     const sampleObject = {
              
      
        //     };
        //     console.log('Form Data Submitted:', sampleObject);
        //     onClose(); // Close popup on successful validation
        // }
        if (validate()) {
            onClose(); 
              const newRecord = {
                number: formData.number.value,
                ifccode: formData.ifccode.value,
                accountnumber: formData.accountnumber.value,
                mailid: formData.mailid.value,
                bankname: formData.bankname.value,
                baranch: formData.baranch.value,
               
                // status: formData.statusName.value ? "Enable" : "Disabled",
              };
          
              // setData((prevData: any) => [...prevData, newRecord]);
          
              console.log("Updated Data:",  newRecord); // Log updated data array
            }
           
    };

    return (
        <Dialog open={true} fullWidth maxWidth="sm">
            <DialogTitle>
                <Typography >Register Candidate</Typography>
            </DialogTitle>
            <DialogContent>
                <MainCard border={true} sx={{ padding: '10px 20px' }}>
                    <form onSubmit={handleFormSubmit} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <CommonInputField inputProps={formData.mailid} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <CommonInputField inputProps={formData.number} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <CommonInputField inputProps={formData.bankname} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <CommonInputField inputProps={formData.accountnumber} onChange={handleChange} />
                            </Grid>
                            
                            <Grid item xs={12} sm={6}>
                                <CommonInputField inputProps={formData.baranch} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <CommonInputField inputProps={formData.ifccode} onChange={handleChange} />
                            </Grid>
                            
                        </Grid>
                    </form>
                </MainCard>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="error" sx={{ margin: "1rem" }} onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="contained" color="primary" sx={{ margin: "1rem" }} onClick={handleFormSubmit}>
                    Register
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditCareerPopup;
