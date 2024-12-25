import React, { useState } from 'react';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Tab, Tabs, Box, Card, Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import defaultImages from 'assets/images/users/default.png';
import { CallCalling, Gps, Link1, Sms } from 'iconsax-react';

const detailsObject = {
    personalDetails: {
        name: 'saraswathi',
        gender: 'Male',
        maritalStatus: 'Married',
        status: 'Active',
        educationalQualification: 'MCA',
        state: 'AP',
        city: 'Visakhapatnam',
        branch: 'Vizag',
        religion: 'Hindu',
        cast: 'kamma',
        dob: '16-03-1995',
        adharNumber: '49689579133',
        joiningDate: '27-01-2018',
        experienceInyears: 4,
        tempAddress: 'guntur',
    },
    fatherDetails: {
        fathername: 'anjaneyulu',
        number: '9963838871',
        address: 'pedhakancharla vinukonda(m) guntur(d)',
    },
    husbandDetails: {
        name: 'movva umesh',
        number: '8367055588',
        address: 'pedhakancharla vinukonda(m) guntur(d)',
    },
    referDetails: {
        name: 'ashok',
        number: '9642670464',
        address: 'anjaneyulu,9963838871,pedhakancharla,vinukomda(m),guntur(d)',
    },
};

export default function CreerViewProfile() {
    const matchDownMD = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(
        'https://cdn.pixabay.com/photo/2022/11/09/00/44/aadhaar-card-7579588_1280.png'
    );

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onload = () => setPreviewImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleRemove = () => {
        setSelectedFile(null);
        setPreviewImage(
            'https://cdn.pixabay.com/photo/2022/11/09/00/44/aadhaar-card-7579588_1280.png'
        );
    };

    const handleUpload = () => {
        // Simulate an upload process
        setSelectedFile(null);
        // Hide all buttons after upload
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={5} md={4} xl={3}>
                <MainCard>
                    <Stack spacing={2.5} alignItems="center">
                        <Avatar alt="Avatar 1" size="xl" src={defaultImages} />
                        <Stack spacing={0.5} alignItems="center">
                            <Typography variant="h5">Anshan H.</Typography>
                            <Typography color="secondary">AE100057</Typography>
                            <Typography color="secondary">Project Manager</Typography>
                            <Typography color="secondary">Password : 34354343</Typography>
                        </Stack>
                    </Stack>
                    <Grid marginTop={2} marginBottom={2}>
                        <Divider />
                    </Grid>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <Sms size={18} />
                            </ListItemIcon>
                            <ListItemSecondaryAction>
                                <Typography align="right">anshan.dh81@gmail.com</Typography>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CallCalling size={18} />
                            </ListItemIcon>
                            <ListItemSecondaryAction>
                                <Typography align="right">+91 8654 239 581</Typography>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Gps size={18} />
                            </ListItemIcon>
                            <ListItemSecondaryAction>
                                <Typography align="right">New York</Typography>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Link1 size={18} />
                            </ListItemIcon>
                            <ListItemSecondaryAction>
                                <Link href="https:google.com" target="_blank">
                                    https:anshan.dh.url
                                </Link>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </MainCard>
            </Grid>
            <Grid item xs={12} sm={7} md={8} xl={9}>
                <Tabs value={tabIndex} onChange={handleTabChange}>
                    <Tab label="Personal Info" />
                    <Tab label="User Files" />
                </Tabs>
                <Divider />
                <Box sx={{ mt: 3 }}>
                    {tabIndex === 0 && (
                        <MainCard title="PROFILE DETAILS">
                            <Grid item xs={12}>
                                <MainCard title="PERSONAL DETAILS">
                                    <List sx={{ py: 0 }}>
                                        <ListItem divider={!matchDownMD}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={6}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Full Name</Typography>
                                                        <Typography>{detailsObject.personalDetails.name}</Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Marital Status</Typography>
                                                        <Typography>{detailsObject.personalDetails.maritalStatus}</Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                        <ListItem divider={!matchDownMD}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={6}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Status</Typography>
                                                        <Typography>{detailsObject.personalDetails.status}</Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Educational Qualification</Typography>
                                                        <Typography>{detailsObject.personalDetails.educationalQualification}</Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                        <ListItem divider={!matchDownMD}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={6}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">State</Typography>
                                                        <Typography>{detailsObject.personalDetails.state}</Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">City</Typography>
                                                        <Typography>{detailsObject.personalDetails.city}</Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                        <ListItem divider={!matchDownMD}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={6}>

                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Branch</Typography>
                                                        <Typography>{detailsObject.personalDetails.branch}</Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Religion</Typography>
                                                        <Typography>{detailsObject.personalDetails.religion}</Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                        <ListItem divider={!matchDownMD}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={6}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Cast</Typography>
                                                        <Typography>{detailsObject.personalDetails.cast}</Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Date of Birth</Typography>
                                                        <Typography>{detailsObject.personalDetails.dob}</Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                        <ListItem divider={!matchDownMD}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={6}>

                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Aadhar Number</Typography>
                                                        <Typography>{detailsObject.personalDetails.adharNumber}</Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Joining Date</Typography>
                                                        <Typography>{detailsObject.personalDetails.joiningDate}</Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                        <ListItem divider={!matchDownMD}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={6}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Experience (in years)</Typography>
                                                        <Typography>{detailsObject.personalDetails.experienceInyears}</Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Temporary Address</Typography>
                                                        <Typography>{detailsObject.personalDetails.tempAddress}</Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                    </List>
                                </MainCard>
                            </Grid>

                            <Grid item xs={12} marginTop={2} marginBottom={2}>
                                <MainCard title="FATHER DETAILS">
                                    <List sx={{ py: 0 }}>
                                        <ListItem divider>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={6}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Father Name</Typography>
                                                        <Typography>{detailsObject.fatherDetails.fathername}</Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Father Number</Typography>
                                                        <Typography>{detailsObject.fatherDetails.number}</Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                        <ListItem divider>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={12}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Father Address</Typography>
                                                        <Typography>{detailsObject.fatherDetails.address}</Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                    </List>
                                </MainCard>
                            </Grid>
                            <Grid item xs={12} marginTop={2} marginBottom={2}>
                                <MainCard title="HUSBAND DETAILS">
                                    <List sx={{ py: 0 }}>
                                        <ListItem divider>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={6}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Husband Name</Typography>
                                                        <Typography>{detailsObject.husbandDetails.name}</Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Husband Number</Typography>
                                                        <Typography>{detailsObject.husbandDetails.number}</Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                        <ListItem divider>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={12}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Husband Address</Typography>
                                                        <Typography>{detailsObject.husbandDetails.address}</Typography>
                                                    </Stack>
                                                </Grid>

                                            </Grid>
                                        </ListItem>

                                    </List>
                                </MainCard>
                            </Grid>
                            <Grid item xs={12} marginTop={2} marginBottom={2}>
                                <MainCard title="REFERER DETAILS">
                                    <List sx={{ py: 0 }}>
                                        <ListItem divider>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={6}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Reference Name</Typography>
                                                        <Typography>{detailsObject.referDetails.name}</Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Reference Number</Typography>
                                                        <Typography>{detailsObject.referDetails.number}</Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                        <ListItem divider>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} md={12}>
                                                    <Stack spacing={0.5}>
                                                        <Typography color="secondary">Reference Address</Typography>
                                                        <Typography>{detailsObject.referDetails.address}</Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                    </List>
                                </MainCard>
                            </Grid>

                        </MainCard>
                    )}
                    {tabIndex === 1 && (
                       <MainCard title="PERSONAL DETAILS">
                       <MainCard>
                           <Grid >
                               {/* Display the uploaded/placeholder image */}
                               <Grid item xs={12} sm={6} md={6}>
                                   <img
                                       src={previewImage ?? ''}
                                       alt="Aadhar Card"
                                       style={{
                                           width: '100%',
                                           maxWidth: '100%',
                                           borderRadius: '8px',
                                       }}
                                   />
                               </Grid>
                               {/* <Grid item xs={12} sm={6} md={6}>
                                   <Typography variant="h5">
                                       Aadhar Card
                                   </Typography>
                               </Grid> */}
                               <Grid item xs={12} sm={6} md={6}>
                               <Typography variant="h5">
                                       Aadhar Card
                                   </Typography>
                                   <input
                                       type="file"
                                       id="uploadAadhar"
                                       style={{ display: 'none' }}
                                       accept=".png,.jpg,.jpeg,.pdf"
                                       onChange={handleFileSelect}
                                   />
                                   {!selectedFile ? (
                                       <Typography
                                           variant="h6"
                                           align="center"
                                           color="primary"
                                           style={{ cursor: 'pointer' }}
                                           component="label"
                                           htmlFor="uploadAadhar"
                                       >
                                           Change Aadhar Card
                                       </Typography>
                                   ) : (
                                       <Stack spacing={2} alignItems="center">
                                           <Typography variant="body1">
                                               Selected File: {selectedFile.name}
                                           </Typography>
                                           <Stack direction="row" spacing={2}>
                                               <Button
                                                   variant="outlined"
                                                   color="secondary"
                                                   onClick={handleRemove}
                                               >
                                                   Remove
                                               </Button>
                                               <Button
                                                   variant="outlined"
                                                   color="error"
                                                   onClick={() => setSelectedFile(null)}
                                               >
                                                   Cancel
                                               </Button>
                                               <Button
                                                   variant="contained"
                                                   color="primary"
                                                   onClick={handleUpload}
                                               >
                                                   Upload
                                               </Button>
                                           </Stack>
                                       </Stack>
                                   )}
                               </Grid>
                           </Grid>
                       </MainCard>
                   </MainCard>
                    )}
                </Box>
            </Grid>
        </Grid>
    );
}

//              <Grid item xs={12} sm={7} md={8} xl={9}>
//                  <Grid container spacing={3}>
//                      <Grid item xs={12}>
//                          <MainCard title="PERSONAL DETAILS">
//                              <List sx={{ py: 0 }}>
//                                  <ListItem divider={!matchDownMD}>
//                                      <Grid container spacing={3}>
//                                          <Grid item xs={12} md={6}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Full Name</Typography>
//                                                  <Typography>{detailsObject.personalDetails.name}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                          <Grid item xs={12} md={6}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Marital Status</Typography>
//                                                  <Typography>{detailsObject.personalDetails.maritalStatus}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                      </Grid>
//                                  </ListItem>
//                                  <ListItem divider={!matchDownMD}>
//                                      <Grid container spacing={3}>
//                                          <Grid item xs={12} md={6}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Status</Typography>
//                                                  <Typography>{detailsObject.personalDetails.status}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                          <Grid item xs={12} md={6}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Educational Qualification</Typography>
//                                                  <Typography>{detailsObject.personalDetails.educationalQualification}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                      </Grid>
//                                  </ListItem>
//                                  <ListItem divider={!matchDownMD}>
//                                      <Grid container spacing={3}>
//                                          <Grid item xs={12} md={6}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">State</Typography>
//                                                  <Typography>{detailsObject.personalDetails.state}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                          <Grid item xs={12} md={6}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">City</Typography>
//                                                  <Typography>{detailsObject.personalDetails.city}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                      </Grid>
//                                  </ListItem>
//                                  <ListItem divider={!matchDownMD}>
//                                      <Grid container spacing={3}>
//                                          <Grid item xs={12} md={6}>

//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Branch</Typography>
//                                                  <Typography>{detailsObject.personalDetails.branch}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                          <Grid item xs={12} md={6}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Religion</Typography>
//                                                  <Typography>{detailsObject.personalDetails.religion}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                      </Grid>
//                                  </ListItem>
//                                  <ListItem divider={!matchDownMD}>
//                                      <Grid container spacing={3}>
//                                          <Grid item xs={12} md={6}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Cast</Typography>
//                                                  <Typography>{detailsObject.personalDetails.cast}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                          <Grid item xs={12} md={6}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Date of Birth</Typography>
//                                                  <Typography>{detailsObject.personalDetails.dob}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                      </Grid>
//                                  </ListItem>
//                                  <ListItem divider={!matchDownMD}>
//                                      <Grid container spacing={3}>
//                                          <Grid item xs={12} md={6}>

//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Aadhar Number</Typography>
//                                                  <Typography>{detailsObject.personalDetails.adharNumber}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                          <Grid item xs={12} md={6}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Joining Date</Typography>
//                                                  <Typography>{detailsObject.personalDetails.joiningDate}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                      </Grid>
//                                  </ListItem>
//                                  <ListItem divider={!matchDownMD}>
//                                      <Grid container spacing={3}>
//                                          <Grid item xs={12} md={6}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Experience (in years)</Typography>
//                                                  <Typography>{detailsObject.personalDetails.experienceInyears}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                          <Grid item xs={12} md={6}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Temporary Address</Typography>
//                                                  <Typography>{detailsObject.personalDetails.tempAddress}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                      </Grid>
//                                  </ListItem>
//                              </List>
//                          </MainCard>
//                      </Grid>
//                      <Grid item xs={12}>
//                          <MainCard title="FATHER DETAILS">
//                              <List sx={{ py: 0 }}>
//                                  <ListItem divider>
//                                      <Grid container spacing={3}>
//                                          <Grid item xs={12} md={6}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Father Name</Typography>
//                                                  <Typography>{detailsObject.fatherDetails.fathername}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                          <Grid item xs={12} md={6}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Father Number</Typography>
//                                                  <Typography>{detailsObject.fatherDetails.number}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                      </Grid>
//                                  </ListItem>
//                                  <ListItem divider>
//                                      <Grid container spacing={3}>
//                                          <Grid item xs={12} md={12}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Father Address</Typography>
//                                                  <Typography>{detailsObject.fatherDetails.address}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                      </Grid>
//                                  </ListItem>
//                              </List>
//                          </MainCard>
//                      </Grid>
//                      <Grid item xs={12}>
//                          <MainCard title="HUSBAND DETAILS">
//                              <List sx={{ py: 0 }}>
//                                  <ListItem divider>
//                                      <Grid container spacing={3}>
//                                          <Grid item xs={12} md={6}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Husband Name</Typography>
//                                                  <Typography>{detailsObject.husbandDetails.name}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                          <Grid item xs={12} md={6}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Husband Number</Typography>
//                                                  <Typography>{detailsObject.husbandDetails.number}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                      </Grid>
//                                  </ListItem>
//                                  <ListItem divider>
//                                      <Grid container spacing={3}>
//                                          <Grid item xs={12} md={12}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Husband Address</Typography>
//                                                  <Typography>{detailsObject.husbandDetails.address}</Typography>
//                                              </Stack>
//                                          </Grid>

//                                      </Grid>
//                                  </ListItem>

//                              </List>
//                          </MainCard>
//                      </Grid>
//                      <Grid item xs={12}>
//                          <MainCard title="REFERER DETAILS">
//                              <List sx={{ py: 0 }}>
//                                  <ListItem divider>
//                                      <Grid container spacing={3}>
//                                          <Grid item xs={12} md={6}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Reference Name</Typography>
//                                                  <Typography>{detailsObject.referDetails.name}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                          <Grid item xs={12} md={6}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Reference Number</Typography>
//                                                  <Typography>{detailsObject.referDetails.number}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                      </Grid>
//                                  </ListItem>
//                                  <ListItem divider>
//                                      <Grid container spacing={3}>
//                                          <Grid item xs={12} md={12}>
//                                              <Stack spacing={0.5}>
//                                                  <Typography color="secondary">Reference Address</Typography>
//                                                  <Typography>{detailsObject.referDetails.address}</Typography>
//                                              </Stack>
//                                          </Grid>
//                                      </Grid>
//                                  </ListItem>
//                              </List>
//                          </MainCard>
//                      </Grid>
//                  </Grid>
//              </Grid>
//      );
//  }
