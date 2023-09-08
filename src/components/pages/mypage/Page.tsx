import styled from "@emotion/styled";
import CommonBanner from "../../ui/CommonBanner";
import SideNavigation from "./SideNavigation";
import NameCard from "./NameCard";
import { Outlet } from "react-router-dom";

export default function MyPage() {
  return (
    <Section>
      <CommonBanner />
      <div className="mypage">
        <SideNavigation />
        <Content>
          <NameCard />
          <Outlet />
        </Content>
      </div>
    </Section>
  );
}

const Section = styled.section`
  .mypage {
    display: flex;
    gap: 30px;
  }
`;

const Content = styled.div`
  width: 100%;
`;
