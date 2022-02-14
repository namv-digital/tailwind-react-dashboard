/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon, PlusIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { id: 1, name: "Dream Team" },
  { id: 2, name: "Second Team with Long Name" },
  { id: 3, name: "Another Team" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Select(props) {
  const navigate = useNavigate();
  const { label } = props;
  const [selected, setSelected] = useState(menuItems[0]);

  const handleChangeTeam = (selectedTeam) => {
    if (selectedTeam.name === "Create new team") {
      console.log("create")
      navigate('/team/create')
    } else {
      setSelected(selectedTeam);
    }
  };

  return (
    <Listbox value={selected} onChange={handleChangeTeam}>
      {({ open }) => (
        <>
          {label && (
            <Listbox.Label className="block text-sm font-medium text-gray-500">
              {label}
            </Listbox.Label>
          )}
          <div className="mt-1 relative">
            <Listbox.Button className="bg-gray-100 hover:bg-gray-200 relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-gray-500 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {menuItems.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-500",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
                <Listbox.Option
                  className={({ active }) =>
                    classNames(
                      active ? "text-white bg-indigo-600" : "text-gray-500",
                      "cursor-default select-none relative py-2 pl-3 pr-9 border-t border-gray-200"
                    )
                  }
                  value={{ id: 0, name: "Create new team" }}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={classNames(
                          selected ? "font-semibold" : "font-normal",
                          "block truncate flex"
                        )}
                      >
                        <PlusIcon
                          className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                          aria-hidden="true"
                        />
                        Create new team
                      </span>

                      {selected ? (
                        <span
                          className={classNames(
                            active ? "text-white" : "text-indigo-600",
                            "absolute inset-y-0 right-0 flex items-center pr-4"
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
