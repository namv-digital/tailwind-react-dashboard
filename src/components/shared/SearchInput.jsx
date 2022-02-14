/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { SearchIcon } from "@heroicons/react/solid";
import Select from "react-select";
import chroma from "chroma-js";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SearchInput(props) {
  const {
    placeholder = "Search",
    name = "search-input",
    type = null,
    label = "Search",
    subLabel = "Enter a term",
    options = {},
    input = {},
    maxOptions,
    isMulti = true,
    labelClassName,
    subLabelClassName
  } = props;

  const roleStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      console.log(color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : undefined,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ":hover": {
        backgroundColor: data.color,
        color: "white",
      },
    }),
  };

  return (
    <div>
      <label className={classNames(labelClassName || "text-base font-medium text-gray-900")}>{label}</label>
      <p className={classNames(subLabelClassName || "text-sm leading-5 text-gray-500")}>{subLabel}</p>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>

        <div>
          <Select
            closeMenuOnSelect={false}
            defaultValue={[
              {
                option: "JavaScript",
                value: "js",
              },
              {
                option: "Python",
                value: "py",
              },
            ]}
            isMulti={isMulti}
            options={input.value.length === maxOptions ? [] : options}
            noOptionsMessage={() => {
              return input.value.length === maxOptions
                ? "You have reached the max options value"
                : "No options available";
            }}
            placeholder={placeholder || ""}
            styles={type === "roleSearch" ? roleStyles : {}}
            value={input.value}
            onChange={input.onChange}
            className="w-96 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
