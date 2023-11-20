import { Button, ButtonProps } from "antd";
import React, { memo } from "react";
import { BiMinus } from "react-icons/bi";

export const ButtonMinus: React.FC<ButtonProps> = memo(function ButtonMinus({
  children,
  ...rest
}) {
  return (
    <Button
      shape="circle"
      className="bg-white hover:bg-red-50 active:bg-red-200 focus:outline-none focus:ring focus:ring-slate-50 border-red-700 text-red-700 absolute bottom-1 right-1"
      size="small"
      type="default"
      danger
      icon={<BiMinus />}
      {...rest}
    />
  );
});
