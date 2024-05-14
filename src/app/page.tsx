import Themes from "@/components/Themes";
import Header from "@/components/header";
import Tables from "@/components/table";
export default function Home() {
  return (
    <div className="p-5">
      <Themes />
      <Header />
      <Tables />
    </div>
  );
}
