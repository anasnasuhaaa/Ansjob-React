import { NavbarAuth } from "../components/NavbarAuth";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <NavbarAuth />
      <div className="flex">
        <Sidebar/>
        <div className="w-full ml-[13rem]">
          <h1 className="font-black text-6xl text-center">WELCOME</h1>
        </div>
      </div>
    </>
  );
}
