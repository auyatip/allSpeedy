import { ButtonCancel, ButtonSave } from "@/components/button";
import {
  Card,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  TimePicker,
  message,
} from "antd";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setLoading } from "../../../store/slice/layoutSlice";
const { Option } = Select;
const { Meta } = Card;

type Props = {
  visible: boolean;
  handleCancel: () => void;
};

type FieldType = {
  round_car_name?: string;
  type?: string;
  date?: Date;
  time?: Date;
};

const ParcelAddModalComponent = (props: Props) => {
  const { visible, handleCancel } = props;
  const { loading } = useAppSelector((state) => state.session.layout);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const handleFormSubmit = () => {
    dispatch(setLoading(true));
    form
      .validateFields()
      .then((values) => {
        console.log("req:", values);

        setTimeout(() => {
          dispatch(setLoading(false));
          handleCancel();
          message.success("บันทึกข้อมูลสำเร็จ");
        }, 1500);
      })
      .catch((err) => dispatch(setLoading(false)));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onGenderChange = (value: string) => {
    // switch (value) {
    //   case "type1":
    //     form.setFieldsValue({ note: "Hi, man!" });
    //     break;
    //   case "type2":
    //     form.setFieldsValue({ note: "Hi, lady!" });
    //     break;
    //   case "type3":
    //     form.setFieldsValue({ note: "Hi there!" });
    //     break;
    //   default:
    // }
  };

  return (
    <>
      <Modal
        title="รอบรถเข้ารับพัสดุ"
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Form.Item>
            <ButtonCancel key="cancel" onClick={handleCancel} />
            <ButtonSave
              key="save"
              loading={loading}
              onClick={handleFormSubmit}
            />
          </Form.Item>,
        ]}
      >
        <Form
          name="basic"
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="ชื่อรอบรถ"
            name="round_car_name"
            rules={[{ required: true, message: "กรุณาระบุชื่อรอบรถ!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="ประเภทพัสดุ"
            name="type"
            rules={[{ required: true, message: "กรุณาเลือกประเภทพัสดุ!" }]}
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
          <Form.Item<FieldType>
            label="วันที่รถเข้ารับพัสดุ"
            name="date"
            rules={[
              { required: true, message: "กรุณาเลือกวันที่รถเข้ารับพัสดุ!" },
            ]}
          >
            <DatePicker onChange={(value) => console.log(value)} />
          </Form.Item>
          <Form.Item<FieldType>
            label="เวลารถเข้ารับพัสดุ"
            name="time"
            rules={[
              { required: true, message: "กรุณาเลือกเวลารถเข้ารับพัสดุ!" },
            ]}
          >
            <TimePicker onChange={(value) => console.log(value)} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ParcelAddModalComponent;
