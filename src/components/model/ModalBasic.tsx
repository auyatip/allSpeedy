import { Modal, ModalProps } from "antd";
import React, { memo } from "react";

export const ModalBasic: React.FC<ModalProps> = memo(function ModalBasic({
  children,
  footer,
  ...rest
}) {
  return (
    <Modal footer={footer ? footer : false} {...rest}>
      {children}
    </Modal>
  );
});
