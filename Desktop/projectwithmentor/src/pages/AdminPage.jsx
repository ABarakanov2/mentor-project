import { Container } from "@mui/material";
import React, { useEffect } from "react";
import AdminTable from "../components/AdminTable";
import { adminContext } from "../Contexts/AdminContext";

const AdminPage = () => {
  const data = React.useContext(adminContext);
  const { getProduct, products } = data;
  console.log(products);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container>
      <div>
        <h1>Admin Page</h1>
        <AdminTable products={products} />
      </div>
    </Container>
  );
};

export default AdminPage;
