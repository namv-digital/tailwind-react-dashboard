import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function InlineRadioButtons(props) {
  const { name, label, subLabel, input, options,
    labelClassName,
    subLabelClassName } = props;
  return (
    <div>
      <label className={classNames(labelClassName || "text-base font-medium text-gray-900")}>{label}</label>
      <p className={classNames(subLabelClassName || "text-sm leading-5 text-gray-500")}>{subLabel}</p>
      <fieldset className="mt-4">
        <legend className="sr-only">{name}</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-2.5">
          {options.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                id={option.id}
                name={name}
                type="radio"
                defaultChecked={option[0]}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                value={option.label}
                onChange={input.onChange}
                checked={input.value === option.label}
              />
              <label
                htmlFor={option.id}
                className="ml-2.5 block text-sm font-medium text-gray-700"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
