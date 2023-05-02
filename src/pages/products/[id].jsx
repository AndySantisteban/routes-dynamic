import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Products() {
  const { id } = useParams();

  return (
    <div>
      Post ID: {id}
      <Link to="./a">asdasd</Link>
    </div>
  );
}
