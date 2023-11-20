import { useState } from 'react';
import { Form, Input, Button, Card, Col, Row, Typography, Tabs, Space, message } from 'antd';
import googleSrc from "../../../../public/images/google-icon.png";
import Link from "next/link";
import { useRouter } from 'next/router';
// import { authenticationService } from '@/_services/authentication.service';
import styles from '@/styles/Auth.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook,faGoogle } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";

const { Title } = Typography;

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  // Set Link
  const CustRegLink = "";
  const ForgetCustLink = "";
  const ForgetBusLink = "";

  const loginFunc = (values: any) => {

    console.log(values);

    setLoading(true);

    // Simulating login request
    // setTimeout(async () => {
    //   // console.log('Logged in:', values);
    //   const res: any = await authenticationService.login(values.email, values.password)
    //   if (res && res.status === true) {
    //     let userType = res.results.user_type;
    //     if (userType) {
    //       switch (userType) {
    //         case 'institute':
    //           router.push('/institute/home');
    //           break
    //         case 'member':
    //           router.push('/member');
    //           break;
    //         case 'admin':
    //           router.push('/admin-cpd');
    //           break
    //         default:
    //           Modal.error({
    //             title: 'เกิดข้อผิดพลาด',
    //             content: 'Role is not correct',
    //             onOk() {
    //               authenticationService.logout();
    //               Modal.destroyAll();
    //             },
    //           });
    //           break
    //       }
    //     } else {
    //       Modal.error({
    //         title: 'เกิดข้อผิดพลาด',
    //         content: 'กรุณาแจ้งผู้ดูแลระบบ',
    //       });
    //     }
    //   } else {
    //     setPasswordError(res.message);
    //   }

    //   setLoading(false);
    // }, 2000);
  };

  const registerRoute = () => {
    // check condition to routing page here
  }

  // Facebook
  const HandleFacebookbtn = () => {
    message.info("Click Facebook btn");
  }

  // Google
  const HandleGooglebtn = () => {
    message.info("Click Google btn");
  }

  return (
    <Card>
      <Tabs
        animated
        className="loginTabs"
        defaultActiveKey="customer"
        centered
        size='large'
        tabBarGutter={200}
        items={[
          {
            label: `ลูกค้าทั่วไป`,
            key: `customer`,
            disabled: loading,
            children: (
              <Row style={{ width: 600 }}>
                <Space size={10} align='start'>
                  <Col style={{ width: 300, paddingRight: 10, borderRight: "solid 1px lightgray" }}>
                    <Title level={4}>เข้าสู่ระบบ</Title>
                    <Form onFinish={loginFunc} layout="vertical">
                      <Form.Item label="E-mail" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
                        <Input type="email" placeholder='E-mail' />
                      </Form.Item>
                      <Form.Item
                        label="รหัสผ่าน (Password)"
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password' }]}
                        validateStatus={passwordError ? 'error' : ''}
                        help={passwordError}
                      >
                        <Input.Password placeholder='รหัสผ่าน / Password' />
                      </Form.Item>
                      <Form.Item>
                        <Row justify="space-between" align={"middle"}>
                          <Col>
                            <Button htmlType="submit" loading={loading} className={styles.loginbtn + " bluebtn"}>
                              <b>เข้าสู่ระบบ</b>
                            </Button>
                          </Col>
                          <Col>
                            <Link href={ForgetCustLink} shallow={true} style={{color: "orange"}}><u>ลืมรหัสผ่าน?</u> </Link>
                          </Col>
                        </Row>

                      </Form.Item>
                    </Form>
                  </Col>
                  <Col style={{ width: 290, textAlign: 'center' }}>
                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                      <Title level={4} style={{textAlign: 'start'}}>หรือเข้าสู่ระบบด้วย</Title>

                      <Button htmlType="button" shape="round" onClick={HandleFacebookbtn} className={"loginfacebookbtn"}>
                        <FontAwesomeIcon icon={faSquareFacebook} size="lg" /> &nbsp;&nbsp; <b>เข้าสู่ระบบด้วย Facebook</b>
                      </Button>

                      <Button htmlType="button" shape="round" onClick={HandleGooglebtn} className={"logingooglebtn"} style={{alignContent: "center"}}>
                        <Image
                          width={17}
                          height={17}
                          draggable={false}
                          src={googleSrc}
                          alt=""
                        /> &nbsp;&nbsp; <b>เข้าสู่ระบบด้วย Google</b>
                      </Button>

                      <Row justify={'center'}>
                        <h3><Link href={CustRegLink}>สมัครสมาชิกใหม่</Link></h3>
                      </Row>
                    </Space>


                  </Col>
                </Space>

              </Row>
            ),
          },
          {
            label: `ลูกค้าธุรกิจ`,
            key: `business`,
            disabled: loading,
            children: (
              <Row justify="center" style={{ width: 600 }}>
                <Col span={16} style={{ maxWidth: '600px' }}>
                  <Title level={4}>เข้าสู่ระบบ</Title>
                </Col>
                <Col span={16} style={{ maxWidth: '600px' }}>
                  <Form onFinish={loginFunc} layout="vertical">
                    <Form.Item label="E-mail" name="email" rules={[{ required: true, message: 'Please enter your username' }]}>
                      <Input type="email" placeholder='E-mail' />
                    </Form.Item>
                    <Form.Item
                      label="รหัสผ่าน (Password)"
                      name="password"
                      rules={[{ required: true, message: 'Please enter your password' }]}
                      validateStatus={passwordError ? 'error' : ''}
                      help={passwordError}
                    >
                      <Input.Password placeholder='รหัสผ่าน / Password' />
                    </Form.Item>
                    <Form.Item>
                      <Row justify="space-between" align={"middle"}>
                        <Col>
                          <Button htmlType="submit" loading={loading} className={styles.loginbtn + " bluebtn"}>
                            <b>เข้าสู่ระบบ</b>
                          </Button>
                        </Col>
                        <Col>
                          <Link href={ForgetBusLink} shallow={true}><u>ลืมรหัสผ่าน?</u> </Link>
                        </Col>
                      </Row>

                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            ),
          }
        ]}
      />
    </Card>
  );
};

export default LoginForm;
