import { NavbarAuth } from "../components/NavbarAuth";
import { Sidebar } from "../components/Sidebar";
import TableListJob from "../components/Table";

export default function DashboardTable() {
  return (
    <>
      <NavbarAuth />
      <div className="flex">
        <Sidebar/>
        <div className="w-full ml-[13rem]">
          <TableListJob/>
        </div>
      </div>
    </>
  );
}