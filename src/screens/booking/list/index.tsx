import {
  ButtonAdd,
  ButtonFilter,
  ButtonManageCarCycles,
  ButtonSearch,
} from "@/components/button";
import { Card, Col, DatePicker, Form, Pagination, Row, Space } from "antd";
import { useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import BookingCardComponent from "../components/BookingCardComponent";

const { Meta } = Card;

type Props = {};

interface DataType {
  id: number;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns = 3;

const BookingScreen = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [listtype, setListtype] = useState("grid");
  const [isCardVisibleFilter, setIsCardVisibleFilter] = useState(false);

  const { parcel } = useAppSelector((state) => ({
    parcel: state.parcel,
  }));

  const data: DataType[] = parcel.parcelList.map((item) => item as DataType);
  console.log(data);
  

  const handleCancelAdd = () => {
    setVisibleAdd(false);
  };

  const onFinish = (values: any) => {
    console.log("Received values from form: ", values);
  };

  const renderCards = () => {
    const rows = data.length / columns;

    return Array.from({ length: rows }, (_, rowIndex) => (
      <Row gutter={16} key={rowIndex}>
        {Array.from({ length: columns }, (_, colIndex) => {
          const index = rowIndex * columns + colIndex;
          return (
            <Col span={24 / columns} key={index} className="p-3">
              {index < data.length && <BookingCardComponent />}
            </Col>
          );
        })}
      </Row>
    ));
  };

  return (
    <>
      <Card
        title="จองการจัดส่งพัสดุ"
        extra={
          <>
            <Space>
              <ButtonAdd onClick={() => setVisibleAdd(true)} />
              {/* <ButtonManageCarCycles
                onClick={() => setVisibleManageRound(true)}
              /> */}
              <ButtonFilter
                onClick={() => setIsCardVisibleFilter(!isCardVisibleFilter)}
              />
            </Space>
          </>
        }
      >
        {isCardVisibleFilter && (
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Card style={{ marginBottom: "20px" }}>
              <Form
                name="booking_filter_form"
                layout="inline"
                onFinish={onFinish}
              >
                <Row gutter={16}>
                  <Col span={10}>
                    <Form.Item
                      name="date_received"
                      label="วันที่รถเข้ารับพัสดุ"
                    >
                      <DatePicker onChange={(value) => console.log(value)} />
                    </Form.Item>
                  </Col>
                  <Col span={10}>
                    <Form.Item name="date_cut_off" label="เวลา Cut Off รอบรถ">
                      <DatePicker onChange={(value) => console.log(value)} />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item>
                      <ButtonSearch />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Space>
        )}

        <Space direction="vertical" size="small" style={{ display: "flex" }}>
          {renderCards()}
        </Space>
      </Card>
      {/* <ParcelAddModalComponent
        visible={visibleAdd}
        handleCancel={handleCancelAdd}
      />
      <ParcelManageRoundModalComponent
        visible={visibleManageRound}
        handleCancel={handleCancelManageRound}
      /> */}
    </>
  );
};

export default BookingScreen;
