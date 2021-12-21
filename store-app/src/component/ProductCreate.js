import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createBrowserHistory } from "history";

const ProductCreate = (props) => {
  const [exceptionMessage, setExceptionMessage] = useState("");
  const [productObject, setProductObject] = useState({
    name: "",
    quentity: "",
    price: "",
  });
  const { id } = useParams(props);

  useEffect(() => {
    if (
      props.productObject.name &&
      props.productObject.quentity &&
      props.productObject.price
    ) {
      setProductObject(props.productObject);
    }
  }, [props.productObject]);

  const onInputChange = (event) => {
    setProductObject({
      ...productObject,
      [event.target.name]: event.target.value,
    });
  };

  const onProductCreate = (event) => {
    event.preventDefault();
    setExceptionMessage("");

    if (props.productObject.name) {
      axios
        .put(`http://localhost:8080/product/${id}`, productObject)
        .then((response) => {
          props.history.push(`http://localhost:8080/product/${id}`);
        })
        .catch((error) => {
          setExceptionMessage("Please, check your configurations.");
        });
    } else {
      axios
        .post(`http://localhost:8080/product`, productObject)
        .then((response) => {
          props.history.push(`/`);
        })
        .catch((error) => {
          setExceptionMessage("Please, check your configurations.");
        });
    }
  };
  // ayni seviyede birden fazla division kullanilirsa react.fragment kullanilmasi gerekir
  return (
    <React.Fragment>
      {exceptionMessage && (
        <div className="ui error message">
          <div className="header">Action Forbidden</div>
          <p>{exceptionMessage}</p>
        </div>
      )}
      <form className="ui form">
        <div className="field">
          <label> Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={productObject.name}
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <label>Quantity</label>
          <input
            type="text"
            name="quentity"
            placeholder="Quantity"
            value={productObject.quentity}
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <label>Price</label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={productObject.price}
            onChange={onInputChange}
          />
        </div>
        <button className="ui button" type="submit" onClick={onProductCreate}>
          Add
        </button>
      </form>
    </React.Fragment>
  );
};
export default ProductCreate;
