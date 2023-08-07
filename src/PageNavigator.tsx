import { Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/main/Page";
import LoginPage from "./components/pages/login/Page";
import JoinPage from "./components/pages/join/Page";
import RegisterPlayerPage from "./components/pages/register/player/Page";
import RegisterTeamPage from "./components/pages/register/team/Page";
import MyPage from "./components/pages/mypage/Page";
import UserPage from "./components/pages/mypage/user/Page";
import PlayerPage from "./components/pages/mypage/player/Page";
import TeamPage from "./components/pages/mypage/team/Page";

export default function PageNavigator() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/register/player" element={<RegisterPlayerPage />} />
      <Route path="/register/team" element={<RegisterTeamPage />} />
      <Route path="/mypage/" element={<MyPage />}>
        <Route path="/mypage/user" element={<UserPage />} />
        <Route path="/mypage/player" element={<PlayerPage />} />
        <Route path="/mypage/team" element={<TeamPage />} />
      </Route>
    </Routes>
  );
}
