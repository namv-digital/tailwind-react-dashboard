/* This component requires Tailwind CSS v2.0+ */
import React from "react";
import { XIcon } from "@heroicons/react/solid";
import { InformationCircleIcon } from "@heroicons/react/outline";

const searchKeys = [
  "Full-stack",
  "Full-stack",
  "Full-stack",
  "Full-stack",
  "Full-stack",
  "Full-stack",
  "Full-stack",
  "Full-stack",
  "Full-stack",
  "Full-stack",
  "Full-stack",
  "Full-stack",
  "Full-stack",
  "Full-stack",
  "Full-stack",
  "Full-stack",
  "Full-stack",
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Companies() {
  return (
    <div className={classNames("p-4 sm:p-6 md:p-10")}>
      <div className="bg-white sm:rounded-lg border-b border-gray-200 rounded-lg">
        <div className="px-4 py-4 sm:px-6 sm:py-6 border-b border-gray-200">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            <input
              type="text"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="-m-1 mt-4 flex flex-wrap">
            {searchKeys.map((key) => (
              <button className="m-1 relative inline-flex items-center rounded-full py-1 px-1 bg-green-200 text-sm font-normal text-gray-500 whitespace-nowrap hover:bg-green-300 sm:px-1">
                <span
                  className={classNames(
                    "text-gray-900",
                    "truncate ml-2 block"
                  )}
                >
                  {key}
                </span>
                <XIcon
                  className={classNames(
                    "text-gray-900",
                    "flex-shrink-0 h-4 w-4 mx-1"
                  )}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="px-2 py-2 sm:px-4 sm:py-4">
          <p className="text-center text-sm font-normal">Filters</p>
        </div>
      </div>
      <div className="flex justify-between items-center py-2.5">
        <p className="text-base font-normal">120 Results</p>
        <div className="flex items-center">
          <p className="text-base font-normal whitespace-nowrap mr-5">
            Sort by
          </p>
          <select
            id="location"
            name="location"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue="Canada"
          >
            <option>Best match</option>
            <option>Alphabetical</option>
            <option>Recent activity</option>
          </select>
        </div>
      </div>
      <div className="grid gap-6">
        <div className="bg-white shadow rounded-lg">
          <div className="p-5">
            <div className="w-full flex justify-between">
              <img
                className="w-20 h-20 bg-gray-300 rounded-full flex-shrink-0"
                src={
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                }
                alt=""
              />
              <div className="ml-5 flex-1 flex-col">
                <div className="flex items-start flex-wrap justify-between -my-1">
                  <h3 className="text-gray-900 text-2xl font-medium truncate my-1">
                    Company Title
                  </h3>
                  <span className="inline-flex items-center px-2 py-1 rounded text-base font-normal leading-6 border border-indigo-400 bg-indigo-100 text-indigo-600 my-1">
                    <InformationCircleIcon
                      className={classNames(
                        "text-indigo-600",
                        "flex-shrink-0 h-4 w-4 mr-2"
                      )}
                      aria-hidden="true"
                    />
                    Good fit for: Dream Team
                  </span>
                </div>
                <p className="text-xs font-normal leading-4 mt-5">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, ...
                </p>
              </div>
            </div>
            <div className="mt-5">
              <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium border border-gray-300 bg-gray-50 text-gray-800">
                Back end software engineer
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg">
          <div className="p-5">
            <div className="w-full flex justify-between">
              <img
                className="w-20 h-20 bg-gray-300 rounded-full flex-shrink-0"
                src={
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                }
                alt=""
              />
              <div className="ml-5 flex-1 flex-col">
                <div className="flex items-start flex-wrap justify-between -my-1">
                  <h3 className="text-gray-900 text-2xl font-medium truncate my-1">
                    Company Title
                  </h3>
                  <span className="inline-flex items-center px-2 py-1 rounded text-base font-normal leading-6 border border-indigo-400 bg-indigo-100 text-indigo-600 my-1">
                    <InformationCircleIcon
                      className={classNames(
                        "text-indigo-600",
                        "flex-shrink-0 h-4 w-4 mr-2"
                      )}
                      aria-hidden="true"
                    />
                    Good fit for: Dream Team
                  </span>
                </div>
                <p className="text-xs font-normal leading-4 mt-5">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, ...
                </p>
              </div>
            </div>
            <div className="mt-5">
              <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium border border-gray-300 bg-gray-50 text-gray-800">
                Back end software engineer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
