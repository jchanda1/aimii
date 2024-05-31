import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import { searchActions } from "../../store/searchSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.search.searchTerm);

  function onChangeHandler(e) {
    dispatch(searchActions.setSearchTerm(e.target.value));
  }

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Enter your search term"
        variant="standard"
        value={searchTerm}
        onChange={onChangeHandler}
      />
      <Button variant="outlined">Search</Button>
    </div>
  );
};
