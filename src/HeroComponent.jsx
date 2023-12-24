import { useContext } from "react";
import { LiaStarSolid } from "react-icons/lia";
import { FaStarHalf } from "react-icons/fa";
import { ImSpinner } from "react-icons/im";
import { contextdata } from "./Context";

let Herocompo = () => {
  const { arr, changearr, spindata, addcart } = useContext(contextdata);

  return (
    <div className="hero-div">
      <div className="shop-by">
        <h1>SHOP BY CATEGORY</h1>
      </div>

      {/* shopping div */}

      {spindata ? (
        <div className="spinner">
          <ImSpinner />
        </div>
      ) : (
        <div className="shop-div">
          <div className="shop-main-div">
            {arr.map((e, ind) => (
              <div className="boxes-shop" key={ind}>
                <p className="p-shop-1">{e.title}</p>
                <img src={`${e.images[0]}`} alt="" />
                <h3 className="h3-shop">{e.price} $</h3>
                <h3 className="h3-shop-2">
                  {e.rating >= 4.5 ? (
                    <>
                      <LiaStarSolid />
                      <LiaStarSolid />
                      <LiaStarSolid />
                      <LiaStarSolid />
                      <FaStarHalf />
                    </>
                  ) : (
                    <>
                      <LiaStarSolid />
                      <LiaStarSolid />
                      <LiaStarSolid />
                      <LiaStarSolid />
                    </>
                  )}
                </h3>
                <button className="p-shop" onClick={() => addcart(e)}>
                  Buy
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Herocompo;
