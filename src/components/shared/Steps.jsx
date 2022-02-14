// TODO: Make more reusable
const initialSteps = [
  { id: "Step 1", name: "Preferences", href: "#", status: "complete" },
  { id: "Step 2", name: "Experience", href: "#", status: "current" },
  { id: "Step 3", name: "Skills", href: "#", status: "upcoming" },
  { id: "Step 4", name: "Personal", href: "#", status: "upcoming" },
];

export default function Steps(props) {
  const { currentPageNo } = props;
  return (
    <nav aria-label="Progress">
      <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
        {initialSteps.map((step, index) => (
          <li key={step.name} className="md:flex-1">
            {index < currentPageNo ? (
              <a
                href={step.href}
                className="group pl-4 py-2 flex flex-col border-l-4 border-indigo-600 hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
              >
                <span className="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800">
                  {step.id}
                </span>
                <span className="text-sm font-normal">{step.name}</span>
              </a>
            ) : index === currentPageNo ? (
              <a
                href={step.href}
                className="pl-4 py-2 flex flex-col border-l-4 border-indigo-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
                aria-current="step"
              >
                <span className="text-xs text-indigo-600 font-semibold tracking-wide uppercase">
                  {step.id}
                </span>
                <span className="text-sm font-normal">{step.name}</span>
              </a>
            ) : (
              <a
                href={step.href}
                className="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
              >
                <span className="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700">
                  {step.id}
                </span>
                <span className="text-sm font-normal">{step.name}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
