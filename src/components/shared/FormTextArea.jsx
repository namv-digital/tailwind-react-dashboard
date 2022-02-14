import React from "react";

export default function FormTextArea(props) {
  const { label, input, name, id } = props;
  return (
    <div className="w-full">
      <label
        htmlFor="comment"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <textarea
          rows={4}
          name={input.name}
          id={id}
          value={input.value}
          onChange={input.onChange}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          defaultValue={""}
        />
      </div>
    </div>
  );
}
