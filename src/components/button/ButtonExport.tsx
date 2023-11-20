import { Button, ButtonProps } from "antd";
import React, { memo } from "react";
import { RiFileExcel2Fill } from "react-icons/ri";

export const ButtonExport: React.FC<ButtonProps> = memo(function ButtonExport({
  children,
  ...rest
}) {
  return (
    <Button
      type="default"
      shape="round"
      icon={<RiFileExcel2Fill />}
      size="large"
      className={
        "bg-white hover:bg-green-50 active:bg-green-200 focus:outline-none focus:ring focus:ring-slate-50 border-green-700 text-green-700"
      }
      {...rest}
    >
      Export
    </Button>
  );
});
