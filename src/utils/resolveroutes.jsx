// router.js
import React from "react";

const resolveRoutes = () => {
  const pages = import.meta.glob("../pages/**/**/**/**/**/**.jsx");

  return Object.keys(pages).map((path) => {
    const component = pages[path];

    const dynamicPath = path.slice(9, -4);

    let parameterizedPath = dynamicPath;

    if (/\[(.*?)\]/.test(dynamicPath)) {
      parameterizedPath = dynamicPath.replace(/\[(.*?)\]/g, (match, p1) => {
        const parameters = p1.split(",");
        return `:${parameters.join("/:")}`;
      });
    }

    const hasIndex =
      pages[`../pages/${dynamicPath.replace("/index", "")}/index.jsx`];

    return {
      path: hasIndex
        ? `/${
            dynamicPath.includes("/index", "")
              ? dynamicPath.replace("/index", "")
              : dynamicPath
          }`
        : `/${parameterizedPath}`,
      Component: React.lazy(() => component()),
    };
  });
};

const routes = resolveRoutes();

export default routes;
