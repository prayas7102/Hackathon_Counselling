import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import QuestionForm from "./pages/QuestionForm/QuestionForm";

function App() {
  return (
    <div className="container">
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />}/>
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/newproduct" element={ <NewProduct />}/>
          <Route path="/question_form" element={ <QuestionForm />}/>
          </Routes>
          </Router>
      </div>
  );
}

export default App;
