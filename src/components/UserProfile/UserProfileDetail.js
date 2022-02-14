import { PaperClipIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import SocialMediaLinks from "../small_components/SocialMediaLinks";
import { connect } from "react-redux";
//themes and colors
import { linkTHEME } from "../../TeemoThemes/tailwindThemeClasses.js";
import { currentUserTest } from "../../sampleData/sampleData";
import { printList } from "../helpers";

function UserProfileDetail(props) {
  let userProfile = currentUserTest;

  let socialMediaLinksPayload = {
    linkedIn: userProfile.linkedIn,
    personalSite: userProfile.personalSite,
    email: userProfile.email,
    twitter: userProfile.twitter,
    github: userProfile.github
  };
  console.log(props);
  return (
    <div className="flex flex-row justify-between m-auto">
      <div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex flex-row justify-between">
            <div>
              <h3 className="text-lg md:text-3xl leading-6 font-small text-gray-900">
                {userProfile.firstName + " " + userProfile.lastName}
              </h3>
              <p className="mt-1 max-w-2xl text-base text-gray-500">
                {userProfile.status}
              </p>
            </div>
            <Link
              to="/user/edit"
              className="inline-flex items-center px-0 md:px-2 py-0 md:border md:border-gray-300 md:shadow-sm text-xs font-xs rounded text-gray-700 bg-white md:hover:bg-gray-50 md:focus:outline-none md:focus:ring-2 md:focus:ring-offset-2 md:focus:ring-indigo-500"
            >
              Edit Profile
            </Link>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Social</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <SocialMediaLinks payload={socialMediaLinksPayload} />
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Teams</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {userProfile.teams.map( team => {
                    return <Link to={"/team/"+team} className={linkTHEME}>{team}</Link>
                  })}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Years of experience
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {userProfile.yearsOfExperience}{" "}
                  {userProfile.yearsOfExperience === 1 ? "year" : "years"}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Preferred locations
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {printList(userProfile.prefLocations)}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Expertise</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {printList(userProfile.expertise)}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Skills</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {printList(userProfile.skills)}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Preferred Company Stage
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Early Stage, Established Startup
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Preferred{" "}
                  {userProfile.prefLocations.length > 1
                    ? "Industries"
                    : "Industry"}
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {printList(userProfile.prefIndustries)}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Values</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {printList(userProfile.values)}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">About</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {userProfile.about}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">
                  Attachments
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <ul
                    role="list"
                    className="border border-gray-200 rounded-md divide-y divide-gray-200"
                  >
                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <PaperClipIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 flex-1 w-0 truncate">
                          resume_back_end_developer.pdf
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <PaperClipIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-2 flex-1 w-0 truncate">
                          coverletter_back_end_developer.pdf
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="invisible hidden lg:visible lg:block">
        <div className="ml-5 md:h-48 md:w-48">
          <img
            className="rounded-xl"
            src={userProfile.profilePic}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    signedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(UserProfileDetail);

// <div className="sm:col-span-1">
//   <dt className="text-sm font-medium text-gray-500">Email address</dt>
//   <dd className="mt-1 text-sm text-gray-900">
//     margotfoster@example.com
//   </dd>
// </div>
// <div className="sm:col-span-1">
//   <dt className="text-sm font-medium text-gray-500">Email address</dt>
//   <dd className="mt-1 text-sm text-gray-900">
//     margotfoster@example.com
//   </dd>
// </div>
// <div className="sm:col-span-1">
//   <dt className="text-sm font-medium text-gray-500">Email address</dt>
//   <dd className="mt-1 text-sm text-gray-900">
//     margotfoster@example.com
//   </dd>
// </div>
// <div className="sm:col-span-1">
//   <dt className="text-sm font-medium text-gray-500">Email address</dt>
//   <dd className="mt-1 text-sm text-gray-900">
//     margotfoster@example.com
//   </dd>
// </div>
