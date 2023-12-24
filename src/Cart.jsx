import { useContext } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { contextdata } from "./Context";
import { FiDollarSign } from "react-icons/fi";

let Cart = () => {
  const { addcart, removecart, cartdata } = useContext(contextdata);

  let Total = 0;
  let discount = 0;
  let Conviniencefee = 50 * cartdata.length;
  let TotalAmount = 0;

  cartdata.forEach((e) => {
    Total += e.price;
    discount += e.discountPercentage;
  });

  discount = Math.round((discount * Total) / 100);

  if (discount > Total) {
    TotalAmount = Math.floor(discount - Total + Conviniencefee);
  } else {
    TotalAmount = Math.floor(Total - discount + Conviniencefee);
  }

  return (
    <div className="Container-cart">
      {cartdata.length === 0 ? (
        <h1 className="cart-msg">Cart is empty Plase Add items!!!</h1>
      ) : (
        <div className="main-cart">
          <div className="cartitem">
            {cartdata.map((e, ind) => (
              <div className="shop-main-div2" key={ind}>
                <div className="boxes-shop3">
                  <img
                    src={`${e.images[0]}`}
                    style={{
                      height: "156px",
                      maxWidth: "290px",
                      marginRight: "10px",
                    }}
                    alt=""
                  />
                  <div className="cartinfo">
                    <p className="p-shop2">{e.title}</p>
                    <h3 className="h3-shop2">{e.off}</h3>
                    <div className="pshop2 price-div">
                      <div className="main-price-div2">
                        <span className="ogprice">{e.price}$</span>
                        <span className="discount">
                          {" "}
                          ({e.discountPercentage}$ %off)
                        </span>
                      </div>
                    </div>
                    <p style={{ color: "black", fontSize: "13px" }}>
                      <span style={{ fontWeight: "bold" }}>14 Days</span> Return
                      Available
                    </p>
                  </div>
                </div>
                <div className="deletecart" onClick={() => removecart(ind)}>
                  <MdDelete />
                </div>
              </div>
            ))}
          </div>

          {/* Bill generator */}

          <div className="cart-price">
            <div className="cart-price-div">
              <div className="cart-box-1">
                <h4>PRICE DETAILS ({cartdata.length})</h4>
                <div className="subbox-cart">
                  <h4>Total MRP</h4>
                  <h4 className="rsdiv">
                    <FiDollarSign />
                    {Total}
                  </h4>
                </div>
                <div className="subbox-cart">
                  <h4>Discount on MRP</h4>
                  <h4 className="rsdiv discountrs">
                    -<FiDollarSign />
                    {discount} %
                  </h4>
                </div>
                <div className="subbox-cart">
                  <h4>Convenience Fee</h4>
                  <h4 className="rsdiv">
                    <FiDollarSign />
                    {Conviniencefee}
                  </h4>
                </div>
              </div>
              <div className="cart-box-2">
                <div className="subbox-cart">
                  <h4>Total Amount</h4>
                  <h4 className="rsdiv">
                    <FiDollarSign /> {TotalAmount}
                  </h4>
                </div>
                <button className="cart-btn">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
