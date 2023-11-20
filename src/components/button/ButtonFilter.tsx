import { Button, ButtonProps } from "antd";
import React, { memo } from "react";
import { FaFilter } from "react-icons/fa";

export const ButtonFilter: React.FC<ButtonProps> = memo(function ButtonFilter({
  children,
  ...rest
}) {
  return (
    <Button
      type="default"
      shape="round"
      icon={<FaFilter />}
      size="large"
      className={
        "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 bg-gradient-to-r from-blue-900 to-blue-500 text-white"
      }
      {...rest}
    >
      ตัวกรอง
    </Button>
  );
});
