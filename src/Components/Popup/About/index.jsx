import React from "react";
import { Modal, Image, Typography } from "antd";
import { LOGO } from "../../../Routes/Route";

const { Title, Text } = Typography;

const PopupAbout = (props) => {
  const { modal, onClose } = props;

  return (
    <Modal
      title="Application Information"
      open={modal}
      onCancel={onClose}
      footer={null}
      width={400} // Điều chỉnh độ rộng của modal theo ý bạn
    >
      <div style={{ padding: 24 }}>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 16 }}
        >
          <Image width={70} src={LOGO.logoAxons} alt="LogoAxons" />
          <div style={{ marginLeft: 16 }}>
            <Title level={4} style={{ fontWeight: "bold", margin: 0 }}>
              Axons VietNam
            </Title>
            <Text>© Axons VietNam 2023. All rights reserved.</Text>
          </div>
        </div>
        <hr />
        <div>
          <Text strong>Application Name:</Text> CPV Application Name
          <br />
          <Text strong>Current Version:</Text> 1.0.0
          <br />
          <Text strong>Support: </Text>
          <a
            style={{ color: "blue" }}
            href="https://iservice.cp.com.vn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            iservice.cp.com.vn
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default PopupAbout;
