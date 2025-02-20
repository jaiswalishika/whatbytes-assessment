import Image from "next/image";
import StatsCard from "./components/StatsCard";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="lg:flex ">
      <Sidebar />
      <StatsCard />
    </div>
  );
}
