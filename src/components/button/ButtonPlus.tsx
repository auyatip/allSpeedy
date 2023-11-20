import { Button, ButtonProps } from "antd";
import React, { memo } from "react";
import { BiPlus } from "react-icons/bi";

export const ButtonPlus: React.FC<ButtonProps> = memo(function ButtonPlus({
  children,
  ...rest
}) {
  return (
    <Button
      key="add"
      shape="circle"
      className="bg-white hover:bg-green-50 active:bg-green-200 focus:outline-none focus:ring focus:ring-slate-50 border-green-700 text-green-700 absolute bottom-1 right-1"
      size="small"
      type="default"
      danger
      icon={<BiPlus />}
      {...rest}
    />
  );
});
