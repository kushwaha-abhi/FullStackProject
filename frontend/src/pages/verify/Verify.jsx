
import "./verify.css"
import StoreContext from "../../Context/storeContext"
import React, { useContext } from 'react'

const Verify = () => {

    const [searchParams, setSearchParams]=useSearchprams();

    const success= searchParams.get("success");
    const orderId= searchParams.get("orderId");
    const {url} = useContext(StoreContext);
  return (
    <div>verify</div>
  )
}

export default Verify