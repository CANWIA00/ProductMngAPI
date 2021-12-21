import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductDeleteModal from "././ProductDeletModal";

const ProdcutDetails = (props) => {
  const { id } = useParams(props);
  //value.matches.params.id
  const [productObject, setProductObject] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/${id}`)
      .then((response) => {
        setProductObject(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="ui fluid container">
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img src="https://media.organized-home.com/wp-content/uploads/2018/05/Colorant-Raffia-Bag-733x936.jpg" />
          </div>
          <div className="content ">
            <a className="header">Name: {productObject.name}</a>
            <div className="meta">
              <span>Quantity: {productObject.quentity}</span>
            </div>
            <div className="extra">Cost: {productObject.price}</div>
            <ProductDeleteModal
              productObject={productObject}
            ></ProductDeleteModal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProdcutDetails;
