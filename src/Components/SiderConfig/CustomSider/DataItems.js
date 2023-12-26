import React from "react";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { SAVE_KEYS } from "../../../Routes/Route";

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

export function DataItems() {
  const { t } = useTranslation();

  return [
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
    getItem(
      "Other",
      "oth",
      null,
      [getItem("Logout", SAVE_KEYS.LOGOUT)],
      "group"
    ),
  ];
}
