import React from "react"; // , { useEffect }
import { AppContext } from "./AppContext";
import { useState } from "react";
import { SAVE_KEYS } from "../Routes/Route";
// import { notification } from "antd";
// import { SmileOutlined } from "@ant-design/icons";
//const AUTO_LOGOUT_TIME = 1 * 60 * 1000; // 1 phút

export const AppProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("lc");
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("LocalStorage")) || null;
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu người dùng từ LocalStorage: ", error);
      return null;
    }
  });

  const [activeMenuItem, setActiveMenuItem] = useState(() => {
    try {
      return localStorage.getItem("SaveKeyMenu") || SAVE_KEYS.LOAD_THE_FIRST;
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu key menu từ LocalStorage: ", error);
      return [];
    }
  });

  const handleActiveMenuItem = (menuItem) => {
    try {
      setActiveMenuItem(menuItem);
      localStorage.setItem("SaveKeyMenu", menuItem);
    } catch (error) {
      console.error("Lỗi khi lưu dữ key menu vào LocalStorage: ", error);
    }
  };

  //! ============================================ CHECK login 10p ================
  // useEffect(() => {
  //   // Thiết lập đồng hồ đếm ngược khi component được mount
  //   const loginTime = new Date().getTime();
  //   const interval = setInterval(() => {
  //     if (new Date().getTime() - loginTime > AUTO_LOGOUT_TIME) {
  //       handleLogout();
  //     }
  //   }, 60 * 1000); // Kiểm tra mỗi 1 phút

  //   // Dọn dẹp khi component bị unmount
  //   return () => clearInterval(interval);
  // }, []);
  //! ============================================ CHECK login 10p ================

  //   useEffect(() => {
  //     // Yêu cầu quyền hiển thị thông báo khi ứng dụng khởi động
  //     Notification.requestPermission().then((permission) => {
  //       if (permission === "granted") {
  //         console.log("Notification permission granted.");
  //       } else {
  //         console.log("Notification permission denied.");
  //       }
  //     });
  //   }, []);

  //   const [webSocket, setWebSocket] = useState(null);

  //   useEffect(() => {
  //     // Khởi tạo WebSocket khi component được mount
  //     const ws = new WebSocket(
  //       "wss://cpvdev.cp.com.vn/mh_api_Fivestar_websales/ws"
  //     );

  //     ws.onopen = () => {
  //       console.log("WebSocket Connected");

  //       // Gửi tin nhắn sau khi kết nối được mở
  //       // ws.send('{ "Type": "order", "Content": "sẽ thông báo ở đây" }');
  //     };

  //     ws.onmessage = (event) => {
  //       try {
  //         console.log("Message from server ", event.data);
  //         // Hiển thị thông báo nếu có quyền
  //         if (Notification.permission === "granted") {
  //           new Notification("Thông báo mới", {
  //             body: event.data, // Nội dung thông báo từ server
  //             // Có thể thêm các tùy chọn khác như icon, v.v.
  //           });
  //         }

  //         // Hiển thị thông báo ở góc dưới bên phải khi có kết quả từ server
  //         notification.success({
  //           message: "Thông báo",
  //           description: event.data,
  //           placement: "bottomRight", // Hiển thị ở góc dưới bên phải
  //           icon: (
  //             <SmileOutlined
  //               style={{
  //                 color: "#108ee9",
  //               }}
  //             />
  //           ),
  //         });
  //       } catch (error) {
  //         console.error("Error parsing JSON message: ", error);
  //       }
  //     };

  //     ws.onerror = (error) => {
  //       // Xử lý lỗi nếu có
  //       console.error("WebSocket Error ", error);
  //     };

  //     ws.onclose = (event) => {
  //       // Xử lý khi kết nối đóng
  //       console.log("WebSocket Disconnected", event);
  //     };

  //     setWebSocket(ws);

  //     // Cleanup function khi component được unmount
  //     return () => {
  //       ws.close();
  //     };
  //   }, []);

  //! ============================================ CHECK login 10p ================

  const handleLogin = (user) => {
    try {
      localStorage.setItem("LocalStorage", JSON.stringify(user));
      setUser(user);
    } catch (error) {
      console.error("Lỗi khi lưu dữ liệu người dùng vào LocalStorage: ", error);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.clear();
      setUser(null);
      setActiveMenuItem(SAVE_KEYS.LOAD_THE_FIRST);
    } catch (error) {
      console.error("Lỗi khi xóa dữ liệu người dùng từ LocalStorage: ", error);
    }
  };

  const SizeConfig = {
    Breadcrumbs: {
      fontSize: 18,
    },
    Sider: {
      width: 220,
    },
    Content: {
      padding: 24,
      margin: 0,
      minHeight: 772,
    },
    LayoutChildren: {
      minHeight: 861,
    },
  };

  const colorConfig = {
    Footer: {
      background: "#074E9F",
      color: "#FFFFFF",
    },
    Sider: {
      colorText: "#000000",
      background: "#FFFFFF",
    },

    Content: {
      RadiusLG: 7,
      background: "#FFFFFF",
    },

    Breadcrumbs: {
      color: "#A0A0A0",
      colorActive: "#000000",
    },

    Button: "#074E9F",
    Green: "#00964C", //"#0BC133",
    White: "#ffffff",
    Black: "black",
    Red: "#d03f3f",
    Restore: "#4489E4",
  };

  return (
    <AppContext.Provider
      value={{
        user,
        SizeConfig,
        colorConfig,
        activeMenuItem,

        selectedLanguage,
        setSelectedLanguage,
        handleActiveMenuItem,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
