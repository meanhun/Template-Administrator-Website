import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
import { SAVE_KEYS } from "../../../Routes/Route";
import "./CustomSider.css";
import { AppContext } from "../../../contexts/AppContext";
import { useTranslation } from "react-i18next";
const { Sider } = Layout;

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

const CustomSider = ({
  visible,
  colorBgSider,
  colorTextSider,
  handlePopupAboutToggle,
  activeMenuItem,
  setActiveMenuItem,
}) => {
  //! <>==========================<DEFAULT>====================<>
  const { SizeConfig } = useContext(AppContext);
  const { t } = useTranslation();
  //! <>==========================<DEFAULT>====================<>
  //? ---------------------------------------------------------------------------
  //! <>==========================<USE-STATE>==================<>
  const dataItems = [
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem(
        "Item 1",
        "g1",
        null,
        [getItem(t("Option1"), "LOAD_THE_FIRST"), getItem("Option 2", "2")],
        "group"
      ),
      getItem(
        "Item 2",
        "g2",
        null,
        [getItem("Option 3", "3"), getItem("Option 4", "4")],
        "group"
      ),
    ]),
    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]),
    {
      type: "divider",
    },
    getItem("Other", "oth", null, [getItem(t("Logout"), "25")], "group"),
  ];

  const dataItemsBelow = [getItem("About us", "About-us", null, null)];
  //! <>==========================<USE-STATE>==================<>

  return (
    <Sider
      width={SizeConfig.Sider.width}
      theme="light"
      style={{
        display: visible ? "block" : "none",
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
          color: colorTextSider,
          backgroundColor: colorBgSider,
          fontFamily: "IBMPlexSans-Medium",
          position: "relative",
        }}
        items={dataItems}
        onClick={({ key }) => {
          setActiveMenuItem(key);
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
            color: colorTextSider,
            backgroundColor: colorBgSider,
            fontFamily: "IBMPlexSans-Medium",
          }}
          items={dataItemsBelow}
          onClick={() => {
            handlePopupAboutToggle();
          }}
        />
      </div>
    </Sider>
  );
};

export default CustomSider;
