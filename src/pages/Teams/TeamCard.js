/* This component requires Tailwind CSS v2.0+ */
import React from "react";
import { Link } from "react-router-dom";
import { Colors } from "../../constants/colors";

export default function TeamCard(props) {
  const { teamData } = props;

  return (
    <li
      key={teamData.email}
      className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
    >
      <Link to={`/team/${teamData.id}`} className="w-full flex items-center justify-between p-5 space-x-5">
        <img
          className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"
          src={teamData.imageUrl}
          alt=""
        />
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-2xl font-medium truncate">
              {teamData.name}
            </h3>
          </div>
        </div>
      </Link>
      <div>
        <div className="-mt-px flex p-5 grid grid-cols-5 gap-5">
          <div className="col-span-2 space-y-5">
            <div className="my-4">
              <h6 className="text-xs">Work preference</h6>
              <h3 className="text-2xl">Remote only</h3>
            </div>
            <div className="my-4">
              <h6 className="text-xs">Can work in U.S.</h6>
              <h3 className="text-2xl">Yes</h3>
            </div>
            <div className="my-4">
              <h6 className="text-xs">Needs sponsorship</h6>
              <h3 className="text-2xl">No</h3>
            </div>
            <div className="mt-5 mb-3 flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-3 space-y-4">
            <div
              className="border rounded p-3"
              style={{ borderColor: Colors.GRAY[300] }}
            >
              Approached by Google
            </div>
            <div
              className="border rounded p-3"
              style={{ borderColor: Colors.GRAY[300] }}
            >
              Message from Cedar Health
            </div>
            <div
              className="border rounded p-3"
              style={{ borderColor: Colors.GRAY[300] }}
            >
              Teammate B completed an i...
            </div>
            <div
              className="border rounded p-3"
              style={{ borderColor: Colors.GRAY[300] }}
            >
              Teammate A scheduled an i...
            </div>
            <h6 className="text-xs text-center">+3 more events</h6>
          </div>
        </div>
      </div>
    </li>
  );
}
