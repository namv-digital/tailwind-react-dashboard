import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import {
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import TopNav from "../layouts/TopNav";
import SideNav from "../layouts/SideNav";

import { SearchIcon, TemplateIcon } from "@heroicons/react/solid";
import Auth0Wrapper from "./Auth/Auth0Wrapper";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "#", icon: TemplateIcon, current: true },
  { name: "Message Center", href: "#", icon: HomeIcon, current: false },
  { name: "My Teams", href: "#", icon: UsersIcon, current: false },
  { name: "Create a team", href: "#", icon: FolderIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AppContainer({ children }) {
  const sideBarCollapsed = useSelector((state) => state.ui.sideBarCollapsed);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html className="h-full">
        <body className="h-full">
        ```
      */}
      <div className="sticky top-0 z-10">
        <TopNav />
      </div>
      <div className="flex flex-grow bg-gray-200">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-40 flex md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 px-4 flex items-center">
                  <img
                    className="h-8 w-auto"
                    src="/teemo-svg-logo.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group rounded-md py-2 px-2 flex items-center text-base font-medium"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-4 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        {/* <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0" style={sideBarCollapsed ? { paddingLeft: "70px" } : {}}>
          
        </div> */}
        <SideNav />
        <div
          className="w-full"
        >
          <div className="flex flex-col m-auto h-full">
            <main className="flex-1">
              <div className="h-full">
                {/* Replace with your content */}
                {children ? (
                  children
                ) : (
                  <div className="py-4">
                    <div className="h-96 border-4 border-dashed border-gray-200 rounded-lg">
                      <div className="flex text-center text-lg">
                        Nothin to see here
                      </div>
                    </div>
                  </div>
                )}
                {/* /End replace */}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
