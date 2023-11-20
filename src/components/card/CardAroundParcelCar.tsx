import { CodeSandboxOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { Badge, Card, CardProps, Col, DatePicker, Form, Row } from "antd";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import React, { memo } from "react";
const { RangePicker } = DatePicker;
const { Meta } = Card;

export const CardAroundParcelCar: React.FC<CardProps> = memo(
  function CardAroundParcelCar({ children, ...rest }) {
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

    return (
      <Card style={{ margin: "16px" }} {...rest}>
        <Meta
          description={
            <>
              <Row gutter={16}>
                <Col span={6}>
                  <Badge.Ribbon text="กำลังจัดรถ" color="volcano">
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        <img alt="parcel" src="../icon/parcel.png" />{" "}
                        B10112189289
                      </span>
                    </p>
                  </Badge.Ribbon>
                </Col>
                <Col span={6}>
                  <p>
                    <FieldTimeOutlined /> 2023-07-11 15:45:12
                  </p>
                </Col>
                <Col span={12}>
                  <Form.Item label="วันที่รถเข้ารับพัสดุ">
                    <RangePicker
                      showTime={{ format: "HH:mm" }}
                      format="YYYY-MM-DD HH:mm"
                      onChange={onChange}
                      onOk={onOk}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={6}>
                  <p>
                    <img alt="parcel" src="../icon/business.png" />{" "}
                    รายการบุ๊คกิ้ง B10112189289
                  </p>
                </Col>
                <Col span={6}>
                  <p>
                    <CodeSandboxOutlined /> 1 รายการ 0 บาท
                  </p>
                </Col>
                <Col span={12}>
                  <p>
                    <span style={{ fontWeight: "bold" }}>
                      จำนวนพัสดุ:&nbsp;
                    </span>
                    26 รายการ&nbsp;
                    <span style={{ fontWeight: "bold" }}>ราคา:&nbsp;</span>0 บาท
                  </p>
                </Col>
              </Row>
            </>
          }
        />
      </Card>
    );
  }
);
