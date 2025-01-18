import "./Home.css"
import React from 'react'
import Header from "../../components/header/Header"
import ExploreMenu from "../../components/Explore_Menu/ExploreMenu"
import { useState } from "react"
import FoodDisplay from "../../components/foodDisplay/FoodDisplay"
import AppDownload from "../../components/AppDownload/AppDownload"
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu  category={category} setCategory={setCategory}  />
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  )
}

export default Home