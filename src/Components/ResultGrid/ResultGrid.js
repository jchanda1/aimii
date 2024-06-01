import * as React from "react";
import { Card, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { userData } from "../../Data/Users";
import { useSelector } from "react-redux";
import removeSpaces from "../../util/utils";

const ResultGrid = () => {
  const searchTerm = useSelector((state) => state.search.searchTerm);

  // const results =
  //   searchTerm?.length > 2
  //     ? userData.filter((user) => {
  //         const fullName = user.firstName
  //           .toUpperCase()
  //           .concat(user.lastName.toUpperCase());

  //         return fullName.includes(removeSpaces(searchTerm.toUpperCase()));
  //       })
  //     : [];

  const results = userData;

  const resultGrid =
    results.length !== 0
      ? results.map((result) => {
          return (
            <Grid item xs={4}>
              <Card
                sx={{
                  minWidth: 275,
                  minHeight: 150,
                  borderRadius: "25px",
                  border: "1px solid white",
                }}
              >
                <CardContent
                  sx={{
                    p: 0,
                    pl: 12,
                    pr: 12,
                    "&:last-child": {
                      paddingBottom: 0,
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    component="div"
                    sx={{ mb: 1 }}
                  >
                    {`${result.firstName} ${result.lastName}`}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    {result.jobTitle}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {result.email}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 0 }}>
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
