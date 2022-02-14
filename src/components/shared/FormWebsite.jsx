import React from "react";

export default function FormWebsite(props) {
  const { id, name, input, label, placeholder } = props;
  return (
    <div className="col-span-10">
      <label
        htmlFor="company-website"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
          https://
        </span>
        <input
          type="text"
          name={input.name}
          id={id}
          value={input.value}
          onChange={input.onChange}
          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
