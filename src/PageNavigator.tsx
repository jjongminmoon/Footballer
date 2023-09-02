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
import TeamDetailPage from "./components/pages/detail/team/Page";
import FieldInfoPage from "./components/pages/field/Page";
import FieldDetailPage from "./components/pages/detail/field/Page";
import MatchDetailPage from "./components/pages/detail/match/Page";
import ReceiveScoutingPage from "./components/pages/mypage/receive-scouting/Page";
import OfferScoutingPage from "./components/pages/mypage/offer-scouting/Page";
import MyMatchPage from "./components/pages/mypage/match/Page";
import IndividualHistoryPage from "./components/pages/mypage/individual-history/Page";
import TeamHistoryPage from "./components/pages/mypage/team-history/Page";
import FootballercupPage from "./components/pages/footballercup/Page";
import IntroducePage from "./components/pages/introduce/Page";
import CustomerServicePage from "./components/pages/cs/Page";

export default function PageNavigator() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/introduce" element={<IntroducePage />} />
      <Route path="/cs" element={<CustomerServicePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/register/player" element={<RegisterPlayerPage />} />
      <Route path="/register/team" element={<RegisterTeamPage />} />
      <Route path="/field" element={<FieldInfoPage />} />
      <Route path="/detail/field/:id" element={<FieldDetailPage />} />
      <Route path="/detail/player/:id" element={<PlayerDetailPage />} />
      <Route path="/detail/team/:id" element={<TeamDetailPage />} />
      <Route path="/detail/match/:id" element={<MatchDetailPage />} />
      <Route path="/search" element={<SearchPage />}>
        <Route path="/search/team" element={<TeamSearchPage />} />
        <Route path="/search/player" element={<PlayerSearchPage />} />
      </Route>
      <Route path="/mypage/" element={<MyPage />}>
        <Route path="/mypage/user" element={<UserPage />} />
        <Route path="/mypage/player" element={<ProfilePage />} />
        <Route path="/mypage/application-status" element={<ApplicationStatusPage />} />
        <Route path="/mypage/receive-scouting" element={<ReceiveScoutingPage />} />
        <Route path="/mypage/individual-history" element={<IndividualHistoryPage />} />
        <Route path="/mypage/team" element={<TeamPage />} />
        <Route path="/mypage/member" element={<MemberPage />} />
        <Route path="/mypage/match" element={<MyMatchPage />} />
        <Route path="/mypage/application-list" element={<ApplicationListPage />} />
        <Route path="/mypage/offer-scouting" element={<OfferScoutingPage />} />
        <Route path="/mypage/team-history" element={<TeamHistoryPage />} />
      </Route>
      <Route path="/footballercup" element={<FootballercupPage />} />
    </Routes>
  );
}
