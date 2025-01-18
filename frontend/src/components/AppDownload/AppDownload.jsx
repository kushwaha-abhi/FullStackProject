import { assets } from "../../assets/frontend_assets/assets";
import "./AppDownload.css";

import React from "react";

const AppDownload = () => {
  return (
    <div className="appdownload" id="mobile-app">
      <p>
        For better experience download <br /> Tomato App
      </p>
      <div className="appdownload-plateforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
