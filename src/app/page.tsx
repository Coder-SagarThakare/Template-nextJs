// import { LoginForm } from "@/(components)/login";
import Header from "@/components/header";
import { PaginationDemo } from "@/components/pagination";
// import { SignupForm } from "@/app/signup/signup";
import Tables from "@/components/table";
import { Pagination } from "@/components/ui/pagination";
// import { SignupForm } from "./signup/page";
export default function Home() {
  return (
    <div className="p-5">
      <Header />
      <Tables />
      <PaginationDemo />

    </div>
  );
}
