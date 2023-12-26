import React from "react";
import { Drawer } from "antd";
import CustomSider from "./CustomSider/CustomSider";

const SiderConfig = ({
  open,
  onClose,
  colorBgSider,
  colorTextSider,
  handlePopupAboutToggle,
  activeMenuItem,
  setActiveMenuItem,
}) => {
  return (
    <>
      <Drawer
        closeIcon={null}
        placement="left"
        onClose={onClose}
        open={open}
        width="auto"
        style={{ height: "calc(100% - 18px)" }}
      >
        <CustomSider
          visible={open}
          colorBgSider={colorBgSider}
          colorTextSider={colorTextSider}
          handlePopupAboutToggle={handlePopupAboutToggle}
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={setActiveMenuItem}
        />
      </Drawer>
    </>
  );
};

export default SiderConfig;
