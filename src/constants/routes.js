import {
  TemplateIcon,
  UserIcon,
  UserGroupIcon,
  OfficeBuildingIcon,
  CogIcon
} from "@heroicons/react/solid";

export const sidebarNavItems = [
  {
    name: "Dashboard",
    icon: TemplateIcon,
    to: "/",
  },
  {
    name: "Profile",
    icon: UserIcon,
    to: "/profile",
  },
  {
    name: "Teams",
    icon: UserGroupIcon,
    to: "/teams",
  },
  {
    name: "Companies",
    icon: OfficeBuildingIcon,
    to: "/companies",
  },
  {
    name: "Settings",
    icon: CogIcon,
    to: "/settings",
  },
];
