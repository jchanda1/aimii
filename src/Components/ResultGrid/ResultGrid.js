import * as React from "react";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { userData } from "../../Data/Users";
import { useSelector } from "react-redux";

const ResultGrid = () => {
  const searchTerm = useSelector((state) => state.search.searchTerm);

  const results =
    searchTerm?.length > 2
      ? userData.filter((user) => {
          return (
            user.firstName.toUpperCase().includes(searchTerm.toUpperCase()) ||
            user.lastName.toUpperCase().includes(searchTerm.toUpperCase())
          );
        })
      : [];

  const resultGrid =
    results.length !== 0
      ? results.map((result) => {
          return (
            <React.Fragment>
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {`${result.firstName} ${result.lastName}`}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </React.Fragment>
          );
        })
      : [];

  return <>{resultGrid}</>;
};

export default ResultGrid;
