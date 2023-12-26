import React, { useContext, useEffect, useState } from "react";
import { Avatar, Layout, Menu, Select, Space } from "antd";
import { MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";
import { AppContext } from "../../contexts/AppContext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import SiderConfig from "../../Components/SiderConfig";
import PopupAbout from "../../Components/Popup/About";
import { LOGO, SAVE_KEYS } from "../../Routes/Route";
import { DataItems } from "../../Components/SiderConfig/CustomSider/DataItems";
import { DataItemsBelow } from "../../Components/SiderConfig/CustomSider/DataItemsBelow";

const { Sider } = Layout;

const { Header, Footer } = Layout;

function MainLayout(props) {
  //! <>==========================<DEFAULT>====================<>
  const {
    colorConfig,
    SizeConfig,
    activeMenuItem,
    handleActiveMenuItem,
    selectedLanguage,
    setSelectedLanguage,
    handleLogout,
  } = useContext(AppContext);
  const { t } = useTranslation();

  //! <>==========================<DEFAULT>====================<>
  //? ---------------------------------------------------------------------------
  //! <>==========================<USE-STATE>==================<>
  const [openDrawerSider, setOpenDrawerSider] = useState(false);
  const [PopupAboutOpen, setPopupAboutOpen] = useState(false);
  const OptionsLanguage = [
    { value: "en", label: "English" },
    { value: "lc", label: "Vietnamese" },
  ];

  const dataItems = DataItems();
  const dataItemsBelow = DataItemsBelow();

  //! <>==========================<USE-STATE>==================<>
  //? ---------------------------------------------------------------------------
  //! <>==========================<HANDLE>==================<>
  const showDrawerSider = () => {
    setOpenDrawerSider(true);
  };
  const onCloseDrawerSider = () => {
    setOpenDrawerSider(false);
  };
  const handlePopupAboutToggle = () => {
    setPopupAboutOpen((prevState) => !prevState);
  };

  const handleClosePopupAbout = () => {
    setPopupAboutOpen(false);
  };

  //! <>==========================<HANDLE>==================<>

  useEffect(() => {
    i18next.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  useEffect(() => {
    console.log(activeMenuItem);
    if (activeMenuItem === SAVE_KEYS.LOGOUT) {
      handleLogout();
    }
  }, [activeMenuItem]);

  return (
    <>
      {openDrawerSider ? (
        <SiderConfig
          open={openDrawerSider}
          onClose={onCloseDrawerSider}
          colorBgSider={colorConfig.Sider.background}
          colorTextSider={colorConfig.Sider.colorText}
          handlePopupAboutToggle={handlePopupAboutToggle}
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={handleActiveMenuItem}
        />
      ) : null}
      <PopupAbout modal={PopupAboutOpen} onClose={handleClosePopupAbout} />
      <Layout style={{ height: "100%" }}>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            background: "#ffffff",
            boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.1)",
            zIndex: 2,
          }}
        >
          <div className="desktop tablet">
            <img
              width={45}
              src={LOGO.logoAxons}
              alt="LogoAxons"
              style={{ marginRight: 13 }}
            />
            <img
              width={45}
              src={LOGO.logoApp}
              alt="LogoAxons"
              style={{ marginRight: 13 }}
            />
            <h2>Admin Control</h2>
          </div>
          <MenuUnfoldOutlined
            className="mobile"
            onClick={showDrawerSider}
            style={{ marginLeft: -26, fontSize: "16px" }}
          />
          <div
            style={{ marginLeft: "auto", display: "flex", marginRight: -26 }}
          >
            <div className="desktop tablet">
              <Space size={8} wrap>
                <Avatar
                  icon={<UserOutlined />}
                  style={{
                    fontSize: 16,
                    cursor: "pointer",
                  }}
                />
                <p>{t("Logout")}</p>
                <Avatar
                  src={LOGO.LOGO_EN}
                  style={{
                    fontSize: 16,
                    border:
                      selectedLanguage === "en" ? "2px solid blue" : "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedLanguage("en")}
                />
                <Avatar
                  src={LOGO.LOGO_VN}
                  style={{
                    fontSize: 16,
                    border:
                      selectedLanguage === "lc" ? "2px solid blue" : "none",
                    cursor: "pointer",
                    marginRight: 8,
                  }}
                  onClick={() => setSelectedLanguage("lc")}
                />
              </Space>
            </div>
            <div className="mobile">
              <Select
                defaultValue={selectedLanguage} // Giá trị mặc định
                style={{ width: 120 }}
                options={OptionsLanguage}
                value={selectedLanguage}
                onChange={(e) => {
                  setSelectedLanguage(e);
                }}
              />
            </div>
          </div>
        </Header>

        <Layout>
          <Sider
            className="desktop tablet"
            width={SizeConfig.Sider.width}
            theme="light"
            style={{
              zIndex: 1,
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={SAVE_KEYS.DASHBOARD}
              defaultOpenKeys={["sub1"]}
              selectedKeys={activeMenuItem}
              style={{
                overflowY: "auto",
                width: SizeConfig.Sider.width,
                height: "calc(100% - 48px)",
                borderRight: 0,
                color: colorConfig.Sider.colorText,
                backgroundColor: colorConfig.Sider.backgroundColor,
                fontFamily: "IBMPlexSans-Medium",
                position: "relative",
              }}
              items={dataItems}
              onClick={({ key }) => {
                handleActiveMenuItem(key);
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                textAlign: "center",
              }}
            >
              <Menu
                mode="inline"
                selectedKeys={[]}
                style={{
                  color: colorConfig.Sider.colorText,
                  backgroundColor: colorConfig.Sider.backgroundColor,
                  fontFamily: "IBMPlexSans-Medium",
                }}
                items={dataItemsBelow}
                onClick={() => {
                  handlePopupAboutToggle();
                }}
              />
            </div>
          </Sider>

          <Layout
            style={{
              padding: "0 24px 24px",
              minHeight: SizeConfig.LayoutChildren.minHeight,
            }}
          >
            {props.children}
            {/* <CustomBreadcrumbs breadcrumbItems={breadcrumbItems} />
            <Content
              style={{
                padding: SizeConfig.Content.padding,
                margin: SizeConfig.Content.margin,
                minHeight: SizeConfig.Content.minHeight,
                background: colorConfig.Content.background,
                borderRadius: colorConfig.Content.RadiusLG,
                wordWrap: "break-word",
                position: "relative",
              }}
            >
              {loading && (
                <div>
                  <Overlay />
                </div>
              )}
              {props.children}
              <Button
                onClick={() => {
                  setLoading(true);
                  // Simulate an asynchronous operation, like fetching data
                  setTimeout(() => {
                    // Perform any other actions if needed
                    setLoading(false);
                  }, 10000);
                }}
              >
                Test
              </Button>

              <Table dataSource={dataSource} columns={columns} />
            </Content> */}
          </Layout>
        </Layout>
        <Footer
          style={{
            textAlign: "center",
            background: colorConfig.Footer.background,
            color: colorConfig.Footer.color,
            fontFamily: "IBMPlexSans-MediumItalic",
          }}
        >
          © 2023 - Design by AXONS IT CPV - All rights reserved
        </Footer>
      </Layout>
    </>
  );
}

export default MainLayout;
