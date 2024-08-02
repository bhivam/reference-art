import Model from "./Model";

export default function Main() {
  return (
    <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 h-full p-12">
      <Model />
      <div className="test rounded-3xl h-full"></div>
    </div>
  );
}
