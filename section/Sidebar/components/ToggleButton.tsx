import React from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

interface ToggleButtonProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const ToggleButton = ({
  isCollapsed,
  toggleSidebar,
}: ToggleButtonProps): React.JSX.Element => {
  return (
    <div className="flex justify-end mr-4 mb-4">
      <button onClick={toggleSidebar}>
        {isCollapsed ? <IoIosArrowRoundForward /> : <IoIosArrowRoundBack />}
      </button>
    </div>
  );
};

export default ToggleButton;
