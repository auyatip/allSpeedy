import { ButtonCancel, ButtonExport, ButtonSave } from "@/components/button";
import { CardCallParcelCar } from "@/components/card";
import { ExclamationCircleFilled, SearchOutlined } from "@ant-design/icons";
import {
  Alert,
  Card,
  Col,
  Divider,
  Form,
  Input,
  List,
  Modal,
  Pagination,
  Row,
  Select,
  Skeleton,
  Space,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const { Meta } = Card;
const { Title, Text } = Typography;
const { Option } = Select;
const { confirm } = Modal;

const data = [
  {
    id: 1,
    title: "Card 1",
    description: "Description for Card 1",
    typeBtn: "add",
  },
  {
    id: 2,
    title: "Card 2",
    description: "Description for Card 2",
    typeBtn: "add",
  },
  {
    id: 3,
    title: "Card 3",
    description: "Description for Card 3",
    typeBtn: "add",
  },
  {
    id: 4,
    title: "Card 4",
    description: "Description for Card 4",
    typeBtn: "add",
  },
  {
    id: 5,
    title: "Card 5",
    description: "Description for Card 5",
    typeBtn: "add",
  },
  {
    id: 6,
    title: "Card 6",
    description: "Description for Card 6",
    typeBtn: "delete",
  },
  {
    id: 7,
    title: "Card 7",
    description: "Description for Card 7",
    typeBtn: "delete",
  },
  {
    id: 8,
    title: "Card 8",
    description: "Description for Card 8",
    typeBtn: "delete",
  },
  {
    id: 9,
    title: "Card 9",
    description: "Description for Card 9",
    typeBtn: "delete",
  },
  {
    id: 10,
    title: "Card 10",
    description: "Description for Card 10",
    typeBtn: "delete",
  },
  {
    id: 11,
    title: "Card 9",
    description: "Description for Card 9",
    typeBtn: "delete",
  },
  {
    id: 12,
    title: "Card 10",
    description: "Description for Card 10",
    typeBtn: "delete",
  },
];

const pageSize = 10;
const columns = 3;

type Props = {
  visible: boolean;
  handleCancel: () => void;
};

const ParcelModalComponent = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const { visible, handleCancel } = props;
  const [currentPageOld, setCurrentPageOld] = useState(1);
  const [currentPageNew, setCurrentPageNew] = useState(1);
  const [itemsOld, setItemsOld] = useState<
    Array<{ id: number; title: string; description: string; typeBtn: string }>
  >([]);
  const [itemsNew, setItemsNew] = useState<
    Array<{ id: number; title: string; description: string; typeBtn: string }>
  >([]);

  setTimeout(() => {
    setLoading(true);
  }, 1000);

  const onGenderChange = (value: string) => {};

  const handlePageChangeOld = (page: number) => {
    setCurrentPageOld(page);

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    setItemsOld(data.slice(startIndex, endIndex));
  };

  const handlePageChangeNew = (page: number) => {
    setCurrentPageNew(page);

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    setItemsNew(data.slice(startIndex, endIndex));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values: any) => {
    console.log("Received values from form: ", values);
  };

  const showPromiseConfirm = () => {
    confirm({
      title: "Do you want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content:
        "When clicked the OK button, this dialog will be closed after 1 second",
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          handleCancel();
        }).catch(() => console.log("Oops errors!"));
      },
      onCancel() {},
    });
  };

  // const renderCardsForCurrentPage = () => {
  //   const startIndex = (currentPage - 1) * pageSize;
  //   const endIndex = startIndex + pageSize;
  //   const _data = data.slice(startIndex, endIndex);
  //   const rows = _data.length / columns;

  //   return Array.from({ length: rows }, (_, rowIndex) => (
  //     <Row gutter={16} key={rowIndex}>
  //       {Array.from({ length: columns }, (_, colIndex) => {
  //         const index = rowIndex * columns + colIndex;
  //         return (
  //           <Col span={24 / columns} key={index}>
  //             {index < data.length && (
  //               <CardCallParcelCar typeBtn={_data[index].typeBtn} />
  //             )}
  //           </Col>
  //         );
  //       })}
  //     </Row>
  //   ));
  // };

  useEffect(() => {
    handlePageChangeOld(1);
    handlePageChangeNew(1);
  }, []);

  return (
    <>
      <Modal
        title="รายการเรียกรถเข้ารับพัสดุ"
        visible={visible}
        onCancel={showPromiseConfirm}
        width={"80%"}
        footer={[
          <ButtonCancel key="cancel" onClick={handleCancel} />,
          <ButtonExport key="export" />,
          <ButtonSave key="save" onClick={handleCancel} />,
        ]}
      >
        <Space direction="vertical" size={16} className="w-full">
          <Card
            type="inner"
            title={
              <>
                <Row gutter={16}>
                  <Col span={6}>
                    <Alert message="Success Text" type="success" />
                  </Col>
                  <Col span={6}>
                    <Space size={12}>
                      <Text strong>ประเภทพัสดุ:</Text>
                      <Text>พัสดุทั่วไป (Dry)</Text>
                    </Space>
                  </Col>
                  <Col span={6}>
                    <Space size={12}>
                      <Text strong>วันที่รถเข้ารับพัสดุ:</Text>
                      <Text>11-08-2566 10:00 น.-12:00 น.</Text>
                    </Space>
                  </Col>
                  <Col span={6}>
                    <Space size={12}>
                      <Text strong>เวลา Cut Off รอบรถ:</Text>
                      <Text>10-08-2566 18:00 น.</Text>
                    </Space>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={6}>
                    <Alert message="Success Text" type="success" />
                  </Col>
                  <Col span={6}>
                    <Space size={12}>
                      <Text strong>จำนวนพัสดุ:</Text>
                      <Text>25 รายการ</Text>
                    </Space>
                  </Col>
                  <Col span={6}>
                    <Space size={12}>
                      <Text strong>ราคา:</Text>
                      <Text>0 บาท</Text>
                    </Space>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      name="date_received"
                      label="วันที่รถเข้ารับพัสดุ"
                    >
                      <Input
                        placeholder="default size"
                        prefix={<SearchOutlined />}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </>
            }
          >
            <Space
              direction="vertical"
              size="small"
              style={{ display: "flex" }}
            >
              {/* {renderCardsForCurrentPage()} */}

              <div
                id="scrollableDivOld"
                style={{
                  height: 350,
                  overflow: "auto",
                  overflowX: "hidden",
                  padding: "16px",
                  border: "1px solid rgba(140, 140, 140, 0.35)",
                }}
              >
                <InfiniteScroll
                  dataLength={itemsOld.length}
                  next={() => {
                    return;
                  }}
                  hasMore={false}
                  // hasMore={items.length < 6}
                  loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                  endMessage={<Divider plain>โหลดข้อมูลสำเร็จ</Divider>}
                  scrollableTarget="scrollableDivOld"
                >
                  <List
                    grid={{
                      gutter: 16,
                      xs: 1,
                      sm: 1,
                      md: 1,
                      lg: 3,
                      xl: 3,
                      xxl: 3,
                    }}
                    dataSource={itemsOld}
                    renderItem={(item) => (
                      <List.Item>
                        <CardCallParcelCar
                          typeBtn={item.typeBtn}
                          key={item.id}
                        />
                      </List.Item>
                    )}
                  />
                </InfiniteScroll>
              </div>
              <Pagination
                style={{ marginTop: "16px", textAlign: "center" }}
                current={currentPageOld}
                total={data.length}
                pageSize={pageSize}
                onChange={handlePageChangeOld}
              />
            </Space>
          </Card>

          <Divider orientation="left">เลือกรายการบุ๊คกิ้งเข้ารอบพัสดุ</Divider>
          <Card
            size="small"
            type="inner"
            title={
              <>
                <Form
                  name="customized_form_controls"
                  layout="inline"
                  onFinish={onFinish}
                >
                  <Row gutter={16}>
                    <Col span={10}>
                      <Form.Item
                        label="ประเภทพัสดุ"
                        name="type"
                        rules={[
                          { required: true, message: "กรุณาเลือกประเภทพัสดุ!" },
                        ]}
                      >
                        <Select
                          placeholder="กรุณาเลือกประเภทพัสดุ"
                          onChange={onGenderChange}
                          allowClear
                        >
                          <Option value="type1">type 1</Option>
                          <Option value="type2">type 2</Option>
                          <Option value="type3">type 3</Option>
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col span={4}>
                      <Form.Item
                        name="date_received"
                        label="วันที่รถเข้ารับพัสดุ"
                      >
                        <Input
                          placeholder="default size"
                          prefix={<SearchOutlined />}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </>
            }
          >
            <Space
              direction="vertical"
              size="small"
              style={{ display: "flex" }}
            >
              {/* {renderCardsForCurrentPage()} */}

              <div
                id="scrollableDivNew"
                style={{
                  height: 350,
                  overflow: "auto",
                  overflowX: "hidden",
                  padding: "16px",
                  border: "1px solid rgba(140, 140, 140, 0.35)",
                }}
              >
                <InfiniteScroll
                  dataLength={itemsNew.length}
                  next={() => {
                    return;
                  }}
                  hasMore={false}
                  // hasMore={items.length < 6}
                  loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                  endMessage={<Divider plain>โหลดข้อมูลสำเร็จ</Divider>}
                  scrollableTarget="scrollableDivNew"
                >
                  <List
                    grid={{
                      gutter: 16,
                      xs: 1,
                      sm: 1,
                      md: 1,
                      lg: 3,
                      xl: 3,
                      xxl: 3,
                    }}
                    dataSource={itemsNew}
                    renderItem={(item) => (
                      <List.Item>
                        <CardCallParcelCar
                          typeBtn={item.typeBtn}
                          key={item.id}
                        />
                      </List.Item>
                    )}
                  />
                </InfiniteScroll>
              </div>
              <Pagination
                style={{ marginTop: "16px", textAlign: "center" }}
                current={currentPageNew}
                total={data.length}
                pageSize={pageSize}
                onChange={handlePageChangeNew}
              />
            </Space>
          </Card>
        </Space>
      </Modal>
    </>
  );
};

export default ParcelModalComponent;
