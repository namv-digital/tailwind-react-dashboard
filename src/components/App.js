import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TEAM_PROFILE } from "../util/constants";
import Companies from "../pages/Companies";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Teams from "../pages/Teams";
import Team from "../pages/Team";
import TeamContact from "../pages/Team/TeamContact";
import TeamCreate from "../pages/Team/TeamCreate";
import TeamStatistics from "../pages/Team/TeamStatistics";
import TeamDetail from "../pages/Team/TeamDetail";

import AppContainer from "./AppContainer";
import { InviteModal } from "./Invitation/InviteModal";
import ChoiceSelect from "./shared/ChoiceSelect";
import TeamProfile from "./Team/TeamProfile";
import UserProfileCreate from "./UserProfile/UserProfileCreate";
import UserProfileDetail from "./UserProfile/UserProfileDetail";
import TeamMessages from "../pages/Team/TeamMessages";


function App() {
  return (
    <div className="h-screen flex flex-col">
      <BrowserRouter>
        <AppContainer>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/invite" element={<InviteModal />} />
            <Route path="/user/create" element={<UserProfileCreate />} />
            <Route path="/eletest" element={<ChoiceSelect />} />
            <Route path="/user/detail" element={<UserProfileDetail />} />
            <Route path="/team/create" element={<TeamCreate />} />
            <Route path="/team/:id" element={<Team />} />
            <Route path="/team/:id/contact" element={<TeamContact />} />
            <Route path="/team/:id/stats" element={<TeamStatistics />} />
            <Route path="/team/:id/messages" element={<TeamMessages />} />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
