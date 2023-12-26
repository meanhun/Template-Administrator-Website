import React from "react";
import { Breadcrumb } from "antd";
// import { AppContext } from "../../contexts/AppContext";

export default function CustomBreadcrumbs({ breadcrumbItems }) {
  //   const { SizeConfig } = useContext(AppContext);

  return (
    <>
      <Breadcrumb
        className="desktop"
        style={{
          fontSize: 16,
          fontFamily: "IBMPlexSans-Medium",
          marginTop: 20,
          marginBottom: 20,
        }}
        items={breadcrumbItems}
      />
    </>
  );
}
