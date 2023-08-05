import { Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/main/Page";
import LoginPage from "./components/pages/login/Page";
import JoinPage from "./components/pages/join/Page";
import RegisterPage from "./components/pages/register/Page";
import MyPage from "./components/pages/mypage/Page";
import UserPage from "./components/pages/mypage/user/Page";

export default function PageNavigator() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/mypage/" element={<MyPage />}>
        <Route path="/mypage/user" element={<UserPage />} />
        <Route path="/mypage/player" />
        <Route path="/mypage/team" />
      </Route>
    </Routes>
  );
}
