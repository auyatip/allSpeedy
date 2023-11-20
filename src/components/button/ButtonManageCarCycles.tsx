import { Button, ButtonProps } from "antd";
import React, { memo } from "react";
import { VscArrowSwap } from "react-icons/vsc";

export const ButtonManageCarCycles: React.FC<ButtonProps> = memo(
  function ButtonManageCarCycles({ children, ...rest }) {
    return (
      <Button
        type="default"
        shape="round"
        icon={<VscArrowSwap />}
        size="large"
        className={
          "bg-white hover:bg-slate-100 active:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-50 border-blue-900 text-blue-900"
        }
        {...rest}
      >
        จัดการรอบรถ
      </Button>
    );
  }
);
