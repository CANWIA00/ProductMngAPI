import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const [getAllProduct, setgetallproduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/product")
      .then((response) => setgetallproduct(response.data));
  }, []);

  return (
    <div className="ui link cards">
      <div className="card">
        <div className="image">
          <img src="https://flyclipart.com/thumb2/plus-symbol-transparent-images-png-arts-163387.png"></img>
        </div>
        <div className="content">
          <Link to="/product/create" className="ui button">
            Create
          </Link>
        </div>
      </div>
      {getAllProduct.map((product) => {
        return (
          <div className="card" key={product.id}>
            <div className="image">
              <img src="https://media.organized-home.com/wp-content/uploads/2018/05/Colorant-Raffia-Bag-733x936.jpg" />
            </div>
            <div className="content">
              <div className="header">Name: {product.name}</div>
              <div className="meta">
                <a>Quantity: {product.quentity}</a>
              </div>
            </div>
            <div className="extra content">
              <span className="right floated">
                <Link
                  to={`/product/edit/${product.id}`}
                  className="ui animated button"
                  tabIndex="0"
                >
                  <div className="visible content">Edit</div>
                  <div className="hidden content">
                    <i className="pencil alternate icon"></i>
                  </div>
                </Link>
                <Link
                  to={`product/${product.id}`}
                  className="ui animated button"
                  tabIndex="0"
                >
                  <div className="visible content">Details</div>
                  <div className="hidden content">
                    <i className="address card icon"></i>
                  </div>
                </Link>
              </span>
              <span className="left floated">
                <i className="dollar sign icon"></i>
                Price: {product.price}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Product;
