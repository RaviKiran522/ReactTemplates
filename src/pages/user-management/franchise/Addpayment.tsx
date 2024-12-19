import React, { useState } from 'react';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import { Button, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import _ from 'lodash';
import MainCard from 'components/MainCard';

interface AddpaymentProps {
    open: boolean;
    onClose: () => void;
  }
const Addpayment: React.FC<AddpaymentProps> = ({ open, onClose }) => {
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
        Paidamount: {
            label: 'Paid Amount',
            id: 'Paidamount',
            name: 'Paidamount',
            type: 'text',
            value: '',
            error: false,
            helperText: '',
            mandatory: true,
            options: [],
        },
        commission: {
            label: 'Enter Commission',
            id: 'commission',
            name: 'commission',
            type: 'text',
            value: '',
            error: false,
            helperText: '',
            mandatory: true,
            options: [],
        },
        saleby: {
            label: 'Sale By',
            id: 'saleby',
            name: 'saleby',
            type: 'select',
            options: [
                { id: 1, label: 'AE10019' },
                { id: 2, label: 'AE10020' },
                { id: 3, label: 'AE10021' },
            ],
            value: { id: 1, label: '' },
            error: false,
            helperText: '',
            mandatory: true,
            isMulti: false,
        },
        invoice: {
            label: 'Select Invoice',
            id: 'invoice',
            name: 'invoice',
            type: 'select',
            options: [
                { id: 1, label: 'DAYS' },
                { id: 2, label: 'WEEKS' },
                { id: 3, label: 'MONTHS' },
            ],
            value: { id: 1, label: '' },
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

    const handleSelectChange = (name: FormDataKeys, value: any) => {
        const newFormData = _.cloneDeep(formData);
        newFormData[name].value = value;
        newFormData[name].error = false;
        newFormData[name].helperText = '';
        setFormData(newFormData);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            const sampleObject = {
                saleby: formData.saleby.value,
                Paidamount: formData.Paidamount.value,
                commission: formData.commission.value,
                invoice: formData.invoice.value,
            };
            console.log('Form Data Submitted:', sampleObject);
            onClose(); // Close popup on successful validation
        }
    };

    return (
        <Dialog open={true} fullWidth maxWidth="sm">
            <DialogTitle>
                <Typography >Add Payment</Typography>
            </DialogTitle>
            <DialogContent>
                <MainCard border={true} sx={{ padding: '10px 20px' }}>
                    <form onSubmit={handleFormSubmit} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <CommonSelectField inputProps={formData.saleby} onSelectChange={handleSelectChange} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <CommonInputField inputProps={formData.Paidamount} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <CommonSelectField inputProps={formData.invoice} onSelectChange={handleSelectChange} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <CommonInputField inputProps={formData.commission} onChange={handleChange} />
                            </Grid>
                        </Grid>
                    </form>
                </MainCard>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="error" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="contained" color="primary" onClick={handleFormSubmit}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Addpayment;
