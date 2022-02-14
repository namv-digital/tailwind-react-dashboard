import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FormCheckbox(props) {
  const { name, label, subLabel, onClick, options, fields,
    labelClassName,
    subLabelClassName  } = props;

  console.log("checkbox", props);

  const toggle = (event, option) => {
    if (event.target.checked) fields.push(option);
    else fields.remove(option);
  };

  const renderCheckBoxes = () => {
    console.log("checkbox : ", props);
    return options.map((option) => {
      return (
        <div key={option.id} className="relative flex items-center my-2.5">
          <div className="flex items-center h-5">
            <input
              id={option.id}
              aria-describedby="comments-description"
              name={name}
              type="checkbox"
              value={option.value}
              onChange={(e) => toggle(e, option)}
              onClick={onClick}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>

          <div className="text-sm ml-2">
            <label htmlFor={option.id} className="font-medium text-gray-700">
              {option.label}
            </label>
            {option.subLabel && (
              <p id={option.id} className="text-gray-500 ml-2">
                {option.subLabel}
              </p>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      {label && (
        <div className="text-sm">
          <label htmlFor={name} className={classNames(labelClassName || "font-medium text-gray-700")}>
            {label}
          </label>

          {subLabel && (
            <p id="comments-description" className={classNames(subLabelClassName || "text-gray-500")}>
              {subLabel}
            </p>
          )}
        </div>
      )}
      <fieldset className="grid grid-cols-2 -my-2.5">
        {/* <legend className="sr-only">{name}</legend> */}
        {renderCheckBoxes()}
      </fieldset>
    </div>
  );
}
