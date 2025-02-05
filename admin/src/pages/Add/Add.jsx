import "./Add.css";
import React from "react";
import { assets } from "../../../assets/assets.js";
import  axios  from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const url="http://localhost:4000";
  const [image, setImage] = React.useState(null);
  const [data, setData] = React.useState({
    name: "",
    description: "",
    category: "salad",
    price: "",
  });
  const onChangeHandeler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onSubmitHandeler = async (event) => {
    event.preventDefault(); 
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    formData.append("image", image);
    try {
      const response = await axios.post(`${url}/api/foods/add`, formData);
      if (response.status === 201) {
        toast.success(response.data.message);
        setData({ name: "", description: "", category: "salad", price: "" });
        setImage(null);
      } else {
        alert("Failed to add data");
      }
    } catch (error) {
      console.error("Error posting data:", error);
      alert("An error occurred while adding data");
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandeler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onChangeHandeler}
            value={data.name}
            type="text"
            name="name"
            placeholder="type here"
          />
        </div>
        <div className="add-product-decription flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandeler}
            value={data.description}
            name="description"
            id=""
            rows="6"
            placeholder="write content here"
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandeler} name="category" id="">
              <option value="salad">Salad</option>
              <option value="rolls">Rols</option>
              <option value="desert">Desert</option>
              <option value="sandwich">Sandwich</option>
              <option value="cake">Cake</option>
              <option value="Pure veg">Pure Veg</option>
              <option value="noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price">
            <p>Price </p>
            <input
              onChange={onChangeHandeler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$490"
            />
          </div>
        </div>
        <button
          type="submit"
          className="submit-btn"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
