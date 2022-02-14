import React from "react";
import { MOCK_COMPANY_MESSAGES } from "../../constants/mockCompanyMessages";
import CompanyMessageCard from "./CompanyMessageCard";

const CompanyMessageList = ({ messages }) => {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6">
      {messages.map((companyMessage) => (
        <li
          className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
          key={companyMessage.id}
        >
          <CompanyMessageCard detail={companyMessage} />
        </li>
      ))}
    </ul>
  );
};

export default CompanyMessageList;
