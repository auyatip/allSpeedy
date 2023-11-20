import {
  Badge,
  Card,
  CardProps,
  Col,
  Row,
  Space,
  Typography,
  message,
} from "antd";
import React, { memo } from "react";

import { ClockCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { BsBox } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
// component
import { ButtonMinus, ButtonPlus } from "@/components/button";
import ModalConfirmDeleteItem from "@/components/model/ModalConfirmDeleteItem";
// hooks
const { Meta } = Card;
const { Text } = Typography;

interface CustomCardProps extends CardProps {
  typeBtn: string;
}

export const CardCallParcelCar: React.FC<CustomCardProps> = memo(
  function CardCallParcelCar({ children, ...rest }) {
    const [loading, setLoading] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);
    const [openConfirmDelete, setOpenConfirmDelete] = useState<boolean>(false);
    const [loadingModal, setLoadingModal] = useState<boolean>(false);

    const showModal = () => {
      setVisible(true);
    };

    const handleCancel = () => {
      setVisible(false);
    };

    const openModalConfirmDelete = (id: any): void => {
      // setDeleteEmergency(id);
      setOpenConfirmDelete(true);
    };

    const closeModalConfirmDelete = (): void => {
      setOpenConfirmDelete(false);
    };

    const handleDelete = async (id: any) => {
      try {
        message.success("ลบสำเร็จ");
        setLoadingModal(true);

        closeModalConfirmDelete();
      } catch (error) {
      } finally {
        // dispatch(setLoading(false));
        // setLoadingModal(false);
      }
    };

    setTimeout(() => {
      setLoading(true);
    }, 1000);

    return (
      <>
        <Badge.Ribbon text="กำลังจัดรถ" color="volcano" className={"p-2"}>
          <Card
            headStyle={{ border: 0 }}
            bodyStyle={{ paddingLeft: 70 }}
            title={
              <>
                <Row gutter={24}>
                  <Col span={24}>
                    <Space size={12}>
                      <img alt="parcel" src="../icon/parcel.png" />
                      <Text>B10112189289</Text>
                    </Space>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={24}>
                    <Space size={12}>
                      <img alt="business" src="../icon/business.png" />
                      <Text>รายการบุ๊คกิ้ง B10112189289</Text>
                    </Space>
                  </Col>
                </Row>
              </>
            }
            loading={!loading}
          >
            <div onClick={() => setVisible(true)}>
              <Meta
                description={
                  <>
                    <Row gutter={16}>
                      <Col span={24}>
                        <Space size={12}>
                          <Text strong>
                            <ClockCircleOutlined />
                          </Text>
                          <Text>11-08-2023 15:45:12</Text>
                        </Space>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Space size={12}>
                          <Text strong>
                            <BsBox />
                          </Text>
                          <Text>1 รายการ</Text>
                        </Space>
                      </Col>
                      <Col span={12}>
                        <Space size={12}>
                          <Text strong>
                            <MdAttachMoney />
                          </Text>
                          <Text>0 บาท</Text>
                        </Space>
                      </Col>
                    </Row>
                  </>
                }
              />
            </div>
            {rest.typeBtn === "add" ? (
              <ButtonPlus key="add" />
            ) : (
              <ButtonMinus key="delete" />
            )}
          </Card>
        </Badge.Ribbon>
        <ModalConfirmDeleteItem
          open={openConfirmDelete}
          title="ลบข้อมูล"
          element="ยืนยันการลบข้อมูล เมื่อยืนยันแล้วจะไม่สามารถยกเลิกได้"
          loading={loadingModal}
          onCancel={closeModalConfirmDelete}
          onOk={() => handleDelete("")}
        ></ModalConfirmDeleteItem>
      </>
    );
  }
);
