import React from "react";
import { Link, useParams } from "react-router-dom";

function Page() {
  const { id, ad, cd } = useParams();

  return (
    <div>
      Post ID: {id + " " + ad + " " + cd}
      <Link to="/products/payment/create"> To Product </Link>
    </div>
  );
}

export default Page;
