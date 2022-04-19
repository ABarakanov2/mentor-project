import { Container } from "@mui/material";
import React, { useContext, useEffect, useReducer } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FiltersBlock from "../components/FiltersBlock";
import MyPagination from "../components/MyPagination";
import ProductCard from "../components/ProductCard";
import { clientContext } from "../Contexts/ClientContext";

const MainPage = (props) => {
  const data = useContext(clientContext);
  const { getProducts, products, handlePagination } = data;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <div>
          <FiltersBlock getProducts={getProducts} />
        </div>
        <InfiniteScroll
          dataLength={products.length}
          next={handlePagination}
          hasMore={true}
          loader={<h3>Loading ... </h3>}
        >
          <div className="products-list">
            {products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </InfiniteScroll>
        {/* <MyPagination /> */}
      </Container>
    </div>
  );
};

export default MainPage;
