import React, { useState } from 'react';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import { Button, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Card, Paper } from '@mui/material';
import _ from 'lodash';
import MainCard from 'components/MainCard';
import { View } from '@react-pdf/renderer';
import { display } from '@mui/system';

interface AddpaymentProps {
    open: boolean;
    onClose: () => void;
}
const Viewapprovalpopup: React.FC<AddpaymentProps> = ({ open, onClose }) => {
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

        approve: {
            label: 'Status',
            id: 'approve',
            name: 'approve',
            type: 'select',
            options: [
                { id: 1, label: 'Verified' },
                { id: 2, label: 'Rejected' },
                // { id: 3, label: 'AE10021' },
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
                approve: formData.approve.value,

            };
            console.log('Form Data Submitted:', sampleObject);
            onClose(); // Close popup on successful validation
        }
    };

    return (
        // <Dialog open={true} fullWidth maxWidth="md">
        //     <DialogTitle>
        //         <Typography >Approve</Typography>
        //     </DialogTitle>
        //     <DialogContent>
        //         <MainCard>

        //             <Grid item  sx={{ display: 'flex', flexDirection: 'row' }}  >
        //                 {/* <Paper> */}
        //                 <Grid item>
        //                     <img
        //                         src="https://cdn.pixabay.com/photo/2022/11/09/00/44/aadhaar-card-7579588_1280.png"
        //                         alt="Sample"
        //                         style={{ width: '100%', maxWidth: '60%', borderRadius: '8px', }}
        //                     />
        //                 </Grid>
        //                 <Grid item xs={12} sm={5} md={4} xl={2}>
        //                     <Card style={{ width: '100%',borderRadius: '8px', }}>
        //                         <Typography variant="h6">
        //                             Aadhar Card
        //                         </Typography>
        //                         <Typography variant="h6" >
        //                             John Doe
        //                         </Typography>
        //                     </Card>
        //                 </Grid>

        //             </Grid>
        //             <Grid>
        //                 <form onSubmit={handleFormSubmit} noValidate>
        //                     <Grid container spacing={2}>
        //                         <Grid item xs={12} sm={6}>
        //                             <CommonSelectField inputProps={formData.approve} onSelectChange={handleSelectChange} />
        //                         </Grid>
        //                     </Grid>
        //                 </form>
        //             </Grid>

        //         </MainCard>
        //     </DialogContent>
        //     <DialogActions>
        //         <Button variant="contained" color="error" onClick={onClose}>
        //             Cancel
        //         </Button>
        //         <Button variant="contained" color="primary" onClick={handleFormSubmit}>
        //             Submit
        //         </Button>
        //     </DialogActions>
        // </Dialog>
        <Dialog open={true} fullWidth maxWidth="md">
            <DialogTitle>
                <Typography> Approval</Typography>
            </DialogTitle>
            <DialogContent>
                <MainCard>
                    <Grid container spacing={2} >
                        {/* Left Side: Image */}
                        <Grid item xs={12} sm={6} md={6}>
                            <Card
                                sx={{
                                    width: '100%',
                                    borderRadius: '8px',
                                    padding: 2,
                                }}
                            >
                                <img
                                    src="https://cdn.pixabay.com/photo/2022/11/09/00/44/aadhaar-card-7579588_1280.png"
                                    alt="Sample"
                                    style={{
                                        width: '100%',
                                        maxWidth: '100%',
                                        borderRadius: '8px',
                                    }}
                                />
                            </Card>
                        </Grid>
                        {/* Right Side: Card Details */}
                        <Grid item xs={12} sm={6} md={6}>
                            <Card
                                sx={{
                                    width: '100%',
                                    maxWidth: '100%',
                                    borderRadius: '8px',
                                    padding: 2,
                                }}
                            >
                                <Typography variant="h5">Aadhar Card</Typography>
                                <Typography variant="h5">John Doe</Typography>
                                <Typography variant="h5">Aadhar Card</Typography>
                                <Typography variant="h5">John Doe</Typography>
                                <Typography variant="h5">Aadhar Card</Typography>
                                <Typography variant="h5">John Doe</Typography>
                            </Card>
                            <Grid container spacing={2} sx={{ marginTop: 5, padding: 4 }}>
                                <form onSubmit={handleFormSubmit} noValidate style={{ width: '100%' }}>
                                    <Grid item xs={12} >
                                        <CommonSelectField
                                            inputProps={formData.approve}
                                            onSelectChange={handleSelectChange}

                                        />
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Form Section */}

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

export default Viewapprovalpopup;
