import React from "react";

const JobPreferences = () => {
  return (
    <div>
    <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">
      Job Preferences
    </h3>
    <p className="mt-1 max-w-2xl text-sm text-gray-500 text-center">
      Get your team seen and apply to hundreds of companies with a
      single profile.
    </p>
  </div>

  <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
    <div className="sm:grid sm:grid-cols-4 sm:gap-5 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
      <div className="mt-1 sm:mt-0 sm:col-span-2">
        <div className="max-w-lg flex rounded-md shadow-sm">
          <Field
            name="role"
            type="role"
            component={renderSearchInput}
          />
          <Error name="role" />
        </div>
      </div>
    </div>


  );

}