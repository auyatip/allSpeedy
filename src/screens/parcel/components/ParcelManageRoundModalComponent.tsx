import {
  ButtonCancel,
  ButtonExport,
  ButtonFilter,
  ButtonSave,
  ButtonSearch,
} from "@/components/button";
import { CardAroundParcelCar } from "@/components/card";
import {
  Card,
  Col,
  DatePicker,
  Divider,
  Form,
  List,
  Modal,
  Pagination,
  Row,
  Skeleton,
  Space,
} from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

type Props = {
  visible: boolean;
  handleCancel: () => void;
};

const data = [
  { id: 1, title: "Card 1", description: "Description for Card 1" },
  { id: 2, title: "Card 2", description: "Description for Card 2" },
  { id: 3, title: "Card 3", description: "Description for Card 3" },
  { id: 4, title: "Card 4", description: "Description for Card 4" },
  { id: 5, title: "Card 5", description: "Description for Card 5" },
  { id: 6, title: "Card 6", description: "Description for Card 6" },
  { id: 7, title: "Card 7", description: "Description for Card 7" },
  { id: 8, title: "Card 8", description: "Description for Card 8" },
  { id: 9, title: "Card 9", description: "Description for Card 9" },
  { id: 10, title: "Card 10", description: "Description for Card 10" },
  { id: 11, title: "Card 10", description: "Description for Card 11" },
  { id: 12, title: "Card 10", description: "Description for Card 12" },
  { id: 13, title: "Card 10", description: "Description for Card 13" },
  { id: 14, title: "Card 10", description: "Description for Card 14" },
];

const pageSize = 6;

const ParcelManageRoundModalComponent = (props: Props) => {
  const { visible, handleCancel } = props;
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<SizeType>("large");
  const [isCardVisibleFilter, setIsCardVisibleFilter] = useState(false);
  const [items, setItems] = useState<
    Array<{ id: number; title: string; description: string }>
  >([]);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    setItems(data.slice(startIndex, endIndex));
  };

  const onChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  const onOk = (
    value: DatePickerProps["value"] | RangePickerProps["value"]
  ) => {
    console.log("onOk: ", value);
  };

  const renderCardsForCurrentPage = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data
      .slice(startIndex, endIndex)
      .map((card) => <CardAroundParcelCar key={card.id} />);
  };

  setTimeout(() => {
    setLoading(true);
  }, 1000);

  const onFinish = (values: any) => {
    console.log("Received values from form: ", values);
  };

  useEffect(() => {
    handlePageChange(1);
  }, []);
  
  return (
    <>
      <Modal
        title="จัดการรอบรถเข้ารับพัสดุ"
        visible={visible}
        onCancel={handleCancel}
        width={"80%"}
        footer={[
          <ButtonCancel key="cancel" onClick={handleCancel} />,
          <ButtonExport key="export" />,
          <ButtonSave key="save" onClick={handleCancel} />,
        ]}
      >
        <Card
          extra={
            <>
              <Space>
                <ButtonFilter
                  onClick={() => setIsCardVisibleFilter(!isCardVisibleFilter)}
                />
              </Space>
            </>
          }
        >
          {isCardVisibleFilter && (
            <Space
              direction="vertical"
              size="small"
              style={{ display: "flex" }}
            >
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
            {/* {renderCardsForCurrentPage()} */}
            <div
              id="scrollableDiv"
              style={{
                height: 400,
                overflow: "auto",
                padding: "0 16px",
                border: "1px solid rgba(140, 140, 140, 0.35)",
              }}
            >
              <InfiniteScroll
                dataLength={items.length}
                next={() => {
                  return;
                }}
                hasMore={false}
                // hasMore={items.length < 6}
                loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                endMessage={<Divider plain>โหลดข้อมูลสำเร็จ</Divider>}
                scrollableTarget="scrollableDiv"
              >
                <List
                  grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 1,
                    md: 1,
                    lg: 1,
                    xl: 1,
                    xxl: 1,
                  }}
                  dataSource={items}
                  renderItem={(item) => (
                    <List.Item>
                      <CardAroundParcelCar key={item.id} />
                    </List.Item>
                  )}
                />
              </InfiniteScroll>
            </div>
            <Pagination
              style={{ marginTop: "16px", textAlign: "center" }}
              current={currentPage}
              total={data.length}
              pageSize={pageSize}
              onChange={handlePageChange}
            />
          </Space>
        </Card>
      </Modal>
    </>
  );
};

export default ParcelManageRoundModalComponent;
