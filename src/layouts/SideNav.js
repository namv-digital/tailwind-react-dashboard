/* This component requires Tailwind CSS v2.0+ */
import React from "react";
import { Link } from "react-router-dom";
import InterviewStatusButton from "../components/InterviewStatusMenuButton";
import { sidebarNavItems } from "../constants/routes";
import { useSelector } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SideNav() {
  const sideBarCollapsed = useSelector((state) => state.ui.sideBarCollapsed);

  const [current, setCurrent] = React.useState(sidebarNavItems[0].name);

  const itemClickHandler = (navItemName) => () => {
    setCurrent(navItemName);
  };

  return (
    <div
      className={classNames(
        "hidden md:flex flex-col flex-grow border-r border-gray-200 pb-4 bg-white overflow-y-auto",
        sideBarCollapsed ? "md:w-14 overflow-hidden" : "md:w-64"
      )}
    >
      <div className="mt-3 flex-grow flex flex-col">
        <InterviewStatusButton isCollapsed={sideBarCollapsed} />
        <nav className="flex flex-col flex-1 bg-white" aria-label="Sidebar">
          {sidebarNavItems.map((item, index) => (
            <>
              {item.name === "Settings" && (
                <div
                  className={classNames("mt-auto border-t border-gray-200")}
                  style={
                    item.name === "Settings"
                      ? { borderTopColor: "rgb(229, 231, 235)" }
                      : {}
                  }
                />
              )}
              <Link
                to={item.to}
                key={item.name}
                href={item.href}
                className={classNames(
                  current === item.name
                    ? "bg-indigo-50 border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  "group flex items-center px-3 py-2 text-sm font-medium border-l-4 border-r-4",
                  index === 0 ? "mt-0" : "mt-1",
                  !sideBarCollapsed ? "" : "justify-center"
                )}
                onClick={itemClickHandler(item.name)}
                style={{ borderRightColor: "transparent" }}
              >
                <item.icon
                  className={classNames(
                    current === item.name
                      ? "text-indigo-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "flex-shrink-0 h-6 w-6",
                    !sideBarCollapsed ? "mr-3" : "mr-0"
                  )}
                  aria-hidden="true"
                />
                <span className={sideBarCollapsed ? "hidden" : "block"}>
                  {item.name}
                </span>
              </Link>
            </>
          ))}
        </nav>
      </div>
    </div>
  );
}
