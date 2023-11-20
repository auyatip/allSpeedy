import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "antd";
import React, { memo } from "react";

export const ButtonAdd: React.FC<ButtonProps> = memo(function ButtonAdd({
  children,
  ...rest
}) {
  return (
    <Button
      type="default"
      shape="round"
      icon={<PlusCircleOutlined />}
      size="large"
      className={
        "bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 text-white"
      }
      {...rest}
    >
      เพิ่ม
    </Button>
  );
});
