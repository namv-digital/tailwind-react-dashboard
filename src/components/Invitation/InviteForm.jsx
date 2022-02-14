import React from "react";
import { ClipboardCopyIcon } from "@heroicons/react/outline";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  console.log(values);
  await sleep(300);
  if (values.inviteEmail !== "email") {
    return { [FORM_ERROR]: "Login Failed" };
  }
  window.alert("LOGIN SUCCESS!");
};

const SharableLink = ({ placeholder }) => (
  <div className="col-span-3 sm:col-span-2">
    <h2 className="text-sm font-light text-gray-900 mb-2">
      Get a shareble link
    </h2>
    <div className="mt-1 flex rounded-md shadow-sm">
      <input
        type="text"
        name="sharableLink"
        id="sharableLink"
        disabled
        className="flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
        placeholder={(placeholder && placeholder) || "https://jointeemo.com"}
      />
      <button
        type="button"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-r-md text-white bg-indigo-100 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <ClipboardCopyIcon className="h-5 w-5 text-gray-700"></ClipboardCopyIcon>
      </button>
    </div>
  </div>
);

export function InviteForm() {
  const people = [
    {
      email: "jane.cooper@example.com",
      status: "Accepted",
    },
    {
      email: "nazim@example.com",
      status: "Pending",
    },
  ];
  return (
    <Form
      onSubmit={onSubmit}
      render={({ submitError, handleSubmit }) => (
        <div className="md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="bg-white space-y-6 sm:p-6">
              <div className="grid gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <h2 className="text-3xl font-normal text-gray-900 mb-4">
                    Invite a teammate
                  </h2>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <Field name="inviteEmail">
                      {({ input, meta }) => (
                        <>
                          <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
                            <input
                              {...input}
                              name="inviteEmail"
                              id="inviteEmail"
                              type="email"
                              autoComplete="email"
                              required
                              className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                              placeholder="Email, comma seperated"
                            />
                            <div class="absolute inset-y-0 right-0 flex items-center">
                              <span
                                class="h-4 w-px bg-gray-200"
                                aria-hidden="true"
                              ></span>
                              <label for="role" class="sr-only">
                                Role
                              </label>
                              <select
                                id="role"
                                name="role"
                                class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-4 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                              >
                                <option>Can edit</option>
                                <option>Can view</option>
                              </select>
                            </div>

                            {submitError && (
                              <div className="error">{submitError}</div>
                            )}
                            {console.log(submitError)}
                          </div>
                          <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Send
                          </button>
                        </>
                      )}
                    </Field>
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <h2 className="text-2xl font-normal text-gray-900 mb-4">
                    Invitations
                  </h2>
                  <div className="bg-white border border-gray-300 overflow-hidden rounded-md">
                    <ul role="list" className="divide-y divide-gray-300">
                      {people.map((person) => (
                        <li key={person.email} className="px-6 py-4">
                          <div className="flex justify-between">
                            <div>
                              <div className="text-sm text-gray-500">
                                {person.email}
                              </div>
                            </div>
                            <div>
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {person.status}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <SharableLink placeholder="https://jointeemo.com/join/001"></SharableLink>
              </div>
            </div>
          </form>
        </div>
      )}
    />
  );
}
