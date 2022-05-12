import Card from "./Card";
import CardBar from "./CardBar";
import Title from "./Title";

export default function HomeContent() {
  return (
    <div className="px-3 flex justify-between">
      <div>
        <>
          <Title text={"Volume"} />
          <CardBar/>
          <CardBar/>
          <CardBar/>
          <CardBar/>
          <CardBar/>
        </>
      </div>
      <div>
        <>
          <Title text={"Performance Summary"} />
        </>
      </div>
      <div>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </div>
  );
}
