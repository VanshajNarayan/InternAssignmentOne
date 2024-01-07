import { useState } from "react";
import CartItem from "./CartItem";
import "./Service.css";
import { GrFormPrevious, GrFormNext  } from "react-icons/gr";

function Service() {
  const [num, setNum] = useState(1);
  const cartItemsData =
    [
      {
        photo: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Grilled Tomatoes at Home"
      },
      {
        photo: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Snacks for Travel"
      },
      {
        photo: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Post-workout Recipes"
      },
      {
        photo: "https://images.pexels.com/photos/12532595/pexels-photo-12532595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "How To Grill Corn"
      },
      {
        photo: "https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Crunchwrap Supreme"
      },
      {
        photo: "https://images.pexels.com/photos/7474164/pexels-photo-7474164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Broccoli Cheese Soup"
      },
    ];
  function handlePrev() {
    if (num > 1) {
      setNum(num - 1);
    };
  };
  function handleNext() {
    if (num < 2) {
      setNum(num + 1);
    };
  };
  return (
    <>
      <section className="service_section">
        <h3>Latest Articles</h3>
        <div className="section_box">
          {
            num === 1 ? cartItemsData.slice(0, 3).map((data, index) => <CartItem key={index} cartItems={data} />) :
              (cartItemsData.slice(3, 6).map((data, index) => <CartItem key={index} cartItems={data} />))
          }
        </div>
        <div className="icons">
          <GrFormPrevious className="formIcon"onClick={handlePrev}/>
          <p>{num} / 2</p>
          <GrFormNext className="formIcon" onClick={handleNext}/>
        </div>
      </section>
    </>
  )
};

export default Service;