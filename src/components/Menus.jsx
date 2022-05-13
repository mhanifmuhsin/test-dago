import { useLocation } from "react-router-dom";
export default function Menus() {
  const location = useLocation();
  return (
    <div className="px-3 md:flex justify-between py-3">
      <span>{location.pathname === "/budget" ? "Budget" : "Dashboard"}</span>
      <div className="md:flex space-x-7">
        {location.pathname === "/" && (
          <div className="flex justify-center space-x-3">
            <div className="flex space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <span>Tahun</span>
              <span className="border-b-2">2022</span>
            </div>
            <div className="flex space-x-1">
              <span>Date</span>
              <span className="border-b-2 px-4">01-05-2022</span>
              <span className="border-b-2">01-06-2022</span>
            </div>
          </div>
        )}
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Update at (01-06-2022)</span>
        </div>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
          <span>Print</span>
        </div>
      </div>
    </div>
  );
}
