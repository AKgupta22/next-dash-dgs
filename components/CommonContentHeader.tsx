import React from "react";

interface CommonContentHeaderProps {
  title: string;
}

const CommonContentHeader = ({
  title,
}: CommonContentHeaderProps): React.JSX.Element => {
  return (
    <div className="mb-4">
      <p className="text-xl font-bold">{title}</p>
    </div>
  );
};

export default CommonContentHeader;
