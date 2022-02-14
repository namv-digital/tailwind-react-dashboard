import React from "react";

export default function FormSelect(props) {
  const { id, name, input, label, placeholder, options } = props;

  console.log(props);
  const renderOptions = () => {
    return options.map((option) => {
      return <option key={option.id}>{option.label}</option>;
    });
  };
  return (
    <div className="w-full">
      <label
        htmlFor="location"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={input.value}
        onChange={input.onChange}
        placeholder={placeholder}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {renderOptions()}
      </select>
    </div>
  );
}
