import React from "react";
import { Link, useParams } from "react-router-dom";

function PageProduct() {
  const { id, ad } = useParams();

  return (
    <div>
      Post ID: {id + "  " + ad} <Link to="./a">asdasd</Link>
    </div>
  );
}

export default PageProduct;
