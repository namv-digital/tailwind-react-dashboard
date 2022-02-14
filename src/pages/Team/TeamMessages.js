import React from "react";
import CompanyMessageList from "../../components/Team/CompanyMessageList";
import { MOCK_COMPANY_MESSAGES } from "../../constants/mockCompanyMessages";
import SideNav from "./SideNav";

const TeamMessages = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("active");
  const currentMessages = React.useMemo(() => {
    if (selectedCategory === "active") {
      return MOCK_COMPANY_MESSAGES.filter(
        (companyMessage) => companyMessage.active
      );
    }
    return MOCK_COMPANY_MESSAGES.filter(
      (companyMessage) => !companyMessage.active
    );
  }, [selectedCategory]);

  return (
    <div className="flex h-full bg-white">
      <SideNav />
      <div className="w-full p-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold">Messages</h2>
          <div className="sm:hidden">
            <label for="tabs" className="sr-only">
              Select a category
            </label>
            <select
              id="tabs"
              name="tabs"
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option selected>Ongoing</option>
              <option>Archived</option>
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <a
                  href="#"
                  className={`${
                    selectedCategory === "active"
                      ? "border-black text-black"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  } whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm`}
                  onClick={() => setSelectedCategory("active")}
                >
                  Ongoing
                </a>
                <a
                  href="#"
                  className={`${
                    selectedCategory === "archive"
                      ? "border-black text-black"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  } whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm`}
                  onClick={() => setSelectedCategory("archive")}
                >
                  Archived
                </a>
              </nav>
            </div>
          </div>
          <div className="mt-6">
            <CompanyMessageList messages={currentMessages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMessages;
