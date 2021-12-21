import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductCreate from "./ProductCreate";

const ProductEdit = (props) => {
  const { id } = useParams(props);
  const [productObject, setProductObject] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8080/product/${id}`).then((response) => {
      setProductObject({
        name: response.data.name,
        quentity: response.data.quentity,
        price: response.data.price,
      });
    });
  }, [id]);

  return (
    <div>
      <ProductCreate productObject={productObject} />
    </div>
  );
};
export default ProductEdit;
