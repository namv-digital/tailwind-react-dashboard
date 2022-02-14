import React from "react";

const FormHeader = (props) => {
  const { title, description, className } = props;
  return (
    <div className={className}>
      <h3 className="text-4xl leading-10 font-medium text-gray-900 text-center">
        {title}
      </h3>
      <p className="mt-2 max-w-2xl text-xs font-medium text-gray-500 text-center">
        {description}
      </p>
    </div>
  );
};

export default FormHeader;
