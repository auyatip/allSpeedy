import React from "react";

import { Button } from "antd";
import { ModalBasic } from "./ModalBasic";

// Form
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { BiTrash } from "react-icons/bi";

interface IModalCardInfoProps {
  open: boolean;
  onCancel: () => void;
  onOk: any;
  title?: React.ReactNode | string;
  element?: React.ReactNode | string;
  loading?: boolean;
}

const ModalConfirmDeleteItem: React.FC<IModalCardInfoProps> = ({
  open,
  onCancel,
  onOk,
  title,
  element,
  loading,
}) => {
  return (
    <ModalBasic
      title={title ? title : ""}
      open={open}
      onCancel={onCancel}
      className="font-noto-th"
      footer={[
        <Button
          key="cancel"
          type="default"
          htmlType="button"
          className="border-1 h-10 border-solid border-neutral-600 font-noto-th"
          onClick={onCancel}
        >
          ยกเลิก
        </Button>,
        <Button
          key="submit"
          danger
          type="primary"
          onClick={onOk}
          loading={loading}
          htmlType="submit"
          className="flex h-10 flex-row items-center justify-center gap-2 font-noto-th font-bold"
          icon={<BiTrash />}
        >
           ลบข้อมูล
        </Button>,
      ]}
    >
      <div className="flex flex-col gap-y-10 font-noto-th">{element}</div>
    </ModalBasic>
  );
};

export default ModalConfirmDeleteItem;
