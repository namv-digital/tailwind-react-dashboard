import React from "react";

const UserProfileCard = () => {

  return (
    <div
      data-v-42c7aca9=""
      className="px-5 pt-4 pb-5 m-0 w-64 font-sans text-sm leading-5 text-gray-700 bg-white box-border border border-gray-200"
      style={{ "border-radius": "10px" }}
    >
      <div
        data-v-42c7aca9=""
        className="flex items-center p-0 m-0 text-sm text-gray-700 box-border"
      >
        <span
          data-v-355e5487=""
          data-v-42c7aca9=""
          className="block relative flex-shrink-0 p-0 my-0 mr-3 ml-0 w-16 h-16 text-2xl box-border"
          style={{ "border-radius": "50%", "background-size": "100%" }}
        >
          <span
            data-v-355e5487=""
            className="block relative px-0 pb-0 m-0 leading-5 box-border"
            style={{
              "background-image":
                "url('https://jumpstart-static.s3.amazonaws.com/backend/__sized__/users/user/ufH_A8GjRIykv4B74JFSIQ-thumbnail-200x200-70.JPG')",
              "border-radius": "50%",
              "padding-top": "96%"
            }}
          ></span>
          <img
            data-v-355e5487=""
            src="https://jumpstart-static.s3.amazonaws.com/backend/__sized__/users/user/ufH_A8GjRIykv4B74JFSIQ-thumbnail-200x200-70.JPG"
            alt=""
            className="overflow-hidden absolute p-0 -m-px w-px h-px leading-5 border-0 box-border"
            style={{ clip: "rect(0px, 0px, 0px, 0px)" }}
          />
        </span>
        <div
          data-v-42c7aca9=""
          className="flex overflow-hidden flex-col justify-evenly p-0 m-0 leading-5 box-border"
        >
          <p
            data-v-42c7aca9=""
            className="p-0 m-0 text-base font-semibold box-border truncate"
            style={{ "line-height": "130%" }}
          >
            Pranav Joshi
          </p>
          <p
            data-v-42c7aca9=""
            className="p-0 m-0 font-normal box-border"
            style={{ "line-height": "130%" }}
          >
            Indian Institute of Technology Bombay
          </p>
          <p
            data-v-42c7aca9=""
            className="p-0 m-0 font-normal box-border truncate"
            style={{ "line-height": "130%" }}
          >
            Project Research Engineer
          </p>
        </div>
      </div>
      <div
        data-v-42c7aca9=""
        className="flex justify-between p-0 m-0 text-sm text-gray-700 box-border"
      >
        <button
          data-v-4a7785f2=""
          data-v-42c7aca9=""
          className="flex justify-center items-center py-0 px-4 mx-0 mt-4 mb-0 h-10 font-semibold text-center text-black no-underline bg-none rounded border border-black border-solid appearance-none cursor-pointer select-none box-border hover:shadow-xs"
          style={{
            outline: "0px",
            fill: "currentcolor",
            transition: "all 125ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s",
            "max-height": "3rem",
            width: "48%"
          }}
        >
          <span data-v-4a7785f2="" className="p-0 m-0 box-border">
            {" "}
            View Profile{" "}
          </span>
        </button>
        <button
          data-v-4a7785f2=""
          data-v-42c7aca9=""
          className="flex justify-center items-center py-0 px-4 mx-0 mt-4 mb-0 h-10 font-semibold text-center text-black no-underline bg-yellow-400 bg-none rounded border-0 appearance-none cursor-pointer select-none box-border hover:bg-yellow-300 hover:shadow-xs"
          color="messenger"
          style={{
            outline: "0px",
            fill: "currentcolor",
            transition: "all 125ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s",
            "line-height": "130%",
            "max-height": "3rem",
            width: "48%"
          }}
        >
          <span data-v-4a7785f2="" className="p-0 m-0 leading-5 box-border">
            Message
          </span>
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
