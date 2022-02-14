import React from "react";
import { UploadIcon } from "@heroicons/react/outline";

export default function FormPhotoUpload(props) {
  const { name, label, description, input } = props;
  return (
    <div className="w-full">
      {/* <label className="block text-sm font-medium text-gray-700">{label}</label> */}
      <div className="mt-1 flex items-center space-x-5">
        <div className="h-20 w-20  bg-gray-100 rounded-full">
          <svg
            className="h-20 w-20 rounded-full text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium text-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <UploadIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
          {description}
        </button>
      </div>
    </div>
  );
}
