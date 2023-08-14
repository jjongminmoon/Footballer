import { Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/main/Page";
import LoginPage from "./components/pages/login/Page";
import JoinPage from "./components/pages/join/Page";
import RegisterPlayerPage from "./components/pages/register/player/Page";
import RegisterTeamPage from "./components/pages/register/team/Page";
import MyPage from "./components/pages/mypage/Page";
import UserPage from "./components/pages/mypage/user/Page";
import ProfilePage from "./components/pages/mypage/profile/Page";
import TeamPage from "./components/pages/mypage/team/Page";
import TeamSearchPage from "./components/pages/search/team/Page";
import PlayerSearchPage from "./components/pages/search/player/Page";
import SearchPage from "./components/pages/search/Page";
import MemberPage from "./components/pages/mypage/member/Page";
import ApplicationListPage from "./components/pages/mypage/application-list/Page";
import ApplicationStatusPage from "./components/pages/mypage/application-status/Page";
import PlayerDetailPage from "./components/pages/detail/player/Page";

export default function PageNavigator() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/search" element={<SearchPage />}>
        <Route path="/search/team" element={<TeamSearchPage />} />
        <Route path="/search/player" element={<PlayerSearchPage />} />
      </Route>
      <Route path="/register/player" element={<RegisterPlayerPage />} />
      <Route path="/register/team" element={<RegisterTeamPage />} />
      <Route path="/mypage/" element={<MyPage />}>
        <Route path="/mypage/user" element={<UserPage />} />
        <Route path="/mypage/player" element={<ProfilePage />} />
        <Route path="/mypage/team" element={<TeamPage />} />
        <Route path="/mypage/application-status" element={<ApplicationStatusPage />} />
        <Route path="/mypage/member" element={<MemberPage />} />
        <Route path="/mypage/application-list" element={<ApplicationListPage />} />
      </Route>
      <Route path="/detail/player" element={<PlayerDetailPage />} />
    </Routes>
  );
}
