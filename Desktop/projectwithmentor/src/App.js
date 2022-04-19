import React from "react";
import AdminContext from "./Contexts/AdminContext";
import ClientContext from "./Contexts/ClientContext";
import Navigation from "./Navigation";

const App = () => {
  return (
    <ClientContext>
      <AdminContext>
        <Navigation />
      </AdminContext>
    </ClientContext>
  );
};

export default App;
