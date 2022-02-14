/* This component requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Colors } from "../../constants/colors";

const menuItems = [
  {
    id: 1,
    name: "Actively interviewing",
    bgColor: Colors.GREEN[700],
    textColor: Colors.WHITE,
    borderColor: Colors.GREEN,
    borderWidth: 0,
  },
  {
    id: 2,
    name: "Open to offers",
    bgColor: Colors.INDIGO[50],
    textColor: Colors.INDIGO[500],
    borderColor: Colors.INDIGO[500],
    borderWidth: "4px",
  },
  {
    id: 3,
    name: "Inactive",
    bgColor: Colors.RED[100],
    textColor: Colors.RED[700],
    borderColor: Colors.RED[700],
    borderWidth: "1px",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function InterviewStatusMenuButton(props) {
  const { isCollapsed } = props;
  const [selectedItem, setSelectedItem] = useState(menuItems[0]);

  const menuItemSelectHandler = (item) => {
    setSelectedItem(item);
  };

  return (
    <Menu
      as="div"
      className={classNames(
        "relative inline-block",
        !isCollapsed ? "p-5 text-left" : "px-0 py-2 text-center"
      )}
    >
      <div>
        <Menu.Button
          className={classNames(
            !isCollapsed
              ? "h-10 relative inline-flex items-center w-full px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              : "w-6 h-6 rounded-full"
          )}
          style={{
            backgroundColor: selectedItem.bgColor,
            color: selectedItem.textColor,
            borderWidth: selectedItem.borderWidth,
            borderColor: selectedItem.borderColor,
          }}
        >
          {!isCollapsed ? selectedItem.name : ""}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={classNames(
            "z-10 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none",
            isCollapsed ? "mx-2" : "mx-3"
          )}
        >
          <div className="py-1">
            {menuItems.map((item) => (
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => menuItemSelectHandler(item)}
                    key={item.id}
                    href="#"
                    className={classNames(
                      "flex items-center text-sm my-2.5 rounded-lg",
                      isCollapsed
                        ? "rounded-full w-6 h-6 mx-auto p-0"
                        : "h-10 mx-2.5 px-4 py-2"
                    )}
                    style={{
                      backgroundColor: item.bgColor,
                      color: item.textColor,
                      borderWidth: item.borderWidth,
                      borderColor: item.borderColor,
                    }}
                  >
                    {!isCollapsed ? item.name : ""}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
