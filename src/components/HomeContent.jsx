import Card from "./Card";
import CardBar from "./CardBar";
import Title from "./Title";
import Map from "../components/Map";
import { DoughnutChart } from "./DoughnutChart";
import CardMaintenance from "./CardMaintenance";

export default function HomeContent() {
  return (
    <div className="px-3 flex space-x-2">
      <div className="w-2/6">
        <>
          <div className="bg-gray-100 flex justify-center">
            <Title text={"Volume"} />
          </div>
          <div className="space-y-4">
            <CardBar />
            <CardBar />
            <CardBar />
          </div>
        </>
      </div>
      <div className="w-3/6">
        <>
          <div className="bg-gray-100 flex justify-center">
            <Title text={"Performance Summary"} />
          </div>
          <div className="max-w-lg mx-auto">
            <Map />
          </div>
          <div className="flex space-x-2 justify-around">
            <div className="max-w-xs flex flex-col">
              <div className="bg-slate-100 flex justify-center">
                <Title text={"Gas YTD"} />
              </div>
              <DoughnutChart />
            </div>
            <div className="max-w-xs flex flex-col">
              <div className="bg-slate-100 flex justify-center">
                <Title text={"Oil YTD"} />
              </div>
              <DoughnutChart />
            </div>
          </div>
        </>
      </div>
      <div className="w-2/6 space-y-4">
        <Card />
        <Card />
        <Card />
        <div className="bg-gray-100 flex justify-center">
          <Title text={"Maintenance Highlight"}/>
        </div>
        <CardMaintenance/>
        <CardMaintenance/>
        <CardMaintenance/>
      </div>
    </div>
  );
}
