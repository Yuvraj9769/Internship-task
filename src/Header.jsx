import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { contextdata } from "./Context";

let Header = () => {
  const navigate = useNavigate();

  const { cartdata } = useContext(contextdata);

  let changetab = () => {
    navigate("/Cart");
  };

  return (
    <div className="header">
      <div className="h-box-1">
        <div className="header-1" onClick={() => navigate("/")}>
          <img
            src="https://i.graphicmama.com/blog/wp-content/uploads/2020/05/01085602/letter-M-with-man-vector-logo-design.jpg"
            alt=""
            className="img-head"
          />
        </div>
        <h5 className="head-h5 pink">MEN</h5>
        <h5 className="head-h5 pink">WOMEN</h5>
        <h5 className="head-h5 red">KIDS</h5>
        <h5 className="head-h5 yellow" style={{ width: "120px" }}>
          HOME & LIVING
        </h5>
        <h5 className="head-h5 skyblue">BEAUTY</h5>
        <h5 className="head-h5 std pink">
          STUDIO
          <span id="new">NEW</span>
        </h5>
      </div>
      <div className="box-2">
        <div className="sub-div-1">
          <h4 className="h4-box-2">
            <IoIosSearch />
          </h4>
          <input
            type="text"
            id="inp"
            placeholder="Search for products,brands and more"
          />
        </div>
        <div className="sub-div-1-2">
          <h4 className="h4-box-2-1">
            <FaRegUser />
            <span>Profile</span>
          </h4>
          <h4 className="h4-box-2-1">
            <CiHeart />
            <span>Wishlist</span>
          </h4>
          <h4 className="h4-box-2-1" onClick={changetab}>
            <FaShoppingBag />
            <span>Bag</span>
            <span className="addeditems">{cartdata.length}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};
export default Header;
