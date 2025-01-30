import { useState } from "react";
import { CircleHelp } from "lucide-react";
import "./styles.css";

const Tooltip = ({ text }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="tooltip-container">
      <CircleHelp
        size={18}
        className="tooltip-icon"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      />
      {visible && <div className="tooltip-box">{text}</div>}
    </div>
  );
};

export default Tooltip;
