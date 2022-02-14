import React from "react";

export default function FormInput(props) {
  const { id, type, isDate, name, input, label, placeholder } = props;

  return (
    <div>
      <label
        htmlFor={input.type}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          type={type}
          name={name}
          id={id}
          value={input.value}
          onChange={input.onChange}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
