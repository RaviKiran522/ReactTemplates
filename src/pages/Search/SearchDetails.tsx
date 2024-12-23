import Grid from "@mui/material/Grid";
import MainCard from "components/MainCard";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import React, { useState } from "react";
import PaginationButtons from "./Paginations"; // Import the new pagination component
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";

export default function SearchDetails(props: any) {
  const { data = [] } = props;
  const rowsPerPage = 10; // Define rows per page
  const [pageNumber, setPageNumber] = useState(1);

  // Calculate the displayed data based on the page number
  const paginatedData = data.slice((pageNumber - 1) * rowsPerPage, pageNumber * rowsPerPage);

  // Handle page change
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNumber(value);
  };

  return (
    <Grid container spacing={3} style={{ width: "100%" }}>
     <Grid container sx={{ display: "flex", flexDirection: "row", padding: "10px 0px", marginBottom: "1", }} >
            <Typography variant="h3" >
              SEARCH RESULTS
            </Typography>
            <Card style={{ backgroundColor: "#e3e291", width: '40%', height: '30px', marginLeft: "17%", padding: "5px" }} >
              Total Profiles Based on Your Filter's is
              <Button sx={{ color: "white", backgroundColor: "#e3526c", width: '40px', height: '20px', marginLeft: "26px" }}>51123</Button>
            </Card>
          </Grid>
      <Grid item xs={12} marginBottom={1} >
              <Divider />
            </Grid>
      {/* Top Pagination */}
      <Grid item xs={12} display="flex" justifyContent="flex-end">
        <PaginationButtons
          count={Math.ceil(data.length / rowsPerPage)}
          page={pageNumber}
          onChange={handlePageChange}
        />
      </Grid>

      {/* Search Results */}
      <Grid item xs={12}>
        {paginatedData.length > 0 &&
          paginatedData.map((each: any, index: number) => (
            <MainCard key={index} style={{ marginBottom: "16px",borderColor: '#878683' }}>
              
              <Grid container sx={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
                <Grid item xs={12} sm={5} md={4} xl={2}>
                  {/* <MainCard> */}
                  <div style={{ textAlign: "center" }}>
                  <Card style={{ borderColor: '#4680FF',padding:'10px' }} >
                    
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Sample"
                        style={{
                          width: "100%",
                          maxWidth: "70px",
                          borderRadius: "8px",
                          marginBottom: "10px",
                        }}
                      />
                     
                      <Typography variant="h6" color="error">
                        John Doe
                      </Typography>

                      <button style={{ marginTop: "2px", padding: "2px", }}>
                        AM101060
                      </button>
                      </Card>
                    </div>
                    
                  {/* </MainCard> */}
                </Grid>
                <Grid item xs={12} sm={5} md={4} xl={4}>
                  <Card style={{ padding: "15px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Typography color="secondary">Age :</Typography>
                      <Typography>{each.age}</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Typography color="secondary">Height :</Typography>
                      <Typography>{each.height}</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Typography color="secondary">Religion :</Typography>
                      <Typography>{each.religion}</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Typography color="secondary">Caste :</Typography>
                      <Typography>{each.caste}</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Typography color="secondary">Marital Status :</Typography>
                      <Typography>{each.maritalStatus}</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Typography color="secondary">User Type :</Typography>
                      <Typography>{each.usertype}</Typography>
                    </div>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={5} md={4} xl={4}>
                  <Card style={{ padding: "15px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Typography color="secondary">Mother Tongue :</Typography>
                      <Typography>{each.mothertongue}</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Typography color="secondary">Profession :</Typography>
                      <Typography>{each.profession}</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Typography color="secondary">Date Of Birth :</Typography>
                      <Typography>{each.dateOfBirth}</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Typography color="secondary">Education :</Typography>
                      <Typography>{each.education}</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Typography color="secondary">Annual Income :</Typography>
                      <Typography>{each.annualincome}</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Typography color="secondary">Branch :</Typography>
                      <Typography>{each.branch}</Typography>
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </MainCard>
          ))}
      </Grid>

    </Grid>
  );
}
