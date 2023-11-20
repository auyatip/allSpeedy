import React, { useEffect, useState } from "react";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { Affix, Button, Col, Dropdown, Form, Input, Layout, Row, Space, Tooltip, Typography, theme } from "antd";
import logoSrc from "../../public/images/SPEED-D-LOGO.png";
import MapSrc from "../../public/images/dotmap.svg";
import styles from "@/styles/component.module.scss";
import Image from "next/image";
import type { MenuProps } from 'antd';
import Link from "next/link";
import BreadcrumbComponent from "./breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCircleQuestion, faEnvelope, faMagnifyingGlass, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import router, { useRouter } from "next/router";

// ** Note: Fix (Cannot use import statement outside a module)
import dynamic from 'next/dynamic'
const Search = dynamic(async () => await import('antd/es/input/Search'), {
  ssr: false,
})


const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const handleLogout = () => {
  // authenticationService.logout();
  router.push('/auth/login')
}

const appNameEn = "All Speedy";
const appNameTh = "";
const appEmail = "CS@allspeedy.co.th";
const appPhone = "2-036-5788";
const copyRight = "Copyright 2023 © " + appNameEn + ".";
const version = "1.0.0";

// Set Link

// Header 1
const contactlink = "/";
const qnalink = "/";

// Header 2
const home_link = "/";
const about_link = "/about-us";
const myparcel_send_link = "/";
const myparcel_rec_link = "/";
const fav_link = "/";
const cal_link = "/calculate-cost";
const howto_link = "/howto";
const terms_link = "/term-of-service";
const business_reg_link = "/business-register";
const location_link = "/location";
const news_link = "/news";
const reserve_link = "/reserve";
const status_tracking_link = "/status-tracking";
const privacy_link = "/privacy-policy";

// Button
const facebook_link = "https://www.facebook.com/profile.php?id=100086952758011"
const twitter_link = "https://twitter.com/mrspeedd2?s=21&t=vKoDG7MJ5L_XGLnLK_1mkw";


const myparcel: MenuProps['items'] = [
  {
    key: '1',
    label: 'พัสดุของฉัน',
    children: [
      {
        key: '1-1',
        label: (
          <Link href={myparcel_send_link} shallow={true} className={styles.menuLink}>
            รายการพัสดุที่จัดส่ง
          </Link>
        ),
      },
      {
        key: '1-2',
        label: (
          <Link href={myparcel_rec_link} shallow={true} className={styles.menuLink}>
            รายการพัสดุที่ได้รับ
          </Link>
        ),
      },
    ],
  },
  {
    key: '2',
    label: (
      <Link href={fav_link} shallow={true} className={styles.menuLink}>
        รายการโปรด
      </Link>
    ),
  },
  {
    key: '3',
    label: (
      <Link href={cal_link} shallow={true} className={styles.menuLink}>
        คำนวณค่าจัดส่ง
      </Link>
    ),
  },
  {
    key: '4',
    label: (
      <Link href={howto_link} shallow={true} className={styles.menuLink}>
        วิธีการส่งพัสดุ
      </Link>
    ),
  },
  {
    key: '5',
    label: (
      <Link href={terms_link} shallow={true} className={styles.menuLink}>
        เงื่อนไขการให้บริการ
      </Link>
    ),
  },
  {
    key: '6',
    label: (
      <Link href={business_reg_link} shallow={true} className={styles.menuLink}>
        ลงทะเบียนลูกค้าธุรกิจ
      </Link>
    ),
  },
];

const languages: MenuProps['items'] = [
  {
    key: 'ไทย',
    label: 'ไทย',
  },
  {
    key: 'English',
    label: 'English',
  },
  // {
  //   key: '中文',
  //   label: '中文',
  // },
];

export default function LayoutUserComponent({ children, pageProps }: { children: React.ReactNode; pageProps: any; }) {
  const [user, setUser] = useState<any>();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [cur_lang, setlanguage] = useState("ไทย");


  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const ProFunc = (values: any) => {
    console.log(values);

    setLoading(true);
  }

  const handlelanguageClick: MenuProps['onClick'] = ({ key }) => {
    // message.info(`Change language to ${key}`);
    setlanguage(key);
  };

  // const onSearch = (value: string) => console.log(value);

  useEffect(() => {
    // const userValue = authenticationService.currentUserValue;
    // setUser(userValue);
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header 1 */}
      <Affix offsetTop={0}>
        <Header className={styles.header1} style={{ userSelect: 'none' }}>
          <Col flex="auto">
            <Row justify="end" style={{ gap: '1.5rem' }}>
              <Col>
                <Link href={contactlink} shallow={true} className={styles.menuLink}>
                  <FontAwesomeIcon icon={faEnvelope} /> ติดต่อเรา
                </Link>
              </Col>
              <Col>
                <Link href={qnalink} shallow={true} className={styles.menuLink}>
                  <FontAwesomeIcon icon={faCircleQuestion} /> คำถามที่พบบ่อย
                </Link>
              </Col>
              <Col>
                <Dropdown menu={{ items: languages, onClick: handlelanguageClick }} className={styles.menuLink}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <FontAwesomeIcon icon={faGlobe} />
                      {cur_lang}
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </Col>
              <Col>
                {user === null && (
                  <span>
                    <UserOutlined /> เข้าสู่ระบบ
                  </span>
                )}

                {user !== null && (
                  <>
                    <span>
                      <UserOutlined /> {user?.titlename} {user?.firstname} {user?.lastname}
                    </span>
                    <span style={{ marginLeft: '10px' }} onClick={() => handleLogout()}>
                      Logout
                    </span>
                  </>
                )}
              </Col>
            </Row>
          </Col>
        </Header>
      </Affix>
      {/* Header 2 */}
      <Affix offsetTop={50}>
        <Header className={styles.header2} style={{ userSelect: 'none' }}>
          <Col flex="170px">
            <Link href={home_link} shallow={true}>
              <Image
                draggable={false}
                width={170}
                height={60}
                className={styles.logoImage}
                src={logoSrc}
                alt=""
              />
            </Link>
          </Col>
          {/* <Col flex="100px" /> */}
          <Col flex="auto" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Space size={20} wrap>

              <Link href={home_link} shallow={true} className={styles.menuLink}>
                หน้าแรก
              </Link>

              <Link href={about_link} shallow={true} className={styles.menuLink}>
                เกี่ยวกับเรา
              </Link>

              <Dropdown menu={{ items: myparcel }} className={styles.menuLink}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    บริการขนส่งพัสดุ
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>

              <Link href={location_link} shallow={true} className={styles.menuLink}>
                จุดให้บริการ
              </Link>

              <Link href={news_link} shallow={true} className={styles.menuLink}>
                ข่าวสาร/ประชาสัมพันธ์
              </Link>

              <Link href={reserve_link} shallow={true} className={styles.menuLink}>
                จองการจัดส่งพัสดุ
              </Link>

              <Link href={status_tracking_link} shallow={true} className={styles.menuLink}>
                ติดตามการจัดส่งพัสดุ
              </Link>

              <span>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              {/* <Search placeholder="Search" onSearch={onSearch} style={{ width: 200 }} enterButton allowClear className={styles.searchbluebtn} /> */}


            </Space>
          </Col>
        </Header>
      </Affix>
      {/* Center */}
      <Layout style={{ padding: '0 24px 24px', overflow: "hidden", position: "relative", minHeight: "100vh" }}>
        <Layout className={styles.breadcrumbBackground}>
          <Row>
            <div style={{ margin: '16px 0' }}>
              <BreadcrumbComponent />
            </div>
          </Row>
          <Row>
            <Title level={2} style={{ margin: '0px 90px', color: '#FFFFFF' }}>
              {pageProps.header}
            </Title>
          </Row>
        </Layout>
        <Image
          draggable={false}
          src={MapSrc}
          alt=""
          className={styles.backgroundImage}
        />
        <Content className={styles.layoutContent} style={{ margin: 0 }}> {children} </Content>
      </Layout>
      {/* Footer 1 */}
      <Footer className={styles.footer1}>
        { }
        <Col flex="200px" style={{ alignItems: 'center' }}>
          <Row style={{ paddingBottom: 30 }}>
            <Image
              draggable={false}
              width={225}
              height={70}
              className={styles.logoImage}
              src={logoSrc}
              alt=""
            />
          </Row>
          <Row justify={"center"}>
            <span>{appEmail}</span>
          </Row>
          <Row justify={"center"}>
            <span><FontAwesomeIcon icon={faPhone} />+66{appPhone}</span>
          </Row>
        </Col>

        <Col flex="200px">
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Row>
              <Link href={about_link} shallow={true} className={styles.menuLink}>เกี่ยวกับเรา</Link>
            </Row>
            <Row>
              <Link href={location_link} shallow={true} className={styles.menuLink}>จุดให้บริการ</Link>
            </Row>
            <Row>
              <Link href={news_link} shallow={true} className={styles.menuLink}>ข่าวสาร/ประชาสัมพันธ์</Link>
            </Row>
            <Row>
              <Link href={status_tracking_link} shallow={true} className={styles.menuLink}>ติดตามการจัดส่งพัสดุ</Link>
            </Row>
          </Space>
        </Col>

        <Col flex="auto" style={{ alignItems: "end", display: "flex", justifyContent: "flex-end", paddingRight: 20 }}>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Row justify={"center"}>
              <Space wrap>
                <Button shape="circle" href={facebook_link}>
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </Button>
                <Button shape="circle" href={twitter_link}>
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </Button>
              </Space>
            </Row>
            <Row justify={"center"}>
              <span style={{ textAlign: "center" }}>
                <b>รับโปรโมชั่นและดีลพิเศษก่อนใคร</b>
              </span>
            </Row>
            <Row justify={"center"} style={{ textAlign: "center" }}>
              <Form onFinish={ProFunc} layout="vertical">
                <Form.Item name="email" rules={[{ required: true, message: 'Please input email' }]}>
                  <Space.Compact style={{ width: '80%', borderRadius: 20, overflow: "hidden" }}>
                    <Input type="email" placeholder='E-mail' />
                    <Button htmlType="submit" type="primary" loading={loading} className="orangebtn">เข้าร่วม</Button>
                  </Space.Compact>
                </Form.Item>
              </Form>
            </Row>
          </Space>
        </Col>

      </Footer>
      {/* Footer 2 */}
      <Footer className={styles.footer2}>
        <label style={{ flex: "1" }}>{copyRight}</label>
        <Link href={terms_link} shallow={true} className={styles.menuLink}>
          Terms & Conditions
        </Link>
        <Link href={privacy_link} shallow={true} className={styles.menuLink}>
          Privacy Policy
        </Link>
        <div>All Speedy version {version}</div>
      </Footer>
    </Layout>
  );
}
