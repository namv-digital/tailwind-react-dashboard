/* This component requires Tailwind CSS v2.0+ */
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  return <div className={classNames()}>
      Dashboard Page Placeholder
  </div>;
}
