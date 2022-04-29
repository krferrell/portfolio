import React, { useState } from "react";
import "../App.css";

const ToolTip = ({ direction, children, content }) => {
  const [active, setActive] = useState(false);

  const showTip = () => {
    setActive(true);
  };

  const hideTip = () => {
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className={`Tooltip-Tip ${direction || "top"}`}>
          <p style={{ padding: "0" }}>{content}</p>
        </div>
      )}
    </div>
  );
};

export default ToolTip;
