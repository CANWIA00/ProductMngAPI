import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Product from "./component/Product";
import ProdcutDetails from "./component/ProductDetails";
import ProductCreate from "./component/ProductCreate";
import ProductEdit from "./component/ProductEdit";

function App() {
  return (
    <div className="ui raised very padded text container segment">
      <Router>
        <Routes>
          <Route path="/" exact element={<Product />}></Route>
          <Route
            path="/product/:id"
            element={<ProdcutDetails authed={true} />}
          ></Route>
          <Route path="/product/create" element={<ProductCreate />} />
          <Route
            path="/product/edit/:id"
            authed={true}
            element={<ProductEdit />}
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
