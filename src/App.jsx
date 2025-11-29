import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./route";
import ScrollToTop from "./ScrollToTop";


function App() {
  return (
    <BrowserRouter>
          <ScrollToTop/>
    
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
