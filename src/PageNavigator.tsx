import Loading from "./components/ui/Loading";
import IntroducePage from "./components/pages/introduce/Page";
import CustomerServicePage from "./components/pages/cs/Page";
import TeamSearchPage from "./components/pages/search/team/Page";
import PlayerSearchPage from "./components/pages/search/player/Page";
import UserPage from "./components/pages/mypage/user/Page";
import ProfilePage from "./components/pages/mypage/profile/Page";
import ApplicationStatusPage from "./components/pages/mypage/application-status/Page";
import ReceiveScoutingPage from "./components/pages/mypage/receive-scouting/Page";
import IndividualHistoryPage from "./components/pages/mypage/individual-history/Page";
import TeamPage from "./components/pages/mypage/team/Page";
import MemberPage from "./components/pages/mypage/member/Page";
import MyMatchPage from "./components/pages/mypage/match/Page";
import ApplicationListPage from "./components/pages/mypage/application-list/Page";
import OfferScoutingPage from "./components/pages/mypage/offer-scouting/Page";
import TeamHistoryPage from "./components/pages/mypage/team-history/Page";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const MainPage = lazy(() => import("./components/pages/main/Page"));
const LoginPage = lazy(() => import("./components/pages/login/Page"));
const JoinPage = lazy(() => import("./components/pages/join/Page"));
const RegisterTeamPage = lazy(() => import("./components/pages/register/team/Page"));
const RegisterPlayerPage = lazy(() => import("./components/pages/register/player/Page"));
const TeamDetailPage = lazy(() => import("./components/pages/detail/team/Page"));
const PlayerDetailPage = lazy(() => import("./components/pages/detail/player/Page"));
const MatchDetailPage = lazy(() => import("./components/pages/detail/match/Page"));
const FieldListPage = lazy(() => import("./components/pages/field/Page"));
const FieldDetailPage = lazy(() => import("./components/pages/detail/field/Page"));
const SearchPage = lazy(() => import("./components/pages/search/Page"));
const MyPage = lazy(() => import("./components/pages/mypage/Page"));
const FootballercupPage = lazy(() => import("./components/pages/footballercup/Page"));

export default function PageNavigator() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/introduce" element={<IntroducePage />} />
        <Route path="/cs" element={<CustomerServicePage />} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/join" Component={JoinPage} />
        <Route path="/register/team" Component={RegisterTeamPage} />
        <Route path="/register/player" Component={RegisterPlayerPage} />
        <Route path="/detail/team/:id" Component={TeamDetailPage} />
        <Route path="/detail/player/:id" Component={PlayerDetailPage} />
        <Route path="/detail/match/:id" Component={MatchDetailPage} />
        <Route path="/field" Component={FieldListPage} />
        <Route path="/detail/field/:id" Component={FieldDetailPage} />
        <Route path="/search" Component={SearchPage}>
          <Route path="/search/team" element={<TeamSearchPage />} />
          <Route path="/search/player" element={<PlayerSearchPage />} />
        </Route>
        <Route path="/mypage/" Component={MyPage}>
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
        <Route path="/footballercup" Component={FootballercupPage} />
      </Routes>
    </Suspense>
  );
}
