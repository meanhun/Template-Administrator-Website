import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/Main";
import { useTranslation } from "react-i18next";
import LoginScreen from "./screens/Login";
import { AppContext } from "./contexts/AppContext";
import { ROUTES } from "./Routes/Route";
import DashboardScreen from "./screens/Dashboard";

// function Dashboard() {
//   const { t } = useTranslation();
//   return <p>{t("Logout")} Dashboard</p>;
// }

function Config() {
  const { t } = useTranslation();
  return <p>{t("Logout")} Config</p>;
}

function Normal() {
  const { t } = useTranslation();
  return <p>{t("Logout")} Normal</p>;
}

function NotFound() {
  const { t } = useTranslation();
  return <p>{t("PageNotFound")}</p>;
}

function App() {
  const { user } = useContext(AppContext);

  const checkRole = (allowedRoles, userRoles) => {
    return allowedRoles.some((role) => userRoles.includes(role));
  };

  const PrivateRoute = ({ element, allowedRoles }) => {
    return user ? (
      checkRole(["admin", ...allowedRoles], user.Auth) ? (
        <MainLayout>{element}</MainLayout>
      ) : (
        <NotFound />
      )
    ) : (
      <Navigate to={ROUTES.LOGIN} />
    );
  };

  const DefaultRoute = () => {
    // Kiểm tra nếu user có quyền "normal" thì chuyển hướng sang ROUTES.NORMAL
    if (user && checkRole(["normal"], user.Auth)) {
      return <Navigate to={ROUTES.NORMAL} />;
    }
    // Nếu không, chuyển hướng sang ROUTES.DASHBOARD
    return <Navigate to={ROUTES.DASHBOARD} />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.DEFAULT} element={<DefaultRoute />} />
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <PrivateRoute
              element={<DashboardScreen />}
              allowedRoles={["admin", "manager"]}
            />
          }
        />
        <Route
          path={ROUTES.CONFIG}
          element={
            <PrivateRoute
              element={<Config />}
              allowedRoles={["admin", "manager"]}
            />
          }
        />
        <Route
          path={ROUTES.NORMAL}
          element={
            <PrivateRoute
              element={<Normal />}
              allowedRoles={["admin", "normal"]}
            />
          }
        />
        <Route
          path={ROUTES.LOGIN}
          element={user ? <Navigate to={ROUTES.DASHBOARD} /> : <LoginScreen />}
        />
        <Route element={<NotFound />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
