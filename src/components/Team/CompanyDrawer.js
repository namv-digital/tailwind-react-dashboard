import React from "react";
import TeamIconSvg from "../icons/TeamIconSvg";

export default function CompanyDrawer({
  children,
  isOpen,
  setIsOpen,
  title,
  description,
}) {
  const [selectedCategory, setSelectedCategory] = React.useState("messages");

  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-xl right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-xl pb-10 flex flex-col overflow-y-scroll h-full px-4">
          <div className="flex justify-between py-4 items-start">
            <div className="flex space-x-4 pr-8">
              <div>
                <TeamIconSvg className="rounded border border-slate-300 w-10 h-10" />
              </div>
              <div className="">
                <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
                <h2 className="text-1xl tracking-tight">{description}</h2>
              </div>
            </div>
            <button
              type="button"
              class="text-gray-700 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <span class="sr-only">Close</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <div className="sm:hidden">
              <label for="tabs" className="sr-only">
                Select a tab
              </label>
              <select
                id="tabs"
                name="tabs"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option selected>Messages</option>
                <option>Profile</option>
                <option>Team Status</option>
              </select>
            </div>
            <div className="hidden sm:block">
              <div className="border-b">
                <nav
                  className="-mb-px grid grid-cols-3 space-x-5 "
                  aria-label="Tabs"
                >
                  <a
                    href="#"
                    className={`${
                      selectedCategory === "messages"
                        ? "border-black text-black"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    } whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm text-center`}
                    onClick={() => setSelectedCategory("messages")}
                  >
                    Messages
                  </a>
                  <a
                    href="#"
                    className={`${
                      selectedCategory === "profile"
                        ? "border-black text-black"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    } whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm text-center`}
                    onClick={() => setSelectedCategory("profile")}
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className={`${
                      selectedCategory === "status"
                        ? "border-black text-black"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    } whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm text-center`}
                    onClick={() => setSelectedCategory("status")}
                  >
                    Team Status
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col divider-x space-y-2">
            <div className="flex-grow overflow-auto py-4">
              <ul role="list" class="space-y-8">
                <li>
                  <div class="flex space-x-3">
                    <div class="flex-shrink-0 flex items-end">
                      <TeamIconSvg class="h-10 w-10 rounded-full border" />
                    </div>
                    <div className="bg-gray-400 p-2 rounded-md">
                      <div class="text-sm">
                        <a href="#" class="font-medium text-gray-900">
                          Leslie Alexander
                        </a>
                      </div>
                      <div class="mt-1 text-sm text-gray-700">
                        <p>
                          Ducimus quas delectus ad maxime totam doloribus
                          reiciendis ex. Tempore dolorem maiores. Similique
                          voluptatibus tempore non ut.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grow-0 space-y-2 border-t">
              <div class="mt-1 w-full">
                <textarea
                  rows="4"
                  name="comment"
                  id="comment"
                  placeholder={`Send ${title} a message`}
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div className="w-full flex">
                <span class="relative z-0 inline-flex shadow-sm rounded-md  ml-auto">
                  <button
                    type="button"
                    class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-indigo-500 bg-white text-sm font-medium text-indigo-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    Schedule call
                  </button>
                  <button
                    type="button"
                    class="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    Send
                  </button>
                </span>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={(event) => {
          setIsOpen(false);
          event.preventDefault();
        }}
      ></section>
    </main>
  );
}
