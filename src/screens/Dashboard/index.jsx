import React, { useContext, useState } from "react";
import CustomBreadcrumbs from "../../Components/Breadcrumbs";
import { Button, Layout, Table } from "antd";
import { AppContext } from "../../contexts/AppContext";
import Overlay from "../../Components/Overlay";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Routes/Route";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

function DashboardScreen(props) {
  //! <>==========================<DEFAULT>====================<>
  const { Content } = Layout;
  const {
    colorConfig,
    SizeConfig,
    // handleActiveMenuItem,
    // selectedLanguage,
    // setSelectedLanguage,
  } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  // const { t } = useTranslation();
  const navigate = useNavigate();
  //! <>==========================<DEFAULT>====================<>

  const breadcrumbItems = [
    {
      key: "thong-tin",
      title: "Information",
      href: "#",
      onClick: () => navigate(ROUTES.CONFIG),
    },
    {
      key: "ThemMoi",
      title: <span style={{}}>EditInformation</span>,
    },
  ];
  return (
    <div>
      <CustomBreadcrumbs breadcrumbItems={breadcrumbItems} />
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
      </Content>
    </div>
  );
}

export default DashboardScreen;
