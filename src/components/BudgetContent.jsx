import CardBudget from "./CardBudget";

export default function BudgetContent() {
  const dummyData = [
    {
      title: "RKAP",
      value: "$ 12312",
    },
    {
      title: "RKAP",
      value: "$ 12312",
    },
    {
      title: "RKAP",
      value: "$ 12312",
    },
    {
      title: "RKAP",
      value: "$ 12312",
    },
    {
      title: "RKAP",
      value: "$ 12312",
    },
    {
      title: "RKAP",
      value: "$ 12312",
    },
    {
      title: "RKAP",
      value: "$ 12312",
    },
  ];
  return (
    <div className="flex justify-around px-3 space-x-2">
      {dummyData.map((data, index) => {
        return <CardBudget title={data.title} value={data.value} />;
      })}
    </div>
  );
}
