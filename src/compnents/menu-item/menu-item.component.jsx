import React from "react";
import "./menu-items.styles.scss";
import withRouter from "../withRouter";
const MenuItem = ({ title, imageUrl, size, linkUrl, history }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${history.match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);
