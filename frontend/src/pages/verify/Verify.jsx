import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; 
import StoreContext from "../../Context/storeContext";
import "./verify.css"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Verify = () => {
  const [searchParams] = useSearchParams(); 
  const Navigate= useNavigate();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  console.log(success + orderId);
   const {url}= useContext(StoreContext)
    const verifyPayment=  async ()=>{
       const response = await axios.post(`${url}/api/orders/verify`,{success,orderId});

       console.log(" response is " + response.data);
       
        if(response.data.success){
           Navigate("/myorders")
        }
        else{
          Navigate("/")
        }
    }

    useEffect(()=>{
       verifyPayment();
    },[])
  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
