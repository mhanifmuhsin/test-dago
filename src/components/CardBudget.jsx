export default function CardBudget({ title, value }) {
  return (
    <div className="border w-full py-2 px-1">
      <div className="flex justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
        <span>{value}</span>
      </div>
      <div>
        <span className="text-sm">{title}</span>
      </div>
    </div>
  );
}
