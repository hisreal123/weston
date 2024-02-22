import React from "react";

type CustormButtonProps = {
  context: string;
  custom_style: string;
  type?: "submit" | "reset" | "button";
  fn?: (e: any) => void;

  value?: number | string;
};

const CustormButton: React.FC<CustormButtonProps> = ({
  custom_style,
  context,
  type,
  fn,
  value,
}) => {
  return (
    <button
      type={type ? type : "submit"}
      className={`${custom_style} p-2`}
      onClick={fn}
      value={value}
    >
      {context}
    </button>
  );
};

export default CustormButton;
