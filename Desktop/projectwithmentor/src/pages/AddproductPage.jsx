import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { adminContext } from "../Contexts/AdminContext";

const AddproductPage = () => {
  const data = React.useContext(adminContext);
  const { addProduct } = data;
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    size: "",
    color: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let key in newProduct) {
      let value = newProduct[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля");
          return;
        }
      }
    }

    addProduct(newProduct);
    setNewProduct({
      name: "",
      description: "",
      price: "",
      image: "",
      size: "",
      color: "",
    });
  };

  return (
    <Container>
      <div className="add-edit-page">
        <h2>Add product</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            value={newProduct.name}
            label="Enter the name"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            value={newProduct.description}
            label="Enter the description"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: parseInt(e.target.value) })
            }
            type="number"
            value={newProduct.price}
            label="Enter the price"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            value={newProduct.image}
            label="Add picture URL"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel id="color-select-label">Choose a color</InputLabel>
            <Select
              onChange={(e) =>
                setNewProduct({ ...newProduct, color: e.target.value })
              }
              value={newProduct.color}
              label="Choose a color"
              labelId="color-select-label"
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
            <InputLabel id="size-select-label">Choose a size</InputLabel>
            <Select
              onChange={(e) =>
                setNewProduct({ ...newProduct, size: e.target.value })
              }
              value={newProduct.size}
              label="Choose a size"
              labelId="size-select-label"
            >
              <MenuItem value="s">SMALL</MenuItem>
              <MenuItem value="m">MIDDLE</MenuItem>
              <MenuItem value="l">LARGE</MenuItem>
              <MenuItem value="xl">EXTRA LARGE</MenuItem>
              <MenuItem value="xxl">XXLARGE</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="outlined">
            SAVE
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default AddproductPage;
