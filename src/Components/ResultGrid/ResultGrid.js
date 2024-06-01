import * as React from "react";
import Box from "@mui/material/Box";
import { Card, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { userData } from "../../Data/Users";
import { useSelector } from "react-redux";
import removeSpaces from "../../util/utils";

const ResultGrid = () => {
  const searchTerm = useSelector((state) => state.search.searchTerm);

  const results =
    searchTerm?.length > 2
      ? userData.filter((user) => {
          const fullName = user.firstName
            .toUpperCase()
            .concat(user.lastName.toUpperCase());

          return fullName.includes(removeSpaces(searchTerm.toUpperCase()));
        })
      : [];

  const resultGrid =
    results.length !== 0
      ? results.map((result) => {
          return (
            <Grid item xs={4}>
              <Card
                sx={{
                  minWidth: 275,
                  borderRadius: "25px",
                  border: "1px solid white",
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    {`${result.firstName} ${result.lastName}`}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }}>{result.jobTitle}</Typography>
                  <Typography variant="body2">
                    {result.email}
                    <br />
                    {result.phone}
                  </Typography>
                </CardContent>
              </Card>
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
