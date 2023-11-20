import { DeleteOutlined } from "@ant-design/icons";
import { Badge, Card, Col, Row, Space, Typography, message } from "antd";
import { useState } from "react";
// component
import ModalConfirmDeleteItem from "../../../components/model/ModalConfirmDeleteItem";
import ParcelModalComponent from "./ParcelModalComponent";
// hooks
const { Meta } = Card;
const { Title, Text } = Typography;
type Props = {};

const ParcelCardComponent = (props: Props) => {
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
          loading={!loading}
          actions={[
            <Row gutter={16}>
              <Col span={20}></Col>
              <Col span={4}>
                <DeleteOutlined key="delete" onClick={openModalConfirmDelete} />
              </Col>
            </Row>,
          ]}
        >
          <div onClick={() => setVisible(true)}>
            <Meta
              avatar={<img alt="parcel" src="../icon/parcel.png" />}
              title="รอบปกติ 11-08-2023 10:00 น.-12:00 น."
              description={
                <>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Space size={12}>
                        <Text strong>วันที่รถเข้ารับพัสดุ:</Text>
                        <Text>11-08-2023 10:00 น.-12:00 น.</Text>
                      </Space>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Space size={12}>
                        <Text strong>เวลา Cut Off รอบรถ:</Text>
                        <Text>10-08-2023 18:00 น.</Text>
                      </Space>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Space size={12}>
                        <Text strong>จำนวนพัสดุ:</Text>
                        <Text>150 รายการ</Text>
                      </Space>
                    </Col>
                    <Col span={12}>
                      <Space size={12}>
                        <Text strong>ราคา:</Text>
                        <Text>0 บาท</Text>
                      </Space>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Space size={12}>
                        <Text strong>จุดรับพัสดุ:</Text>
                        <Text>
                          17 หมู่ 12 แขวงคลองกุ่มแขวง บึงกุ่ม กรุงเทพฯ 10230
                        </Text>
                      </Space>
                    </Col>
                  </Row>
                </>
              }
            />
          </div>
        </Card>
      </Badge.Ribbon>
      <ParcelModalComponent visible={visible} handleCancel={handleCancel} />
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
};

export default ParcelCardComponent;
