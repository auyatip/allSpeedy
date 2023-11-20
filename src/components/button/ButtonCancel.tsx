import { CloseCircleOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "antd";
import React, { memo } from "react";

export const ButtonCancel: React.FC<ButtonProps> = memo(function ButtonCancel({
  children,
  ...rest
}) {
  return (
    <Button
      type="default"
      shape="round"
      icon={<CloseCircleOutlined />}
      size="large"
      className={
        "bg-white hover:bg-red-50 active:bg-red-200 focus:outline-none focus:ring focus:ring-slate-50 border-red-700 text-red-700"
      }
      {...rest}
      danger
    >
      ยกเลิก
    </Button>
  );
});
