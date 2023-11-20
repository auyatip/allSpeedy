import { ClockCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { Badge, Card, Col, Row, Space, Typography, message } from "antd";
import { useState } from "react";
import Image from "next/image";
import cube from "../../../../public/icon/3d-cube.png";

// component
import ModalConfirmDeleteItem from "../../../components/model/ModalConfirmDeleteItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
// hooks
const { Meta } = Card;
const { Title, Text } = Typography;
type Props = {};

const BookingCardComponent = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openConfirmDelete, setOpenConfirmDelete] = useState<boolean>(false);
  const [loadingModal, setLoadingModal] = useState<boolean>(false);

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
      <Badge.Ribbon text="รอส่งพัสดุเข้าระบบ" color="#EE9D2E" className={"p-2"}>
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
          <div onClick={() => ""}>
          {/* // goto booking detail */}
            <Meta
              avatar={<img height={35} width={35} alt="parcel" src="../icon/parcel.png" />}
              title="B10112189289"
            />
            <Meta
              avatar={<img alt="business" src="../icon/business.png" />}
              title="รายการบุ๊คกิ๊ง B10112189289"
              description={
                <>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Space size={12}>
                        <ClockCircleOutlined style={{ color: '#EB5121'}}/>
                        <Text>11/10/2566 15:45</Text>
                      </Space>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Space size={12}>
                        <Image height={16} width={16} alt="3d-cube" src={cube} />
                        <Text>1 รายการ</Text>
                        <FontAwesomeIcon icon={faDollarSign} style={{color: "#EB5121"}}/>
                        <Text>25 บาท</Text>
                      </Space>
                    </Col>
                  </Row>
                </>
              }
            />
          </div>
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
};

export default BookingCardComponent;
