import React from "react";
import "./menu-items.styles.scss";
import { useNavigate } from "react-router-dom";
const MenuItem = ({ title, imageUrl, size, linkUrl, history }) => {
  let navigate = useNavigate();
  function handleClick() {
    navigate(`/${linkUrl}`);
  }
  return (
    <div className={`${size} menu-item`} onClick={handleClick}>
      <div
        className={"background-image"}
        style={{ backgroundImage: `url("${imageUrl}")` }}
      >
        {console.log(history, "history")}
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span>SHOP NOW!</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
