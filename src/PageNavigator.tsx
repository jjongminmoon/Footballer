import { Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/main/Page";
import LoginPage from "./components/pages/login/Page";

export default function PageNavigator() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
