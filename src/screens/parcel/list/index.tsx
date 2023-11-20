import {
  ButtonAdd,
  ButtonFilter,
  ButtonManageCarCycles,
  ButtonSearch,
} from "@/components/button";
import { Card, Col, DatePicker, Form, Pagination, Row, Space } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import ParcelAddModalComponent from "../components/ParcelAddModalComponent";
import ParcelCardComponent from "../components/ParcelCardComponent";
import ParcelManageRoundModalComponent from "../components/ParcelManageRoundModalComponent";

const { Meta } = Card;

type Props = {};

interface DataType {
  id: number;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const pageSize = 6;
const columns = 3;

const ParcelListScreen = (props: Props) => {
  const [size, setSize] = useState<SizeType>("large");
  const [loading, setLoading] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleManageRound, setVisibleManageRound] = useState(false);
  const [isCardVisibleFilter, setIsCardVisibleFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { parcel } = useAppSelector((state) => ({
    parcel: state.parcel,
  }));

  const data: DataType[] = parcel.parcelList.map((item) => item as DataType);

  const handleCancelAdd = () => {
    setVisibleAdd(false);
  };

  const handleCancelManageRound = () => {
    setVisibleManageRound(false);
  };

  const onFinish = (values: any) => {
    console.log("Received values from form: ", values);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderCardsForCurrentPage = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const _data = data.slice(startIndex, endIndex);
    const rows = _data.length / columns;

    return Array.from({ length: rows }, (_, rowIndex) => (
      <Row gutter={16} key={rowIndex}>
        {Array.from({ length: columns }, (_, colIndex) => {
          const index = rowIndex * columns + colIndex;
          return (
            <Col span={24 / columns} key={index} className="p-3">
              {index < data.length && <ParcelCardComponent />}
            </Col>
          );
        })}
      </Row>
    ));
  };

  return (
    <>
      <Card
        title="รอบรถเข้ารับพัสดุ"
        extra={
          <>
            <Space>
              <ButtonAdd onClick={() => setVisibleAdd(true)} />
              <ButtonManageCarCycles
                onClick={() => setVisibleManageRound(true)}
              />
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
                name="customized_form_controls"
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
          {renderCardsForCurrentPage()}
          <Pagination
            style={{ marginTop: "16px", textAlign: "center" }}
            current={currentPage}
            total={data.length}
            pageSize={pageSize}
            onChange={handlePageChange}
          />
        </Space>
      </Card>
      <ParcelAddModalComponent
        visible={visibleAdd}
        handleCancel={handleCancelAdd}
      />
      <ParcelManageRoundModalComponent
        visible={visibleManageRound}
        handleCancel={handleCancelManageRound}
      />
    </>
  );
};

export default ParcelListScreen;
