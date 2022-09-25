import React from "react";
import "../homepage/homepage.styles.scss";
import Directory from "../../compnents/directory/directory.component";

const HomePage = ({ history }) => (
  <div className="homepage">
    <Directory history={history} />
  </div>
);

export default HomePage;
