import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FiltersBlock = ({ getProducts }) => {
  const location = useLocation("");
  const navigate = useNavigate();
  const filter = new URLSearchParams(location.search);
  const [searchValue, setSearchValue] = useState(filter.get("q") || "");
  const [colorValue, setColorValue] = useState(filter.get("color") || "");
  const [sizeValue, setSizeValue] = useState(filter.get("size") || "");

  const handleFilters = (key, value) => {
    filter.set(key, value);
    navigate(`${location.pathname}?${filter.toString()}`);
    setSearchValue(filter.get("q") || "");
    setColorValue(filter.get("color") || "");
    setSizeValue(filter.get("size") || "");
    getProducts();
  };

  const resetFilter = () => {
    setSearchValue("");
    setColorValue("");
    setSizeValue("");
    navigate("/");
    getProducts();
  };

  return (
    <div className="filters-block">
      <TextField
        variant="standard"
        value={searchValue}
        onChange={(e) => handleFilters("q", e.target.value)}
        type="search"
        label="Live Search ..."
      />
      <FormControl variant="standard">
        <InputLabel id="color-label">Choose a color</InputLabel>
        <Select
          value={colorValue}
          onChange={(e) => handleFilters("color", e.target.value)}
          label="Pick a color"
          labelId="color-label"
        >
          <MenuItem value="black">Black</MenuItem>
          <MenuItem value="white">White</MenuItem>
          <MenuItem value="blue">Blue</MenuItem>
          <MenuItem value="yellow">Yellow</MenuItem>
          <MenuItem value="pink">Pink</MenuItem>
          <MenuItem value="red">Red</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel id="size-label">Choose a size</InputLabel>
        <Select
          value={sizeValue}
          onChange={(e) => handleFilters("size", e.target.value)}
          label="Pick a size"
          labelId="size-label"
        >
          <MenuItem value="s">SMALL</MenuItem>
          <MenuItem value="m">MIDDLE</MenuItem>
          <MenuItem value="l">LARGE</MenuItem>
          <MenuItem value="xl">EXTRA LARGE</MenuItem>
          <MenuItem value="xxl">XXLARGE</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined" color="primary" onClick={resetFilter}>
        {" "}
        Reset filters
      </Button>
    </div>
  );
};

export default FiltersBlock;
