import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import { SAVE_KEYS } from "../../../Routes/Route";
import "./CustomSider.css";
import { AppContext } from "../../../contexts/AppContext";
import { DataItems } from "./DataItems";
import { DataItemsBelow } from "./DataItemsBelow";
const { Sider } = Layout;

// const getItem = (label, key, icon, children, type) => {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   };
// };

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
  // const { t } = useTranslation();
  //! <>==========================<DEFAULT>====================<>
  //? ---------------------------------------------------------------------------
  //! <>==========================<USE-STATE>==================<>
  const dataItems = DataItems();
  const dataItemsBelow = DataItemsBelow();

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
