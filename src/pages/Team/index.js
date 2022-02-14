/* This component requires Tailwind CSS v2.0+ */
import React from "react";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import SideNav from "./SideNav";
import TeamDetail from "./TeamDetail";
import TeamProfile from "../../components/Team/TeamProfile";
import { TEAM_PROFILE } from "../../util/constants";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Dashboard", icon: HomeIcon, href: "#", current: true },
  { name: "Team", icon: UsersIcon, href: "#", count: 3, current: false },
  { name: "Projects", icon: FolderIcon, href: "#", count: 4, current: false },
  { name: "Calendar", icon: CalendarIcon, href: "#", current: false },
  { name: "Documents", icon: InboxIcon, href: "#", count: 12, current: false },
  { name: "Reports", icon: ChartBarIcon, href: "#", current: false },
];

export default function Team() {
  return (
    <div className="flex h-full bg-gray-200">
      <SideNav />
      <div className="w-full p-6">
        <TeamProfile detail={TEAM_PROFILE} />
      </div>
    </div>
  );
}
