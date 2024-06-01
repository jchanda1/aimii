import * as React from "react";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ResultCard = (user) => {
  console.log(user);
  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              {`${user.firstName} ${user.lastName}`}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default ResultCard;
