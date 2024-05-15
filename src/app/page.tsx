import ThemePicker from "@/components/ThemePicker";
import Header from "@/components/header";
import Tables from "@/components/table";
export default function Home() {
  return (
    <div className="p-5">
      <ThemePicker />
      <Header />
      <Tables />
    </div>
  );
}
