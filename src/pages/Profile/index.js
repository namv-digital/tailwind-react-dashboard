/* This component requires Tailwind CSS v2.0+ */
import React from "react";
import { PencilAltIcon, CheckIcon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Profile() {
  return (
    <div className={classNames("p-4 sm:p-6 md:p-10")}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div class="bg-white space-y-2 py-5 border-b border-gray-200 divide-y rounded">
            <div class="-ml-4 -mt-2 px-4 flex items-center justify-between flex-wrap sm:flex-nowrap">
              <div class="ml-4 mt-2">
                <h3 class="text-md leading-6 font-medium text-gray-900">
                  Personal Information
                </h3>
              </div>
              <div class="ml-4 mt-2 flex-shrink-0">
                <button type="button" class="text-gray-700 hover:text-gray-700">
                  <span class="sr-only">Close</span>
                  <PencilAltIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div class="-ml-4 -mt-2 px-4 flex items-center justify-between flex-wrap sm:flex-nowrap h-80"></div>
          </div>
        </div>
        <div className="col-span-1">
          <div class="bg-white space-y-2 py-5 border-b border-gray-200 divide-y rounded">
            <div class="-ml-4 -mt-2 px-4 flex items-center justify-between flex-wrap sm:flex-nowrap">
              <div class="ml-4 mt-2">
                <h3 class="text-md leading-6 font-medium text-gray-900">
                  Contact Information
                </h3>
              </div>
              <div class="ml-4 mt-2 flex-shrink-0">
                <button type="button" class="text-gray-700 hover:text-gray-700">
                  <span class="sr-only">Close</span>
                  <PencilAltIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div class="-ml-4 -mt-2 px-4 flex items-center justify-between flex-wrap sm:flex-nowrap h-80"></div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3">
          <div class="bg-white space-y-2 py-5 border-b border-gray-200 divide-y rounded">
            <div class="-ml-4 -mt-2 px-4 flex items-center justify-between flex-wrap sm:flex-nowrap">
              <div class="ml-4 mt-2">
                <h3 class="text-md leading-6 font-medium text-gray-900">
                  Card Header
                </h3>
              </div>
              <div class="ml-4 mt-2 flex-shrink-0">
                <button type="button" class="text-gray-700 hover:text-gray-700">
                  <span class="sr-only">Close</span>
                  <PencilAltIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div class="-mt-2 px-4 flex items-center justify-between flex-wrap sm:flex-nowrap">
              <div className="w-full grid grid-cols-1 mt-8">
                <div className="col-span-1 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="col-span-1 lg:col-span-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            for="employer"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Employer
                          </label>
                          <div class="mt-1">
                            <input
                              type="email"
                              name="employer"
                              id="employer"
                              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            for="title"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Title
                          </label>
                          <div class="mt-1">
                            <input
                              type="email"
                              name="title"
                              id="title"
                              placeholder="Software Engineer"
                              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            for="stateDate"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Start Date
                          </label>
                          <div class="mt-1">
                            <input
                              type="email"
                              name="stateDate"
                              id="stateDate"
                              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            for="endDate"
                            class="block text-sm font-medium text-gray-700"
                          >
                            End Date
                          </label>
                          <div class="mt-1">
                            <input
                              type="email"
                              name="endDate"
                              id="endDate"
                              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div>
                    <label
                      for="description"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <div class="mt-1">
                      <textarea
                        type="email"
                        rows={3}
                        name="description"
                        id="description"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3">
          <div class="bg-white space-y-2 py-5 border-b border-gray-200 divide-y rounded">
            <div class="-ml-4 -mt-2 px-4 flex items-center justify-between flex-wrap sm:flex-nowrap">
              <div class="ml-4 mt-2">
                <h3 class="text-md leading-6 font-medium text-gray-900">
                  Education
                </h3>
              </div>
              <div class="ml-4 mt-2 flex-shrink-0">
                <div className="flex space-x-8">
                  <button
                    type="button"
                    class="text-gray-700 hover:text-gray-700"
                  >
                    <span class="sr-only">Close</span>
                    <XIcon className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    class="text-gray-700 hover:text-gray-700"
                  >
                    <span class="sr-only">Close</span>
                    <CheckIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            <div class="-mt-2 px-4 flex items-center justify-between flex-wrap sm:flex-nowrap">
              <div className="grid grid-cols-1 mt-8">
                <div className="col-span-1 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="col-span-1 lg:col-span-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            for="employer"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Institution
                          </label>
                          <div class="mt-1">
                            <input
                              type="email"
                              name="employer"
                              id="employer"
                              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            for="title"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Degree/Course of Study
                          </label>
                          <div class="mt-1">
                            <input
                              type="email"
                              name="title"
                              id="title"
                              placeholder="Software Engineer"
                              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            for="stateDate"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Start Date
                          </label>
                          <div class="mt-1">
                            <input
                              type="email"
                              name="stateDate"
                              id="stateDate"
                              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            for="endDate"
                            class="block text-sm font-medium text-gray-700"
                          >
                            End Date
                          </label>
                          <div class="mt-1">
                            <input
                              type="email"
                              name="endDate"
                              id="endDate"
                              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
