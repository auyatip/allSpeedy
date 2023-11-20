import { SaveOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "antd";
import React, { memo } from "react";

export const ButtonSave: React.FC<ButtonProps> = memo(function ButtonSave({
  children,
  ...rest
}) {
  return (
    <Button
      type="primary"
      shape="round"
      icon={<SaveOutlined />}
      size="large"
      className={
        "bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 text-white"
      }
      {...rest}
    >
      บันทึก
    </Button>
  );
});
