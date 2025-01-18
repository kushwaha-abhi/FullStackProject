import "./FoodDisplay.css";
import { useContext } from "react";
import { StoreContext } from "../../Context/storeContext";
import FoodItem from "../Fooditem/FoodItem";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near You</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === "item.category") {
            return (
              <FoodItem
                key={index}
                id={item._id}
                description={item.description}
                image={item.image}
                name={item.name}
                price={item.price}
                category={item.category}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
