export default function CardBar() {
  return (
    <div>
      <div className="flex justify-between">
        <span>Existing Gas</span>
        <div className="flex flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            />
          </svg>
          <span>+9,5%</span>
        </div>
      </div>
    </div>
  );
}
