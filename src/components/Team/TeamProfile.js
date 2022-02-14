import { Colors } from "../../constants/colors";
import { MOCK_MEMBERS } from "../../constants/mockTeamMembers";
import TeamIconSvg from "../icons/TeamIconSvg";
import MemberList from "./MemberList";

const TeamProfile = ({ detail }) => {
  const {
    name,
    intro,
    workPreference,
    canWorkInUS,
    needsSponsorship,
    projectLink,
  } = detail; //TODO: Props for now, This can be replaced with Store/useSelector once API integration is done

  return (
    <div className="mx-auto max-w-7xl">
      <div className="space-y-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0 ">
        <div className="space-y-5 sm:space-y-4 col-span-1 lg:col-span-2 rounded shadow p-10 bg-white">
          <div className="grid grid-cols-4">
            <div>
              <TeamIconSvg className="rounded border border-slate-300" />
            </div>
            <div className="col-span-3">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {name}
              </h2>
              <h2 className="text-1xl tracking-tight mt-4">{intro}</h2>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div>
              <h2 className="text-xs tracking-tight">Work preference</h2>
              <h2 className="text-2xl tracking-tight">{workPreference}</h2>
            </div>
            <div className="col-span-3">
              <h2 className="text-xs tracking-tight">Project link</h2>
              <h2 className="text-2xl tracking-tight">{projectLink}</h2>
            </div>
          </div>

          <div className="grid grid-cols-4">
            <div>
              <h2 className="text-xs tracking-tight">Can work in U.S.</h2>
              <h2 className="text-2xl tracking-tight">
                {canWorkInUS ? "Yes" : "No"}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div>
              <h2 className="text-xs tracking-tight">Needs sponsorship</h2>
              <h2 className="text-2xl tracking-tight">
                {needsSponsorship ? "Yes" : "No"}
              </h2>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 rounded shadow p-10 bg-white">
          <div
            className="border rounded p-3 bg-gray-200"
            style={{ borderColor: Colors.GRAY[300] }}
          >
            Approached by Google
          </div>
          <div
            className="border rounded p-3 mt-4  bg-gray-200"
            style={{ borderColor: Colors.GRAY[300] }}
          >
            Message from Cedar Health
          </div>
        </div>
      </div>
      <div className="mt-8">
        <MemberList members={MOCK_MEMBERS}/>
      </div>
    </div>
  );
};

export default TeamProfile;
