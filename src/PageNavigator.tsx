import { Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/main/Page";

export default function PageNavigator() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
