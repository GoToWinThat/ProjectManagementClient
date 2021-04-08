import React from "react";
import "./style.scss";

function WithFullHeightLayout({ children }) {
  return (
    <section className="fullHeight">
      <div className="content">{children}</div>
    </section>
  );
}

export default WithFullHeightLayout;
