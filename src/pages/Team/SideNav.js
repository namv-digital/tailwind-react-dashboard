/* This component requires Tailwind CSS v2.0+ */
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  CalendarIcon,
  UserGroupIcon,
  ChatAltIcon,
  PlusIcon,
} from "@heroicons/react/solid";
import Select from "../../components/Select";
import { useDispatch } from "react-redux";
import { collapseSideNav } from "../../actions";

export const sidebarNavItems = [
  {
    name: "Team Profile",
    icon: UserGroupIcon,
    to: (id) => `/team/${id}`,
  },
  {
    name: "Message Center",
    icon: CalendarIcon,
    to: (id) => `/team/${id}/messages`,
  },
  {
    name: "Team Chat",
    icon: ChatAltIcon,
    to: (id) => `/team/${id}/chat`,
  },
];

const teams = [
  {
    name: "Teammate One",
    status: "active",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Teammate Two",
    status: "open",
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Teammate Three",
    status: "inactive",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const interviewStatusStyles = {
  active: "w-5 h-5 bg-green-700",
  open: "w-5 h-5 border-blue-700 bg-blue-200 border-8",
  inactive: "w-5 h-5 border-red-700 bg-red-200 border-4",
};

export default function SideNav() {
  const dispatch = useDispatch();
  const [current, setCurrent] = React.useState(sidebarNavItems[0].name);
  const { id } = useParams();
  const itemClickHandler = (navItemName) => () => {
    setCurrent(navItemName);
  };

  React.useEffect(() => {
    dispatch(collapseSideNav(true));
    return () => {
      dispatch(collapseSideNav(false));
    };
  }, [dispatch]);

  return (
    <div
      className={classNames(
        "flex flex-col flex-grow border-r border-gray-200 bg-white overflow-y-auto"
      )}
    >
      <div className="flex-grow flex flex-col">
        <div className="p-5">
          {/* <InterviewStatusButton isCollapsed={isCollapsed} /> */}
          <Select />
          <ul role="list" className="my-4">
            {teams.map((team) => (
              <li key={team.email} className="py-2 flex items-center">
                <img className="h-8 w-8 rounded-full" src={team.image} alt="" />
                <div className="ml-3 mr-auto">
                  <p className="text-sm font-normal text-gray-900">
                    {team.name}
                  </p>
                </div>
                <div
                  className={classNames(
                    "w-5 h-5 m-l-auto rounded-full",
                    interviewStatusStyles[team.status]
                  )}
                ></div>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="inline-flex items-center w-full px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-normal rounded-md text-gray-500 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PlusIcon
              className="-ml-1 mr-2 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
            Invite a teammate
          </button>
        </div>
        <div className={classNames("mb-6 border-t border-gray-200")} />
        <nav className="flex flex-col flex-1 bg-white" aria-label="Sidebar">
          {sidebarNavItems.map((item, index) => (
            <div key={index}>
              <Link
                to={item.to(id)}
                key={item.name}
                href={item.href}
                className={classNames(
                  current === item.name
                    ? "bg-indigo-50 border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  "group flex items-center px-3 py-2 text-sm font-medium border-l-4 border-r-4",
                  index === 0 ? "mt-0" : "mt-1"
                )}
                onClick={itemClickHandler(item.name)}
                style={{ borderRightColor: "transparent" }}
              >
                <item.icon
                  className={classNames(
                    current === item.name
                      ? "text-indigo-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "flex-shrink-0 h-6 w-6 mr-3"
                  )}
                  aria-hidden="true"
                />
                <span className="">{item.name}</span>
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
