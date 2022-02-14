import React from "react";
import TeamIconSvg from "../icons/TeamIconSvg";
import CompanyDrawer from "./CompanyDrawer";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

const CompanyMessageCard = ({ detail }) => {
  const { name, avatarURL, description } = detail;
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <div className="space-y-5 sm:space-y-4 col-span-1 lg:col-span-2 rounded bg-white border divide-y">
        <div className="flex space-x-4 px-8 py-4">
          <div>
            <TeamIconSvg className="rounded border border-slate-300 w-20 h-20" />
          </div>
          <div className="">
            <h2 className="text-2xl font-bold tracking-tight">
              {name}
            </h2>
            <h2 className="text-1xl tracking-tight">{description}</h2>
          </div>
        </div>
        <div className="flex justify-between px-8 py-4">
          <div className="flex space-x-2 items-center">
            <ExclamationCircleIcon
              className="h-5 w-5 text-yellow-800"
              aria-hidden="true"
            />
            <h2>Don't forget to reply to or decline <span className="font-bold">{name}</span></h2>
          </div>

          <div className="flex space-x-4">
            <button>Decline</button>
            <button
              type="button"
              class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setDrawerOpen(true)}
            >
              Reply
            </button>
          </div>
        </div>
      </div>
      <CompanyDrawer
        isOpen={drawerOpen}
        setIsOpen={handleDrawer}
        title={name}
        description={description}
      />
    </>
  );
};

export default CompanyMessageCard;
