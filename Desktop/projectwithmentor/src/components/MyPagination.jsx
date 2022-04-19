import { Button, Pagination } from "@mui/material";
import React, { useContext } from "react";
import { clientContext } from "../Contexts/ClientContext";

const MyPagination = () => {
  const data = useContext(clientContext);
  const { totalCount, productsPerPage, handlePagination } = data;
  const totalPages = Math.ceil(totalCount / productsPerPage);

  return (
    <div className="my-pagination">
      <Button onClick={handlePagination} variant="outlined">
        Show more
      </Button>
      {/* <Pagination
        onChange={(_, page) => handlePagination(page)}
        count={totalPages}
        color="primary"
      /> */}
    </div>
  );
};

export default MyPagination;
