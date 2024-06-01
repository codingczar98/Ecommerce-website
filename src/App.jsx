import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Errorpage from "./Pages/Errorpage";
import Home from "./Pages/Home";
import { ProductDeatils } from "./Pages/ProductDeatils";
import { useState } from "react";
import { Cart } from "./Pages/Cart";
import { Login } from "./Pages/Login";
import { ProtectedRoute } from './Components/ProtectedRoute';

function App() {
  const [cart, setCart] = useState([]);

  const addtocart = (prd) => {
    let ispresent = false;
    cart.forEach((item, index) => {
      if (item.id === prd.id) {
        ispresent = true;
      }
      console.log(prd,'App');
    });
    if (ispresent) {
      alert("This item is already present in cart");
      return;
    }
    else {
      setCart([...cart, prd]);
      console.log(cart);
    }
  };

  const handleqty = (sign, index) => {
    let ind = cart.findIndex((value, pos) => pos == index);
    console.log(ind);
    switch (sign) {
      case "+":
        cart[ind].qty=cart[ind].qty+1;
        break;
      case "-":
        if (cart[ind].qty != 1) {
          cart[ind].qty=cart[ind].qty-1;
        }
    }
    setCart([...cart]);
  };
  // remove item

  const handleremove = (index) => {
    cart.splice(index, 1);
    setCart([...cart]);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout cartlength={cart.length} />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/blogs" element={<Blog addtocart={addtocart} />} />
            <Route path='/cart' element={<ProtectedRoute Comp={Cart} cart={cart} handleqty={handleqty} handleremove={handleremove}/>}/>
            <Route path="/blogs/:id/:title" element={<ProductDeatils addtocart={addtocart} />} />
            <Route path="*" element={<Errorpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
