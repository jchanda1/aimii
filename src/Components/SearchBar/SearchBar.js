import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, Grid, TextField } from "@mui/material";
import { searchActions } from "../../store/searchSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.search.searchTerm);

  function onChangeHandler(e) {
    dispatch(searchActions.setSearchTerm(e.target.value));
  }

  return (
    <Grid container spacing={0}>
      <Grid item xs={11}>
        <TextField
          id="standard-basic"
          label="Search for a user..."
          variant="outlined"
          value={searchTerm}
          onChange={onChangeHandler}
          fullWidth
          InputProps={{
            style: {
              borderTopLeftRadius: "50px",
              borderBottomLeftRadius: "50px",
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "0px",
              backgroundColor: "white",
              color: "black",
            },
          }}
        />
      </Grid>
      <Grid item xs={1}>
        <Button
          variant="contained"
          sx={{
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "50px",
            height: "100%",
          }}
        >
          Go!
        </Button>
      </Grid>
    </Grid>
  );
};
