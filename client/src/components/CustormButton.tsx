import React from "react";

type CustormButtonProps = {
  context: string;
  custom_style: string;
};

const CustormButton: React.FC<CustormButtonProps> = ({
  custom_style,
  context,
}) => {
  return (
    <button type="submit" className={`${custom_style} p-2`}>
      {context}
    </button>
  );
};

export default CustormButton;
