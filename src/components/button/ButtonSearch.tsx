import { SearchOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "antd";
import React, { memo } from "react";

export const ButtonSearch: React.FC<ButtonProps> = memo(function ButtonSearch({
  children,
  ...rest
}) {
  return (
    <Button
      type="primary"
      shape="round"
      htmlType="submit"
      icon={<SearchOutlined />}
      size="large"
      className={
        "bg-white hover:bg-slate-100 active:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-50 border-blue-900 text-blue-900"
      }
      {...rest}
    >
      ค้นหา
    </Button>
  );
});
