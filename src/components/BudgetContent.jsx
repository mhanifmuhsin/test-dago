import CardBudget from "./CardBudget";
import { ChartEvent } from "./ChartEvent";
import { LineChart } from "./LineChart";
import Map from "./Map";
import Title from "./Title";

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
    <>
      <div className="flex justify-around px-3 space-x-2">
        {dummyData.map((data, index) => {
          return <CardBudget title={data.title} value={data.value} />;
        })}
      </div>
      <div className="flex px-3 pt-4 space-x-4">
        <div className="w-1/2 border">
          <Map />
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="bg-gray-100">
            <Title text={"PROFILE BIAYA"} />
          </div>
          <div className="max-w-sm">
            <ChartEvent />
          </div>
          <div className="max-w-sm">
            <LineChart />
          </div>
          <div className="max-w-sm">
          <LineChart />
          </div>
        </div>
      </div>
    </>
  );
}
