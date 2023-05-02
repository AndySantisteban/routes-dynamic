// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./utils/resolveroutes";

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path === "/index" ? "/" : route.path}
              exact
              path={route.path === "/index" ? "/" : route.path}
              element={<route.Component />}
            />
          ))}
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
