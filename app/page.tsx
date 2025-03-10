import Image from "next/image";
import CardGrid from "./components/card";

export default function Home() {
  return (
    <div>
      <CardGrid />
      <CardGrid />
      <CardGrid />
      <h1 className="text-3xl font-bold  justify-center text-blue-400">
        Hello world!
      </h1>
    </div>
  );
}
