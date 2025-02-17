import React from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
const List = () => {
  const url= "http://localhost:4000";
  const [list, setList] = React.useState([]);
  const fechlist = async () => {
    const response = await axios.get("http://localhost:4000/api/foods/list");
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };
  React.useEffect(() => {
    fechlist();
    console.log(list);
  }, []);

  const removeItem= async(id)=>{
    const response = await axios.post("http://localhost:4000/api/foods/remove",{id});
    if(response.data.success){
      toast.success(response.data.message);
      fechlist();
    }else{
      toast.error(response.data.message);
    }
  }

  console.log(list)

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Price</b>
          <b>Category</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className="list-table-format">
              <img src={`http://localhost:4000/uploads/${item.image}`} alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.category}</p>
              <button onClick={()=>{
                removeItem(item._id);
              }} className="btn">Remove</button>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default List;
