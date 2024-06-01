import * as React from "react";
import Box from "@mui/material/Box";
import { Card, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { userData } from "../../Data/Users";
import { useSelector } from "react-redux";

const ResultGrid = () => {
  const searchTerm = useSelector((state) => state.search.searchTerm);

  const testFullName = userData[0].firstName
    .toUpperCase()
    .concat(userData[0].lastName.toUpperCase());
  console.log(searchTerm.toUpperCase());
  console.log(testFullName);
  console.log(testFullName.includes(searchTerm.toUpperCase()));

  const results =
    searchTerm?.length > 2
      ? userData.filter((user) => {
          const fullName = user.firstName
            .toUpperCase()
            .concat(user.lastName.toUpperCase());

          return fullName.includes(searchTerm.toUpperCase());
        })
      : [];

  console.log(results);

  const resultGrid =
    results.length !== 0
      ? results.map((result) => {
          return (
            <Grid item xs={4}>
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined" sx={{ borderRadius: "50px" }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {`${result.firstName} ${result.lastName}`}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {result.jobTitle}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {result.phone}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {result.email}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          );
        })
      : [];

  return (
    <Grid container spacing={3}>
      {resultGrid}
    </Grid>
  );
};

export default ResultGrid;
