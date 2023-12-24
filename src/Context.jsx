import { createContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export const contextdata = createContext({
  arr: [],
  changearr: () => {},
  cartdata: [],
  addcart: () => {},
  removecart: () => {},
  spindata: [],
  changespindata: () => {},
});

let Context = () => {
  const [arr, changearr] = useState([
    // {
    //   images: ["https://i.dummyjson.com/data/products/1/1.jpg"],
    //   title: "iPhone 9",
    //   price: 549,
    //   rating: 4.69,
    //   description: "An apple mobile which is nothing like apple",
    // },
  ]);

  const [spindata, changespindata] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((value) => {
        return value.json();
      })
      .then((res) => {
        changearr(res.products);
        changespindata(false);
      });

    return () => {
      console.log("Cleared");
    };
  }, []);

  const [cartdata, changecartdata] = useState([]);

  let addcart = (element) => {
    let data = [...cartdata, element];
    changecartdata(data);
    console.log(element);
  };

  let removecart = (index) => {
    let data = cartdata.filter((e, ind) => {
      if (index === ind) return;
      else return e;
    });
    changecartdata(data);
  };

  return (
    <contextdata.Provider
      value={{
        arr,
        changearr,
        spindata,
        changespindata,
        cartdata,
        addcart,
        removecart,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </contextdata.Provider>
  );
};
export default Context;
